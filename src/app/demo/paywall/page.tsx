import { Main, Section, Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";


const steps = [
  {
    title: "Connnect your BTC/LNG wallet",
    description: "For ease of payment connect your alby wallet."
  },
  {
    title: "Authorize payment",
    description: "Sign and authorize payment transaction to the invoice."
  },
  {
    title: "On you go!",
    description: "Leave feedback to let us know of any issues."
  }
]

export default function PaywallPage() {

  return (
    <Main className="!p-0 h-screen">
      <Section>
        <Container className="mx-auto grid sm:max-w-[30rem] max-w-full flex-1 auto-rows-max lg:gap-12 gap-4">
          <div>
            <div className="flex items-center gap-4">
              <Link href={"/"} passHref>
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Bit Paywall
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                1. Connect wallet
              </Badge>
              {/* <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button size="sm">Save Product</Button>
              </div> */}
            </div>
          </div>

          <div className="rounded-3xl overflow-clip">
            {steps.map((step, index) => (
              <div
                key={index}
                className="mb-3 bg-muted px-4 py-6 rounded-sm grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {step.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div className="flex items-center justify-center">
            <WalletConnectorButton />
          </div>
        </Container>
      </Section>
    </Main>
  )
}


function WalletConnectorButton() {

  return (
    <Link href={
      'https://getalby.com/oauth?client_id=NLwNIdhwWZ&response_type=code&redirect_uri=http://localhost:3000/connector/paywall/callback&scope=account:read%20invoices:read%20transactions:read%20balance:read%20payments:send'
    } target="_black" passHref>
      <Button size="lg" variant={"ghost"}>Connect alby wallet</Button>
    </Link>
  )
}
