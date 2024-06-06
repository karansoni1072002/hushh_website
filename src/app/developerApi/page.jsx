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
} from "@chakra-ui/react";
import extendedTheme from "../theme";
import Image from "next/image";
import DirectionLine from "../_components/svg/icons/directionLine.svg";
import BarIcon from "../_components/svg/icons/barIcon.svg";
import FrameCard2 from "../_components/svg/card/buttonvoucherCard.svg";
import FramCard1 from "../_components/svg/card/frameCardHushhButton.svg";
import { useRouter } from "next/navigation";
import { animateScroll as scroll } from "react-scroll";
import VibeSearchFaq from "../_components/features/faq/vibeSearchFaq";
import FindYourStyleBox from "../_components/svg/findYourStyleBox.svg";
import VibeSearchIntegrationBox from "../_components/svg/vibeIntegrationBox.svg";
import VibeSearchBg from "../_components/svg/vibeBg.svg";
import ContactForm from "../_components/features/contactForm";
import Head from "next/head";
import BgAnimation from "../../../public/Gif/bgAnimation.gif";
import VibeSearchGif from "../../../public/Gif/vibeSearchGIf.gif";
import CodeIcon from "../_components/svg/icons/codeIcon.svg";
import BusinessIcon from "../_components/svg/icons/retailBusiness.svg";

const devloperApi = () => {
    const gradient = "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)";
  const router = useRouter();

  const scrollTo = () => {
    scroll.scrollTo(850);
  };

  const scrollInMobile = () => {
    scroll.scrollTo(450);
  };
  return (
<>
    <Box
        maxW={"100"}
        minW={"100%"}
        display={"flex"}
        flexDirection={"column"}
        position={"relative"}
    >
        <Box display={{ base: "none", md: "block" }}>
          <Image
            src={VibeSearchGif}
            alt="VibeSearchGif"
            style={{
              position: "absolute",
              top: "-15px",
              left: "30%",
              transform: "rotate(-225deg)",
              opacity: "0.5",
              zIndex: "-10",
              height: "40rem",
              filter: "grayscale(100%)",
            }}
            unoptimized
          />
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <Image
            src={VibeSearchGif}
            alt="VibeSearchGif"
            style={{
              position: "absolute",
              top: "-15px",
              transform: "rotate(-225deg)",
              opacity: "0.5",
              zIndex: "-10",
              width: "100%",
              height: "13rem",
              filter: "grayscale(100%)",
            }}
            unoptimized
          />
        </Box>
        <Box
          alignItems={"center"}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          mt={{ base: "3rem" }}
        >
          <Heading
            fontWeight={"700"}
            lineHeight={{ md: "255.6px", base: "60px" }}
            textAlign={"center"}
            fontSize={{ md: "8.8rem", base: "2.5rem" }}
            pt={{ md: "10rem", base: "3rem" }}
            className="gradient"
            px={{ base: "0.5rem" }}
            mb={{ base: "0.5rem" }}
            as={"h1"}
          >
            Developer APIs
          </Heading>
          <Text
            px={{ md: "17.8rem" }}
            mb={{ base: "1rem", md: "4rem" }}
            textAlign={"center"}
            color={"#656565"}
          >
            Enabling a secure, trusted, and incentivized way of relaying valuable personal information from customers You can use the API-DOC in test mode, which doesn't affect your live data or interact with the banking networks. The API key you use to authenticate the request determines whether the request is live mode or test mode.
          </Text>
          <Button
            border={"1px solid #606060"}
            borderRadius={"2px"}
            w={{ md: "18rem", base: "11rem" }}
            color={extendedTheme.colors._white}
            lineHeight={{ md: "28px", base: "14px" }}
            background={"transparent"}
            letterSpacing={{ md: "0.29rem", base: "0.145rem" }}
            _hover={{
              background:
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
              border: "none",
            }}
            onClick={() => window.open("https://vibesearch-vercel.vercel.app/", "_blank")}                
          >
            API DOCUMENTATION
          </Button>
        </Box>

        <HStack
          my={{ md: "8rem", base: "3rem" }}
          px={{ md: "7rem", base: "1.25rem" }}
          display={{ base: "flex" }}
          gap={{md:'4rem', base:'2rem'}}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"1rem"} flex={1}>
            <Text
              className="default-gradient"
              letterSpacing={"0.255rem"}
              lineHeight={"1rem"}
              fontWeight={"600"}
              fontSize={{ md: "1rem", base: "0.75rem" }}
            >
              HUSHH
            </Text>
            <Text
              className="gradient"
              fontSize={{ md: "3.75rem", base: "1.75rem" }}
              fontWeight={"400"}
              lineHeight={{ md: "63.3px", base: "41.2px" }}
            >
              Hushh {" "} <br></br>Developer APIs
            </Text>
       
            <Box
              fontSize={{ md: "1rem", base: "0.5rem" }}
              display={"flex"}
              flexDirection={"column"}
              fontWeight={"500"}
              lineHeight={"36px"}
              color={"#ABACB0"}
              gap={{ md: "1rem", base: "0rem" }}
            >
              <Text>Enabling a secure, trusted, and incentivized way of relaying valuable personal information from customers You can use the API-DOC in test mode, which doesn't affect your live data or interact with the banking networks. The API key you use to authenticate the request determines whether the request is live mode or test mode. </Text>
              <Button
            border={"1px solid #606060"}
            borderRadius={"2px"}
            w={{ md: "18rem", base: "11rem" }}
            color={extendedTheme.colors._white}
            lineHeight={{ md: "28px", base: "14px" }}
            background={"transparent"}
            letterSpacing={{ md: "0.29rem", base: "0.145rem" }}
            _hover={{
              background:
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
              border: "none",
            }}
            onClick={() => window.open("https://vibesearch-vercel.vercel.app/", "_blank")}                
          >
            API DOCUMENTATION
          </Button>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} flex={1} gap={"1rem"}>
            <Image src={FindYourStyleBox} alt="FindYourStyleBox" />
            <Text
              fontSize={{ md: "1rem", base: "0.75rem" }}
              color={"#ABABAB"}
              fontWeight={'500'}
              lineHeight={{ md: "36px", base: "18px" }}
            >
              Revolutionize your data game with Hushh Developer APIs! Tailored for businesses and organizations of all stripes, our APIs empower YOUR developers to seamlessly integrate customers’ data into CRM systems and applications. Picture this: a new era of data driven excellence, where developers get consent driven, first-hand customer data and let personalized services take the center stage for their brand.{" "}
            </Text>
           <Text 
              fontSize={{ md: "1rem", base: "0.75rem" }}
              color={"#ABABAB"}
              fontWeight={'500'}
              lineHeight={{ md: "36px", base: "18px" }}>
            Because in the world of luxury retail, the future is personalized, and your customers deserve nothing less!</Text>
          </Box>
        </HStack>
        
        <VStack display={'flex'} px={{ md: "7rem", base: "1.25rem" }}>
            <Text  align={'center'} textAlign={'center'} color={'#FFFFFF'} letterSpacing={'0.04rem'} fontWeight={'500'} fontSize={{md:'20px',base:'10px'}} lineHeight={{md:'32px',base:'20px'}} >HUSHH</Text>
            <Text  align={'center'} textAlign={'center'} mb={{md:'2rem',base:'1rem'}} className="gradient" fontWeight={'700'} fontSize={{md:'4.625rem',base:'2.3rem'}} lineHeight={{md:'90.28px',base:'52.14px'}}>Our current main customers include</Text>
            <HStack minH={'max-content'} display={'flex'} gap={{md:'4rem',base:'1rem'}}>
                
                <Box  minH={'33rem'} h={'100%'} flex={1} borderRadius={'10px'} p={{md:'2rem',base:'1rem'}}  display={'flex'} flexDirection={'column'} bg={'#1A1A1A'}>
                    <HStack>
                      <Image src={BusinessIcon} alt="businessIcon" title="business"/>
                      <Text color={'#FFFFFF'} fontWeight={'600'} fontSize={{md:'1.5rem',base:'0.75rem'}} lineHeight={{md:'36px',base:'20px'}}>Retail businesses</Text>
                    </HStack>
                    <VStack  minHeight={0} mt={{md:'1.5rem',base:'0.75rem'}} display={'flex'} textAlign={'left'} alignItems={'flex-start'} gap={{md:'2rem',base:'1rem'}} color={'#FFFFFF'} fontWeight={'400'} fontSize={{md:'1rem',base:'0.5rem'}} lineHeight={{md:'24px',base:'16px'}}>
                       <Text>Step into the future of retail excellence with Hush APIs- a game changer for high-end luxury giants as well as e-commerce businesses.</Text>
                       <Text><b>Precision Marketing:</b> Imagine a world where marketing strategies are not just targeted but finely tuned to match individual customer preferences</Text>
                       <Text><b>Another Layer of luxury:</b> Add another layer of luxury to your customers’ experience by serving them with exactly what they need by understanding individual preferences.</Text>
                       <Text>Because it’s not just about selling, it’s about crafting an unforgettable journey for customers.</Text>
                    </VStack>
                </Box>

                <Box minH={'33rem'}  h={'100%'} flex={1} borderRadius={'10px'} p={{md:'2rem',base:'1rem'}}  display={'flex'} flexDirection={'column'} bg={'#1A1A1A'}>
                    <HStack>
                      <Image src={CodeIcon} alt="CodeIcon" title="CodeIcon"/>
                      <Text color={'#FFFFFF'} fontWeight={'600'} fontSize={{md:'1.5rem',base:'0.75rem'}} lineHeight={{md:'36px',base:'20px'}}>Application Developers</Text>
                    </HStack>
                    <VStack  minHeight={0} mt={{md:'1.5rem',base:'0.75rem'}} display={'flex'} textAlign={'left'} alignItems={'flex-start'} gap={{md:'2rem',base:'1rem'}} color={'#FFFFFF'} fontWeight={'400'} fontSize={{md:'1rem',base:'0.5rem'}} lineHeight={{md:'24px',base:'16px'}}>
                       <Text>Enabling a world, where your applications not only meet but exceed user expectations, all thanks to the power of Hushh.</Text>
                       <Text>It’s your key to unlocking first-hand consent driven customer data without worrying about privacy laws and regulations.</Text>
                       <Text>Whether you’re crafting the next groundbreaking app or enhancing your CRM system, we’ve got it covered.</Text>
                       <Text>With Hushh, developers become architects of bespoke interactions, aligning applications with user preferences and consent.</Text>
                       <Text>Set a new standard for excellence and help your brand build a meaningful connection with the customers.</Text>
                    </VStack>
                </Box>
            </HStack>
        </VStack>
       
        <HStack
          my={{ md: "8rem", base: "3rem" }}
          px={{ md: "7rem", base: "1.25rem" }}
          gap={{ md: "2rem", base: "0.25rem" }}
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            flex={1}
            gap={{ md: "2rem", base: "1rem" }}
          >
            <Image
              src={VibeSearchIntegrationBox}
              alt="VibeSearchIntegrationBox"
            />
            {/* <Text fontSize={{ md:'1rem', base:'0.75rem'}} color={'#ABABAB'} lineHeight={{md:'36px', base:'18px'}}>See exactly what data is being collected about you, including search queries, brand interactions, interests, preferences, likes, and clicks. Gain insights into your online behavior and understand what shapes your digital footprint</Text> */}
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={"2rem"} flex={1}>
            <Text
              className="default-gradient"
              letterSpacing={"0.255rem"}
              lineHeight={"1rem"}
              fontWeight={"600"}
              fontSize={"1rem"}
            >
              Convenient
            </Text>
            <Text
              className="gradient"
              fontSize={{ md: "3.75rem", base: "1.75rem" }}
              fontWeight={"400"}
              lineHeight={{ md: "83.3px", base: "41.2px" }}
            >
              Vibe Search Integration
            </Text>
            <Box
              position="relative"
              fontSize={{ base: "1.25rem", md: "1.75rem" }}
              fontWeight="700"
              css={{
                "&::before": {
                  content: '"–"',
                  display: "inline-block",
                  width: "22px",
                  height: "1em",
                  background: gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  border: "0 solid",
                  borderImageSource: gradient,
                  borderImageSlice: 1,
                },
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Integrate You Vibe with Vibe Search
            </Box>
            <Box
              fontSize={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              fontWeight={"500"}
              lineHeight={"36px"}
              color={"#ABABAB"}
              gap={"1rem"}
            >
              <Text>
                Hushh vibe search also enables users to share your style
                preferences in their Hushh Wallet. This makes it easy to share
                and access important information, such as Your Size, FIt, Brands
                , Budget and Purchase history.
              </Text>
            </Box>
            <Button
              border={"3px solid #606060"}
              borderRadius={"2px"}
              w={"16rem"}
              color={extendedTheme.colors._white}
              lineHeight={"28px"}
              background={"transparent"}
              letterSpacing={"0.4rem"}
              _hover={{
                background:
                  "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                border: "none",
              }}
              onClick={() => window.open("https://testflight.apple.com/join/CDYPEfJ5", "_blank")}
            >
              REQUEST ACCESS
            </Button>
          </Box>
        </HStack>

        <Stack margin={{ md: "10rem", base: "3.5rem" }} position={"relative"}>
          <Box display={{ base: "none", md: "block" }}>
            <Image
              src={BgAnimation}
              alt="BgAnimation"
              style={{
                position: "absolute",
                top: "-15px",
                zIndex: "-10",
                width: "100%",
                height: "40rem",
                filter: "grayscale(100%)",
              }}
              unoptimized
            />
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <Image
              src={BgAnimation}
              alt="BgAnimation"
              style={{
                position: "absolute",
                top: "-15px",
                zIndex: "-10",
                width: "100%",
                height: "13rem",
                filter: "grayscale(100%)",
              }}
              unoptimized
            />
          </Box>
        </Stack>
        <VibeSearchFaq />
      </Box>
      <ContactForm />
</>
)
}

export default devloperApi