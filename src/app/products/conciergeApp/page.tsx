'use client'
import React from "react";
import { Box, Button, HStack, Heading, Stack, Text, VStack, Container, Grid, GridItem } from "@chakra-ui/react";
import extendedTheme from "../../theme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { animateScroll as scroll } from 'react-scroll';
import VibeSearchFaq from '../../_components/features/faq/vibeSearchFaq';
import VibeSearchBg from '../../_components/svg/vibeBg.svg';
import ContactForm from '../../_components/features/contactForm'
import { ServiceCard }  from '../../_components/primitives/serviceCard';
import TrustedAIIcon from "../../_components/svg/trustedAI";
import ControlOver from "../../_components/svg/controlOver";
import TechIntegrationIcon from "../../_components/svg/techIntegration";
import RedifiningIcon from "../../_components/svg/redifiningIcon";
import TransparentSecureIcon from "../../_components/svg/tranparentSecure";
import RightArrowBlack from '../../_components/svg/icons/rightArrowBlack.svg';
import RightArrowWhite from '../../_components/svg/icons/rightArrowWhite.svg';

const conciergeApp = () => {
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
            pt={{ md: "8rem", base: "3rem" }}
            className="gradient"
            px={{ base: "0.5rem" }}
            mb={{ base: "0.5rem" }}
          >
            Concierge App
          </Heading>
          <Text className="color-gradient" fontWeight={'700'} fontSize={{md:"2rem", base:'1rem'}} lineHeight={{md:'57.6px', base:'28.3px'}}>
               Experience Luxury, Redefined
          </Text>
          <Text
            px={{ md: "17.8rem" }}
            mb={{ base: "1rem", md: "4rem" }}
            textAlign={"center"}
            color={"#656565"}
          >
            Hushh is a revolutionary concierge app that transforms luxury experiences through the power of voice, AI, and real-time data. Unlike traditional concierge services, Hushh prioritizes your needs, not just your preferences
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
        mt={{md:"8rem", base:"5rem"}}
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        gap={{ md:'2rem', base:'1rem'}}
      >
        <Heading
          as={"h1"}
          className="gradient"
          fontSize={{ md:"3.75rem", base:'1.5rem'}}
          display={"flex"}
        >
          Here's how <b>Hushh elevates</b> your experience
        </Heading>
        <Text
          color={extendedTheme.colors.secondary}
          fontWeight={"500"}
          fontSize={"1rem"}
          lineHeight={{ md:"2.25rem", base:'1.5rem'}}
          px={{ md:"20rem", base:'1rem' }}
        >
          Our technology services deliver cutting-edge solutions tailored to drive efficiency, enhance performance, and fuel growth in today's digital landscape.
        </Text>
      </HStack>

      <Container display={'flex'} pt={{md:'2rem'}} px={{md:'10rem'}} justifyContent={"center"} minW={{ md:'100%', base:'100%' }}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ md:10 , base:10}}
          flexWrap="wrap"
        >
          <ServiceCard
            icon={<TrustedAIIcon />}
            title="Effortless Service​"
            textAlign={'left'}
            description="Simply speak your request using the app, and Hushh translates it into action. No more searching or filling out forms.​"
          />
          <ServiceCard
            icon={<TechIntegrationIcon />}
            title="Personalized Recommendations​​​"
            textAlign={'left'}
            description="Hushh analyzes your intent, not just your preferences, to recommend services that truly match your needs.​​"
          />
          <ServiceCard
            icon={<ControlOver />}
            title="Real-Time Responses​"
            textAlign={'left'}
            description="Get immediate responses to your requests from top-tier service providers, competing for your attention."
          />
          <ServiceCard
            icon={<RedifiningIcon />}
            title="Discretion and Privacy​​​"
            textAlign={'left'}
            description="Your identity and preferences remain confidential. Requests are shared anonymously with relevant service providers.​​"
          />
          <ServiceCard
            icon={<TransparentSecureIcon />}
            title="Exclusive Opportunities​"
            textAlign={'left'}
            description="Access exclusive deals and hidden gem recommendations you won't find anywhere else"
          />
        </Grid>
      </Container>

       <Stack mt={{base:'2rem', md:'9rem'}} px={{md:'9rem', base:'3rem'}}>
        <Heading className="gradient" fontWeight={'700'} lineHeight={{md:'75px', base:'38px'}} fontSize={{md:'3.75rem', base:'2rem'}}>Hushh caters to a wide range <br></br> of needs, including</Heading>
         <Grid 
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ md:10 , base:10}}
          flexWrap="wrap"
          >
            <Box gap={'2rem'} color={'#0D0D25'} p={{md:'2rem', base:'1rem'}} bg={'white'} borderRadius={'1.75rem'}>
               <Heading fontWeight={'700'} fontSize={{md:'1.75rem'}} lineHeight={'38.53px'}>Travel</Heading>
               <Text fontWeight={'400'} fontSize={{md:'1rem', base:'0.5rem'}} lineHeight={'22.41px'}>Bespoke itineraries, private jet charters, exclusive tours</Text>
            </Box>
            <Box gap={'2rem'} p={{md:'2rem', base:'1rem'}} borderRadius={'1.75rem'} background = 'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)'>
               <Heading fontWeight={'700'} fontSize={{md:'1.75rem'}} lineHeight={'38.53px'}>Events</Heading>
               <Text fontWeight={'400'} fontSize={{md:'1rem', base:'0.5rem'}} lineHeight={'22.41px'}>VIP access to high-profile events, private viewings, red carpet experiences</Text>
            </Box>
            <Box gap={'2rem'} color={'#0D0D25'} p={{md:'2rem', base:'1rem'}} bg={'white'} borderRadius={'1.75rem'}>
               <Heading fontWeight={'700'} fontSize={{md:'1.75rem'}} lineHeight={'38.53px'}>Lifestyle</Heading>
               <Text fontWeight={'400'} fontSize={{md:'1rem', base:'0.5rem'}} lineHeight={'22.41px'}>Personal shopping, home management, day-to-day errands, specialized requests</Text>
            </Box>
         </Grid>
       </Stack>

        <VibeSearchFaq />
      </Box>
      <ContactForm />
    </>
  );
};

export default conciergeApp;
