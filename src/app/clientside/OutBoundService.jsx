'use client'
import { Box, Button, Container, Grid, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import OutBoundServiceImg from '../_components/svg/outBoundService/outboundServiceImg.svg';
import { ServiceCard } from '../_components/primitives/serviceCard';

const OutBoundService = () => {
  return (
  <>
     <Box
        maxW={"100"}
        minW={"100%"}
        display={"flex"}
        flexDirection={"column"}
        position={"relative"}
      >
       
       <Box
          alignItems={"center"}
          w={"100%"}
          gap={{md:'2rem',base:'1rem'}}
          display={"flex"}
          flexDirection={"column"}
          mt={{ base: "3rem" }}
        >
          <Heading
            fontWeight={"700"}
            lineHeight={{ md: "90.28px", base: "48px" }}
            textAlign={"center"}
            fontSize={{ md: "4.625rem", base: "2.3rem" }}
            pt={{ md: "10rem", base: "3rem" }}
            className="gradient"
            px={{ base: "0.5rem",md:'6rem' }}
            mb={{ base: "0.5rem" }}
            as={"h1"}
          >
           Maximize Your Reach With Our Outbound Services
          </Heading>
          <Text
            // px={{ md: "17.8rem" }}
            // mb={{ base: "1rem", md: "4rem" }}
            textAlign={"center"}
            fontWeight={'400'}
            color={"#FFFFFF"}
            letterSpacing={'-0.4px'}
            lineHeight={{ md: "30px", base: "18px" }}
            fontSize={{ md: "1.25rem", base: "0.5rem" }}
          >
           Professional and Efficient Solutions for Your Business Needs
          </Text>
          <Button
            border={"1px solid #606060"}
            borderRadius={"2px"}
            w={{ md: "16rem", base: "10rem" }}
            color={'white'}
            lineHeight={{ md: "28px", base: "14px" }}
            background={"transparent"}
            fontSize={{ md: "1rem", base: "0.75rem" }}
            letterSpacing={{ md: "0.29rem", base: "0.145rem" }}
            _hover={{
              background:
                "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
              border: "none",
            }}
            onClick={() => window.open("/developer-Api/on-boarding", "_blank")}
          >
            GET STARTED
          </Button>
        </Box>

        <HStack
          my={{ md: "8rem", base: "3rem" }}
          px={{ md: "7rem", base: "1.25rem" }}
          gap={{ md: "3rem", base: "0.5rem" }}
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            flex={1}
            gap={{ md: "2rem", base: "1rem" }}
          >
            <Image src={OutBoundServiceImg} alt="OutBoundServiceImg" />
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={{ md: "1rem", base: "1rem" }}
            flex={1}
          >
            <Text
              className="new-gradient"
              letterSpacing={"0.255rem"}
              lineHeight={{ md: "1rem", base: "0.75rem" }}
              fontWeight={"600"}
              fontSize={"1rem"}
              mt={{ base: "1rem" }}
            >
              WHAT ARE
            </Text>
            <Text
              className="gradient"
              fontSize={{ md: "3.75rem", base: "1.75rem" }}
              fontWeight={"500"}
              lineHeight={{ md: "63.3px", base: "31.2px" }}
            >
              Outbound Services?
            </Text>
            <Box
              fontSize={{ md: "1rem", base: "0.75rem" }}
              display={"flex"}
              flexDirection={"column"}
              fontWeight={"500"}
              lineHeight={{ md: "36px", base: "24px" }}
              color={"#ABABAB"}
              gap={"1rem"}
            >
              <Text fontSize={{ md: "1rem", base: "0.75rem" }}>
              Outbound services involve proactively reaching out to potential and existing customers through various channels to promote products, gather feedback, and generate leads. Our team specializes in providing tailored outbound solutions that align with your business goals.
              </Text>
            </Box>
        </Box>  
        </HStack>

        <HStack
          mt={{ md: "6rem", base: "3rem" }}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          gap={{ md: "2rem", base: "1rem" }}
        >
          <Text
            className="gradient"
            fontSize={{ md: "3.75rem", base: "1.5rem" }}
            display={{ md: "flex", base: "none" }}
            fontWeight={400}
          >
            Here's how{" "}
            <Text style={{ fontWeight: 700, margin: "0 1rem" }}>
              Hushh elevates
            </Text>{" "}
            your experience
          </Text>
          <Text
            className="gradient"
            fontSize={{ md: "3.75rem", base: "1.5rem" }}
            display={{ md: "none", base: "flex" }}
            fontWeight={400}
          >
            Here's how Hushh elevates your experience
          </Text>
        </HStack>

        <Box
          display={"flex"}
          pt={{ md: "2rem" }}
          justifyContent={"center"}
          flexDir={{ base: "column", md: "row" }} // Stack the elements vertically on base, and horizontally on md
          minW={{ md: "100%", base: "100%" }}
          position={"relative"}
        >
          <Grid
            position={'relative'}
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={{ md: 10, base: 5 }}
            flexWrap="wrap"
            px={{ md: "5rem", base: "0rem" }}
          >
            <ServiceCard
              // icon={<TrustedAIIcon />}
              alignItems={""}
              onClick={"#"}
              title="Connect with brands and sales agents you trust​"
              textAlign={"left"}
              description="Share your curated data cards with businesses you choose, enabling them to offer personalized experiences and recommendations tailored to your unique preferences.​"
            />
            <ServiceCard
              // icon={<TechIntegrationIcon />}
              alignItems={""}
              onClick={"#"}
              title="Get rewarded for sharing data​​​"
              textAlign={"left"}
              description="Earn rewards for the valuable information you contribute, be it discounts, exclusive offers, or early access to products.​​"
            />
            <ServiceCard
              // icon={<ControlOver />}
              alignItems={""}
              onClick={"#"}
              title="Sell your data​"
              textAlign={"left"}
              description="You can sell your data directly to brands and agencies, receiving fair compensation for its value."
            />
            <ServiceCard
              // icon={<RedifiningIcon />}
              title="Transparency and Control​​​"
              onClick={"#"}
              alignItems={""}
              textAlign={"left"}
              description="Hushh prioritizes your privacy and control. You have full transparency over who has access to your data and what they can see. You can easily revoke access or modify your data cards at any time.​​"
            />
             <Box
            className="gradient-bg serviceBox"
            minW={"20rem"}
            display={{ md: "block", base: "none" }}
            borderLeftRadius={"50px"}
            // position={"absolute"}
            p={{ md: "2rem", base: "0.75rem" }}
            bottom={0}
            top={"60%"}
            h={"70%"}
            right={0}
          >
            <Text
              mb={{ md: "1rem", base: "0.5rem" }}
              color={"#0D0D25"}
              fontSize={{ md: "3.75rem", base: "1.25rem" }}
              lineHeight={{ md: "70px", base: "35px" }}
              fontWeight={"400"}
              mr={"40%"}
            >
              Enter a world made for you
            </Text>
            <Text
              mb={{ md: "2rem", base: "1rem" }}
              color={"#0D0D25"}
              fontSize={{ md: "1.25rem", base: "0.75rem" }}
              lineHeight={"24.6px"}
              mr={"50%"}
            >
              Download Hushh Wallet today and unlock the power of your personal
              data.
            </Text>
          </Box>
          </Grid>
         
        </Box>

        <VStack px={{ md: "12rem", base: "1.25rem" }} py={{md:'4rem',base:'2rem'}}>
          <Text className="hushh-gradient" fontWeight={'600'} fontSize={{md:'1rem',base:'0.5rem'}} lineHeight={'16px'} letterSpacing={'0.255rem'}>CORE VALUE COMPANY</Text>
          <Text className="gradient" textAlign={'center'} fontWeight={'400'} fontSize={{md:'3.75rem',base:'1.75rem'}} lineHeight={{base:'40px',md:'63.3px'}}>Data Categories in Hushh</Text>
          <Text color={"#E5E5E5"} fontWeight={'400'} fontSize={{md:'1rem',base:'0.5rem'}} lineHeight={{md:'28px',base:'20px'}}>
            Building a world where data works for you, not against you.
          </Text>

        </VStack>
      </Box>
  </>
)
}

export default OutBoundService