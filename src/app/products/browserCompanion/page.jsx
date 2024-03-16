import React from 'react'
import { Box, Button, HStack, Heading, Text } from '@chakra-ui/react'
import extendedTheme from '../../theme'
import Image from 'next/image'
import DirectionLine from "../../_components/svg/icons/directionLine.svg"



const browserCompanion = () => {
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
          mt={{base:'3rem'}}
        >
          <Heading
            fontWeight={"700"}
            lineHeight={{ md: "255.6px", base: "60px" }}
            textAlign={"center"}
            fontSize={{ md: "8.8rem", base: "2.5rem" }}
            pt={{ md: "10rem", base: "3rem" }}
            className="gradient"
            px={{base:'0.5rem'}}
            mb={{base:'0.5rem'}}
          >
            Browser Companion
          </Heading>
          <Text
            px={{ md: "17.8rem" }}
            mb={{ base: "1rem", md: "4rem" }}
            textAlign={"center"}
            color={"#656565"}
          >
            The Hushh Web Browser Extension takes personalized online experiences to the next level. Here's what it offers
          </Text>
          <Button
            border={"1px solid #606060"}
            borderRadius={"2px"}
            w={{ md:"16rem", base:"10rem"}}
            color={extendedTheme.colors._white}
            lineHeight={{ md:"28px", base:'14px'}}
            background={"transparent"}
            letterSpacing={{ md:"0.5rem", base:"0.25rem"}}
            _hover={{
              background:
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
            }}
            //   onClick={() =>
            //     router.push("https://sites.google.com/hush1one.com/drops/home/journey")
            //   }
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
            alignItems={{base:'center'}}
            justifyContent={{base:'center'}}
            textAlign={{base:'center'}}
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
            w={"9rem"}
            color={extendedTheme.colors._white}
            lineHeight={"28px"}
            background={"transparent"}
            letterSpacing={"0.2rem"}
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
            Seamless Data Sharing for Personalized Experiences
          </Heading>
          <Text
            mt={"1rem"}
            color={"#656565"}
            fontSize={{ md: "1rem", base: "0.75rem" }}
          >
            Hushh is your one-stop solution for seamless data sharing between
            you and your favorite websites. With Hushh, you can effortlessly
            share your personal data with brands to enhance your browsing
            experience and receive tailored recommendations.
          </Text>
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
              src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdr5alaq5u%2Fvideo%2Fupload%2Fv1710411292%2FHushh_button_-_developer_walkthrough_uwwiy0.mp4&cloud_name=dr5alaq5u&player[showJumpControls]=true&player[pictureInPictureToggle]=false&source[poster]=https%3A%2F%2Fres.cloudinary.com%2Fdr5alaq5u%2Fimage%2Fupload%2FScreenshot_2024-03-14_160021_hapzpw.jpg"
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
              src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdr5alaq5u%2Fvideo%2Fupload%2Fv1710411292%2FHushh_button_-_developer_walkthrough_uwwiy0.mp4&cloud_name=dr5alaq5u&player[showJumpControls]=true&player[pictureInPictureToggle]=false&source[poster]=https%3A%2F%2Fres.cloudinary.com%2Fdr5alaq5u%2Fimage%2Fupload%2FScreenshot_2024-03-14_160021_hapzpw.jpg"
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
       </Box> 
    </>
  )
}

export default browserCompanion