"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Text,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

const planData = [
  {
    category: "Everyday Consumers",
    plans: [
      {
        name: "Developer & Engineers",
        heading: "Hush Vault: Free for basic use",
        description: "A secure place for all your personal and business data",
        price: "$5",
        perMonth: "/mo",
      },
      {
        name: "Everyday Consumers",
        heading: "Hush AI Assistant",
        description:
          "Your personal navigator in the digital world, making data decisions simple and personalized",
        price: "$10",
        perMonth: "/mo",
      },
    ],
  },
  {
    category: "Developers & Engineers",
    plans: [
      {
        name: "Developer & Engineers",
        heading: "Hush SDK & API Access",
        description:
          "Fuelling the next wave of AI and data-driven applications with robust, easy-to-integrate tools",
        price: "$50",
        perMonth: "/mo",
      },
      {
        name: "Developer & Engineers",
        heading: "Developer Support & Marketplace",
        description:
          " Free access to a supportive community and marketplace to monetize or discover innovative solutions",
        price: "Free",
        perMonth: "",
      },
    ],
  },
  {
    category: "Sales Agents",
    plans: [
      {
        name: "Sales Agents",
        heading: "Data Insights Dashboard",
        description:
          "Providing actionable insights to refine sales strategies and hit targets",
        price: "$250",
        perMonth: "/mo",
      },
      {
        name: "Sales Agents",
        heading: "Prospect Identification Tool",
        description:
          "Leveraging AI to uncover high-potential leads and opportunities",
        price: "$300",
        perMonth: "/mo",
      },
    ],
  },
  {
    category: "Creators & Aspiring Influence",
    plans: [
      {
        name: "Creators & Aspiring Influence",
        heading: "Content Monetization Platform",
        description:
          "Revenue generated, empowering creators to earn from their unique content and insights",
        price: "8%",
        perMonth: "/comm",
      },
      {
        name: "Creators & Aspiring Influence",
        heading: "Personal Brand Data Insights",
        description:
          "Offering deep analytics on audience engagement and preferences to tailor content effectively",
        price: "$300",
        perMonth: "/mo",
      },
    ],
  },
];

export default function PricingPlans() {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

  const handleTabsChange = (index) => {
    setTabIndex(index);
    setActiveAccordionIndex(index);
  };

  return (
    <Box ml={{ base: "1rem", md: "5.5rem" }} p={{ base: 4, md: 8 }}>
      <VStack spacing={2} mt={"5rem"} mr={"50%"}>
        <Heading
          lineHeight={"32px"}
          display={"flex"}
          alignSelf={"flex-start"}
          textAlign={"left"}
          as={"h2"}
          color={"#FFFFFF"}
          fontSize={{ base: "0.75rem", md: "1.25rem" }}
          letterSpacing={"0.04rem"}
          fontWeight="500"
        >
          Pricing
        </Heading>
        <Heading
          as={"h1"}
          lineHeight={{ md: "90.28px", base: "50px" }}
          className="gradient"
          fontSize={{ base: "2.5rem", md: "4.625rem" }}
          fontWeight="700"
        >
          Find the right plan for your needs
        </Heading>
      </VStack>

      <Tabs
        onChange={handleTabsChange}
        position="relative"
        variant="unstyled"
        mt={8}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <TabList
          p={"0.5rem"}
          borderRadius={"8px"}
          border={"1px solid #222222"}
          minH={"4.125rem"}
          w={"55%"}
          justifyContent={"space-between"}
        >
          {planData.map((category, index) => (
            <Tab
              key={index}
              _selected={{ color: "white", bg: "#363636", borderRadius: "4px" }}
              color={"#898989"}
              lineHeight={"22px"}
              fontWeight={"600"}
              fontSize={"15px"}
            >
              {category.category}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {planData.map((category, index) => (
            <TabPanel key={index}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {category.plans.map((plan, idx) => (
                  <Box key={idx}>
                    <Heading as="h2" fontWeight="bold">
                      {plan.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.500">
                      {plan.description}
                    </Text>
                    <VStack align="start">
                      <Heading as="h2" fontWeight="bold">
                        {plan.price}
                      </Heading>
                      <Link
                        color="gray.500"
                        href="#"
                        _hover={{
                          color: "gray.900",
                          textDecoration: "underline",
                        }}
                      >
                        View features
                      </Link>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
