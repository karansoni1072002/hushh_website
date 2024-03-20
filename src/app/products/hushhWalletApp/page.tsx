'use client'
import { Box, Button, HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import extendedTheme from '../../theme'
import { animateScroll as scroll } from "react-scroll";
import Image from 'next/image';
import LouiWalletBg from "../../_components/svg/louiVuittonWallet.svg";

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
          gap={{base:'1rem',md:'2rem'}}
          px={{md:'15rem', base:'1.5rem'}}
          position={'relative'}
        >
          <Heading
            fontWeight={"400"}
            lineHeight={{ md: "87.46px", base: "43px" }}
            textAlign={"center"}
            fontSize={{ md: "5.4rem", base: "2rem" }}
            pt={{ md: "8rem", base: "3rem" }}
            color={'#FFFFFF'}
            mb={{ base: "0.5rem" }}
          >
           World's first AI Powered Data Wallet
          </Heading>
          <Text
            px={{ md: "17.8rem" }}
            mb={{ base: "1rem", md: "1rem" }}
            textAlign={"center"}
            lineHeight={'24.6px'}
            fontWeight={'400'}
            fontSize={{md:'1.25erm', base:'1rem'}}
            color={"white"}
          >
            Higher perk adoption, instant expense management, simple benefits access and much more
          </Text>
          <Button
              borderRadius={'3.3rem'}
              w={'fit-content'}
              p={'1rem 2rem'}
              _hover={{
                color: 'white',
                bg: 'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)'
              }}
              onClick={scrollTo}
            >
              Explore
            </Button>
            <Box position={'absolute'}>
                <Image src={LouiWalletBg} alt='LouiWalletBg'/>
            </Box>
        </Box>

      </Box>
    </>
  )
}

export default hushhWalletApp