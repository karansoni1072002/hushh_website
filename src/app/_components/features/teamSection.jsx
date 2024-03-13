import {
  Container,
  Heading,
  VStack,
  Text,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import extendedTheme from "../../theme";
import vivek from "../svg/vivek.svg";
import linkedln from "../svg/icons/linkedIn.svg";
import justin from "../svg/aboutImages/justin.svg";
import manish from "../svg/aboutImages/manish.svg";
import keerthi from "../svg/aboutImages/keerthi.svg";
import rohan from "../svg/aboutImages/rohan.svg";
import subash from "../svg/aboutImages/subash.svg";
import Image from "next/image";
import Link from "next/link";
import { useResponsiveSizes } from "../../context/responsive";

const TeamSection = () => {
    const isMobile =  useResponsiveSizes;

  return (
    <>
      <Box w={"100%"} h={"100%"}>
        {/* Founder section */}
        <VStack>
          <Heading
            as={"h2"}
            className="color-gradient"
            fontWeight={600}
            letterSpacing={"0.25rem"}
            fontSize={"1rem"}
          >
            MEET THE FOUNDERS
          </Heading>
          <Heading
            className="gradient"
            fontWeight={"400"}
            fontSize={{ base: "2.5rem", md: "3.75rem" }}
            lineHeight={"63.3px"}
          >
            Our Team Leader
          </Heading>
          <Text
            mt={"2rem"}
            textAlign={"center"}
            color={extendedTheme.colors.secondary}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </Text>
          <Grid mt={'4rem'} mx={{base:'1rem'}} gap={{ md:'10rem', base:'3rem'}} templateColumns="repeat(2, 1fr)">
            <VStack mb={"1rem"}>
              <Image alt="manish" src={manish} width={260} height={276} />
              <Text
                color={"#E5E5E5"}
                fontWeight={"700"}
                fontSize={{ md: "1.3rem", base: "1rem" }}
              >
                Manish Sainani
              </Text>
              <Text color={"#ABABAB"}>Founder and CEO</Text>
              <Link href="https://www.linkedin.com/in/manishsainani/">
                <Image
                  alt="manishLinkedIn"
                  src={linkedln}
                  width={24}
                  height={24}
                />
              </Link>
            </VStack>
            <VStack>
              <Image alt="justin" src={justin} width={260} height={276} />
              <Text
                color={"#E5E5E5"}
                fontWeight={"700"}
                fontSize={{ md: "1.3rem", base: "1rem" }}
              >
                Justin Donaldson
              </Text>
              <Text color={"#ABABAB"}>CTO & Chief Scientist</Text>
              <Link href="https://www.linkedin.com/in/jjustindonaldson/">
                <Image alt="justinLinedIn" src={linkedln} width={24} height={24} />
              </Link>
            </VStack>
          </Grid>
        </VStack>

        {/* Team section */}
        <VStack mt={{base:'2rem', md:'5rem'}}>
          <Heading
            as={"h2"}
            className="color-gradient"
            fontWeight={600}
            letterSpacing={"0.25rem"}
            fontSize={"1rem"}
          >
            THE TEAM
          </Heading>
          <Heading
            className="gradient"
            fontWeight={"400"}
            fontSize={{ base: "2.5rem", md: "3.75rem" }}
            lineHeight={"63.3px"}
          >
            Our Team
          </Heading>
          <Text
            my={"2rem"}
            textAlign={"center"}
            color={extendedTheme.colors.secondary}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </Text>
        </VStack>
        <Grid templateColumns="repeat(4, 1fr)" mb={{base:'2rem', md:'4rem'}}>
        <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Vivek Swaminathan
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href="https://www.linkedin.com/in/vivek-swaminathan-374891a6/">
              <Image
                alt="vivekLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={subash} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Subash Manoharan
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/subash-manoharan/"}>
              <Image
                alt="subashLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Karthick Muthu
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>UX Designer</Text>
            <Link href={"https://www.linkedin.com/in/karthick09/"}>
              <Image
                alt="karthickLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={rohan} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Rohan Sidankar
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link
              href={"https://www.linkedin.com/in/rohan-sidankar-017205207/"}
            >
              <Image
                alt="rohanLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={keerthi} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Keerthi Sree Marrapu
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/mksree/"}>
              <Image
                alt="keerthiLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Satyam Arora
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/satyam-arora01/"}>
              <Image
                alt="satyamLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Omkar Malpure
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/omkar-malpure/"}>
              <Image
                alt="omkarLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Vasundhhara Katoch
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link
              href={"https://www.linkedin.com/in/vasundhhara-katoch-a72299169/"}
            >
              <Image
                alt="vasundharaLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Devesh Paragiri
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/devesh-paragiri/"}>
              <Image
                alt="deveshLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Susanna Liu
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>UX Designer</Text>
            <Link href={"https://www.linkedin.com/in/susanna-liu/"}>
              <Image
                alt="susannaLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Ankit Kumar Singh
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Customer Engineer</Text>
            <Link
              href={"https://www.linkedin.com/in/ankit-kumar-singh-69305a22a/"}
            >
              <Image
                alt="ankitLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Kavya Chauhan
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Customer Engineer</Text>
            <Link href={"https://www.linkedin.com/in/kavya-chauhan-6290bb239/"}>
              <Image
                alt="kavyaLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Yash Makan
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/yashmakan/"}>
              <Image 
                alt="yashLinkedIn" 
                src={linkedln}                 
                width={{base: 12, md:24}}
                height={24} 
              />
            </Link>
          </VStack>

          <VStack mb={{ md:"3rem", base:"1.5rem"}}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Anurag Ghose
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>UX/UI Designer</Text>
            <Link href={"https://www.linkedin.com/in/anurag-ghose-851666203/"}>
              <Image
                alt="anuragLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Akash Katla
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/akashkatla"}>
              <Image
                alt="akashLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Karan Soni
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/karansoni1072002/"}>
              <Image
                alt="karanLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Neelesh Meena
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/neelesh-meena-73b07b1a0/"}>
              <Image
                alt="neeleshLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Apoorv Bedmutha
            </Text>
            <Text color={"#ABABAB"} fontSize={{ md:"1rem", base:"0.5rem" }}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/apoorvbedmutha/"}>
              <Image
                alt="apoorvLinkedIn"
                src={linkedln}
                width={{base: 12, md:24}}
                height={24}
              />
            </Link>
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default TeamSection;
