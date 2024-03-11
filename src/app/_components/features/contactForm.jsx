import React from "react";
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
      <Container
        maxW={{ md:"74rem"}}
        height={{ md:"667px"}}
        p={"1rem"}
        display={"flex"}
        flexDirection={{base:'column', md:'row'}}
        bg={"#1D1D1D"}
        mt={{ md:'5rem', base:'2rem'}}
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
            mb={{ md:"6rem", base:'2rem'}}
          >
            <Heading
              color={"#FFFFFF"}
              fontWeight={"600"}
              fontSize={{ md:"3.75rem", base:'2rem'}}
              lineHeight={{ base: "28px", md: "55px" }}
            >
              Connect with hushh
            </Heading>
            <Text color={"#C9C9C9"}>Say something to reach out to us</Text>
          </HStack>
          <HStack
            gap={{ md:"3rem", base:'0.5rem'}}
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
        <Box p={{md:"4rem",base:'1rem'}} display={"flex"}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ color: "white" }}>
            <HStack display={{base:'block', md:'flex'}} flexDirection={{base:'column', md:'row'}} gap={{ md:"2rem", base:'1rem'}} mb={{md:"2rem", base:'1rem'}}>
              <Stack gap={"1rem"}>
                <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>First Name</Text>
                <Input
                  size={'sm'}
                  w={'12rem'}
                  variant="unstyled"
                  borderBottom="1px solid white"
                  type="text"
                  // value={"fname"}
                  placeholder="Harry"
                  {...register("First name", { required: true, maxLength: 80 })}
                />
              </Stack>

              <Stack gap={"1rem"}>
                <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Last Name</Text>
                <Input
                  size={'sm'}
                  w={'12rem'}
                  variant="unstyled"
                  borderBottom="1px solid white"
                  type="text"
                  // value={"lname"}
                  placeholder="Roger"
                  {...register("Last name", { required: true, maxLength: 100 })}
                />
              </Stack>
            </HStack>

            <HStack display={{base:'block', md:'flex'}} flexDirection={{base:'column', md:'row'}} gap={{ md:"2rem", base:'1rem'}} mb={{md:"2rem", base:'1rem'}}>
              <Stack gap={"1rem"}>
                <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Email</Text>
                <Input
                  size={'sm'}
                  w={'12rem'}
                  variant="unstyled"
                  borderBottom="1px solid white"
                  // value={"email"}
                  placeholder="harry@gmail.com"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Stack>
              <Stack gap={"1rem"}>
                <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Phone Number</Text>
                <Input
                  type="tel"
                  size={'sm'}
                  w={'12rem'}
                  variant="unstyled"
                  borderBottom="1px solid white"
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
              mb={"2rem"}
              py={"1rem"}
              display={"flex"}
              alignItems={"left"}
              flexDirection={"column"}
            >
              <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Select Subject: </Text>
              <RadioGroup defaultValue="ProductInquiry">
                <HStack spacing={"2rem"} align={"stretch"}>
                  <Radio
                    {...register("Select Subject", { required: true })}
                    colorScheme="white"
                    value="productInquiry"
                    name="selectSubject"
                  >
                   <Text fontSize={'0.75rem'}>Explore Hushh Products</Text> 
                  </Radio>
                  <Radio
                    {...register("Select Subject", { required: true })}
                    colorScheme="white"
                    value="clientInquiry"
                    name="selectSubject"
                    className="radio-option"
                  >
                    <Text fontSize={'0.75rem'}>Enhance my client</Text>
                  </Radio>
                  <Radio
                    {...register("Select Subject", { required: true })}
                    colorScheme="white"
                    value="partnerInquiry"
                    name="selectSubject"
                  >
                    <Text fontSize={'0.75rem'}>Partner with Hushh</Text>
                  </Radio>
                  <Radio
                    {...register("Select Subject", { required: true })}
                    colorScheme="white"
                    value="Support"
                    name="selectSubject"
                    className="radio-option"
                  >
                    <Text fontSize={'0.75rem'}>Get Support</Text>
                  </Radio>
                </HStack>
              </RadioGroup>
            </HStack>
            <HStack mb={"4rem"} alignItems={"left"} flexDirection={"column"}>
              <Text fontWeight={'500'} fontSize={'0.75rem'} color={"white"}>Message</Text>
              <Textarea
                h={"100px"}
                placeholder="Type your message here"
                {...register("Message", { required: true })}
              />
            </HStack>
            <HStack justifyContent="flex-end" w={"100%"}>
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
            </HStack>
          </form>
        </Box>
      </Container>
    </>
  );
}
