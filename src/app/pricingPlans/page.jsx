import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import Link from "next/link"

export default function pricingPlans() {
  return (
    <div className="grid max-w-3xl w-full mx-auto items-start gap-8 px-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Start with a 30-day free trial, no credit card required. Choose the plan that's right for your team.
        </p>
      </div>
      <div className="grid gap-8">
        <Tabs>
          <TabsList className="flex flex-wrap gap-4 sm:flex-nowrap">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="pro">Pro</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
          </TabsList>
          <TabsContent value="basic">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">Starter</h2>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Perfect for small teams just getting started
                </p>
              </div>
              <div className="flex flex-col gap-1 justify-end">
                <h2 className="font-bold">$0</h2>
                <Link
                  className="underline underline-offset-2 underline-thickness-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  View features
                </Link>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="standard">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">Team</h2>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Collaboration for the modern team
                </p>
              </div>
              <div className="flex flex-col gap-1 justify-end">
                <h2 className="font-bold">$15</h2>
                <Link
                  className="underline underline-offset-2 underline-thickness-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  View features
                </Link>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="pro">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">Pro</h2>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Advanced features for power users
                </p>
              </div>
              <div className="flex flex-col gap-1 justify-end">
                <h2 className="font-bold">$25</h2>
                <Link
                  className="underline underline-offset-2 underline-thickness-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  View features
                </Link>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="business">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">Business</h2>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Advanced features for power users
                </p>
              </div>
              <div className="flex flex-col gap-1 justify-end">
                <h2 className="font-bold">$25</h2>
                <Link
                  className="underline underline-offset-2 underline-thickness-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  View features
                </Link>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="enterprise">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <h2 className="font-bold">Enterprise</h2>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Contact us for a custom quote</p>
              </div>
              <div className="flex flex-col gap-1 justify-end">
                <h2 className="font-bold">Contact us</h2>
                <Link
                  className="underline underline-offset-2 underline-thickness-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  View features
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

