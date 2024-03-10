import { Container, Box, VStack, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";
import ReceiptRadar from "../../../../public/Images/mobileIcons/receiptRadar.png";
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
        px={{ md: "10rem", base: "2rem" }}
      >
        <Box maxWidth={{ base: "100%", md: "40%" }} display={{base:"none", md:'flex'}} mb={{base:'2rem'}}>
          <NextImage src={ReceiptRadar} alt="receiptRadar" />
        </Box>
        <VStack
          alignItems={{ base: "center", md: "flex-start" }}
          maxW={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            as={"h2"}
            className="color-gradient"
            fontWeight={600}
            letterSpacing={"0.25rem"}
            fontSize={"1rem"}
          >
            INTRODUCING RECEIPT RADAR
          </Heading>{" "}
          <Box maxWidth={{ base: "100%", md: "40%" }} display={{base:"flex", md:'none'}} mb={{base:'2rem'}}>
          <NextImage src={ReceiptRadar} alt="receiptRadar" />
        </Box>
          <Heading
            className="gradient"
            fontWeight="700"
            fontSize={{ md: "3.75rem", base: "1.25rem" }}
          >
            Effortless Receipt Management
          </Heading>
          <Text
            color={extendedTheme.colors.secondary}
            lineHeight={{ base: "18px", md: "36px" }}
            mt={{ base: "1rem", md: "2rem" }}
          >
            Receipt Radar revolutionizes the way you handle receipts. With
            automatic scanning, smart categorization, and customizable options,
            managing expenses becomes a breeze. Simplify your life and take
            control of your finances with Receipt Radar today!{" "}
          </Text>

          <VStack
            align="flex-start"
            spacing={4}
            w="100%"
            mt={{ base: "1rem", md: "2rem" }}
          >
            <Box display="flex" gap={"1rem"} alignItems="center">
              <MarketIcon />
              <Text color={extendedTheme.colors._white}>
                Lowest fees in market
              </Text>
            </Box>
            <Box
              display="flex"
              gap={"1rem"}
              ml={{ md: "-0.5rem", base: "-0.5rem" }}
              alignItems="center"
            >
              <BoltIcon />
              <Text
                ml={{ md: "-0.3rem", base: "-0.3rem" }}
                color={extendedTheme.colors._white}
              >
                Fast & secure transactions
              </Text>
            </Box>
            <Box display="flex" gap={"1rem"} alignItems="center">
              <TransparentLock />
              <Text ml={{ md: "0.5rem" }} color={extendedTheme.colors._white}>
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
