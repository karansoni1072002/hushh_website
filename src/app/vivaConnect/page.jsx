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
  useBreakpointValue
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaChrome,
  FaSave,
  FaMobileAlt,
  FaSearch,
  FaCloud,
} from "react-icons/fa";
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
  const iconSize = useBreakpointValue({ base: "xs", md: "sm" });
  const buttonPadding = useBreakpointValue({ base: "0.2rem 0.8rem", md: "0.4rem 1.2rem" });
  const textSize = useBreakpointValue({ base: "0.8rem", md: "1rem" });

  return (
    <Box
      bg="black"
      p={4}
      color="white"
      // position={"relative"}
      mt={"2rem"}
      // zIndex={"9999999999999999"}
      fontFamily={"Poppins"}
    >
      <VStack
        spacing={4}
        px={"2rem"}
        align="stretch"

      >
        <Flex justifyContent="space-between" alignItems="center" mb={4} w="100%">
          <Text
            color={"#FFFFFF"}
            fontWeight={"400"}
            fontSize={{ base:"1.5rem",md:'3rem'}}
            letterSpacing={"-0.27px"}
            lineHeight={"30px"}
          >
            Hushh
          </Text>
          <Image
            style={{ cursor: "pointer" }}
            target="_blank"
            onClick={() =>
              window.open(
                "https://calendly.com/hushh/30min",
                '_blank'
              )
            }
            src={CalendlyIcon}
            alt="calendlyIcon"
            // width="30px"
            // height="30px"
          />
        </Flex>
        <Flex
          direction="column" 
          alignItems="center"
          cursor={"pointer"}
          onClick={() => router.push("/qrCodePage")}
        >
          <Image
            src={TeamHushhThumb}
            alt="Team Hushh"
            boxSize="120px"
            opacity={0.5}
            filter="grayscale(100%)"
          />
          <Box mt={"-1rem"} zIndex={"9"} mb={"1rem"}>
            <QRCode
              size={"40"}
              fgColor="#FFFFFF"
              logoOpacity={"0.5"}
              bgColor="transparent"
              quietZone={"0"}
              logoPaddingStyle="square"
              logoPadding="0"
              value="https://www.hush1one.com/vivaConnect"
            />
          </Box>
          <Text
            fontWeight={"400"}
            fontSize={{ base:"1.15rem",md:'1.75rem',lg:"2rem"}}
            lineHeight={"22.95px"}
            color={"#FFFFFF"}
          >
            Team Hushh 🤫
          </Text>
          <Text fontSize={{base:"12px",md:"18px",lg:"24px"}} color={"#A2A1A1"}>
            Hushh: unlock the power of your data
          </Text>
        </Flex>

        <Button
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          display={"flex"}
          w={'full'}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          bg={"white"}
          color={"#484848"}
          p={"0.1rem"}
          onClick={() =>
            window.open(
              "https://hushh-button.vercel.app/",
              '_blank'
            )
          }
        >
          <Icon as={HushhButton} />
          <Text
            ml={"20%"}
            color={"#484848"}
            fontWeight={"400"}
            fontSize={{base:"1rem",md:"1.5rem"}}
            lineHeight={{base:"14.56px",md:"30px"}}
          >
            Hushh Button
          </Text>
        </Button>

        <Button
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          p={"0.1rem"}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          bg={"white"}
          color={"#484848"}
          onClick={() =>
            window.open(
              "https://chromewebstore.google.com/detail/hushh-browser-companion/glmkckchoggnebfiklpbiajpmjoagjgj?hl=en&authuser=0",
              '_blank'
            )
          }
        >
          <Icon as={ChromeExtension} />
          <Text
            ml={"20%"}
            color={"#484848"}
            fontWeight={"400"}
            fontSize={{base:"1rem",md:"1.5rem"}}
            lineHeight={{base:"14.56px",md:"30px"}}
          >
            Chrome Extension
          </Text>
        </Button>

        <Button
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          p={"0.1rem"}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          bg={"white"}
          color={"#484848"}
          onClick={() =>
            window.open(
              "https://bit.ly/hushh-app-ios",
              '_blank'
            )
          }
        >
          <Icon as={HushhWalletApp} />
          <Text
            ml={"20%"}
            color={"#484848"}
            fontWeight={"400"}
            fontSize={{base:"1rem",md:"1.5rem"}}
            lineHeight={{base:"14.56px",md:"30px"}}
          >
            Hushh App
          </Text>
        </Button>

        <Button
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          onClick={() =>
            window.open(
              "https://vibesearch-vercel.vercel.app",
              '_blank'
            )
          }
          p={"0.1rem"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          bg={"white"}
          color={"#484848"}
        >
          <Icon as={VibeSearchApp} boxSize="xxs" />
          <Text
            ml={"20%"}
            color={"#484848"}
            fontWeight={"400"}
            fontSize={{base:"1rem",md:"1.5rem"}}
            lineHeight={{base:"14.56px",md:"30px"}}
          >
            Vibe Search
          </Text>
        </Button>
        <Button
          boxShadow={"4px 4px 0px 0px #BFBFBF"}
          p={"0.1rem"}
          borderRadius={"8px"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          border={"1px solid #000000"}
          bg={"white"}
          color={"#484848"}
          onClick={() =>
            window.open(
              "https://www.hush1one.com/developer-Api/about-developer-api",
              '_blank'
            )
          }
        >
          <Icon as={VibeSearchAPIs} boxSize="xxs" />
          <Text
            ml={"20%"}
            color={"#484848"}
            fontWeight={"400"}
            fontSize={{base:"1rem",md:"1.5rem"}}
            lineHeight={{base:"14.56px",md:"30px"}}
          >
            Developer API
          </Text>
        </Button>

        <a
          href="/HushhInto.pdf"
          download="HushhInto"
        >
          <Button 
          borderRadius={"12px"}
          bg={"#3045FF"}
          color={"#FFFFFF"}
          letterSpacing={"-0.4px"}
          fontSize={"1rem"}
          fontWeight={"400"}
          w="full"
          mt={10}
          _hover={{
            color:'white',
            bg:'#1B1B1B'
          }}
          >
            Download Intro
          </Button>
        </a>
      </VStack>
    </Box>
  );
}
