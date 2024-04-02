import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function PricingPlans() {
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
          <TabList className="flex flex-wrap gap-4 sm:flex-nowrap">
            <Tab>Basic</Tab>
            <Tab>Standard</Tab>
            <Tab>Pro</Tab>
            <Tab>Business</Tab>
            <Tab>Enterprise</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
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
                    to="#"
                  >
                    View features
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
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
                    to="#"
                  >
                    View features
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
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
                    to="#"
                  >
                    View features
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
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
                    to="#"
                  >
                    View features
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <h2 className="font-bold">Enterprise</h2>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">Contact us for a custom quote</p>
                </div>
                <div className="flex flex-col gap-1 justify-end">
                  <h2 className="font-bold">Contact us</h2>
                  <Link
                    className="underline underline-offset-2 underline-thickness-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to="#"
                  >
                    View features
                  </Link>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}
