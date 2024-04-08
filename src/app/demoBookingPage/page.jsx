"use client";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import BlueTick from "../_components/svg/icons/blueTick.svg";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import HushhButtonDemo from "../_components/svg/hushhButtonDemo.svg";

const DemoBookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    product: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    product: "",
  });

  const products = [
    "Hushh Button",
    "Hushh Wallet App",
    "Browser Comapnion",
    "Vibe Search",
    "All",
  ];

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      newErrors.name = "";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
      valid = false;
    } else {
      newErrors.phoneNumber = "";
    }

    if (!formData.product) {
      newErrors.product = "Product selection is required";
      valid = false;
    } else {
      newErrors.product = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Redirect to the Calendly page with form data as query parameters
      window.location.href = `/schedule-call?name=${formData.name}&email=${formData.email}&message=${formData.message}`;
    }
  };
  return (
    <>
      <Box p={{ base: 4, md: 8 }}>
        <Stack
          mt={{ md: "5rem", base: "2rem" }}
          px={{ base: 4, md: 14 }}
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
        >
          <Box
            gap={{ md: "1.5rem", base: "1rem" }}
            display={"flex"}
            flex={1}
            flexDirection={"column"}
          >
            <Heading
              className="gradient"
              fontWeight={"700"}
              fontSize={{ md: "4.625rem", base: "2.31rem" }}
              lineHeight={{ md: "90.28px", base: "58px" }}
              as={"h1"}
            >
              Explore hushh in <div className="new-gradient"> Action</div>
            </Heading>
            <Text
              fontSize={{ md: "1.25rem", base: "1rem" }}
              color={"#FFFFFF"}
              fontWeight={"400"}
              lineHeight={"30px"}
              letterSpacing={"-0.4px"}
            >
              Join us for a live demonstration of Hushh and unlock the secrets
              to building apps faster.
            </Text>
            <List spacing={3} color={"#FFFFFF"}>
              <ListItem display={"flex"} gap={"1rem"}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Receive a personalized introduction to the Hushh platform
              </ListItem>
              <ListItem display={"flex"} gap={"1rem"}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Engage in a one-on-one session with a platform expert
              </ListItem>
              <ListItem display={"flex"} gap={"1rem"}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Discover the rapid automation capabilities for both simple and
                complex processes
              </ListItem>
              <ListItem display={"flex"} gap={"1rem"}>
                <Image src={BlueTick} alt="blueTick" width="13" height="14" />
                Witness the perfect blend of no-code and low-code
                functionalities
              </ListItem>
            </List>
            <Text fontSize={{ md: "1.25rem", base: "1rem" }} color={"#FFFFFF"}>
              Take advantage of a complimentary overview of hushh to determine
              if it aligns with your needs.
            </Text>
          </Box>
          <Box
            borderRadius={"1rem"}
            bg={"#151515"}
            display={"flex"}
            flex={1}
            flexDirection={"column"}
          >
            <form
              style={{ padding: "2rem", width: "100%" }}
              onSubmit={handleSubmit}
            >
              <Heading
                color={"#FFFFFF"}
                fontWeight={"700"}
                lineHeight={"30px"}
                letterSpacing={"-0.2px"}
                fontSize={{ md: "1.25rem", base: "0.85" }}
                display={"flex"}
                gap={"0.25rem"}
                mb={{ md: "1.75rem", base: "0.8rem" }}
              >
                Schedule your free{" "}
                <div className="personalized-demo">Personalized Demo</div>
              </Heading>
              <FormControl isInvalid={errors.name}>
                <FormLabel
                  fontWeight={"400"}
                  fontSize={{ md: "14px", base: "10px" }}
                  lineHeight={"26px"}
                  letterSpacing={"-0.4px"}
                  color={"#FFFFFF"}
                >
                  Name*
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  border={"1px solid #242424"}
                  color={"#FFFFFF"}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email} mt={4}>
                <FormLabel
                  fontWeight={"400"}
                  fontSize={{ md: "14px", base: "10px" }}
                  lineHeight={"26px"}
                  letterSpacing={"-0.4px"}
                  color={"#FFFFFF"}
                >
                  Business Email*
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  border={"1px solid #242424"}
                  color={"#FFFFFF"}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.product} mt={4}>
                <FormLabel
                  fontWeight={"400"}
                  fontSize={{ md: "14px", base: "10px" }}
                  lineHeight={"26px"}
                  letterSpacing={"-0.4px"}
                  color={"#FFFFFF"}
                >
                  Product
                </FormLabel>
                <Select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Please Select Product"
                  color={"#FFFFFF"}
                  border={"1px solid #242424"}
                >
                  {products.map((product, index) => (
                    <option color="#FFFFFF" key={index} value={product}>
                      {product}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.product}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.phoneNumber} mt={4}>
                <FormLabel
                  color={"#FFFFFF"}
                  fontWeight={"400"}
                  fontSize={{ md: "14px", base: "10px" }}
                  lineHeight={"26px"}
                  letterSpacing={"-0.4px"}
                >
                  Phone Number
                </FormLabel>
                <Input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  border={"1px solid #242424"}
                  color={"#FFFFFF"}
                />
                <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
              </FormControl>

              <Button type="submit" mt={4} colorScheme="teal">
                Submit
              </Button>
            </form>
          </Box>
        </Stack>

        <VStack
          gap={{ md: "0.1rem", base: "0.75rem" }}
          justify={"center"}
          mt={{ md: "5rem", base: "2.5rem" }}
        >
          <Text
            as={"h2"}
            className="bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text"
            fontWeight={500}
            letterSpacing={"0.04rem"}
            fontSize={{ base: "1rem", md: "1.25rem" }}
            lineHeight={"32px"}
          >
            HUSHH
          </Text>
          <Heading
            className="gradient"
            fontWeight={"700"}
            fontSize={{ md: "4.625rem", base: "2.31rem" }}
            lineHeight={{ md: "90px", base: "55px" }}
          >
            Interactive demo videos
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={HushhButtonDemo} alt="HushhButtonDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={"32px"}
                fontSize={{ md: "1.5rem", base: "1rem" }}
                letterSpacing={"-0.2px"}
                mt={{ md: "1.25rem", base: "0.75rem" }}
              >
                Hushh Button
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "1.15rem" }}
              >
                Watch Now
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={HushhButtonDemo} alt="HushhButtonDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={"32px"}
                fontSize={{ md: "1.5rem", base: "1rem" }}
                letterSpacing={"-0.2px"}
                mt={{ md: "1.25rem", base: "0.75rem" }}
              >
                Browser Companion
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "1.15rem" }}
              >
                Watch Now
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={HushhButtonDemo} alt="HushhButtonDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={"32px"}
                fontSize={{ md: "1.5rem", base: "1rem" }}
                letterSpacing={"-0.2px"}
                mt={{ md: "1.25rem", base: "0.75rem" }}
              >
                Vibe Search
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "1.15rem" }}
              >
                Watch Now
              </Text>
            </GridItem>
            <GridItem
              borderRadius={"8px"}
              p={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid #4B4B4B"}
              bg={"#121212"}
            >
              <Image src={HushhButtonDemo} alt="HushhButtonDemo" />
              <Text
                color={"#FFFFFF"}
                fontWeight={"400"}
                lineHeight={"32px"}
                fontSize={{ md: "1.5rem", base: "1rem" }}
                letterSpacing={"-0.2px"}
                mt={{ md: "1.25rem", base: "0.75rem" }}
              >
                Hushh App
              </Text>
              <Text
                color={"#0565FF"}
                fontWeight={"400"}
                letterSpacing={"-0.4px"}
                lineHeight={"26px"}
                fontSize={{ md: "1rem", base: "0.65rem" }}
                my={{ md: "2.15rem", base: "1.15rem" }}
              >
                Watch Now
              </Text>
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    </>
  );
};

export default DemoBookingPage;
