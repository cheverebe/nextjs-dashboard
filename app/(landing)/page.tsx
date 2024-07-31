"use client"

import React, { useState, useEffect, RefObject } from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CheckIcon } from "@/lib/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createLead } from "../lib/actions"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"

export type LeadState = {
  error?: string | null;
  pending?: boolean;
};

export default function Page() {
  const topics = ["web development", "marketing", "design", "data science"]
  const [currentIndex, setCurrentIndex] = useState(0);

  const initialState: LeadState = { pending: false, error: null };
  const [leadState, setLeadState] = useState(initialState);
  const myFormRef: RefObject<HTMLFormElement> = React.createRef();
  
  const formAction = async (data: FormData) => {
    setLeadState((prev) => ({ ...prev, pending: true }));
    const response = await createLead(leadState, data);
    myFormRef?.current?.reset();
    return response;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center justify-between px-4 md:px-6 h-16 bg-white fixed top-0 w-full">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img
                src="/logo.png"
                alt="Hero"
                width={24}
              />
          <span className="text-md font-bold">&nbsp;TailorMadeNews</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-4">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          {/* <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link> */}
          <Link href="#subscribe" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Subscribe
          </Link>
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/register" className="text-sm font-medium mr-4" prefetch={false}>
            <Button>Get started</Button>
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4 mr-4" prefetch={false}>
            Log in
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI generated newsletters for <span className="text-primary">{topics[currentIndex]}</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Generate AI-powered newsletters for your niche topics and stay ahead of the curve.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                src="/hero-desktop.png"
                alt="Hero"
                className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailor Made News for Your Niche</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the latest news and insights for your specific interests, curated by our AI-powered platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/features.png"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Personalized Content</h3>
                      <p className="text-muted-foreground">
                        Get news and updates tailored to your specific interests and preferences.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">AI-Powered Curation</h3>
                      <p className="text-muted-foreground">
                        Our advanced AI algorithms scour the web to find the most relevant and engaging content for you.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Seamless Integration</h3>
                      <p className="text-muted-foreground">
                        Easily integrate Tailor Made News into your existing workflow and communication channels.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Affordable Plans for Every Need</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your requirements and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="p-6 bg-background shadow-lg rounded-lg">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for individuals and small teams.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">$20</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        1 niche topics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Weekly newsletter
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Up to 5 sources
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Up to 20 recipients
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
              <Card className="p-6 bg-background shadow-lg rounded-lg">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Ideal for growing businesses and teams.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">$50</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        3 niche topics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Bi-weekly newsletter
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Up to 10 sources
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Up to 50 recipients
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
              <Card className="p-6 bg-background shadow-lg rounded-lg">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Tailored for large organizations and teams.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">$100</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="grid gap-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        10 niche topics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Daily newsletter
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Up to 20 sources
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-primary" />
                        Up to 200 recipients
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="subscribe">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Stay updated</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Subscribe to Tailor Made News</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest news, insights, and trends tailored just for you. Sign up now and receive a special discount
                when we launch.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2" action={formAction} id="lead-form" ref={myFormRef}>
                <Input type="email" placeholder="Enter your email" name="email" className="max-w-lg flex-1" />
                <Button type="submit" className="text-white">Subscribe</Button>
                <div className="flex h-8 items-end space-x-1">
                  {leadState.error && (
                    <>
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                      <p className="text-sm text-red-500">{leadState.error}</p>
                    </>
                  )}
                </div>
              </form>
              <p className="text-xs text-muted-foreground">Sign up to get a special discount when we launch.</p>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with Tailor Made News.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="p-6 bg-background shadow-lg rounded-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-sm text-muted-foreground">CEO, Acme Inc.</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground">
                    "Tailor Made News has been a game-changer for our\n business. The personalized newsletters keep us
                    informed\n and ahead of the curve in our industry."
                  </blockquote>
                </CardContent>
              </Card>
              <Card className="p-6 bg-background shadow-lg rounded-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}
