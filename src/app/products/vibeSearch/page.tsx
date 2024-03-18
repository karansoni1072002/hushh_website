'use client'
import React from "react";
import { Box, Button, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import extendedTheme from "../../theme";
import Image from "next/image";
import DirectionLine from "../../_components/svg/icons/directionLine.svg";
import BarIcon from "../../_components/svg/icons/barIcon.svg";
import FrameCard2 from "../../_components/svg/card/buttonvoucherCard.svg";
import FramCard1 from "../../_components/svg/card/frameCardHushhButton.svg";
import { useRouter } from "next/navigation";
import { animateScroll as scroll } from 'react-scroll';
import VibeSearchFaq from '../../_components/features/faq/vibeSearchFaq';
import FindYourStyleBox from '../../_components/svg/findYourStyleBox.svg';
import VibeSearchIntegrationBox from '../../_components/svg/vibeIntegrationBox.svg';
import VibeSearchBg from '../../_components/svg/vibeBg.svg';

const vibeSearch = () => {
  const gradient = "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)";
  const router = useRouter();


  const scrollTo = () => {
    scroll.scrollTo(850);
  };

  const scrollInMobile = () => {
    scroll.scrollTo(450);
  }

  const learnMoreScroll = () => {
    scroll.scrollTo(1500);
  }



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
          >
            Vibe Search
          </Heading>
          <Text
            px={{ md: "17.8rem" }}
            mb={{ base: "1rem", md: "4rem" }}
            textAlign={"center"}
            color={"#656565"}
          >
            The vibe search app lets find and store all your favorite products that you come across by just taking a picture or by typing 
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
          position={"relative"}
          mt={"4rem"}
          px={{ md: "15rem", base: "0" }}
          minW={"100%"}
          bg={"#FFFFFF"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          py={{ md: "3rem", base: "1rem" }}
        >
          <Heading
            color={"#0D0D25"}
            fontWeight={"700"}
            fontSize={{ md: "3.5rem", base: "1.5rem" }}
          >
             Introducing Vibe search your companion for fashion and style 
          </Heading>
          <Text
            mt={"1rem"}
            color={"#656565"}
            fontSize={{ md: "1rem", base: "0.75rem" }}
          >
             Want to know where you can buy that cute dress you saw the other day? don’t know what style fits you best . Don,t worry vibe search is all you need . VIbe search is your fashion companion that helps you find your style           </Text>
          <Box
            mt={"1.5rem"}
            display={{ md: "none", base: "flex" }}
            justifyContent={"center"}
            w={"100%"}
            h={"100%"}
            mb={"2rem"}
          >
            <Image
              alt="directionLine"
              className="hushhbuttonFrame3"
              style={{
                position: "absolute",
                height: "4rem",
                left: "-20%",
                bottom: "0",
              }}
              src={DirectionLine}
            />
            <iframe
  src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdr5alaq5u%2Fvideo%2Fupload%2Fv1710776445%2FvibeSearchDemo_s1bdkh.mp4&cloud_name=dr5alaq5u&player[showJumpControls]=true"
  width="4  40"
              height="250"
              style={{
                height: "auto",
                width: "80%",
                aspectRatio: "640 / 360",
                borderRadius: "1rem",
              }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </Box>
          <Box
            mt={"3rem"}
            display={{ md: "flex", base: "none" }}
            justifyContent={"center"}
            w={"100%"}
            h={"100%"}
            mb={"2rem"}
          >
            <Image
              src={BarIcon}
              alt="barIcon"
              style={{
                position: "absolute",
                left: "2%",
                top: "2%",
                transform: "rotate(35deg)",
              }}
              className="hushhbuttonFrame1"
            />
            <Image
              alt="hushhButtonCard2"
              style={{ position: "absolute", left: "12%" }}
              src={FrameCard2}
              className="hushhbuttonFrame2"
            />
            <Image
              alt="directionLine"
              className="hushhbuttonFrame3"
              style={{
                position: "absolute",
                left: "8%",
                bottom: "0",
              }}
              src={DirectionLine}
            />
            <iframe
  src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdr5alaq5u%2Fvideo%2Fupload%2Fv1710776445%2FvibeSearchDemo_s1bdkh.mp4&cloud_name=dr5alaq5u&player[showJumpControls]=true"
  width="4  40"
              height="250"
              style={{
                height: "auto",
                width: "60%",
                aspectRatio: "640 / 360",
                borderRadius: "1rem",
              }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
            <Image
              className="frameCard1"
              alt="HushhButtonframeCard4"
              src={FramCard1}
              style={{ position: "absolute", right: "16rem", bottom: "0rem" }}
            />
          </Box>
        </HStack>

        <HStack
          my={{ md: "8rem", base: "3rem" }}
          px={{ md: "7rem", base: "1.25rem" }}
          display={{ base:'flex'}}
          flexDirection={{base:'column', md:'row'}}
        >
          <Box display={"flex"} flexDirection={"column"} gap={'1rem'} flex={1}>
            <Text
              className="default-gradient"
              letterSpacing={"0.255rem"}
              lineHeight={"1rem"}
              fontWeight={"600"}
              fontSize={{ md:"1rem",base:'0.75rem'}}
            >
              HUSHH
            </Text>
            <Text
              className="gradient"
              fontSize={{ md: "3.75rem", base: "1.75rem" }}
              fontWeight={"400"}
              lineHeight={{ md: "63.3px", base: "31.2px" }}
            >
              Find Your Style with{" "}
            </Text>
            <Text
              className="gradient"
              fontSize={{ md: "3.75rem", base: "1.75rem" }}
              fontWeight={"700"}
              lineHeight={{ md: "63.3px", base: "31.2px" }}
            >
              Your own Stylist
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
              Find The Style that fits you best
            </Box>
            <Box fontSize={{ md:'1.25rem', base:'0.75rem'}} display={'flex'} flexDirection={'column'} fontWeight={'500'} lineHeight={'30.04px'} color={'#ABACB0'} gap={{ md:'1rem', base:'0rem'}}>
            <Text>Find  products based on image and text </Text>
            <Text>Save all your liked products </Text>
            <Text>Get insights on your Fit and Style</Text>
            <Text>Share your best Fit with Family and Friends</Text>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={'column'} flex={1} gap={'1rem'}>
            <Image src={FindYourStyleBox} alt="FindYourStyleBox"/>
            <Text fontSize={{ md:'1rem', base:'0.75rem'}} color={'#ABABAB'} lineHeight={{md:'36px', base:'18px'}}>
                  Find that perfect Fit and perfect look with just a click of a button. Search products with just and image and text save them for later to buy or create a whilst to share it with friends and family            </Text>
            <Button 
             borderRadius={'3.3rem'}
             w={'fit-content'}
             p={'1rem 2rem'}
             _hover={{
              color:'white',
              bg:'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)'
             }}
             onClick={() =>
                router.push("https://sites.google.com/hush1one.com/drops/mlds#h.phjv03hn3bq")
              }

            >
              Explore
            </Button>
          </Box>
        </HStack>

        <HStack
          my={{ md: "8rem", base: "3rem" }}
          px={{ md: "7rem", base: "1.25rem" }}
          gap={{ md:'2rem', base:'0.25rem'}}
          display={'flex'}
          flexDirection={{md:'row', base:'column'}}
        >
          <Box display={'flex'} flexDirection={'column'} flex={1} gap={{ md:'2rem', base:'1rem'}}>
            <Image src={VibeSearchIntegrationBox} alt="VibeSearchIntegrationBox"/>
            {/* <Text fontSize={{ md:'1rem', base:'0.75rem'}} color={'#ABABAB'} lineHeight={{md:'36px', base:'18px'}}>See exactly what data is being collected about you, including search queries, brand interactions, interests, preferences, likes, and clicks. Gain insights into your online behavior and understand what shapes your digital footprint</Text> */}
            
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={'2rem'} flex={1}>
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
              lineHeight={{ md: "63.3px", base: "31.2px" }}
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
            <Box fontSize={'1rem'} display={'flex'} flexDirection={'column'} fontWeight={'500'} lineHeight={'36px'} color={'#ABABAB'} gap={'1rem'}>
            <Text>Hushh vibe search also enables users to share your style preferences in their Hushh Wallet. This makes it easy to share and access important information, such as Your Size, FIt, Brands , Budget and Purchase history.</Text>
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
              }}
              onClick={() =>
                router.push("https://sites.google.com/hush1one.com/drops/mlds#h.phjv03hn3bq")
              }
            >
              REQUEST ACCESS
            </Button>
          </Box>
          
        </HStack>

        <Stack display={'flex'} gap={{ md:'1rem', base:'0.5rem'}} textAlign={'center'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Heading fontWeight={'400'} color={'#FFFFFF'} lineHeight={{md:'25.83px', base:'16px'}} fontSize={{md:'1.25rem', base:'1rem'}}>Our Uniqueness</Heading>
            <Text alignItems={'center'} justifyContent={'center'} lineHeight={{md:"88.14px", base:'44px'}} color={'white'} fontWeight={'700'} fontSize={{md:'5.6rem', base:'2.5rem'}}>More Than Just </Text>
            <Text alignItems={'center'} justifyContent={'center'} lineHeight={{md:"88.14px", base:'44px'}} color={'white'} fontWeight={'700'} fontSize={{md:'5.6rem', base:'2.5rem'}}> An App</Text>
            <Text display={'flex'} color={'#ABABAB'} lineHeight={'25px'} fontSize={{md:'0.8rem', base:'0.8rem'}}>Vibe search is more than just an app its your personal stylist on tap of a button</Text>
            <Box>
                <Image src={VibeSearchBg} alt="VibeSearchBg" />
            </Box>
        </Stack>

        <Stack margin={{ md: "10rem", base: "3.5rem" }}>
          <VStack px={{ md: "10rem", base: "0rem" }}>
            {/* GIF Pending */}
            <Heading
              textAlign={"center"}
              className="gradient"
              fontWeight={"400"}
              fontSize={{ md: "3.75rem", base: "1.25rem" }}
              lineHeight={{ base: "35px", md: "75px" }}
            >
             Your Personal Fashion Stylist at <br></br> your Fingertips
            </Heading>
            <Text
              mt={{ md: "2rem", base: "1rem" }}
              color={"white"}
              textAlign={"center"}
              fontWeight={"400"}
              lineHeight={{md:"31.5px", base:'20px'}}
              fontSize={{ md: "1.125rem", base: "0.75rem" }}
            >
              The Vibe search utilizes advanced algorithms and AI technology to analyze the captured data Fid the best fit and style for you. Users receive personalized recommendations, discover new products and brands aligned with their interests, and stay up-to-date with the latest trends.            </Text>
          </VStack>
        </Stack>
        <VibeSearchFaq/>
      </Box>

    </>
  );
};

export default vibeSearch;
