import {
  Heading,
  VStack,
  Text,
  Box,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import linkedln from "../svg/icons/linkedIn.svg";
import Image from "next/image";
import Link from "next/link";
import { teamImages } from "./teamImages";

const TeamSection = () => {
  return (
    <>
      <Box w={"100%"} h={"100%"}>
        {/* Founder section */}
        <div className="">
          <VStack>
            <div className="pb-2.5">
              <Heading
                as={"h2"}
                className="color-gradient"
                fontWeight={600}
                letterSpacing={"0.25rem"}
                fontSize={"1rem"}
              >
                MEET THE FOUNDERS
              </Heading>
            </div>
            <div className="pb-10">
              <Heading
                className="gradient"
                fontWeight={"400"}
                fontSize={{ base: "2.5rem", md: "3.75rem" }}
                lineHeight={"63.3px"}
              >
                Our Team Leader
              </Heading>
            </div>
            <div className="font-medium text-fontColor4 leading-9 w-[30rem] text-center">
              <p>Leadership isn't a title, it's an action. Thank you for leading by example.</p>
            </div>
            <Grid mt={'4rem'} mx={{ base: '1rem' }} gap={{ md: '10rem', base: '3rem' }} templateColumns="repeat(2, 1fr)">
              <VStack mb={"1rem"}>
                <div className="flex flex-col gap-8 text-center items-center">
                  <Image alt="manish" src={teamImages.Manish} width={260} height={276} />
                  <div className="flex flex-col gap-4">
                    <Text
                      color={"#E5E5E5"}
                      fontWeight={"700"}
                      fontSize={{ md: "1.3rem", base: "1rem" }}
                    >
                      Manish Sainani
                    </Text>
                    <Text color={"#ABABAB"}>Founder and CEO</Text>
                  </div>
                  <Link href="https://www.linkedin.com/in/manishsainani/">
                    <Image
                      alt="manishLinkedIn"
                      src={linkedln}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </VStack>
              <VStack>
                <div className="flex flex-col gap-8 text-center items-center">
                  <Image alt="justin" src={teamImages.Justin} width={260} height={276} />
                  <div className="flex flex-col gap-4">
                    <Text
                      color={"#E5E5E5"}
                      fontWeight={"700"}
                      fontSize={{ md: "1.3rem", base: "1rem" }}
                    >
                      Justin Donaldson
                    </Text>
                    <Text color={"#ABABAB"}>Co-founder and Chief Data Scientist</Text>
                  </div>
                  <Link href="https://www.linkedin.com/in/jjustindonaldson/">
                    <Image
                      alt="manishLinkedIn"
                      src={linkedln}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </VStack>
            </Grid>
          </VStack>
        </div>

        {/* Team section */}
        <VStack mt={{ base: '2rem', md: '8rem' }}>
          <div className="pb-2.5">
            <Heading
              as={"h2"}
              className="color-gradient"
              fontWeight={600}
              letterSpacing={"0.25rem"}
              fontSize={"1rem"}
            >
              THE TEAM
            </Heading>
          </div>
          <div className="pb-10">
            <Heading
              className="gradient"
              fontWeight={"400"}
              fontSize={{ base: "2.5rem", md: "3.75rem" }}
              lineHeight={"63.3px"}
            >
              Our Team
            </Heading>
          </div>
          <div className="font-medium text-fontColor4 leading-9 w-[30rem] text-center">
            <p>The Hushh team: Disrupting the status quo, one line of code at a time</p>
          </div>
        </VStack>
        <Grid templateColumns="repeat(4, 1fr)" mb={{ base: '2rem', md: '4rem' }}>
          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.VivekSwaminathan} width={260} height={276} />
            <div className=" -translate-y-16 flex flex-col items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Vivek Swaminathan
                </Text>
                <Text color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>TT Software Engineer - API</Text>
              </div>
              <div className="">
                <Link href="https://www.linkedin.com/in/vivek-swaminathan-374891a6/">
                  <Image
                    alt="vivekLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.SubashManoharan} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Subash Manoharan
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>TT Software Engineer - Front End</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/subash-manoharan/"}>
                <Image
                  alt="subashLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.KeerthiSreeMarrapu} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Keerthi Sree Marrapu
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Product Manager - AI/ML</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/mksree/"}>
                <Image
                  alt="karthickLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.RohanSidankar} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Rohan Sidankar
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer</Text>
              </div>
              <Link
                href={"https://www.linkedin.com/in/rohan-sidankar-017205207/"}
              >
                <Image
                  alt="rohanLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.SatyamArora} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Satyam Arora
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer - Full Stack</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/satyam-arora01/"}>
                <Image
                  alt="keerthiLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          {/* <VStack mb={{ md: "3rem", base: "1.5rem" }}>
            
          <Image alt="vivek" src={vivek} width={260} height={276} />
          <div className="-translate-y-16 flex flex-c text-centerol items-center gap-8">
          <div className="flex flex-col gap-4">  
          <Text
              color={"#E5E5E5"}
              lineHeight={"26.4px"}
              fontWeight={"700"}
              fontSize={{ md: "1.3rem", base: "0.5rem" }}
            >
              Satyam Arora
            </Text>
            <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer</Text>
          </div>
            <Link href={"https://www.linkedin.com/in/satyam-arora01/"}>
              <Image
                alt="satyamLinkedIn"
                src={linkedln}
                width={{ base: 12, md: 24 }}
                height={24}
              />
            </Link>
            </div>
          </VStack> */}

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.OmkarKailasMalpure} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Omkar Kailas Malpure
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer - AI/ML</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/omkar-malpure/"}>
                <Image
                  alt="omkarLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.VasundhharaKatoch} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Vasundhhara Katoch
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer - AI/ML + Product Evangelist</Text>
              </div>
              <Link
                href={"https://www.linkedin.com/in/vasundhhara-katoch-a72299169/"}
              >
                <Image
                  alt="vasundharaLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.DeveshParagiri} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Devesh Paragiri
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer - API + Product Evangelist</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/devesh-paragiri/"}>
                <Image
                  alt="deveshLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.SusannaLiu} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Susanna Liu
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>UX Designer</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/susanna-liu/"}>
                <Image
                  alt="susannaLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.AnkitKumarSingh} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Ankit Kumar Singh
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Customer Engineer - Full Stack</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/ankit-kumar-singh-69305a22a/"}>
                <Image
                  alt="ankitLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.KavyaChauhan} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Kavya Chauhan
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Customer Engineer - Full Stack</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/kavya-chauhan-6290bb239/"}>
                <Image
                  alt="kavyaLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.YashMakan} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Yash Makan
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer - Full Stack</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/yashmakan/"}>
                <Image
                  alt="yashLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>

          <VStack mb={{ md: "3rem", base: "1.5rem" }}>

            <Image alt="vivek" src={teamImages.AnuragGhose} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Anurag Ghose
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>UX/UI Designer</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/anurag-ghose-851666203/"}>
                <Image
                  alt="anuragLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>
          <VStack>

            <Image alt="vivek" src={teamImages.AkashKatla} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Akash Katla
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer - API</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/akashkatla"}>
                <Image
                  alt="akashLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>
          <VStack>

            <Image alt="vivek" src={teamImages.KaranSoni} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Karan Soni
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer - Full Stack</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/karansoni1072002/"}>
                <Image
                  alt="karanLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>
          <VStack>

            <Image alt="vivek" src={teamImages.NeeleshMeena} width={260} height={276} />
            <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
              <div className="flex flex-col gap-4">
                <Text
                  color={"#E5E5E5"}
                  lineHeight={"26.4px"}
                  fontWeight={"700"}
                  fontSize={{ md: "1.3rem", base: "0.5rem" }}
                >
                  Neelesh Meena
                </Text>
                <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer - Full Stack</Text>
              </div>
              <Link href={"https://www.linkedin.com/in/neelesh-meena-73b07b1a0/"}>
                <Image
                  alt="neeleshLinkedIn"
                  src={linkedln}
                  width={{ base: 12, md: 24 }}
                  height={24}
                />
              </Link>
            </div>
          </VStack>
        </Grid>
        <div className="flex justify-center">
          <div className="px-9">
            <VStack>
              <Image alt="vivek" src={teamImages.ApoorvBedmutha} width={260} height={276} />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={{ md: "1.3rem", base: "0.5rem" }}
                  >
                    Apoorv Bedmutha
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>Software Engineer - Full Stack</Text>
                </div>
                <Link href={"https://www.linkedin.com/in/apoorvbedmutha/"}>
                  <Image
                    alt="apoorvLinkedIn"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>
          </div>
          <div className="px-9">
            <VStack>
              <Image alt="vivek" src={teamImages.KarthickMuthu} width={260} height={276} />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={{ md: "1.3rem", base: "0.5rem" }}
                  >
                    Karthick Muthu
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"} fontSize={{ md: "1rem", base: "0.5rem" }}>TT UX Designer</Text>
                </div>
                <Link href={"https://www.linkedin.com/in/karthick09/"}>
                  <Image
                    alt="karthickLinkedin"
                    src={linkedln}
                    width={{ base: 12, md: 24 }}
                    height={24}
                  />
                </Link>
              </div>
            </VStack>
          </div>
        </div>
      </Box>
    </>
  );
};

export default TeamSection;
