"use client";
import {
  Box,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import BlueTick from "../_components/svg/icons/blueTick.svg";

const DemoBookingPage = () => {
  return (
    <>
      <Box p={{ base: 4, md: 8 }}>
        <Stack
          mt={{ md: "5rem", base: "2rem" }}
          px={{ base: 4, md: 14 }}
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Box gap={{md:'1.5rem', base:'1rem'}}  display={"flex"} flex={1} flexDirection={"column"}>
            <Heading
              className="gradient"
              fontWeight={"700"}
              fontSize={{ md: "4.625rem", base: "2.31rem" }}
              lineHeight={{ md: "90.28px", base: "58px" }}
              as={"h1"}
            >
              Explore hushh in <div className="new-gradient"> Action</div>
            </Heading>
            <Text
              fontSize={{ md: "1.25rem", base: "1rem" }}
              color={"#FFFFFF"}
              fontWeight={"400"}
              lineHeight={"30px"}
              letterSpacing={"-0.4px"}
            >
              Join us for a live demonstration of Hushh and unlock the secrets
              to building apps faster.
            </Text>
            <List spacing={3} color={'#FFFFFF'}>
              <ListItem display={'flex'} gap={'1rem'}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Receive a personalized introduction to the Hushh platform
              </ListItem>
              <ListItem display={'flex'} gap={'1rem'}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Engage in a one-on-one session with a platform expert
              </ListItem>
              <ListItem display={'flex'} gap={'1rem'}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Discover the rapid automation capabilities for both simple and complex processes
              </ListItem>
              <ListItem display={'flex'} gap={'1rem'}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Witness the perfect blend of no-code and low-code functionalities
              </ListItem>
            </List>
            <Text fontSize={{md:'1.25rem', base:'1rem'}} color={'#FFFFFF'}>Take advantage of a complimentary overview of hushh to determine if it aligns with your needs.</Text>
          </Box>
          <Box
            borderRadius={"1rem"}
            bg={"#151515"}
            display={"flex"}
            flex={1}
          ></Box>
        </Stack>
      </Box>
    </>
  );
};

export default DemoBookingPage;
