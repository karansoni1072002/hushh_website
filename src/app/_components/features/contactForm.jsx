"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import FooterComponent from "./FooterComponent";
import CircelFormShadow from "../../_components/svg/circleFormShadow.svg";
import Image from "next/image";
import BigCircleFormShadow from "../../_components/svg/BigCircleFormShadow.svg";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

emailjs.init("_TMzDc8Bfy6riSfzq");

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formErrors, setFormErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const toast = useToast();
  const businessEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const freeEmailProviders = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'aol.com',
    // Add more free email providers if needed
  ];

  const isBusinessEmail = (email) => {
    if (!businessEmailRegex.test(email)) {
      return false;
    }
    const domain = email.split('@')[1];
    return !freeEmailProviders.includes(domain);
  };

  const validateEmail = () => {
    const newErrors = { email: '' };
    let isValid = true;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isBusinessEmail(email)) {
      newErrors.email = 'Please use a business email address';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isBusinessEmail(email)) {
      newErrors.email = 'Please use a business email address';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!number.trim()) {
      newErrors.number = "Phone number is required";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        toast({
          title: "Message sent.",
          description: "We've received your message and will get back to you shortly.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setNumber("");
        setMessage("");
        setSubject("");
      }, (error) => {
        console.error("Sending mail FAILED...", error.text);
      });
  };

  return (
    <>
      <div className="relative" style={{backgroundColor:'#060606 !important'}} id="contact-form">
        <div className="relative z-10">
          <Container
            id="contact-form"
            maxW={{ md: "74rem" }}
            height={{ md: "667px" }}
            p={"1rem"}
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            bg={"#1D1D1D"}
            // mt={{ md: "5rem", base: "2rem" }}
            zIndex={10}
          >
            <Box
              p={"2rem"}
              className="new-gradient-bg"
              borderRadius={"0.5rem"}
              flexDirection={"column"}
              display={{md:"flex",base:'none'}}
              flex={1}
              position={"relative"}
            >
              <HStack
                textAlign={"left"}
                alignItems={"left"}
                flexDirection={"column"}
                mb={{ md: "6rem", base: "2rem" }}
              >
                <Text
                  color={"#FFFFFF"}
                  fontWeight={"600"}
                  fontSize={{ md: "3.75rem", base: "2rem" }}
                  lineHeight={{ base: "28px", md: "55px" }}
                >
                  Connect with Hushh
                </Text>
                <Text color={"#C9C9C9"}>Say something to reach out to us</Text>
              </HStack>
              <HStack
                gap={{ md: "3rem", base: "0.5rem" }}
                textAlign={"left"}
                alignItems={"left"}
                flexDirection={"column"}
                color={"#FFFFFF"}
              >
                <Text>info@hush1one.com</Text>
                <a href="tel:+14252969050">
                  <Text>+14252969050</Text>
                </a>
                <Text>
                  Hushh.ai <br></br>
                  1021 5th St W <br></br>
                  Kirkland, WA 98033
                </Text>
              </HStack>
              <Image
                src={CircelFormShadow}
                alt="CircelFormShadow"
                style={{
                  position: "absolute",
                  zIndex: "7",
                  top: "430px",
                  right: "80px",
                  bottom: "0",
                }}
              />
              <Image
                src={BigCircleFormShadow}
                alt="BigCircleFormShadow"
                style={{
                  position: "absolute",
                  zIndex: "7",
                  right: "0",
                  bottom: "0",
                }}
              />
            </Box>
            <Box
              p={"2rem"}
              className="new-gradient-bg"
              borderRadius={"0.5rem"}
              flexDirection={"column"}
              display={{md:"none",base:'flex'}}
              flex={1}
              position={"relative"}
            >
              <HStack
                textAlign={"left"}
                alignItems={"left"}
                flexDirection={"column"}
                mb={{ md: "6rem", base: "2rem" }}
              >
                <Text
                  color={"#FFFFFF"}
                  fontWeight={"600"}
                  fontSize={{ md: "3.75rem", base: "2rem" }}
                  lineHeight={{ base: "28px", md: "55px" }}
                >
                  Connect with hushh
                </Text>
                <Text color={"#C9C9C9"}>Say something to reach out to us</Text>
              </HStack>
              <HStack
                gap={{ md: "3rem", base: "0.5rem" }}
                textAlign={"left"}
                alignItems={"left"}
                flexDirection={"column"}
                color={"#FFFFFF"}
              >
                <Text>info@hush1one.com</Text>
                <a href="tel:+14252969050">
                  <Text>+14252969050</Text>
                </a>
                <Text>
                  Hushh.ai <br></br>
                  1021 5th St W <br></br>
                  Kirkland, WA 98033
                </Text>
              </HStack>
            </Box>
            {/* Contact Form */}
            <Box p={{md:'4rem',base:'1rem'}} px={{ md: "4rem", base: "1rem" }} flex={{md:1.75,base:1}} display={"flex"}>
              <form id="form" onSubmit={sendEmail}  style={{ color: "white" }}>
                <HStack
                  display={{ base: "block", md: "flex" }}
                  flexDirection={{ base: "column", md: "row" }}
                  gap={{ md: "2rem", base: "1rem" }}
                  w={'100%'}
                >
                  <Stack
                    gap={{ md: "0rem", base: "0.5rem" }}
                    mb={{ base: "1rem",md:'2rem' }}
                  >
                    <Text
                      fontWeight={"500"}
                      fontSize={"0.75rem"}
                      color={"white"}
                    >
                      Full Name
                    </Text>
                    <Input
                      variant="unstyled"
                      size={"sm"}
                      w={{md:"22rem",base:'100%'}}
                      p={{md:2,base:0}}
                      border={'none'}
                      placeholder="Full Name"
                      borderBottom="1px solid white"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)} // Update state on change
                    />
                    {formErrors.firstName && (
                      <Text color="red" fontSize="xs">
                        {formErrors.firstName}
                      </Text>
                    )}
                  </Stack>

                 
                </HStack>
                <HStack>
                <Stack
                    gap={{ md: "0rem", base: "0.5rem" }}
                    mb={{ base: "1rem",md:'2rem' }}
                  >
                    <Text
                      fontWeight={"500"}
                      fontSize={"0.75rem"}
                      color={"white"}
                    >
                      Business Email
                    </Text>
                    <Input
                      variant="unstyled"
                      size={"sm"}
                      w={{md:"22rem",base:'100%'}}
                      border={'none'}
                      p={{md:2,base:0}}
                      borderBottom="1px solid white"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {formErrors.email && (
                      <Text color="red" fontSize="xs">
                      {formErrors.email}
                      </Text>
                    )}
                  </Stack>
                </HStack>
                <HStack
                  mb={"2rem"}
                  py={"1rem"}
                  display={"flex"}
                  alignItems={"left"}
                  flexDirection={"column"}
                >
                  <Text fontWeight={"500"} fontSize={"0.75rem"} color={"white"}>
                    Select Subject:{" "}
                  </Text>
                  <RadioGroup defaultValue="ProductInquiry">
                    <HStack
                      display={{ md: "flex", base: "flex" }}
                      flexDirection={{ base: "column", md: "row" }}
                      spacing={{ md: "2rem", base: "1rem" }}
                      align={"stretch"}
                    >
                      <Radio
                        colorScheme="white"
                        name="subject"
                        onChange={(e) => setSubject("Explore Hushh Products")}
                      >
                        <Text fontSize={"0.75rem"}>Explore Hushh Products</Text>
                      </Radio>
                      <Radio
                        colorScheme="white"
                        name="subject"
                        onChange={(e) => setSubject("Partner with Hushh")}
                      >
                        <Text fontSize={"0.75rem"}>Partner with Hushh</Text>
                      </Radio>
                      <Radio
                        colorScheme="white"
                        onChange={(e) => setSubject("Get Support")}
                        name="subject"
                      >
                        <Text fontSize={"0.75rem"}>Get Support</Text>
                      </Radio>
                    </HStack>
                  </RadioGroup>
                  {formErrors.subject && (
                      <Text color="red" fontSize="xs">
                      {formErrors.subject}
                    </Text>
                  )}
                </HStack>
                <HStack
                  mb={{ md: "2rem", base: "1rem" }}
                  alignItems={"left"}
                  flexDirection={"column"}
                >
                  <Text fontWeight={"500"} fontSize={"0.75rem"} color={"white"}>
                    Message
                  </Text>
                  <Textarea
                    h={"6.25rem"}
                    w={{ base: "15.625rem", md: "100%" }}
                    placeholder="Type your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {formErrors.message && (
                      <Text color="red" fontSize="xs">
                      {formErrors.message}
                    </Text>
                  )}
                </HStack>
                <HStack alignItems={'flex-start'} justifyContent="flex-end" w={"100%"}>
                  <Button
                    type="submit"
                    bg={"transparent"}
                    px={"2rem"}
                    border={"3px solid #606060"}
                    borderRadius={"2px"}
                    _hover={{
                      background:
                        "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                      border: "none",
                    }}
                    onClick={(e) => {
                      sendEmail(e);
                    }}
                  >
                    <Text
                      color={"white"}
                      fontSize={"1rem"}
                      letterSpacing={"0.29rem"}
                      lineHeight={"28px"}
                    >
                      HUSHH IT!
                    </Text>
                  </Button>
                </HStack>
              </form>
            </Box>
          </Container>
        </div>
        <div className="z-0 absolute top-2/3 w-full">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
