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
  Button,
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
    <Box  p={{ base: 4, md: 8 }}>
      <VStack ml={{ base: "1rem", md: "5.5rem" }} spacing={2} mt={"5rem"} mr={"50%"}>
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

        <TabPanels mt={'2rem'}>
          {planData.map((category, index) => (
            <TabPanel key={index}>
              <SimpleGrid  mx={'4rem'} columns={{ base: 1, md: 2 }} gap={'15rem'}>
                {category.plans.map((plan, idx) => (
                  <Box flex={1} display={'flex'} textAlign={'center'} alignItems={'center'} flexDirection={'column'} gap={{ md:'1.75rem', base:'1rem'}} bg={'#131414'} borderRadius={'2rem'} p={'1.5rem'} key={idx} color={'white'}>
                    <Box bg={'#146EF5'} w={'max-content'} borderRadius={'4px'} >
                      <Text px={'1rem'} py={'0.5rem'} fontWeight="600" lineHeight={'20px'} fontSize={{ md:'0.875rem', base:'0.5rem'}}>{plan.name}</Text>
                    </Box>
                    <Heading as="h1" fontWeight="600" fontSize={{ base:'2.125rem', md:'4.125rem'}} lineHeight={{ md:'79.2px', base:'50px'}}>
                        {plan.price}
                    </Heading>
                    <Text lineHeight={'22px'} fontWeight={'500'} fontSize="1.125rem">
                      {plan.heading}
                    </Text>
                    <Text lineHeight={'28px'} fontWeight={'400'} fontSize="1rem">
                      {plan.description}
                    </Text>
                    <Button w={'100%'} bg={'#146EF5'} color={'white'} borderRadius={'4px'}>
                        Upgrade to Premium
                    </Button>
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
