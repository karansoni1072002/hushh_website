"use client";
import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  useToast,
  Stack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { QRCode } from "react-qrcode-logo";

// New Icons for Mobile Screens
import ChromeIcon from "../_components/svg/productIcons/chromeIcon.svg";
import DeveloperIcon from "../_components/svg/productIcons/developerIcon.svg";
import VibeSearchNew from "../_components/svg/productIcons/vibeSearchIcon.svg";
import ButtonIcon from "../_components/svg/productIcons/hushhButtonIcon.svg";
import HushhAppIcon from "../_components/svg/productIcons/hushhAppIcon.svg";
import hushhLogo from "../_components/svg/productIcons/hushhLogo.svg";


export default function vivaConnect() {
  const router = useRouter();
  const toast = useToast();

  return (
    <Box
      bg="black"
      p={4}
      color="white"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      fontFamily={"Poppins"}
    >
  <VStack fontFamily={"Poppins"} spacing={4} w="100%">

    <Flex alignItems="flex-start" w={'100%'} justifyContent="space-between" zIndex={'9999999999999'}>
      <Text
        fontWeight="600"
        lineHeight="8.09px"
        fontSize="0.5rem"
        letterSpacing="0.1275rem"
        className="hushh-gradient"
        mt="1rem" 
      >
        PRODUCT SHOWCASE
      </Text>
      <Box mt="1rem" zIndex="9" onClick={()=> router.push('/qrCodePage')}>
        <QRCode
          size={29}
          fgColor="#FFFFFF"
          logoOpacity={0.5}
          bgColor="transparent"
          quietZone={0}
          logoPaddingStyle="square"
          logoPadding={0}
          value="https://www.hush1one.com/vivaConnect"
        />
      </Box>
    </Flex>

        <VStack textAlign={"left"} w={'100%'} alignItems={"flex-start"}>
          <Image src={hushhLogo} alt="hushhLogo" />
          <Text
            p={"0"}
            m={"0"}
            lineHeight={"25.96px"}
            fontWeight={"400"}
            fontSize={{ base: "1.53rem", md: "2.25rem" }}
            className="gradient"
          >
            Technology For <span style={{ fontWeight: "700" }}>Everyone!</span>{" "}
          </Text>
          <Text
            p={"0"}
            m={"0"}
            lineHeight={"14.07px"}
            color={"#484848"}
            fontSize={{ base: "0.5rem", md: "0.8rem" }}
            fontWeight={"500"}
          >
            We have seamless data capturing capabilities, robust security with
            trust measures in place and in-depth insights and transparency
            around the value of your data.
          </Text>
        </VStack>
        <Box
          w={"100%"}
          bg={"transparent"}
          cursor={"pointer"}
          onClick={() => window.open("https://bit.ly/hushh-app-ios", "_blank")}
        >
          <Stack w={'100%'} display={"flex"} flexDirection={"row"}>
            <Box
              w={"100%"}
              h={"100%"}
              flex={0.2}
              display={"flex"}
              alignItems={"center"}
              alignContent={"center"}
              alignSelf={"center"}
              justifyItems={"center"}
              justifySelf={"center"}
            >
              <Image src={HushhAppIcon} alt="HushhAppIcon" objectFit="fill" />
            </Box>
            <VStack
              gap={"0px"}
              display={"flex"}
              alignItems={"flex-start"}
              textAlign={"left"}
              flex={1}
            >
              <Text
                color={"#FFFFFF"}
                fontWeight={"700"}
                fontSize={"1rem"}
                lineHeight={"24.2px"}
                fontFamily={'Figtree'}
              >
                Hushh Wallet App
              </Text>
              <Text
                fontWeight={"300"}
                fontSize={"0.75rem"}
                lineHeight={"16px"}
                color={"#484848"}
                fontFamily={'Roboto'}
              >
                Customer User Flow + Client Advisor User Flow
              </Text>
            </VStack>
          </Stack>
        </Box>
        <Box
          w={"100%"}
          display={"flex"}
          bg={"transparent"}
          cursor={"pointer"}
          onClick={() =>
            window.open("https://hushh-button.vercel.app/", "_blank")
          }
        >
          <Stack w={'100%'} display={"flex"} flexDirection={"row"}>
            <Box
              w={"100%"}
              h={"100%"}
              flex={0.2}
              display={"flex"}
              alignItems={"center"}
              alignContent={"center"}
              alignSelf={"center"}
              justifyItems={"center"}
              justifySelf={"center"}
            >
              <Image src={ButtonIcon} alt="hushhButtonIcon" objectFit="fill" />
            </Box>
            <VStack
              gap={"0px"}
              display={"flex"}
              alignItems={"flex-start"}
              textAlign={"left"}
              flex={1}
            >
              <Text
                color={"#FFFFFF"}
                fontWeight={"700"}
                fontSize={"1rem"}
                lineHeight={"24.2px"}
                fontFamily={'Figtree'}
              >
                Hushh Button
              </Text>
              <Text
                fontWeight={"300"}
                fontSize={"0.75rem"}
                lineHeight={"16px"}
                color={"#484848"}
                fontFamily={'Roboto'}
              >
                Seamless Data Sharing for Personalized Experiences and
                recommendations.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Box
          w={"100%"}
          bg={"transparent"}
          cursor={"pointer"}
          onClick={() =>
            window.open("https://vibesearch-vercel.vercel.app", "_blank")
          }
        >
          <Stack w={'100%'} display={"flex"} flexDirection={"row"}>
            <Box
              w={"100%"}
              h={"100%"}
              flex={0.2}
              display={"flex"}
              alignItems={"center"}
              alignContent={"center"}
              alignSelf={"center"}
              justifyItems={"center"}
              justifySelf={"center"}
            >
              <Image
                src={VibeSearchNew}
                alt="VibeSearchNew"
                objectFit="cover"
              />
            </Box>
            <VStack
              gap={"0px"}
              display={"flex"}
              alignItems={"flex-start"}
              textAlign={"left"}
              flex={1}
            >
              <Text
                color={"#FFFFFF"}
                fontWeight={"700"}
                fontSize={"1rem"}
                lineHeight={"24.2px"}
                fontFamily={'Figtree'}
              >
                Vibe Search
              </Text>
              <Text
                fontWeight={"300"}
                fontSize={"0.75rem"}
                lineHeight={"16px"}
                color={"#484848"}
                fontFamily={'Roboto'}
              >
                Find perfect items to express your individuality in just one
                click.
              </Text>
            </VStack>
          </Stack>
        </Box>
        <Box
          w={"100%"}
          bg={"transparent"}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://chromewebstore.google.com/detail/hushh-browser-companion/glmkckchoggnebfiklpbiajpmjoagjgj?hl=en&authuser=0",
              "_blank"
            )
          }
        >
          <Stack w={'100%'} display={"flex"} flexDirection={"row"}>
            <Box
              w={"100%"}
              h={"100%"}
              flex={0.2}
              display={"flex"}
              alignItems={"center"}
              alignContent={"center"}
              alignSelf={"center"}
              justifyItems={"center"}
              justifySelf={"center"}
            >
              <Image src={ChromeIcon} alt="ChromeIcon" objectFit="fill" />
            </Box>
            <VStack
              gap={"0px"}
              display={"flex"}
              alignItems={"flex-start"}
              textAlign={"left"}
              flex={1}
            >
              <Text
                color={"#FFFFFF"}
                fontWeight={"700"}
                fontSize={"1rem"}
                lineHeight={"24.2px"}
                fontFamily={'Figtree'}
              >
                Chrome Extension
              </Text>
              <Text
                fontWeight={"300"}
                fontSize={"0.75rem"}
                lineHeight={"16px"}
                color={"#484848"}
                fontFamily={'Roboto'}
              >
                Improved product recommendations & effective marketing
                campaigns.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Box
          w={"100%"}
          bg={"transparent"}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://www.hush1one.com/developer-Api/about-developer-api",
              "_blank"
            )
          }
        >
          <Stack w={'100%'} display={"flex"} flexDirection={"row"}>
            <Box
              w={"100%"}
              h={"100%"}
              flex={0.2}
              display={"flex"}
              alignItems={"center"}
              alignContent={"center"}
              alignSelf={"center"}
              justifyItems={"center"}
              justifySelf={"center"}
            >
              <Image src={DeveloperIcon} alt="DeveloperIcon" objectFit="fill" />
            </Box>
            <VStack
              gap={"0px"}
              display={"flex"}
              alignItems={"flex-start"}
              textAlign={"left"}
              flex={1}
            >
              <Text
                color={"#FFFFFF"}
                fontWeight={"700"}
                fontSize={"1rem"}
                lineHeight={"24.2px"}
                fontFamily={'Figtree'}
              >
                Hushh Developer API
              </Text>
              <Text
                fontWeight={"300"}
                fontSize={"0.75rem"}
                lineHeight={"16px"}
                color={"#484848"}
                fontFamily={'Roboto'}
              >
                Find perfect items to express your individuality in just one
                click.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <VStack mt={10} gap={"1.65rem"} w={"100%"}>
          <Button
            as="a"
            href="/hushh-intro.pdf"
            download="HushhIntro"
            borderRadius={"12px"}
            bg={"#3045FF"}
            h={"3rem"}
            cursor={"pointer"}
            color={"#FFFFFF"}
            letterSpacing={"-0.4px"}
            fontSize={"1rem"}
            fontWeight={"400"}
            w="100%"
            _hover={{
              cursor: "pointer",
              color: "white",
              bg: "#1B1B1B",
            }}
            onClick={() =>
              window.open("https://calendly.com/hushh/30min", "_blank")
            }
          >
            <Text fontWeight={'400'} fontSize={'1rem'} lineHeight={'22px'} letterSpacing={'-0.4px'} my={"2rem"} cursor={"pointer"}>
              Schedule a Meet
            </Text>
          </Button>

          <Button
            as="a"
            href="/hushh-intro.pdf"
            download="HushhIntro"
            borderRadius={"12px"}
            bg={"transparent"}
            h={"3rem"}
            cursor={"pointer"}
            border={"1px solid #3045FF"}
            color={"#FFFFFF"}
            letterSpacing={"-0.4px"}
            fontSize={"1rem"}
            fontWeight={"400"}
            w="100%"
            _hover={{
              cursor: "pointer",
              color: "white",
              bg: "#1B1B1B",
            }}
          >
            <Text fontWeight={'400'} fontSize={'1rem'} lineHeight={'22px'} letterSpacing={'-0.4px'} my={"2rem"} cursor={"pointer"}>
              Download Intro
            </Text>
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
