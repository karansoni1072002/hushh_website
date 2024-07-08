"use client";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa"; // Dummy icon
import ARIcon from '../_components/svg/hackathon/ARIcon.svg';
import EdgeIcon from '../_components/svg/hackathon/EdgeIcon.svg';
import Image from "next/image";
import FooterComponent from "../_components/features/FooterComponent";

const items = [
  { title: "AUGMENTED REALITY (AR)", icon: ARIcon },
  { title: "ARTIFICIAL INTELLIGENCE", icon: ARIcon },
  { title: "INTERNET OF THINGS", icon: ARIcon },
  { title: "BLOCKCHAIN", icon: ARIcon },
  { title: "VIRTUAL REALITY", icon: ARIcon },
  { title: "3D MODELLING", icon: ARIcon },
  { title: "BRAIN COMPUTER INTERFACE", icon: ARIcon },
  { title: "EDGE / CLOUD COMPUTING", icon: EdgeIcon },
];
const HushhHackhathon = () => {
  const targetDate = "2024-07-09T23:59:59";
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <Box w={"100%"} px={{ md: "4rem", base: "2rem" }}>
        <Stack
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
          gap={{ md: "4rem", base: "1rem" }}
        >
          <VStack
            flex={1}
            textAlign={{ md: "left" }}
            alignItems={"flex-start"}
            mt={{ md: "8rem", base: "4rem" }}
          >
            <Text
              fontWeight={"600"}
              fontSize={{ md: "1.25rem", base: "0.75rem" }}
              letterSpacing={"0.1rem"}
              lineHeight={{ md: "32px", base: "20px" }}
              color={"#E4E4E4"}
            >
              HUSHH AI
            </Text>
            <Text
              fontWeight={"400"}
              fontSize={{ md: "1rem", base: "0.5rem" }}
              letterSpacing={"0.1rem"}
              lineHeight={{ md: "25.6px", base: "15px" }}
              color={"#E4E4E4"}
            >
              PRESENTS
            </Text>
            <Text
              fontWeight={"700"}
              fontSize={{ md: "4rem", base: "2rem" }}
              lineHeight={{ md: "76.8px", base: "40px" }}
              className="hackathon-gradient"
              my={{ md: "1rem", base: "0.5rem" }}
            >
              Hushh Hackhathon 1.0
            </Text>
            <Text
              fontWeight={"400"}
              fontSize={{ md: "1.25rem", base: "0.75rem" }}
              lineHeight={{ md: "32px", base: "20px" }}
              color={"#E4E4E4"}
            >
              The 1st iteration of Hushh Hackhathon
            </Text>
            <Text
              fontWeight={"400"}
              fontSize={{ md: "1.25rem", base: "0.75rem" }}
              lineHeight={{ md: "32px", base: "20px" }}
              color={"#E4E4E4"}
              mb={{ md: "1rem", base: "0.25rem" }}
            >
              Hushh Hackhathon 1.0 welcome you!
            </Text>
            <Button
              borderRadius={"2px"}
              fontSize={{ md: "1rem", base: "0.5rem" }}
              letterSpacing={"0.29rem"}
              border={"1px solid #606060"}
              fontWeight={"400"}
              lineHeight={{ md: "28.8px", base: "15px" }}
              color={"white"}
            >
              GUIDELINES DOCUMENTATION
            </Button>
          </VStack>

          <HStack
            w={"100%"}
            flex={1}
            color={"#FFFFFF"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"right"}
          >
            <Flex>
              <VStack>
                <Text
                  lineHeight={{ md: "84px", base: "42px" }}
                  fontWeight={"600"}
                  fontSize={{ md: "4.375rem", base: "2.1rem" }}
                >
                  {timeLeft.days != null
                    ? String(timeLeft.days).padStart(2, "0")
                    : "00"}
                </Text>
                <Text
                  fontSize={{ md: "1.25rem", base: "1rem" }}
                  lineHeight={"24px"}
                  fontWeight={"600"}
                >
                  Days
                </Text>
              </VStack>
              <Text mx={2} my={3}>
                :
              </Text>
              <VStack>
                <Text
                  lineHeight={{ md: "84px", base: "42px" }}
                  fontWeight={"600"}
                  fontSize={{ md: "4.375rem", base: "2.1rem" }}
                >
                  {timeLeft.hours != null
                    ? String(timeLeft.hours).padStart(2, "0")
                    : "00"}
                </Text>
                <Text
                  fontSize={{ md: "1.25rem", base: "1rem" }}
                  lineHeight={"24px"}
                  fontWeight={"600"}
                >
                  Hours
                </Text>
              </VStack>
              <Text mx={2} my={3}>
                :
              </Text>
              <VStack>
                <Text
                  lineHeight={{ md: "84px", base: "42px" }}
                  fontWeight={"600"}
                  fontSize={{ md: "4.375rem", base: "2.1rem" }}
                >
                  {timeLeft.minutes != null
                    ? String(timeLeft.minutes).padStart(2, "0")
                    : "00"}
                </Text>
                <Text
                  fontSize={{ md: "1.25rem", base: "1rem" }}
                  lineHeight={"24px"}
                  fontWeight={"600"}
                >
                  Minutes
                </Text>
              </VStack>
              <Text mx={2} my={3}>
                :
              </Text>
              <VStack>
                <Text
                  lineHeight={{ md: "84px", base: "42px" }}
                  fontWeight={"600"}
                  fontSize={{ md: "4.375rem", base: "2.1rem" }}
                >
                  {timeLeft.seconds != null
                    ? String(timeLeft.seconds).padStart(2, "0")
                    : "00"}
                </Text>
                <Text
                  fontSize={{ md: "1.25rem", base: "1rem" }}
                  lineHeight={"24px"}
                  fontWeight={"600"}
                >
                  Seconds
                </Text>
              </VStack>
            </Flex>{" "}
          </HStack>
        </Stack>

        <Box
          mx={{ md: "20%",base:'5%' }}
          mt={{ md: "8rem", base: "2.5rem" }}
          bg={"transparent"}
          border={"13px solid #B5B5B5"}
          borderRadius={"52px"}
        >
          <VStack
            my={{ md: "3rem", base: "1.5rem" }}
            gap={{ md: "2rem", base: "0.75rem" }}
            mx={{ md: "5rem", base: "1.75rem" }}
            p={{ md: "5rem", base: "2rem" }}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Text
              className="gradient"
              fontSize={{ md: "2.89rem", base: "1.44rem" }}
              fontWeight={"700"}
              lineHeight={"48.83px"}
            >
              Hushh Hackathon
            </Text>
            <Text
              className="hackathon-gradient"
              fontSize={{ md: "3.2rem", base: "1.6rem" }}
              lineHeight={{ md: "54.63px", base: "34px" }}
              fontWeight={"700"}
            >
              4th July - 9th July
            </Text>
            <Text
              className="gradient"
              fontSize={{ md: "2rem", base: "1rem" }}
              lineHeight={"34px"}
              fontWeight={"700"}
            >
              Prizes worth
            </Text>
            <Text
              className="gradient"
              fontSize={{ md: "2rem", base: "1rem" }}
              lineHeight={"34px"}
              fontWeight={"700"}
            >
              INR 35000 For 1st and 2nd Place
            </Text>
            <Text
              color={"#ABABAB"}
              fontSize={{ md: "1.6rem", base: "0.8rem" }}
              lineHeight={"27.16px"}
              fontWeight={"500"}
            >
              8 exclusive rewards Feat. Smarthwatch AI gadegts, and goodies
              worth INR 10000 each
            </Text>
            <Text
              color={"#ABABAB"}
              fontSize={{ md: "1.6rem", base: "0.8rem" }}
              lineHeight={"27.16px"}
              fontWeight={"500"}
            >
              Online Mode
            </Text>
          </VStack>
        </Box>

        <VStack
          my={{ md: "6rem", base: "3rem" }}
          textAlign={"left"}
          alignItems={"flex-start"}
        >
          <Text
            fontWeight={"700"}
            fontSize={{ md: "3.81rem", base: "1.9rem" }}
            lineHeight={{ md: "73.2px", base: "42.4px" }}
            color={"#E4E4E4"}
          >
            What is Hushh Hackathon 1.0 ?
          </Text>
          <Box
            mt={{ md: "1rem", base: "0.5rem" }}
            display={"flex"}
            flexDirection={"column"}
            gap={{ md: "0.75rem", base: "0.45rem" }}
            color={"#E4E4E4"}
            fontWeight={"500"}
            lineHeight={{ md: "32px", base: "20px" }}
            fontSize={{ md: "1.25rem", base: "0.75rem" }}
          >
            <Text>
              Welcome to the first hushh hackathon! We're challenging you to
              take an app from our library and make it awesome. Use the app,
              find its strengths and weaknesses, and imagine how to make it even
              better.
            </Text>
            <Text>
              Think like a user and brainstorm new features or ways to improve
              the app's flow. Write down your ideas and explain why they'd make
              the app better for everyone.
            </Text>
            <Text>
              The best ideas will earn you a spot in a special session where
              you'll show us your understanding of the app and its potential.
            </Text>
            <Text>
              We'll judge your work based on your analysis of the app, your
              creative ideas, how well you addressed user needs, and your
              feedback during the session.
            </Text>
            <Text>
              Get ready to learn, show off your skills, meet other tech
              enthusiasts, and maybe even win some cool prizes. Let's innovate!
            </Text>
          </Box>
        </VStack>

        <VStack mx={{ md: "2rem",base:'1rem' }} >
          <Text
            color={"#E4E4E4"}
            fontSize={{ md: "3.8rem", base: "1.9rem" }}
            fontWeight={"700"}
            lineHeight={{ md: "73.2px", base: "42px" }}
          >
            Our Themes
          </Text>
          <Box bg="black" color="white" minH="100vh" p={8}>
            <Box mb={8}>
              <Text fontSize="xl" fontWeight="bold">
                EXTENDED REALITY (XR)
              </Text>
              <Text>SPATIAL COMPUTING</Text>
            </Box>
            <SimpleGrid columns={[2, 2, 3, 4]} gap={'4rem'} spacing={35}>
              {items.map((item, index) => (
                <VStack
                  gap={{md:'2.15rem',base:'1rem'}}
                  key={index}
                  // border="1px solid white"
                  p={4}
                  borderRadius="md"
                >
                  <Image src={item.icon}/>
                  <Text fontWeight={'600'} fontSize={{md:'1.25rem',base:'0.8rem'}} letterSpacing={'0.1rem'} lineHeight={'32px'} textAlign="center">{item.title}</Text>
                </VStack>
              ))}
            </SimpleGrid>
            <Text mt={{md:'3rem',base:'1.5rem'}} textAlign={'left'} letterSpacing={'7.5%'} color={'#E4E4E4'} fontWeight={'500'} fontSize={{md:'1.25rem',base:'0.75rem'}} lineHeight={{md:'32px',base:'20px'}}>
              In terms of technologies, Hushh Hackathon 1.0  will leverage the emerging technologies and technologies of tomorrow, specifically in the realm of Metaverse and AI. These themes and technologies provide a broad scope for participants to explore and develop innovative solutions that address real-world challenges in various domains.
            </Text>
          </Box>
        </VStack>

        <VStack my={{md:'4rem',base:'2rem'}} mx={{ md: "2rem",base:'1rem' }} textAlign={'left'} gap={{md:'1.25rem',base:'0.7rem'}} alignItems={'flex-start'}>
          <Text color={'#E4E4E4'} fontWeight={'700'} fontSize={{md:'3.8rem',base:'1.9rem'}} lineHeight={{md:'73.2px',base:'42px'}}>Submit Your Projects!</Text>
          <Text color={'#FFFFFF'} fontWeight={'500'} lineHeight={'28px'} fontSize={{md:'1.18rem',base:'0.6rem'}}>Keep in Mind</Text>
          <Text mr={'40%'} color={'#FFFFFF'} fontWeight={'500'} lineHeight={'28px'} fontSize={{md:'1.18rem',base:'0.6rem'}}>Documents you upload should have the name of the app you worked on and the names of the participant who worked on it or else the submission wil not be considered </Text>
          <Button mt={{md:'2rem',base:'1rem'}} border={'2px solid white'} w={'100%'} color={'white'} bg={'transparent'} _hover={{border:'none',bg:'linear-gradient(256.5deg, #e0055f 6.97%, #2020ed 92.26%)', color:'white'}}>
            + Click for project submission
          </Button>
          <Text color={'#E4E4E4'} fontWeight={'500'} fontSize={{md:'1.25rem',base:'0.8rem'}} lineHeight={'32px'} letterSpacing={'0.075rem'}>** the final selected teams will have a 1-1 round to explain there ideas and also provide feedback on there chosen applications user experience based on their understanding and feedback winners will be seleted</Text>        
        </VStack>

        <VStack my={{md:'4rem',base:'2rem'}} mx={{ md: "2rem",base:'1rem' }} textAlign={'left'} gap={{md:'1.25rem',base:'0.7rem'}} alignItems={'flex-start'}>
        <Text color={'#E4E4E4'} fontWeight={'700'} fontSize={{md:'3.8rem',base:'1.9rem'}} lineHeight={{md:'73.2px',base:'42px'}}>Join our community</Text>
        
        <Text mr={'40%'} color={'#E4E4E4'} fontWeight={'500'} lineHeight={'28px'} fontSize={{md:'1.18rem',base:'0.6rem'}}>Documents you upload should have the name of the app you worked on and the names of the participant who worked on it or else the submission wil not be considered </Text>
        </VStack>

      </Box>
      <FooterComponent/>
    </>
  );
};

export default HushhHackhathon;
