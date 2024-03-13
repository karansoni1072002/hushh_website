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
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
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
          <Grid mt={'4rem'} gap={'10rem'} templateColumns="repeat(2, 1fr)">
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
                  alt="vivekLinkedIn"
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
                <Image alt="subash" src={linkedln} width={24} height={24} />
              </Link>
            </VStack>
          </Grid>
        </VStack>

        {/* Team section */}
        <VStack>
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
            mt={"2rem"}
            textAlign={"center"}
            color={extendedTheme.colors.secondary}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </Text>
        </VStack>
        <Grid templateColumns="repeat(4, 1fr)">
          <VStack mb={"1rem"}>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Vivek Swaminathan
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href="https://www.linkedin.com/in/vivek-swaminathan-374891a6/">
              <Image
                alt="vivekLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Subash Manoharan
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/subash-manoharan/"}>
              <Image
                alt="subashLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Karthick Muthu
            </Text>
            <Text color={"#ABABAB"}>UX Designer</Text>
            <Link href={"https://www.linkedin.com/in/karthick09/"}>
              <Image
                alt="karthickLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Rohan Sidankar
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link
              href={"https://www.linkedin.com/in/rohan-sidankar-017205207/"}
            >
              <Image
                alt="rohanLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Keerthi Sree Marrapu
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/mksree/"}>
              <Image
                alt="keerthiLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Satyam Arora
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/satyam-arora01/"}>
              <Image
                alt="satyamLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Omkar Kailas Malpure
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/omkar-malpure/"}>
              <Image
                alt="omkarLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Vasundhhara Katoch
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link
              href={"https://www.linkedin.com/in/vasundhhara-katoch-a72299169/"}
            >
              <Image
                alt="vasundharaLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Devesh Paragiri
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/devesh-paragiri/"}>
              <Image
                alt="deveshLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Susanna Liu
            </Text>
            <Text color={"#ABABAB"}>UX Designer</Text>
            <Link href={"https://www.linkedin.com/in/susanna-liu/"}>
              <Image
                alt="susannaLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Ankit Kumar Singh
            </Text>
            <Text color={"#ABABAB"}>Customer Engineer</Text>
            <Link
              href={"https://www.linkedin.com/in/ankit-kumar-singh-69305a22a/"}
            >
              <Image
                alt="ankitLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Kavya Chauhan
            </Text>
            <Text color={"#ABABAB"}>Customer Engineer</Text>
            <Link href={"https://www.linkedin.com/in/kavya-chauhan-6290bb239/"}>
              <Image
                alt="kavyaLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Yash Makan
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/yashmakan/"}>
              <Image alt="yashLinkedIn" src={linkedln} width={24} height={24} />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Anurag Ghose
            </Text>
            <Text color={"#ABABAB"}>UX/ UI Designer</Text>
            <Link href={"https://www.linkedin.com/in/anurag-ghose-851666203/"}>
              <Image
                alt="anuragLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Akash Katla
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/akashkatla"}>
              <Image
                alt="akashLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Karan Soni
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/karansoni1072002/"}>
              <Image
                alt="karanLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Neelesh Meena
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/neelesh-meena-73b07b1a0/"}>
              <Image
                alt="neeleshLinkedIn"
                src={linkedln}
                width={24}
                height={24}
              />
            </Link>
          </VStack>
          <VStack>
            <Image alt="vivek" src={vivek} width={260} height={276} />
            <Text
              color={"#E5E5E5"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "1rem" }}
            >
              Apoorv Bedmutha
            </Text>
            <Text color={"#ABABAB"}>Software Engineer</Text>
            <Link href={"https://www.linkedin.com/in/apoorvbedmutha/"}>
              <Image
                alt="apoorvLinkedIn"
                src={linkedln}
                width={24}
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
