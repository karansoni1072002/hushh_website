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
import TeamHushhThumb from "../_components/svg/teamHushhThumb.svg";
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
  const [isBookmarked, setIsBookmarked] = useState(false);

  const saveAsBookmark = () => {
    window.bookmark(location.href);

    if (document.execCommand) {
      const pageTitle = document.title;
      const pageURL = window.location.href;
      document.execCommand("addBookmark", false, pageURL, pageTitle);
    } else {
      alert(
        "Your browser does not support bookmarking directly. Please use your browser's bookmarking feature to save this page."
      );
    }
  };

  return (
    <Box
      bg="black"
      minH="100vh"
      p={4}
      color="white"
      position={"relative"}
      mt={"1rem"}
      zIndex={"999999999"}
      fontFamily={'Poppins'}
    >
      <VStack
        spacing={4}
        px={"2rem"}
        align="stretch"
        position={"relative"}
        zIndex={"99999"}
      >
        <Flex justifyContent="space-between" mb={4} w="100%">
          <Text
            color={"#FFFFFF"}
            fontWeight={"400"}
            fontSize={"1.5rem"}
            letterSpacing={"-0.27px"}
            lineHeight={"30px"}
          >
            Hushh
          </Text>
          <Image
            style={{cursor:'pointer'}}
            target="_blank"
            onClick={()=> router.push('https://calendly.com/hushh/30min')}
            src={CalendlyIcon}
            alt="calendlyIcon"
            width="30px"
            height="30px"
          />
        </Flex>
        <Box
          cursor={"pointer"}
          onClick={() => router.push("/qrCodePage")}
          position={"relative"}
          textAlign="center"
          alignItems={"center"}
          alignSelf={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          {/* <Image src={CalendlyIcon} alt='calendlyIcon' width='30px' zIndex={'99999'} height='30px'/> */}
          <Image
            width="120px"
            height="120px"
            src={TeamHushhThumb}
            alt="Team Hushh"
            style={{
              width: "120px",
              height: "120px",
              align: "center",
              alignItems: "center",
              justifyItems: "center",
              opacity: "0.5",
              alignSelf: "center",
              filter: "grayscale(100%)",
              zIndex: "-2",
            }}
          />
          <Box mt={"-1rem"} zIndex={"9"} mb={"1rem"}>
            <QRCode
              size="40"
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
            fontSize={"1.15rem"}
            lineHeight={"22.95px"}
          >
            Team Hushh 🤫
          </Text>
          <Text fontSize="sm">Hushh: unlock the power of your data</Text>
        </Box>

        <Button
          // leftIcon={}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          bg={"white"}
          color={"#484848"}
          p={'0.1rem'}
          onClick={() =>
            router.push(
              "https://hushh-button.vercel.app/"
            )
          }
        >
          <Icon as={HushhButton} />
         <Text ml={'20%'}>Hushh Button</Text> 
        </Button>

        <Button
          // leftIcon={}
          p={'0.1rem'}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          bg={"white"}
          color={"#484848"}
          onClick={() =>
            router.push(
              "https://chromewebstore.google.com/detail/hushh-browser-companion/glmkckchoggnebfiklpbiajpmjoagjgj?hl=en&authuser=0"
            )
          }
        >
          <Icon as={ChromeExtension} />
          <Text ml={'20%'}>Chrome Extension</Text>
        </Button>

        <Button
          // leftIcon={}
          p={'0.1rem'}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          bg={"white"}
          color={"#484848"}
          onClick={() =>
            router.push(
              "https://bit.ly/hushh-app-ios"
            )
          }
        >
          <Icon as={HushhWalletApp} />
          <Text ml={'20%'}>Hushh App</Text> 
        </Button>

        <Button
          onClick={() =>
            router.push(
              "https://vibesearch-vercel.vercel.app"
            )
          }
          p={'0.1rem'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          borderRadius={"8px"}
          border={"1px solid #000000"}
          bg={"white"}
          color={"#484848"}
        >
          <Icon as={VibeSearchApp} boxSize='xxs' />
         <Text ml={'20%'}>Vibe Search</Text> 
        </Button>
        <Button
          p={'0.1rem'}
          borderRadius={"8px"}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          border={"1px solid #000000"}
          bg={"white"}
          color={"#484848"}
          onClick={() =>
            router.push(
              "https://www.hush1one.com/developer-Api/about-developer-api"
            )
          }
        >
          <Icon as={VibeSearchAPIs} boxSize='xxs' />
          <Text ml={'20%'}>Developer API</Text>
        </Button>

        {/* <Button onClick={() => saveAsBookmark} leftIcon={<Icon as={FaSave} />} fontFamily={'Gilroy-SemiBold'} borderRadius={'12px'} bg={'#3045FF'} color={'#FFFFFF'} letterSpacing={'-0.4px'} fontSize={'1rem'} fontWeight={'400'} w="full" mt={10}>
          Save Page
        </Button> */}
      </VStack>
    </Box>
  );
}
