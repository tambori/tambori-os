import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Container, Main, Section } from "@/components/craft"
import Logo from "@/assets/logo/logo-bg.svg";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Check, ExternalLink } from "lucide-react"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const paywallFeatures = [
  {
    title: "Easy payment",
    description: "Easy BTC/LNG payment for digital products."
  },
  {
    title: "Manage subscriptions",
    description: "Built in subscription manager, with insights and tools."
  }
]

const kitFeatures = [
  {
    title: "Moneytize your blog",
    description: "Alternative payment model that is in your control."
  },
  {
    title: "Elevate experience",
    description: "Built to be easy for you and your readers."
  }
]


export default function Entry() {
  return (
    <Main className="!p-0 h-screen">
      <Section className="w-full !p-0 lg:grid lg:grid-cols-2 sm:grid-cols-1 lg:h-full">
        <Container className="flex items-center justify-center h-full">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-left">
              <Image
                src={Logo} alt="Image"
                width="170"
                height="170"
                className="object-cover dark:brightness-[0.8] blur-xs dark:grayscale hover:dark:grayscale-0 transition-all hover:cursor-pointer"
              />

              <h1 className="text-3xl font-bold text-balance">Watch this space!</h1>
              <p className="text-balance text-muted-foreground">
                Join the waitlist to be the first to know when we go live.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Join the waitlist
              </Button>
            </div>
          </div>
        </Container>
        <Container className="bg-muted !sm:p-4 !lg:p-6 w-full grid lg:gap-4 gap-2 lg:grid-cols-2 sm:grid-cols-1">
          <Section className="col-span-2">
            <h1 className="text-3xl font-normal text-balance">The following is meant for demo purposes only.</h1>
          </Section>
          {/* <Dialog>
            <DialogTrigger asChild> */}
          <Card>
            <CardHeader>
              <CardTitle>Bit Paywall</CardTitle>
              <CardDescription className="text-balance">BTC/LNG payment/subscription gateway for merchants and online vendors</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <ExclamationTriangleIcon />
                <div className="flex-1 space-y-1">
                  {                  /* <p className="text-sm font-medium leading-none">
                    Experimental features
                  </p> */}
                  <p className="text-sm text-muted-foreground">
                    Do not attempt to spend real asset.
                  </p>
                </div>
                {/* <Switch /> */}
              </div>
              <div>
                {paywallFeatures.map((feat, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {feat.title}
                      </p>
                      <p className="text-sm text-muted-foreground text-balance">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={"/demo/paywall"} target="_self" passHref className="w-full">
                <Button className="w-full">
                  Visit playground <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          {            /* </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Bit paywall</DialogTitle>
                <DialogDescription>A BTC/LNG payment wall for any content</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}
                    <Card>
            <CardHeader>
              <CardTitle>BTC BlogKit</CardTitle>
              <CardDescription className="text-balance">The medium membership subscription alternative for personal bloggers.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <ExclamationTriangleIcon />
                <div className="flex-1 space-y-1">
                  {                  /* <p className="text-sm font-medium leading-none">
                    Experimental features
                  </p> */}
                  <p className="text-sm text-muted-foreground">
                    Do not attempt to spend real asset.
                  </p>
                </div>
                {/* <Switch /> */}
              </div>
              <div>
                {kitFeatures.map((feat, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {feat.title}
                      </p>
                      <p className="text-sm text-muted-foreground text-balance">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={"/demo/kit"} target="_self" passHref className="w-full">
                <Button className="w-full">
                  Visit playground <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          {            /* </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Bit paywall</DialogTitle>
                <DialogDescription>A BTC/LNG payment wall for any content</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}

        </Container>
      </Section>
    </Main>
  )
}

