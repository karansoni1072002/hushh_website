"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import extendedTheme from "../../theme";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import LouiWalletBg from "../../_components/svg/louiVuittonWallet.svg";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Gucci from "../../_components/svg/images/Gucci";
import Lvtetia from "../../_components/svg/images/LVTETIA";
import Nordstrom from "../../_components/svg/images/Nordstrom";
import Accor from "../../_components/svg/images/accor";
import Aws from "../../_components/svg/images/aws";
import Brand1 from "../../_components/svg/images/brand1";
import Brand2 from "../../_components/svg/images/brand2";
import Chalhoub from "../../_components/svg/images/chalhoub";
import Citadium from "../../_components/svg/images/citadium";
import Costco from "../../_components/svg/images/costco";
import Fourseasons from "../../_components/svg/images/four-seasons";
import Google from "../../_components/svg/images/google";
import Laredoute from "../../_components/svg/images/la-redoute";
import Microsoft from "../../_components/svg/images/microsoft";
import BoxBgWallet from "../../_components/svg/boxBgWallet.svg";
import HushhLogoS from "../../_components/svg/hushhLogoS.svg";
import HushhWalletBg from "../../_components/svg/hushhwalletBG.svg";
import HushhEmojiColoured from "../../_components/svg/hushhEmojiColoured.svg";
import { useRouter } from "next/navigation";

const BrandContainer = styled.div`
  display: flex;
  gap: 8rem; /* Adjust the gap as needed */
  padding: 20px; /* Adjust the padding as needed */
  margin-top: 1rem;



  @media screen and (max-width: 768px) {
    gap: 4rem;
    padding: 5px;
    margin-top: 1rem;
  }
`;

const hushhWalletApp = () => {
  const scrollTo = () => {
    scroll.scrollTo(850);
  };

  const scrollInMobile = () => {
    scroll.scrollTo(450);
  };

  const learnMoreScroll = () => {
    scroll.scrollTo(1500);
  };

  const router = useRouter();


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
          gap={{ base: "1rem", md: "2rem" }}
          px={{ md: "15rem", base: "1.5rem" }}
          position={"relative"}
        >
          <Heading
            fontWeight={"400"}
            lineHeight={{ md: "87.46px", base: "43px" }}
            textAlign={"center"}
            fontSize={{ md: "5.4rem", base: "2rem" }}
            pt={{ md: "8rem", base: "3rem" }}
            color={"#FFFFFF"}
            mb={{ base: "0.5rem" }}
          >
            World's first AI Powered Data Wallet
          </Heading>
          <Text
            px={{ md: "17.8rem" }}
            mb={{ base: "1rem", md: "1rem" }}
            textAlign={"center"}
            lineHeight={"24.6px"}
            fontWeight={"400"}
            fontSize={{ md: "1.25erm", base: "1rem" }}
            color={"white"}
          >
            Higher perk adoption, instant expense management, simple benefits
            access and much more
          </Text>
          <Button
            borderRadius={"3.3rem"}
            w={"fit-content"}
            p={"1rem 2rem"}
            _hover={{
              color: "white",
              bg: "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
            }}
            onClick={scrollTo}
          >
            Explore
          </Button>
          <Box zIndex={'3'} position={"absolute"} mt={{ md: "5rem", base: "2rem" }}>
            <Image src={BoxBgWallet} alt="BoxBgWallet"/>
          </Box>
          <Box zIndex={'5'} position={"absolute"} mt={{ md: "5rem", base: "2rem" }}>
             <Image src={LouiWalletBg} alt="LouiWalletBg" />
          </Box>
        </Box>
      </Box>
      <VStack mt={{ md: "34rem", base: "3rem" }}>
        <Heading
          className="color-gradient"
          fontWeight={"600"}
          fontSize={{ md: "1rem", base: "0.75rem" }}
          lineHeight={"1rem"}
          letterSpacing={"0.255rem"}
          mb={{md:'2rem',base:'1rem'}}
        >
          OUR PARTNERS
        </Heading>
        <Divider border={'2px solid'} className="walletDivider"  h={'1px'}  w={"90%"}/>
        <Marquee
          pauseOnHover
          style={{ position: "relative", overflow: "hidden" }}
        >
          <BrandContainer>
            <Accor key={1} />
            <Aws key={2}/>
            <Brand1 key={3}/>
            <Brand2 key={4} />
            <Chalhoub key={5} />
            <Citadium key={6} />
            <Costco key={7}  />
            <Fourseasons key={8}/>
            <Google key={9} />
            <Gucci key={10} />
            <Laredoute key={11} />
            <Lvtetia key={12} />
            <Microsoft key={13} />
            <Nordstrom key={14} />
          </BrandContainer>
        </Marquee>
        <Divider border={'2px solid'} className="walletDivider" w={"90%"} h={"1px"} />
      </VStack>
      <Box mt={{ md:'6rem', base:'3rem'}} position={'relative'}>
        <Image src={BoxBgWallet} alt="BoxBgWallet" style={{position:'absolute'}}/>
       <HStack justifyContent={'center'} alignContent={'center'} fontWeight={'400'} lineHeight={{ md:'91.78px', base:'50px'}} fontSize={{md:'5.4rem',base:'2.7rem'}}>
           <Heading className="gradient">YOUR PERSONAL DATA,</Heading>
           <Image src={HushhLogoS} alt="HushhLogoS"/>
           <Heading className="gradient">YOUR OWN BUSINESS</Heading>
        </HStack> 
        <Text px={{md:'10rem', base:'1.25rem'}} color={'#ABABAB'} textAlign={'center'} fontWeight={'500'} fontSize={'1rem'} lineHeight={{ md:'2rem', base:'1rem'}}>Imagine a world where your data works for you, not against you. A world where your online and offline interactions paint a detailed picture of your unique self, accessible only by you and those you choose to trust. This is the reality unlocked by Hushh Wallet, the app that puts you in control of your digital identity and empowers you to reap the rewards it holds.</Text>
      </Box>

    <HStack bg={'#151515'} mt={{md:'12rem',base:'2.5rem'}} gap={{md:'1rem', base:'0.75rem'}}  px={{md:'10rem', base:'1.25rem'}} >
    <VStack my={{ md:'5rem', base:'2.5rem'}} flex={3}   gap={'2rem'} textAlign={'left'} alignItems={'flex-start'}>
        <Heading
         className="color-gradient"
         fontWeight={"600"}
         fontSize={{ md: "1rem", base: "0.75rem" }}
         lineHeight={"23.8px"}
         letterSpacing={"0.255rem"}
         >
            GLOBAL SCALE
        </Heading>
        <Text color={'white'} fontWeight={'700'} fontSize={{md:'2.5rem', base:'1.25rem'}} lineHeight={{ md:'56px',base:'30px'}}>Scattered Data, Unified Identity</Text>
        <Text color={'#ABABAB'} fontSize={{md:'1.125rem', base:'0.8rem'}}>Every brand you interact with, every click you make, every purchase you complete leaves a digital footprint. Your personality, preferences, buying power, and interests are scattered across phones, platforms, and brands, often inaccessible and invisible to you. Hushh Wallet bridges this gap. It aggregates your data from various sources, including</Text>
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
              bg={"transparent"}
              border={'1px solid #FFFFFF'}
              borderRadius={"0.75rem"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ md: "1.5rem",base:'1rem' }}
                lineHeight={{ md:"33.6px"}}
                color={'white'}
                marginBottom={{base:'0.75rem', md:'1rem'}}
              >
                Phone Data
              </Heading>
              <Text
                fontWeight={"400"}
                fontSize={{ md: "0.875rem", base: "0.5rem" }}
                lineHeight={{ md:"25.21px"}}
                color={'white'}
              >
                Text messages, location, images, emails, call records, documents, videos, notes, etc.
              </Text>
            </Box>
            <Box
              gap={"2rem"}
              color={"#0D0D25"}
              p={{ md: "2rem", base: "1rem" }}
              bg={"transparent"}
              border={'1px solid #FFFFFF'}
              borderRadius={"0.75rem"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ md: "1.5rem",base:'1rem' }}
                lineHeight={{ md:"33.6px"}}
                color={'white'}
                marginBottom={{base:'0.75rem', md:'1rem'}}
              >
                Data Companies
              </Heading>
              <Text
                fontWeight={"400"}
                fontSize={{ md: "0.875rem", base: "0.5rem" }}
                lineHeight={{ md:"25.21px"}}
                color={'white'}
              >
                Google, Apple, Amazon, Facebook, Instagram, YouTube, LinkedIn, etc.
              </Text>
            </Box>
            <Box
              gap={"2rem"}
              color={"#0D0D25"}
              p={{ md: "2rem", base: "1rem" }}
              bg={"transparent"}
              border={'1px solid #FFFFFF'}
              borderRadius={"0.75rem"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ md: "1.5rem",base:'1rem' }}
                lineHeight={{ md:"33.6px"}}
                color={'white'}
                marginBottom={{base:'0.75rem', md:'1rem'}}
              >
                Shopping Brands
              </Heading>
              <Text
                fontWeight={"400"}
                fontSize={{ md: "0.875rem", base: "0.5rem" }}
                lineHeight={{ md:"25.21px"}}
                color={'white'}
                // marginBottom={{base:'1.25rem', md:'3rem'}}
              >
                Online e-commerce sites, apps, and offline receipts.
              </Text>
            </Box>
          </Grid>
        <Text color={'#ABABAB'} fontWeight={'400'} lineHeight={{md:'32.4px', base:'24px'}} fontSize={{md:'1.125rem', base:'0.8rem'}}>With Hushh, you become the curator of your own identity. You choose what information to include, building a comprehensive profile that reflects your true self.</Text>
      </VStack>
      <Box flex={1}>
        <Image src={HushhEmojiColoured} alt="HushhEmojiColoured" />
      </Box>
    </HStack>

    <Stack py={{base:'2rem', md:'5rem'}} display={'flex'} gap={{ md: '1rem', base: '0.5rem' }} textAlign={'center'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
          <Heading fontWeight={'400'} color={'#FFFFFF'} lineHeight={{ md: '25.83px', base: '16px' }} fontSize={{ md: '1.25rem', base: '1rem' }}>Our Uniqueness</Heading>
          <Text alignItems={'center'} justifyContent={'center'} lineHeight={{ md: "88.14px", base: '44px' }} color={'white'} fontWeight={'700'} fontSize={{ md: '5.6rem', base: '2.5rem' }}>More Than Just </Text>
          <Text alignItems={'center'} justifyContent={'center'} lineHeight={{ md: "88.14px", base: '44px' }} color={'white'} fontWeight={'700'} fontSize={{ md: '5.6rem', base: '2.5rem' }}> An App</Text>
          <Text display={'flex'} color={'#ABABAB'} lineHeight={'25px'} fontSize={{ md: '0.8rem', base: '0.8rem' }}>Hushh Wallet is more than just an app it's a paradigm shift. It empowers you too</Text>
          <Box>
            <Image src={HushhWalletBg} alt="HushhWalletBg" />
            <Button border={"1px solid #606060"}
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
              onClick={() =>
                router.push("https://testflight.apple.com/join/CDYPEfJ5")
              }
            >
              Download App
            </Button>
          </Box>
        </Stack>
      
    </>
  );
};

export default hushhWalletApp;
