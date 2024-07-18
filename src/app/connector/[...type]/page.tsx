import { Main, Section, Container } from "@/components/craft";
import { Loader } from "lucide-react";
import { redirect, useParams, useSearchParams } from "next/navigation";



async function requestToken(code: string) {
  const tokenUrl = `https://api.getalby.com/oauth/token`;
  const callbackUrl = 'http://localhost:3000/connector/paywall/callback';

  const res = await fetch(tokenUrl, {
    method: "POST",
    body: new URLSearchParams({
      "grant_type": "authorization_code",
      "code": code,
      "redirect_uri": callbackUrl
    }),
    headers: {
      'Authorization': `Basic ${btoa(`${'NLwNIdhwWZ'}:${'pjBDRAj7S5lxL80RIaWI'}`)}`,
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
