"use client";
import React from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import extendedTheme from "../../theme";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { animateScroll as scroll } from "react-scroll";
import HfsFaq from "../../_components/features/faq/hfsFaq";
import ContactForm from "../../_components/features/contactForm";
import { ServiceCard } from "../../_components/primitives/serviceCard";
import DataExchangeIcon from "../../_components/svg/icons/dataExchangeIcon"
import DataIcon from "../../_components/svg/icons/dataIcon";
import RewardIcon from "../../_components/svg/rewardIcon";
import AssestBg from "../../_components/svg/AssetBg.svg";
import Image from "next/image";
import hfsMobileIcon from "../../../../public/Images/mobileIcons/hfsMobileIcon.png"

const hushhForStudents = () => {
  const gradient = "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)";
  const router = useRouter();

  const scrollTo = () => {
    scroll.scrollTo(850);
  };

  const scrollInMobile = () => {
    scroll.scrollTo(450);
  };

  const learnMoreScroll = () => {
    scroll.scrollTo(1500);
  };

  return (
    <>
      <Box
        maxW={"100%"}
        minW={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          alignItems={"center"}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          mt={{ base: "3rem" }}
          gap={{base:'1rem'}}
        >
          <Heading
            fontWeight={"700"}
            lineHeight={{ md: "255.6px", base: "60px" }}
            textAlign={"center"}
            fontSize={{ md: "8.8rem", base: "2.5rem" }}
            pt={{ md: "8rem", base: "3rem" }}
            className="gradient"
            px={{ base: "0.5rem" }}
            mb={{ base: "0.5rem" }}
          >
           Hushh For Students
          </Heading>
          <Text
            className="color-gradient"
            fontWeight={"700"}
            fontSize={{ md: "2rem", base: "1rem" }}
            lineHeight={{ md: "57.6px", base: "28.3px" }}
            textAlign={'center'}
          >
            Empowering and rewarding digital engagement
          </Text>
          <Text
            px={{ md: "17.8rem" }}
            mb={{ base: "1rem", md: "4rem" }}
            textAlign={"center"}
            color={"#656565"}
          >
            Hushh for students: Revolutionizing data exchange by empowering students and providing businesses with valuable insights, balancing rewards and privacy
          </Text>
          <Button
            border={"1px solid #606060"}
            borderRadius={"2px"}
            w={{ md: "16rem", base: "10rem" }}
            color={extendedTheme.colors._white}
            lineHeight={{ md: "28px", base: "14px" }}
            background={"transparent"}
            letterSpacing={{ md: "0.5rem", base: "0.25rem" }}
            _hover={{
              background:
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
            }}
            onClick={learnMoreScroll}
          >
            LEARN MORE
          </Button>
        </Box>
        <HStack
          mt={"2rem"}
          gap={"3rem"}
          px={"4rem"}
          display={"flex"}
          flexDirection={{ base: "row", md: "row" }}
        >
          <Box
            gap={"0rem"}
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
          >
            <Text
              fontWeight={"800"}
              fontSize={{ md: "2.8rem", base: "1.25rem" }}
            >
              42k
            </Text>
            <Text fontSize={{ md: "1rem", base: "0.75rem" }} fontWeight={"500"}>
              Integrations
            </Text>
          </Box>
          <Box
            gap={"0rem"}
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
            alignItems={{ base: "center" }}
            justifyContent={{ base: "center" }}
            textAlign={{ base: "center" }}
          >
            <Text
              fontWeight={"800"}
              fontSize={{ md: "2.8rem", base: "1.25rem" }}
            >
              1.2b
            </Text>
            <Text fontSize={{ md: "1rem", base: "0.75rem" }} fontWeight={"500"}>
              Users
            </Text>
          </Box>
          <Button
            ml={{ md: "55rem" }}
            display={{ md: "flex", base: "none" }}
            border={"1px solid #606060"}
            borderRadius={"4rem"}
            w={"9rem"}
            color={extendedTheme.colors._white}
            lineHeight={"28px"}
            background={"transparent"}
            letterSpacing={"0.2rem"}
            onClick={scrollTo}
            _hover={{
              background:
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
            }}
            padding={"15px 68px 15px 68px"}
          >
            PLAY DEMO
          </Button>
        </HStack>
        <Box
          display={{ base: "flex", md: "none" }}
          mt={"2rem"}
          justifyContent={"center"}
        >
          <Button
            ml={{ md: "55rem" }}
            display={"flex"}
            border={"1px solid #606060"}
            borderRadius={"4rem"}
            onClick={scrollInMobile}
            w={"12rem"}
            color={extendedTheme.colors._white}
            lineHeight={"32.4px"}
            background={"transparent"}
            letterSpacing={"0.29rem"}
            _hover={{
              background:
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
            }}
            padding={"15px 68px 15px 68px"}
          >
            PLAY DEMO
          </Button>
        </Box>

        <HStack
          mt={{ md: "8rem", base: "5rem" }}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          gap={{ md: "2rem", base: "1rem" }}
        >
          <Heading
            as="h1"
            className="gradient"
            fontSize={{ md: "3.75rem", base: "1.5rem" }}
            display={{ md:"flex", base:'none'}}
            fontWeight={400}
          >
            Here's how{" "}
            <Text style={{ fontWeight: 700, margin: "0 1rem" }}>
              Hushh elevates
            </Text>{" "}
            your experience
          </Heading>
          <Heading
            as="h1"
            className="gradient"
            fontSize={{ md: "3.75rem", base: "1.5rem" }}
            display={{ md:"none", base:'flex'}}
            fontWeight={400}
          >
            Here's how Hushh elevates your experience
          </Heading>
          <Text
            color={extendedTheme.colors.secondary}
            fontWeight={"500"}
            fontSize={"1rem"}
            lineHeight={{ md: "2.25rem", base: "1.5rem" }}
            px={{ md: "20rem", base: "1rem" }}
          >
            Our technology services deliver cutting-edge solutions tailored to drive efficiency, enhance performance, and fuel growth in today's digital landscape.
          </Text>
        </HStack>

        <Container
          display={"flex"}
          pt={{ md: "2rem" , base:'1.25rem'}}
          px={{ md: "10rem", base:'1rem' }}
          justifyContent={"center"}
          minW={{ md: "100%", base: "100%" }}
          mb={{md:'5rem', base:'2rem'}}
        >
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ md: 10, base: 0 }}
            flexWrap="wrap"
          >
            <ServiceCard
              icon={<DataIcon/>}
              title="Data Value Setting"
              textAlign={"left"}
              description="Students have the ability to set a value for their data, establishing both transparency and control over it.​"
            />
            <ServiceCard
              icon={<DataExchangeIcon />}
              title="Secure Data Exchange​"
              textAlign={"left"}
              description="The platform enables businesses to securely purchase data from students. This process is designed to ensure data privacy and secure transactions.​​"
            />
            <ServiceCard
              icon={<RewardIcon />}
              title="Rewards and Points System​"
              textAlign={"left"}
              description="Students earn rewards and points for each successful data transaction they partake in. This system incentivizes them to participate in the data exchange."
            />
          </Grid>
        </Container>

        <VStack mt={{md:'5rem',base:'2rem'}}>
            <Box mx={{md:'8rem', base:'1.5rem'}} textAlign={'center'}>
                <Heading className="gradient" lineHeight={{md:'75px', base:'30px'}} fontWeight={'700'} fontSize={{md:'3.75rem', base:'1.5rem'}}>
                    Control your data, earn rewards – hushh for students makes your data work for you.
                </Heading>
            </Box>
            <Box position={'relative'} mt={{md:'-17rem'}}>
               <Image src={AssestBg} alt="AssestBg" />
               <Box position={'absolute'} boxSize={{base:'7rem'}} left={{ md:'37%', base:'37%'}} top={{ md:'20%', base:'20%'}}>
                   <Image src={hfsMobileIcon} alt="hfsMobileIcon" />
               </Box>
            </Box>
        </VStack>

        <Stack
          mt={{ base: "6rem", md: "4rem" }}
          px={{ md: "9rem", base: "1rem" }}
        >
          <Heading
            className="gradient"
            fontWeight={"700"}
            lineHeight={{ md: "75px", base: "28px" }}
            fontSize={{ md: "3.75rem", base: "1.25rem" }}
            mb={{base:'2rem', md:'4rem'}}
            display={{md:'flex', base:'none'}}
            textAlign={'center'}
          >
            Hushh caters to a wide range <br></br> of needs, including
          </Heading>
          <Heading
            className="gradient"
            fontWeight={"700"}
            lineHeight={{ md: "75px", base: "28px" }}
            fontSize={{ md: "3.75rem", base: "1.25rem" }}
            mb={{base:'2rem', md:'4rem'}}
            display={{md:'none', base:'flex'}}
            textAlign={'center'}
          >
            Hushh caters to a wide range of needs, including
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ md: 10, base: 4 }}
            flexWrap="wrap"
            textAlign={"left"}
          >
            <Box
              gap={"2rem"}
              color={"#0D0D25"}
              p={{ md: "2rem", base: "1rem" }}
              bg={"white"}
              borderRadius={"1.75rem"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ md: "1.75rem",base:'1rem' }}
                lineHeight={{ md:"38.53px"}}
                marginBottom={{base:'0.75rem', md:'2rem'}}
              >
                Travel
              </Heading>
              <Text
                fontWeight={"400"}
                fontSize={{ md: "1rem", base: "0.5rem" }}
                lineHeight={{ md:"22.41px"}}
                marginBottom={{base:'1.25rem', md:'3rem'}}
              >
                Bespoke itineraries, private jet charters, exclusive tours
              </Text>
              {/* <Image src={RightArrowBlack} alt="RightArrowBlack" /> */}
              <Box>
                     {/* <Image src={PaperPlane} alt="PaperPlane"/> */}
              </Box>
            </Box>
            <Box
              gap={"2rem"}
              p={{ md: "2rem", base: "1rem" }}
              borderRadius={"1.75rem"}
              background="linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)"
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ md: "1.75rem",base:'1rem' }}
                lineHeight={{ md:"38.53px"}}
                marginBottom={{base:'0.75rem', md:'2rem'}}
                color={'white'}
              >
                Events
              </Heading>
              <Text
                fontWeight={"400"}
                fontSize={{ md: "1rem", base: "0.5rem" }}
                lineHeight={{ md:"22.41px"}}
                marginBottom={{base:'1.25rem', md:'3rem'}}
                color={'white'}
              >
                VIP access to high-profile events, private viewings, red carpet
                experiences
              </Text>
              {/* <Image src={RightArrowWhite} alt="rightArrowWhite" />
              <Image src={GoldenMedal} alt="goldenMedal" /> */}
            </Box>
            <Box
              gap={"2rem"}
              color={"#0D0D25"}
              p={{ md: "2rem", base: "1rem" }}
              bg={"white"}
              borderRadius={"1.75rem"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ md: "1.75rem",base:'1rem' }}
                lineHeight={{ md:"38.53px"}}
                marginBottom={{base:'0.75rem', md:'2rem'}}
              >
                Lifestyle
              </Heading>
              <Text
                fontWeight={"400"}
                fontSize={{ md: "1rem", base: "0.5rem" }}
                lineHeight={{ md:"22.41px"}}
                marginBottom={{base:'1.25rem', md:'3rem'}}
              >
                Personal shopping, home management, day-to-day errands,
                specialized requests
              </Text>
              {/* <Image src={RightArrowBlack} alt="RightArrowBlack" />
              <Image src={ShoppingHand} alt="shoppingHand" /> */}
            </Box>
          </Grid>
        </Stack>

     

        <HfsFaq />
      </Box>
      <ContactForm />
    </>
  );
};

export default hushhForStudents;