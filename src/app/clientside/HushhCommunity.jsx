import { Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import hushhLogo from "../_components/svg/hushhCommunity/Fill5.svg";
import discordIcon from "../_components/svg/hackathon/discordIcon.svg";
import linkedIcon from "../_components/svg/hackathon/linkedInIcon.svg";
import ContactForm from "../_components/features/contactForm";

const HushhCommunity = () => {
  return (
    <>
      <Box>
        <Stack display={"flex"} flexDirection={{ md: "row", base: "column" }}>
          <VStack
            flex={1}
            mt={{ md: "8rem", base: "4rem" }}
            p={{ base: 6, md: 12 }}
            display={"flex"}
            alignItems={"flex-start"}
            textAlign={"left"}
          >
            <Text
              className="gradient"
              lineHeight={{ md: "90px", base: "40px" }}
              fontWeight={"700"}
              fontSize={{ md: "4.15rem", base: "2rem" }}
            >
              Explore hushh in
            </Text>
            <Text
              className="new-gradient"
              lineHeight={{ md: "90px", base: "40px" }}
              fontWeight={"700"}
              fontSize={{ md: "4.15rem", base: "2rem" }}
            >
              Action
            </Text>
            <Text
              fontSize={{ md: "1.25rem", base: "1rem" }}
              color={"#FFFFFF"}
              fontWeight={"400"}
              lineHeight={"30px"}
              letterSpacing={"-0.4px"}
              as={"h2"}
            >
              Join our communities with hushh
            </Text>
          </VStack>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            alignSelf={"center"}
            flex={0.8}
            p={{ md: "4rem", base: "2rem" }}
            w={"100%"}
            mt={{ md: "8rem", base: "4rem" }}
            borderLeftRadius={"7rem"}
            bg={"#1C1C1C"}
          >
            <Image
              src={hushhLogo}
              alt="hushh Community"
              title="join our hushh community"
            />
          </Box>
        </Stack>
        <VStack
          gap={{ md: "2rem", base: "1rem" }}
          my={{ md: "6rem", base: "3rem" }}
        >
          <Text
            className="gradient"
            fontWeight={"700"}
            fontSize={{ md: "4.75rem", base: "2.15rem" }}
            lineHeight={{ md: "91px", base: "40px" }}
          >
            Our Communities
          </Text>
          <Text
            px={{ md: "8rem", base: "2rem" }}
            display={"flex"}
            textAlign={"center"}
            color={"#ABABAB"}
            fontWeight={"500"}
            fontSize={{ md: "1rem", base: "0.5rem" }}
            lineHeight={{ md: "32px", base: "20px" }}
          >
            Visioncraft is an employee-centred company that looks after every
            employee, gives autonomy to make choices, supports self-development
            and career growth. Our development team is always in search of
            talented individuals to join our employee-centred culture.
          </Text>
          <Stack
            mt={{md:'4rem',base:'2rem'}}
            px={{ md: "8rem", base: "2rem" }}
            display={"flex"}
            flexDirection={'column'}
            gap={{md:'3rem',base:'1.5rem'}}
          >
           <HStack gap={{ md: "4rem", base: "1.5rem" }}>
            <Image
              src={discordIcon}
              alt="Hushh Discord Channel"
              title="join our hushh discord community"
            />
            <Text
              color={"#ABABAB"}
              fontWeight={"500"}
              fontSize={{ md: "1rem", base: "0.65rem" }}
            >
              Visioncraft is an employee-centred company that looks after every
              employee, gives autonomy to make choices, supports
              self-development and career growth. Our development team is always
              in search of talented individuals to join our employee-centred
              culture.
            </Text>
            <Button
              _hover={{ color: "black", bg: "white" }}
              w={{ md: "10rem", base: "5rem" }}
              color={"#FFFFFF"}
              background={
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)"
              }
              fontWeight={"600"}
              fontSize={{ md: "11px", base: "7px" }}
              lineHeight={"12px"}
            >
              Join
            </Button>
           </HStack> 
           <HStack gap={{ md: "4rem", base: "1.5rem" }}>
            <Image
              src={discordIcon}
              alt="Hushh Discord Channel"
              title="join our hushh discord community"
            />
            <Text
              color={"#ABABAB"}
              fontWeight={"500"}
              fontSize={{ md: "1rem", base: "0.65rem" }}
            >
              Visioncraft is an employee-centred company that looks after every
              employee, gives autonomy to make choices, supports
              self-development and career growth. Our development team is always
              in search of talented individuals to join our employee-centred
              culture.
            </Text>
            <Button
              _hover={{ color: "black", bg: "white" }}
              w={{ md: "10rem", base: "5rem" }}
              color={"#FFFFFF"}
              background={
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)"
              }
              fontWeight={"600"}
              fontSize={{ md: "11px", base: "7px" }}
              lineHeight={"12px"}
            >
              Join
            </Button>
           </HStack> 
           <HStack gap={{ md: "4rem", base: "1.5rem" }}>
            <Image
              src={discordIcon}
              alt="Hushh Discord Channel"
              title="join our hushh discord community"
            />
            <Text
              color={"#ABABAB"}
              fontWeight={"500"}
              fontSize={{ md: "1rem", base: "0.65rem" }}
            >
              Visioncraft is an employee-centred company that looks after every
              employee, gives autonomy to make choices, supports
              self-development and career growth. Our development team is always
              in search of talented individuals to join our employee-centred
              culture.
            </Text>
            <Button
              _hover={{ color: "black", bg: "white" }}
              w={{ md: "10rem", base: "5rem" }}
              color={"#FFFFFF"}
              background={
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)"
              }
              fontWeight={"600"}
              fontSize={{ md: "11px", base: "7px" }}
              lineHeight={"12px"}
            >
              Join
            </Button>
           </HStack> 
          </Stack>
        </VStack>
        <VStack>
            <Text className="gradient" fontSize={{md:'4.75rem',base:'2.15rem'}} fontWeight={'700'} lineHeight={{md:'91px',base:'40px'}}>Benefits of our community</Text>
            <Text mx={{md:'25%',basse:'1.25rem'}} display={'flex'} textAlign={'center'} color={'#E4E4E4'}>In terms of technologies, Hushh Datanexus  will leverage the emerging technologies and technologies of tomorrow, specifically in the realm of Metaverse and AI. These themes and technologies provide a broad scope for participants to explore and develop innovative solutions that address real-world challenges in various domains.</Text>
        </VStack>
        <ContactForm />
      </Box>
    </>
  );
};

export default HushhCommunity;
