"use client";
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import extendedTheme from "../../theme";
import { AspectRatio } from "@chakra-ui/react";

const hushhButton = () => {
  return (
    <>
      <Container maxW={"100%"} display={"flex"} flexDirection={"column"}>
        <Box
          alignItems={"center"}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Heading
            fontWeight={"700"}
            lineHeight={{ md: "255.6px", base: "120px" }}
            textAlign={"center"}
            fontSize={{ md: "8.8rem", base: "4.4rem" }}
            pt={{ md: "10rem", base: "2.5rem" }}
            className="gradient"
          >
            Hushh Button
          </Heading>
          <Text
            px={{ md: "17.8rem" }}
            mb={{ base: "1rem", md: "4rem" }}
            textAlign={"center"}
            color={"#656565"}
          >
            Imagine a world where shopping feels effortless and tailored just
            for you. Hushh Button, a powerful plugin, bridges the gap between
            your identity and your favorite brands.
          </Text>
          <Button
            border={"1px solid #606060"}
            borderRadius={"2px"}
            w={"16rem"}
            color={extendedTheme.colors._white}
            lineHeight={"28px"}
            background={"transparent"}
            letterSpacing={"0.5rem"}
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
        <HStack mt={"2rem"} gap={"3rem"} px={"4rem"}>
          <Box
            gap={"0rem"}
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
          >
            <Text fontWeight={"800"} fontSize={"2.8rem"}>
              42k
            </Text>
            <Text fontSize={"1rem"} fontWeight={"500"}>
              Integrations
            </Text>
          </Box>
          <Box
            gap={"0rem"}
            display={"flex"}
            flexDirection={"column"}
            color={"white"}
          >
            <Text fontWeight={"800"} fontSize={"2.8rem"}>
              1.2b
            </Text>
            <Text fontSize={"1rem"} fontWeight={"500"}>
              Users
            </Text>
          </Box>
          <Button
            ml={"55rem"}
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
        </HStack>
        <HStack
          mt={"4rem"}
          px={"10rem"}
          minW={"100%"}
          bg={"#FFFFFF"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
        >
          <Heading color={"#0D0D25"} fontWeight={"700"} fontSize={"3.5rem"}>
            Seamless Data Sharing for Personalized Experiences
          </Heading>
          <Text mt={"1rem"} color={"#656565"} fontSize={"1rem"}>
            Hushh is your one-stop solution for seamless data sharing between
            you and your favorite websites. With Hushh, you can effortlessly
            share your personal data with brands to enhance your browsing
            experience and receive tailored recommendations.
          </Text>
          <Box display={"flex"} justifyContent={"center"} w={"100%"} h={"100%"}>
            <iframe
              src="https://player.cloudinary.com/embed/?public_id=samples%2Fcld-sample-video&cloud_name=dr5alaq5u&player[hideContextMenu]=false&player[floatingWhenNotVisible]=false&player[showJumpControls]=true&player[pictureInPictureToggle]=false&player[posterOptions][transformation][startOffset]=0&player[loop]=true&source[autoplayOnScroll]=false"
              width="640"
              height="360"
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
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default hushhButton;
