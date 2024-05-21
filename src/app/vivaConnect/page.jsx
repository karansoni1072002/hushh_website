"use client";
import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Heading,
  Icon,
  Flex,
  useToast,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import HushhButtonIcon from "../_components/svg/hushhButton";
import ChromeExtentionLogo from "../_components/svg/ChromeExtensionLogo";
import WalletIcon from "../_components/svg/icons/walletIcon";
import { VibeSearchApp } from "../_components/svg/icons/HeaderIcons/VibeSearchApp";
import { HushhWalletApp } from "../_components/svg/icons/HeaderIcons/HushhWalletApp";
import ApiVibeSearch from "../_components/svg/apiVibeSearch";
import { VibeSearchAPIs } from "../_components/svg/icons/HeaderIcons/VibeSearchAPIs";
import { HushhButton } from "../_components/svg/icons/HeaderIcons/HushhButton";
import CalendlyIcon from "../_components/svg/icons/calendlyIcon.svg";
import Image from "next/image";
import TeamHushhThumb from "../_components/svg/vivaConnectThumb.svg";
import { QRCode } from "react-qrcode-logo";
import { useRouter } from "next/navigation";
import { ChromeExtension } from "../_components/svg/icons/HeaderIcons/ChromeExtension";
import VibeSearchApi from "../_components/svg/vibeSearchApi";
import { VibeSearchMarketplace } from "../_components/svg/icons/HeaderIcons/VibeSearchMarketplace";

// New Icons for Mobile Screens
import ChromeIcon from "../_components/svg/productIcons/chromeIcon.svg";
import DeveloperIcon from "../_components/svg/productIcons/developerIcon.svg";
import VibeSearchNew from "../_components/svg/productIcons/vibeSearchIcon.svg";
import ButtonIcon from "../_components/svg/productIcons/hushhButtonIcon.svg";
import HushhAppIcon from "../_components/svg/productIcons/hushhAppIcon.svg";
import hushhTeam from "../_components/svg/productIcons/hushhTeamLogo.svg";
import hushhLogo from "../_components/svg/productIcons/hushhLogo.svg";

const buttonStyles = {
  baseStyle: {
    borderRadius: "8px",
    border: "1px solid #000000",
    bg: "white",
    color: "#484848",
    _hover: {
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
      transform: "translateY(-2px)",
    },
    _active: {
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
      transform: "translateY(-2px)",
    },
  },
};

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
      alignItems={"center"}
      fontFamily={"Poppins"}
    >
      <VStack fontFamily={"Poppins"} spacing={4} w="100%" maxW="400px">
        <Flex justifyContent="space-between" alignItems="center" w="100%">
          <Image src={hushhLogo} alt="hushhLogo" />
          <a
            href="https://calendly.com/hushh/30min"
            style={{ cursor: "pointer", zIndex: "99999999999" }}
            target="_blank"
          >
            <Image src={CalendlyIcon} alt="calendlyIcon" />
          </a>
        </Flex>
        <Box
          bg={"transparent"}
          borderRadius={"8px"}
          cursor={"pointer"}
          onClick={() => router.push("/qrCodePage")}
        >
          <Stack gap={"0.5rem"} display={"flex"} flexDirection={"row"}>
            <Box
              w={"100%"}
              h={"100%"}
              flex={0.3}
              display={"flex"}
              alignItems={"center"}
              alignContent={"center"}
              alignSelf={"center"}
              justifyItems={"center"}
              justifySelf={"center"}
              cursor={"pointer"}
              onClick={() => router.push("/qrCodePage")}
            >
              <Image src={hushhTeam} alt="hushhTeam" objectFit="fill" />
            </Box>
            <VStack
              gap={"0px"}
              display={"flex"}
              alignItems={"flex-start"}
              textAlign={"left"}
              flex={1}
              p={2}
              cursor={"pointer"}
              onClick={() => router.push("/qrCodePage")}
            >
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={"22.95px"}
                fontSize={"1.15rem"}
              >
                Team Hushh
              </Text>
              <Text
                fontWeight={"400"}
                fontSize={"0.625rem"}
                lineHeight={"12px"}
                color={"#A2A1A1"}
              >
                Hushh helps you Collect, Organize, Manage, Share, Monetize,
                Value your data Take ownership. Build connections. Unlock your
                data's potential.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Box
          bg={"white"}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          cursor={"pointer"}
          onClick={() =>
            window.open("https://hushh-button.vercel.app/", "_blank")
          }
        >
          <Stack
            gap={"0.5rem"}
            display={"flex"}
            flexDirection={"row"}
            padding={"2"}
            my={2}
          >
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
              <Text color={"#484848"} fontWeight={"400"} fontSize={"0.75rem"}>
                Hushh Button
              </Text>
              <Text
                fontWeight={"400"}
                fontSize={"0.5rem"}
                lineHeight={"10px"}
                color={"#B1B1B1"}
              >
                Imagine a world where shopping feels effortless and tailored
                just for you. Introducing the Hushh Button, a powerful plugin
                that bridges the gap between your Hushh Wallet and your favorite
                brands.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Box
          bg={"white"}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          cursor={"pointer"}
          onClick={() =>
            window.open(
              "https://chromewebstore.google.com/detail/hushh-browser-companion/glmkckchoggnebfiklpbiajpmjoagjgj?hl=en&authuser=0",
              "_blank"
            )
          }
        >
          <Stack
            gap={"0.5rem"}
            display={"flex"}
            flexDirection={"row"}
            padding={"2"}
            my={2}
          >
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
              <Text color={"#484848"} fontWeight={"400"} fontSize={"0.75rem"}>
                Hushh Chrome Extension
              </Text>
              <Text
                fontWeight={"400"}
                fontSize={"0.5rem"}
                lineHeight={"10px"}
                color={"#B1B1B1"}
              >
                Tired of being tracked online? Every click, scroll, and search
                query leaves a trail of your identity, exploited by third-party
                organizations for targeted advertising. With Hushh, the power is
                back in your hands.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Box
          bg={"white"}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          cursor={"pointer"}
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          onClick={() => window.open("https://bit.ly/hushh-app-ios", "_blank")}
        >
          <Stack
            gap={"0.5rem"}
            display={"flex"}
            flexDirection={"row"}
            padding={"2"}
            my={2}
          >
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
              <Text color={"#484848"} fontWeight={"400"} fontSize={"0.75rem"}>
                Hushh App
              </Text>
              <Text
                fontWeight={"400"}
                fontSize={"0.5rem"}
                lineHeight={"10px"}
                color={"#B1B1B1"}
              >
                Imagine a world where your data works for you, not against you.
                A world where your online and offline interactions paint a
                detailed picture of your unique self, accessible only by you and
                those you choose to trust.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Box
          cursor={"pointer"}
          bg={"white"}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          onClick={() =>
            window.open("https://vibesearch-vercel.vercel.app", "_blank")
          }
        >
          <Stack
            gap={"0.5rem"}
            display={"flex"}
            flexDirection={"row"}
            padding={"2"}
            my={2}
          >
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
              <Text color={"#484848"} fontWeight={"400"} fontSize={"0.75rem"}>
                Hushh Vibe Search
              </Text>
              <Text
                fontWeight={"400"}
                fontSize={"0.5rem"}
                lineHeight={"10px"}
                color={"#B1B1B1"}
              >
                Discover the perfect product that matches your "vibe" with ease!
                VIBE Search App is your personal shopping assistant that helps
                you find what you're looking for, even if you don't know the
                exact name or where to look for it!
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Box
          cursor={"pointer"}
          bg={"white"}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          onClick={() =>
            window.open(
              "https://www.hush1one.com/developer-Api/about-developer-api",
              "_blank"
            )
          }
        >
          <Stack
            gap={"0.5rem"}
            display={"flex"}
            flexDirection={"row"}
            padding={"2"}
            my={2}
          >
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
              <Text color={"#484848"} fontWeight={"400"} fontSize={"0.75rem"}>
                Hushh Developer API
              </Text>
              <Text
                fontWeight={"400"}
                fontSize={"0.5rem"}
                lineHeight={"10px"}
                color={"#B1B1B1"}
              >
                Revolutionize your data game with Hushh Developer APIs! 
                Tailored for businesses and organizations of all stripes, our
                APIs empower YOUR developers to seamlessly integrate customers’
                data into CRM systems and applications.
              </Text>
            </VStack>
          </Stack>
        </Box>

        <Box px={"15%"} h={"100%"} width={"100%"}>
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
            mt={10}
            _hover={{
              cursor: "pointer",
              color: "white",
              bg: "#1B1B1B",
            }}
          >
            <Text my={"2rem"} cursor={"pointer"}>
              Download Intro
            </Text>
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
