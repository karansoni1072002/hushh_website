"use client";
import React, { useState } from "react";
import { Container, List, ListIcon, ListItem, Switch } from "@chakra-ui/react";
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
  HStack,
} from "@chakra-ui/react";
import { CheckCircleIcon, ChevronDownIcon } from "@chakra-ui/icons";
import ListIconTick from "../_components/svg/icons/listIconTick";
import Image from "next/image";
// import { MdCheckCircleOutline } from "react-icons/md";
import BoxImage from "../_components/svg/keyHighlightImg.svg"
const planData = [
  {
    category: "Everyday Consumers",
    plans: [
      {
        name: "DEVELOPERS & ENGINEERS",
        heading: "Hush Vault: Free for basic use",
        description: "A secure place for all your personal and business data",
        price: "$5",
        perMonth: "/mo",
      },
      {
        name: "EVERYDAY CONSUMERS",
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
        name: "DEVELOPERS & ENGINEERS",
        heading: "Hush SDK & API Access",
        description:
          "Fuelling the next wave of AI and data-driven applications with robust, easy-to-integrate tools",
        price: "$50",
        perMonth: "/mo",
      },
      {
        name: "DEVELOPERS & ENGINEERS",
        heading: "Developer Support & Marketplace",
        description:
          " Free access to a supportive community and marketplace to monetize or discover innovative solutions",
        price: "Free",
      },
    ],
  },
  {
    category: "Sales Agents",
    plans: [
      {
        name: "SALES AGENTS",
        heading: "Data Insights Dashboard",
        description:
          "Providing actionable insights to refine sales strategies and hit targets",
        price: "$250",
        perMonth: "/mo",
      },
      {
        name: "SALES AGENTS",
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
        name: "CREATORS & ASPIRING INFLUENCE",
        heading: "Content Monetization Platform",
        description:
          "Revenue generated, empowering creators to earn from their unique content and insights",
        price: "8%",
        perMonth: "/comm",
      },
      {
        name: "CREATORS & ASPIRING INFLUENCE",
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
  const [isYearly, setIsYearly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);

  const handleTabsChange = (index) => {
    setTabIndex(index);
    setActiveAccordionIndex(index);
  };

  const handleSwitchChange = () => {
    setIsYearly(!isYearly); // toggle the state on each click
    setIsMonthly(false);
  };

  const renderPrice = (price) => {
    const priceNum = parseFloat(price.replace("$", ""));
    return isYearly ? `$${priceNum * 12}` : price;
  };

  const yearlyTextStyles = isYearly ? { color: "white" } : { color: "#717171" };
  const monthlyTextStyles = isMonthly
    ? { color: "white" }
    : { color: "#717171" };

  return (
    <>
      <Box p={{ base: 4, md: 8 }}>
        <VStack
          ml={{ base: "1rem", md: "5.5rem" }}
          spacing={2}
          mt={"5rem"}
          mr={"50%"}
        >
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
      </Box>

      <VStack
        mt={{ md: "4rem", base: "2.5rem" }}
        textAlign={"left"}
        alignItems={"flex-start"}
        mx={{ md: "7.2rem" }}
      >
        <Text
          mb={{ md: "1.5rem", base: "0.75rem" }}
          className="gradient"
          fontWeight={"600"}
          lineHeight={{ md: "52px", base: "35px" }}
          fontSize={{ md: "3.5rem", base: "2rem" }}
          letterSpacing={"0.56px"}
        >
          Site plans
        </Text>
        <HStack gap={{ md: "20rem", base: "4rem" }}>
          <Text
            w={"50%"}
            lineHeight={"30px"}
            color={"#FFFFFF"}
            fontWeight={"500"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
          >
            Our site plans provide easy 1-click publishing and hosting, right
            from inside our powerful visual designer
          </Text>
          <Box
            lineHeight={"22px"}
            fontSize={{ md: "1rem", base: "0.8rem" }}
            display={"flex"}
            flexDirection={"row"}
            gap={"1rem"}
          >
            <Text color={"#717171"} style={monthlyTextStyles}>
              Billed monthly
            </Text>
            <Switch size="lg" onChange={handleSwitchChange} />
            <Text color="#717171" style={yearlyTextStyles}>
              Billed yearly
            </Text>
          </Box>
        </HStack>
      </VStack>

      <Box
        minW={"100%"}
        display={"flex"}
        textAlign={"left"}
        alignItems={"flex-start"}
        flexDirection={"column"}
      >
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
            w={"52%"}
            justifyContent={"space-between"}
          >
            {planData.map((category, index) => (
              <Tab
                key={index}
                _selected={{
                  color: "white",
                  bg: "#363636",
                  borderRadius: "4px",
                }}
                color={"#898989"}
                lineHeight={"22px"}
                fontWeight={"600"}
                fontSize={"15px"}
              >
                {category.category}
              </Tab>
            ))}
          </TabList>

          <TabPanels mt={"2rem"}>
            {planData.map((category, index) => (
              <TabPanel key={index}>
                <SimpleGrid
                  mx={"10rem"}
                  columns={{ base: 1, md: 2 }}
                  gap={"8rem"}
                >
                  {category.plans.map((plan, idx) => (
                    <Box
                      flex={1}
                      display={"flex"}
                      textAlign={"center"}
                      alignItems={"center"}
                      flexDirection={"column"}
                      gap={{ md: "1.75rem", base: "1rem" }}
                      bg={"#131414"}
                      borderRadius={"2rem"}
                      p={"1.5rem"}
                      key={idx}
                      color={"white"}
                    >
                      <Box
                        bg={"#146EF5"}
                        w={"max-content"}
                        borderRadius={"4px"}
                      >
                        <Text
                          px={"1rem"}
                          py={"0.5rem"}
                          fontWeight="600"
                          lineHeight={"20px"}
                          fontSize={{ md: "0.875rem", base: "0.5rem" }}
                        >
                          {plan.name}
                        </Text>
                      </Box>
                      <Heading
                        as="h1"
                        fontWeight="600"
                        fontSize={{ base: "2.125rem", md: "4.125rem" }}
                        lineHeight={{ md: "79.2px", base: "50px" }}
                      >
                        {renderPrice(plan.price)}{" "}
                        {plan.perMonth && (
                          <span
                            style={{
                              color: "white",
                              marginLeft: "-0.75rem",
                              fontWeight: "600",
                              fontSize: "1.25rem",
                            }}
                          >
                            {plan.perMonth}
                          </span>
                        )}
                      </Heading>
                      <Text
                        lineHeight={"22px"}
                        fontWeight={"500"}
                        fontSize="1.125rem"
                      >
                        {plan.heading}
                      </Text>
                      <Text
                        h={"3rem"}
                        lineHeight={"28px"}
                        fontWeight={"400"}
                        fontSize="1rem"
                      >
                        {plan.description}
                      </Text>
                      <Button
                        w={"100%"}
                        bg={"#146EF5"}
                        color={"white"}
                        borderRadius={"4px"}
                      >
                        Upgrade to Premium
                      </Button>
                    </Box>
                  ))}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <Box
          mt={{ base: "0.5rem", md: "1rem" }}
          gap={{ md: "2rem", base: "1rem" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
          alignSelf={"center"}
        >
          <Text
            color={"white"}
            fontWeight={"500"}
            fontSize={{ md: "1rem", base: "0.75rem" }}
            lineHeight={"36px"}
          >
            All prices are in USD and charged per site with applicable taxes
            added at checkout
          </Text>
          <Button rightIcon={<ChevronDownIcon />}>
            View all plan features
          </Button>
        </Box>
      </Box>
      <Box mx={'6rem'} mb={'1rem'} bg={'#131414'} gap={'5rem'} minW={'85%'} mt={{md:'6rem', base:'2rem'}} display={'flex'} flexDirection={'row'}>
        <VStack gap={{ md:'1rem'}} textAlign={'left'} alignItems={'flex-start'} mt={{md:'4rem', base:'2rem'}}>
          <Text className="color-gradient" fontWeight={'600'} fontSize={{ md:'1rem', base:'0.5rem'}} lineHeight={'1rem'} letterSpacing={'0.255'}>HUSHH</Text>
          <Heading className="gradient" fontSize={{md:'3.75rem', base:'2rem'}} fontWeight={'600'} lineHeight={{ md:'63.65px', base:'45px'}}>Key Highlights</Heading>
          <List spacing={10} color={"white"} mt={'1rem'}>
            <ListItem display={"flex"}>
              <Box>
                <ListIconTick />
              </Box>
              <VStack textAlign={"left"}>
                <Heading
                  alignContent={"flex-start"}
                  align={"flex-start"}
                  alignSelf={"flex-start"}
                  alignItems={"flex-start"}
                  display={"flex"}
                  flexDirection={"row"}
                  fontWeight={'700'}
                  fontSize={{ md:'1.5rem', base:'1rem'}}
                  lineHeight={'32px'}
                >
                  Simplicity & Transparency
                </Heading>
                <Text fontWeight={'500'} fontSize={{md:'1rem', base:'0.65rem'}} lineHeight={'30px'}>
                  Pricing is designed to be straightforward across all services,
                  ensuring users can easily select the tools that best fit their
                  needs without encountering hidden fees.
                </Text>
              </VStack>
            </ListItem>
            <ListItem display={"flex"}>
              <Box>
                <ListIconTick />
              </Box>
              <VStack textAlign={"left"}>
                <Heading
                  alignContent={"flex-start"}
                  align={"flex-start"}
                  alignSelf={"flex-start"}
                  alignItems={"flex-start"}
                  display={"flex"}
                  flexDirection={"row"}
                  fontWeight={'700'}
                  fontSize={{ md:'1.5rem', base:'1rem'}}
                  lineHeight={'32px'}
                >
                  Scalable Solutions
                </Heading>
                <Text fontWeight={'500'} fontSize={{md:'1rem', base:'0.65rem'}} lineHeight={'30px'}>
                  From free basic access to premium options, services are built to scale with the growth of individuals & businesses, ensuring long-term support
                </Text>
              </VStack>
            </ListItem>
            <ListItem display={"flex"}>
              <Box>
                <ListIconTick />
              </Box>
              <VStack textAlign={"left"}>
                <Heading
                  alignContent={"flex-start"}
                  align={"flex-start"}
                  alignSelf={"flex-start"}
                  alignItems={"flex-start"}
                  display={"flex"}
                  flexDirection={"row"}
                  fontWeight={'700'}
                  fontSize={{ md:'1.5rem', base:'1rem'}}
                  lineHeight={'32px'}
                >
                  Community Focus
                </Heading>
                <Text fontWeight={'500'} fontSize={{md:'1rem', base:'0.65rem'}} lineHeight={'30px'}>
                  Beyond the tools and platforms, Hushh fosters a community for support, learning, and collaboration, enhancing the value of every subscription.
                </Text>
              </VStack>
            </ListItem>
          </List>
        </VStack>
        <VStack alignContent={'flex-end'} alignItems={'flex-end'} alignSelf={'flex-end'} w={'100%'} h={'80%'} >
           <Image src={BoxImage} alt="BoxImageHighlight"/>
        </VStack>
      </Box>
    </>
  );
}
