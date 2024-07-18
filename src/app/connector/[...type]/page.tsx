"use client";

import { Main, Section, Container } from "@/components/craft";
import { Loader } from "lucide-react";
import { redirect, useSearchParams } from "next/navigation";

async function requestToken(code: string) {
  const tokenUrl = `https://api.getalby.com/oauth/token`;
  const callbackUrl = process.env.ALBY_OAUTH_CALLBACK!;

  const res = await fetch(tokenUrl, {
    method: "POST",
    body: new URLSearchParams({
      "grant_type": "authorization_code",
      "code": code,
      "redirect_uri": callbackUrl
    }),
    headers: {
      // test tokens
      'Authorization': `Basic ${btoa(`${process.env.ALBY_OAUTH_CLIENT_ID}:${process.env.ALBY_OAUTH_CLIENT_SECRET}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });


  if (res.ok) {
    const json = await res.json();
    console.log(json, ":::token json");
    return json;
  }

  throw new Error("Error getting auth_token");
}

export default async function ConnectorHandlerPage({ params }: { params: { type: string[] } }) {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  console.log(code, ":::code from redirect", params);

  if (code) {
    try {
      const tokenJson = await requestToken(code);
      console.log(tokenJson, ":::token from callback");
      redirect('/demo/paywall')
    } catch (err: any) {
      console.error(err, ":::error in getting the auth_token");
    }
  } else {
    console.log("No code found");
  }


  return (
    <Main className="!p-0 min-h-screen">

      <Section>

        <Container className="mx-auto grid sm:max-w-[30rem] max-w-full flex-1 auto-rows-max lg:gap-12 gap-4">


          <div className="flex items-center gap-2">
            <h1>Redirecting....</h1>
            <Loader className="spinner" />
          </div>

        </Container>

      </Section>

    </Main>
  )
}
