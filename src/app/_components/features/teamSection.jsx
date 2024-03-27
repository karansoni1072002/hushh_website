"use client";
import {
  Heading,
  VStack,
  Text,
  Box,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import React from "react";
import linkedln from "../svg/icons/linkedIn.svg";
import Image from "next/image";
import Link from "next/link";
import { teamImages } from "./teamImages";
import { useState } from "react";
import { advisorsData } from "../advisorsBioData/advisorsData";

const TeamSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null
    );

  const openModal = (advisor) => {
    setSelectedAdvisor(advisor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAdvisor(null);
    setIsOpen(false);
  };

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
            <div className="md:pb-10 pb-4">
              <Heading
                className="gradient"
                fontWeight={"400"}
                fontSize={{ base: "2.5rem", md: "3.75rem" }}
                lineHeight={"63.3px"}
                textAlign={{ base: "center" }}
              >
                Our Team Leader
              </Heading>
            </div>
            <div className="font-medium text-fontColor4 leading-9 md:w-[30rem] text-center">
              <p>
                Leadership isn't a title, it's an action. Thank you for leading
                by example.
              </p>
            </div>
            <Grid
              mt={"4rem"}
              mx={{ base: "1rem" }}
              gap={{ md: "10rem", base: "3rem" }}
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            >
              <VStack mb={"1rem"}>
                <div className="flex flex-col gap-8 text-center items-center">
                  <Image
                    alt="manish"
                    src={teamImages.Manish}
                    width={260}
                    height={276}
                  />
                  <div className="flex flex-col gap-4">
                    <Text
                      color={"#E5E5E5"}
                      fontWeight={"700"}
                      fontSize={"1.3rem"}
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
                  <Image
                    alt="justin"
                    src={teamImages.Justin}
                    width={260}
                    height={276}
                  />
                  <div className="flex flex-col gap-4">
                    <Text
                      color={"#E5E5E5"}
                      fontWeight={"700"}
                      fontSize={"1.3rem"}
                    >
                      Justin Donaldson
                    </Text>
                    <Text color={"#ABABAB"}>
                      Co-founder and Chief Data Scientist
                    </Text>
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
        <div className="mt-24 md:mt-0">
          <VStack mt={{ base: "2rem", md: "8rem" }}>
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
            <div className="md:pb-10 pb-4">
              <Heading
                className="gradient"
                fontWeight={"400"}
                fontSize={{ base: "2.5rem", md: "3.75rem" }}
                lineHeight={"63.3px"}
              >
                Our Team
              </Heading>
            </div>
            <div className="font-medium text-fontColor4 leading-9 md:w-[30rem] text-center">
              <p>
                The Hushh team: Disrupting the status quo, one line of code at a
                time
              </p>
            </div>
          </VStack>
        </div>
        <div className="mt-12 md:mt-0">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          >
            <VStack mb={{ md: "3rem", base: "1.5rem" }}>
              <Image
                alt="vivek"
                src={teamImages.VivekSwaminathan}
                width={260}
                height={276}
              />
              <div className=" -translate-y-16 flex flex-col items-center text-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Vivek Swaminathan
                  </Text>
                  <Text color={"#ABABAB"}>TT Software Engineer - API</Text>
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
              <Image
                alt="vivek"
                src={teamImages.SubashManoharan}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Subash Manoharan
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    TT Software Engineer - Front End
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.KeerthiSreeMarrapu}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Keerthi Sree Marrapu
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Product Manager - AI/ML
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.RohanSidankar}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Rohan Sidankar
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.SatyamArora}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Satyam Arora
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - Full Stack
                  </Text>
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
              fontSize={"1.3rem"}
            >
              Satyam Arora
            </Text>
            <Text lineHeight={"18.75px"} color={"#ABABAB"}>Software Engineer</Text>
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
              <Image
                alt="vivek"
                src={teamImages.OmkarKailasMalpure}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Omkar Kailas Malpure
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - AI/ML
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.VasundhharaKatoch}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Vasundhhara Katoch
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - AI/ML + Product Evangelist
                  </Text>
                </div>
                <Link
                  href={
                    "https://www.linkedin.com/in/vasundhhara-katoch-a72299169/"
                  }
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
              <Image
                alt="vivek"
                src={teamImages.DeveshParagiri}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Devesh Paragiri
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - API + Product Evangelist
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.SusannaLiu}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Susanna Liu
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    UX Designer
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.AnkitKumarSingh}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Ankit Kumar Singh
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Customer Engineer - Full Stack
                  </Text>
                </div>
                <Link
                  href={
                    "https://www.linkedin.com/in/ankit-kumar-singh-69305a22a/"
                  }
                >
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
              <Image
                alt="vivek"
                src={teamImages.KavyaChauhan}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Kavya Chauhan
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Customer Engineer - Full Stack
                  </Text>
                </div>
                <Link
                  href={"https://www.linkedin.com/in/kavya-chauhan-6290bb239/"}
                >
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
              <Image
                alt="vivek"
                src={teamImages.YashMakan}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Yash Makan
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - Full Stack
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.AnuragGhose}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Anurag Ghose
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    UX/UI Designer
                  </Text>
                </div>
                <Link
                  href={"https://www.linkedin.com/in/anurag-ghose-851666203/"}
                >
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
              <Image
                alt="vivek"
                src={teamImages.AkashKatla}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Akash Katla
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - API
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.KaranSoni}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Karan Soni
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - Full Stack
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.NeeleshMeena}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Neelesh Meena
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - Full Stack
                  </Text>
                </div>
                <Link
                  href={"https://www.linkedin.com/in/neelesh-meena-73b07b1a0/"}
                >
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
        </div>
        <div className="md:flex justify-center">
          <div className="px-9">
            <VStack>
              <Image
                alt="vivek"
                src={teamImages.ApoorvBedmutha}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Apoorv Bedmutha
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    Software Engineer - Full Stack
                  </Text>
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
              <Image
                alt="vivek"
                src={teamImages.KarthickMuthu}
                width={260}
                height={276}
              />
              <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Text
                    color={"#E5E5E5"}
                    lineHeight={"26.4px"}
                    fontWeight={"700"}
                    fontSize={"1.3rem"}
                  >
                    Karthick Muthu
                  </Text>
                  <Text lineHeight={"18.75px"} color={"#ABABAB"}>
                    TT UX Designer
                  </Text>
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

        {/* Our Advisors Section */}
        <div className="mt-24 md:mt-0">
          <VStack mt={{ base: "2rem", md: "8rem" }}>
            <div className="pb-2.5">
              <Heading
                as={"h2"}
                className="color-gradient"
                fontWeight={600}
                letterSpacing={"0.25rem"}
                fontSize={"1rem"}
              >
                MEET OUR ADVISORS
              </Heading>
            </div>
            <div className="md:pb-10 pb-4">
              <Heading
                className="gradient"
                fontWeight={"400"}
                fontSize={{ base: "2.5rem", md: "3.75rem" }}
                lineHeight={"63.3px"}
              >
                Wisdom in Action
              </Heading>
            </div>
            <div className="font-medium text-fontColor4 leading-9 md:w-[30rem] text-center">
              <p>
                Hushh Adivsors : Leading with expertise, shaping tomorrow's
                decisions today
              </p>
            </div>
          </VStack>
        </div>
        <div className="mt-12 md:mt-0">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          >
            {advisorsData.map((advisor, index) => (
              <VStack key={index} mb={{ md: "3rem", base: "1.5rem" }}>
                <Image
                  onClick={() => openModal(advisor)}
                  // onMouseLeave={closeModal}
                  alt={advisor.name}
                  src={advisor.avatar}
                  width={260}
                  height={276}
                />
                <div className="-translate-y-16 flex flex-col text-center items-center gap-8">
                  <div className="flex flex-col gap-4">
                    <Text
                      color={"#E5E5E5"}
                      fontWeight={"700"}
                      fontSize={"1.3rem"}
                    >
                      {advisor.name}
                    </Text>
                    <Text color={"#ABABAB"}>{advisor.position}</Text>
                  </div>
                  <div>
                    <Link href={advisor.linkedin}>
                      <Image
                        alt="sureshLinkedIn"
                        src={linkedln}
                        width={{ base: 12, md: 24 }}
                        height={24}
                      />
                    </Link>
                  </div>
                </div>
              </VStack>
            ))}
          </Grid>
        </div>
      </Box>

      <Modal isOpen={isOpen} onClose={closeModal}>
  <ModalOverlay />
  <ModalContent w={{md:'30rem', base:'20rem'}} borderRadius={'2rem'} p={'1rem'}>
    {selectedAdvisor && (
      <>
        {/* <ModalHeader>{selectedAdvisor.name}</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>
          <Image src={selectedAdvisor.imageSrc} alt={selectedAdvisor.name} style={{width:'200px' ,height:'200px'}} />
          <Heading my={{md:'0.75rem'}} fontSize={'2rem'}>{selectedAdvisor.name}</Heading>
          <Text mb={{md:'0.75rem'}} fontSize={'1rem'}><b>Role at Hushh🤫: </b>{selectedAdvisor.position}</Text>
          <Text mb={{md:'0.75rem'}} fontSize={'1rem'}><b>Currently working at: </b>{selectedAdvisor.currentWork}</Text>
          <Text fontSize={'1rem'}><b>Locality: </b>
          {selectedAdvisor.currentLocation}
          </Text>
        </ModalBody>
      </>
    )}
  </ModalContent>
</Modal>

    </>
  );
};

export default TeamSection;
