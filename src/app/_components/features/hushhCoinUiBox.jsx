import { Container, Box, VStack, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";
import LVCardMobile from "../../../../public/Images/mobileIcons/LVCardMobile.png";
import MarketIcon from "../svg/marketIcon";
import extendedTheme from "../../theme";
import TransparentLock from "../svg/transparetLock";
import BoltIcon from "../svg/boltIcon";

const HushhCoinUiBox = () => {
  return (
    <>
      <Container
        mt={{ base: "4rem", md: "8rem" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        minW={"100%"}
        px={{ md:"10rem", base:'2rem'}}
      >
        <Box maxWidth={{ base: "100%", md: "40%" }}>
          <NextImage src={LVCardMobile} alt="CoinBox" />
        </Box>
        <VStack
          alignItems={{ base: "center", md: "flex-start" }}
          maxW={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            className="gradient"
            fontWeight="700"
            fontSize={{ md: "3.75rem", base: "2rem" }}
          >
            Earn <span className="color-gradient"> hushh coins</span> on your
            valuable data sharing
          </Heading>
          <Text color={extendedTheme.colors.secondary} lineHeight={{base:'18px',md:'36px'}} mt={{base:'1rem', md:'2rem'}}>
          Unlock exclusive rewards by securely sharing your valuable data with Hushh. Our platform ensures your privacy while offering unparalleled benefits. Join the Hushh community today and start earning Hushh coins for every interaction
          </Text>
          <VStack align="flex-start" spacing={4} w="100%" mt={{base:'1rem', md:'2rem'}}>
            <Box display="flex" gap={"1rem"} alignItems="center">
              <MarketIcon />
              <Text color={extendedTheme.colors._white}>
                Lowest fees in market
              </Text>
            </Box>
            <Box display="flex" gap={"1rem"} ml={{ md:'-0.5rem'}} alignItems="center">
              <BoltIcon />
              <Text ml={{md:'-0.3rem'}} color={extendedTheme.colors._white}>
                Fast and secure transactions
              </Text>
            </Box>
            <Box display="flex" gap={"1rem"} alignItems="center">
              <TransparentLock />
              <Text ml={{ md:'0.5rem'}} color={extendedTheme.colors._white}>
                256-bit secure encryption
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </>
  );
};

export default HushhCoinUiBox;
