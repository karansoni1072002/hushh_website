import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
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
import extendedTheme from "../../theme";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <Box
        w={"1196px"}
        height={"667px"}
        p={"1rem"}
        display={"flex"}
        bg={"#1D1D1D"}
      >
        <Box
          p={"2rem"}
          className="new-gradient-bg"
          borderRadius={"0.5rem"}
          flexDirection={"column"}
        >
          <HStack
            textAlign={"left"}
            alignItems={"left"}
            flexDirection={"column"}
            mb={"6rem"}
          >
            <Heading
              color={"#FFFFFF"}
              fontWeight={"600"}
              fontSize={"3.75rem"}
              lineHeight={{ base: "28px", md: "55px" }}
            >
              Connect with hushh
            </Heading>
            <Text color={"#C9C9C9"}>Say something to reach out to us</Text>
          </HStack>
          <HStack
            gap={"3rem"}
            textAlign={"left"}
            alignItems={"left"}
            flexDirection={"column"}
            color={"#FFFFFF"}
          >
            <Text>demo@gmail.com</Text>
            <Text>+1012 3456 789</Text>
            <Text>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </Text>
          </HStack>
        </Box>

        {/* Contact Form */}
        <Box p={"4rem"} display={"flex"}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ color: "white" }}>
            <HStack gap={"2rem"} mb={"1rem"}>
              <Stack gap={"1rem"}>
                <Text color={"white"}>First Name</Text>
                <Input
                  type="text"
                  // value={"fname"}
                  placeholder="First name"
                  {...register("First name", { required: true, maxLength: 80 })}
                />
              </Stack>

              <Stack gap={"1rem"}>
                <Text color={"white"}>Last Name</Text>
                <Input
                  type="text"
                  // value={"lname"}
                  placeholder="Last name"
                  {...register("Last name", { required: true, maxLength: 100 })}
                />
              </Stack>
            </HStack>

            <HStack gap={"1rem"} mb={"1rem"}>
              <Stack gap={"1rem"}>
                <Text color={"white"}>Email</Text>
                <Input
                  type="text"
                  // value={"email"}
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Stack>
              <Stack gap={"1rem"}>
                <Text color={"white"}>Phone Number</Text>
                <Input
                  type="tel"
                  // value={"number"}
                  placeholder="Mobile number"
                  {...register("Mobile number", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </Stack>
            </HStack>

            <HStack
              mb={"1rem"}
              py={"1rem"}
              display={"flex"}
              alignItems={"left"}
              flexDirection={"column"}
            >
              <Text color={"white"}>Select Subject: </Text>
              <RadioGroup defaultValue="ProductInquiry">
                <HStack spacing={"2rem"} align={"stretch"}>
                  <Radio
                    {...register("Select Subject", { required: true })}
                    colorScheme="white"
                    value="ProductInquiry"
                    name="selectSubject"
                    fontSize={"0.5rem"}
                    style={{ fontSize: "0.5rem" }}
                  >
                    Product Inquirey
                  </Radio>
                  <Radio
                    {...register("Select Subject", { required: true })}
                    colorScheme="white"
                    value="GeneralInquiry"
                    name="selectSubject"
                    fontSize={"0.5rem"}
                    style={{ fontSize: "0.5rem" }}
                  >
                    General Inquiry
                  </Radio>
                  <Radio
                    {...register("Select Subject", { required: true })}
                    colorScheme="white"
                    value="Support"
                    name="selectSubject"
                    fontSize={"0.5rem"}
                    style={{ fontSize: "0.5rem" }}
                  >
                    Support
                  </Radio>
                </HStack>
              </RadioGroup>
            </HStack>
            <HStack textAlign={'left'} flexDirection={'column'}>
              <Text textAlign={'left'} color={"white"}>Message</Text>
              <Textarea
                placeholder="Type your message here"
                {...register("Message", { required: true })}
              />
            </HStack>

            <Button
              bg={"transparent"}
              px={"2rem"}
              py={"1.25rem"}
              border={"3px solid #606060"}
              borderRadius={"2px"}
              _hover={{
                background:
                  "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
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
          </form>
        </Box>
      </Box>
    </>
  );
}
