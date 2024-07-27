import { Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import hushhLogo from "../_components/svg/hushhCommunity/Fill5.svg";
import discordIcon from "../_components/svg/hackathon/discordIcon.svg";
import linkedIcon from "../_components/svg/hackathon/linkedInIcon.svg";
import ContactForm from "../_components/features/contactForm";
import DisconnectedLux from '../_components/svg/hushhCommunity/discoveryLuxury.svg';
import CommunicationImg from "../_components/svg/hushhCommunity/communication.svg";
import CustomerInsightsImg from "../_components/svg/hushhCommunity/customerInsights.svg";
import DiscoveryLux from "../_components/svg/hushhCommunity/discoveryLuxury.svg";
import EthicalData from "../_components/svg/hushhCommunity/ethicalData.svg";
import ValueCustomer from "../_components/svg/hushhCommunity/valueCustomer.svg";

const HushhCommunity = () => {
  return (
    <>
      <Box>
        <Stack display={"flex"} flexDirection={"column"}>
          <Box
            mt={{ md: "8rem", base: "4rem" }}
            p={{ base: 6, md: 12 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            textAlign={"left"}
          >
            <Text
              className="hushh-gradient"
              fontWeight={"700"}
              fontSize={{ md: "4.635rem", base: "2.3rem" }}
              lineHeight={{ md: "90px", base: "40px" }}
            >
              Revolutionizing Luxury Sales:
            </Text>
            <Text
              className="gradient"
              fontWeight={"700"}
              fontSize={{ md: "4.635rem", base: "2.3rem" }}
              lineHeight={{ md: "90px", base: "40px" }}
            >
              Empowering Agents, Delighting Customers
            </Text>
          </Box>
        </Stack>

        <HStack mx={{md:'5rem',base:'1rem'}} gap={{md:'6rem',base:'2rem'}}>
            <Image src={DisconnectedLux} alt="Luxury Experience" title="hushh disconnected luxury experience"/>
            <VStack textAlign={'left'} gap={{md:'2rem',base:'1rem'}} alignItems={'flex-start'}>
                <Text fontWeight={'600'} className="new-gradient" fontSize={{md:'1rem',base:'0.75rem'}} letterSpacing={'0.255rem'} lineHeight={'16px'}>THE CHALLENGE</Text>
                <Text fontWeight={'500'} className="gradient" fontSize={{md:'3.75rem',base:'1.825rem'}} lineHeight={{md:'63.3px',base:'38px'}}>A Disconnected Luxury Experience</Text>
                <Text fontWeight={'500'} color={'#ABABAB'} fontSize={{md:'1rem',base:'0.5rem'}} lineHeight={{md:'36px',base:'25px'}}>Luxury sales agents face a common hurdle: providing exceptional, personalized service to customers whose preferences are unknown. This often leads to awkward moments, mismatched recommendations, and missed opportunities for both agents and customers.</Text>
                <Button bg={'white'} w={{md:'18rem',base:'100%'}} color={'#10081F'} borderRadius={'54px'}>
                    Learn More
                </Button>
            </VStack>
        </HStack>

        <VStack my={{md:'4rem',base:'1.5rem'}}  mx={{md:'5rem',base:'1rem'}} textAlign={'left'} alignItems={'flex-start'}>
            <Text mr={{md:'50%',base:''}} className="new-gradient" fontWeight={'600'} fontSize={{md:'1rem',base:'0.5rem'}} lineHeight={'16px'} letterSpacing={'0.255rem'}>HUSHH</Text>
            <Text mr={{md:'50%',base:''}} className="gradient" fontWeight={'500'} fontSize={{md:'3.75rem',base:'1.8rem'}} lineHeight={{md:'63.3px',base:'35px'}}>Transforming the Luxury Retail Landscape</Text>
            <Text mr={{md:'50%',base:''}} color={'#ABABAB'} fontWeight={'500'} fontSize={{md:'1rem',base:'0.75rem'}} lineHeight={{md:'36px',base:'25px'}}>Hushh is a game-changing platform designed to bridge the gap between luxury sales agents and their customers. Here's how Hushh is reimagining the in-store experience:</Text>
            <VStack>
               <Box gap={{md:'2rem',base:'1rem'}} flex={1} display={'flex'} flexDirection={'column'}>
               <Stack gap={{md:'2rem',base:'1rem'}} textAlign={'left'} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}  flexDirection={'row'}>
                    <Image style={{flex:'0.1'}} src={CustomerInsightsImg} alt="Instant Customer Insights" title="Instant Customer Insights"/>
                    <VStack flex={0.9} textAlign={'left'} alignItems={'flex-start'}>
                        <Text fontWeight={'600'} color={'#E4E4E4'} fontSize={{md:'1.25rem',base:'0.75rem'}} lineHeight={'32px'} letterSpacing={'0.1rem'}>INSTANT CUSTOMER INSIGHTS</Text>
                        <Text color={'#ABABAB'} fontWeight={'500'} fontSize={{md:'1rem',base:'0.625rem'}} lineHeight={{md:'36px',base:'24px'}}>Know your customer's style, size, and budget instantly for personalized recommendations</Text>
                    </VStack>
                </Stack>
                <Stack gap={{md:'2rem',base:'1rem'}} textAlign={'left'} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}  flexDirection={'row'}>
                    <Image style={{flex:'0.1'}} src={CommunicationImg} alt="Instant Customer Insights" title="Instant Customer Insights"/>
                    <VStack flex={0.9} textAlign={'left'} alignItems={'flex-start'}>
                        <Text fontWeight={'600'} color={'#E4E4E4'} fontSize={{md:'1.25rem',base:'0.75rem'}} lineHeight={'32px'} letterSpacing={'0.1rem'}>PERSONALIZED COMMUNICATOIN</Text>
                        <Text color={'#ABABAB'} fontWeight={'500'} fontSize={{md:'1rem',base:'0.625rem'}} lineHeight={{md:'36px',base:'24px'}}>Know your customer's style, size, and budget instantly for personalized recommendations</Text>
                    </VStack>
                </Stack>
                <Stack gap={{md:'2rem',base:'1rem'}} textAlign={'left'} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}  flexDirection={'row'}>
                    <Image style={{flex:'0.1'}} src={ValueCustomer} alt="Instant Customer Insights" title="Instant Customer Insights"/>
                    <VStack flex={0.9} textAlign={'left'} alignItems={'flex-start'}>
                        <Text fontWeight={'600'} color={'#E4E4E4'} fontSize={{md:'1.25rem',base:'0.75rem'}} lineHeight={'32px'} letterSpacing={'0.1rem'}>FOCUS ON HIGH-VALUE CUSTOMERS</Text>
                        <Text color={'#ABABAB'} fontWeight={'500'} fontSize={{md:'1rem',base:'0.625rem'}} lineHeight={{md:'36px',base:'24px'}}>Prioritize clients for higher commissions and effortless scheduling</Text>
                    </VStack>
                </Stack>
                <Stack gap={{md:'2rem',base:'1rem'}} textAlign={'left'} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}  flexDirection={'row'}>
                    <Image style={{flex:'0.1'}} src={EthicalData} alt="hushh Ethical Data Collection" title="hushh Ethical Data Collection"/>
                    <VStack flex={0.9} textAlign={'left'} alignItems={'flex-start'}>
                        <Text fontWeight={'600'} color={'#E4E4E4'} fontSize={{md:'1.25rem',base:'0.75rem'}} lineHeight={'32px'} letterSpacing={'0.1rem'}>ETHICAL DATA COLLECTION</Text>
                        <Text color={'#ABABAB'} fontWeight={'500'} fontSize={{md:'1rem',base:'0.625rem'}} lineHeight={{md:'36px',base:'24px'}}>Gain customer trust with transparent, consensual data practices</Text>
                    </VStack>
                </Stack>
                </Box> 
                <Box flex={1}>
                <Image src={''} title="" alt=""/>
                </Box>
            </VStack>
        </VStack>

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
            mt={{ md: "4rem", base: "2rem" }}
            px={{ md: "8rem", base: "2rem" }}
            display={"flex"}
            flexDirection={"column"}
            gap={{ md: "3rem", base: "1.5rem" }}
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
                Visioncraft is an employee-centred company that looks after
                every employee, gives autonomy to make choices, supports
                self-development and career growth. Our development team is
                always in search of talented individuals to join our
                employee-centred culture.
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
                Visioncraft is an employee-centred company that looks after
                every employee, gives autonomy to make choices, supports
                self-development and career growth. Our development team is
                always in search of talented individuals to join our
                employee-centred culture.
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
                Visioncraft is an employee-centred company that looks after
                every employee, gives autonomy to make choices, supports
                self-development and career growth. Our development team is
                always in search of talented individuals to join our
                employee-centred culture.
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
          <Text
            className="gradient"
            fontSize={{ md: "4.75rem", base: "2.15rem" }}
            fontWeight={"700"}
            lineHeight={{ md: "91px", base: "40px" }}
          >
            Benefits of our community
          </Text>
          <Text
            mx={{ md: "25%", basse: "1.25rem" }}
            display={"flex"}
            textAlign={"center"}
            color={"#E4E4E4"}
          >
            In terms of technologies, Hushh Datanexus will leverage the emerging
            technologies and technologies of tomorrow, specifically in the realm
            of Metaverse and AI. These themes and technologies provide a broad
            scope for participants to explore and develop innovative solutions
            that address real-world challenges in various domains.
          </Text>
        </VStack>
        <ContactForm />
      </Box>
    </>
  );
};

export default HushhCommunity;
