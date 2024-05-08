"use client";

import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Toast,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DeveloperBg from "../_components/svg/developerApi/developerApiLoginBg.svg";
import BgLeftCircle from "../_components/svg/developerApi/developerLoginLCircle.svg";
import BgTopRightCircle from "../_components/svg/developerApi/developerLoginTRCircle.svg";
import BgRightCircle from "../_components/svg/developerApi/developerLoginRCircle.svg";
import Image from "next/image";
import { EmailIcon } from "@chakra-ui/icons";
import { FiLock, FiUser } from "react-icons/fi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    // phoneNumber: "",
    password: "",
  });

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      newErrors.name = "";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Validate phone number
    // if (!formData.phoneNumber) {
    //   newErrors.phoneNumber = "Phone number is required";
    //   valid = false;
    // } else if (!/^\+?\d{8,15}$/.test(formData.phoneNumber)) {
    //   newErrors.phoneNumber = "Invalid phone number";
    //   valid = false;
    // } else {
    //   newErrors.phoneNumber = "";
    // }

    // Validate password (alphanumeric)
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!/^[a-zA-Z0-9]{6,}$/.test(formData.password)) {
      newErrors.password =
        "Password must be at least 6 characters long and alphanumeric";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return valid; // Return true if valid, false otherwise
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

      if (error) {
        toast({
          title: "Sign-up Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Sign-up Successful",
          description: "Please log in to continue.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setFormData({
          name: "",
          email: "",
          //   phoneNumber: "",
          password: "",
        });
        router.push("/login"); // Redirect after successful sign-up
      }
    }
  };

  const handleSignIn = async () => {
    if (validateForm()) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        toast({
          title: "Sign-in Error",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Welcome back!",
          description: "Successfully logged in.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/dashboard"); // Redirect after successful login
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    setUser(null);
  };

  console.log({ loading, user });

  if (loading) {
    return (
      <Box>
        <HStack mt={"5rem"}>
          <Text>loading..</Text>
        </HStack>
      </Box>
    );
  }

  if (user) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-96 text-center">
          <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
            You're already logged in
          </h1>
          <button
            onClick={handleLogout}
            className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative" style={{ overflow: "hidden", height: "100vh" }}>
      <Image
        src={BgLeftCircle}
        alt="BgLeftCircle"
        // objectFit="cover"
        // className="z-0 w-full"
        style={{ position: "absolute" }}
        placeholder="blur"
        //  priority
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANII="
      />
      <Image
        src={BgRightCircle}
        alt="BgRightCircle"
        objectFit="cover"
        style={{ position: "absolute", width: "60%", height: "100%", right: 0 }} // Positioned at the bottom-left
        width={200}
        height={200}
      />
      <Image
        src={DeveloperBg}
        alt="DeveloperBg"
        style={{ position: "absolute" }}
      />

      <main className=" flex items-center justify-center z-10 p-6">
        <Box
          zIndex={"10"}
          w={{ md: "35%", base: "100%" }}
          borderRadius={"1.61rem"}
          background={"#1E1E1E"}
          p={{ md: "2.68rem", base: "1.34rem" }}
          mt={{ md: "9rem", base: "4rem" }}
          textAlign={"center"}
        >
          <Text
            color={"#CBCBCB"}
            fontSize={{ md: "1.65rem", base: "1.15rem" }}
            fontWeight={"700"}
            mb={{ md: "1.25rem", base: "1rem" }}
          >
            {" "}
            Get your account ready for Hushh{" "}
          </Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiUser} color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              borderRadius="3.35rem"
              placeholder="Full Name"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-transparent text-white"
            />
          </InputGroup>
          {errors.name && <div class="valid-tooltip">{errors.message}</div>}

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={EmailIcon} color="gray.400" />
            </InputLeftElement>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              borderRadius="3.35rem"
              placeholder="Email"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-transparent text-white"
            />
          </InputGroup>
          {errors.email && <Text color="red.500">{errors.email}</Text>}

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiLock} color="gray.400" />{" "}
              {/* Lock icon for password */}
            </InputLeftElement>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              borderRadius="3.35rem"
              placeholder="Password"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-transparent text-white"
            />
          </InputGroup>
          {errors.password && <Text color="red.500">{errors.password}</Text>}

          {/* <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-transparent text-white"
        />
        {errors.phoneNumber && (
          <Text color="red.500">{errors.phoneNumber}</Text>
        )} */}

          {/* <Button
          onClick={handleSignUp}
          style={{borderRadius:'3.35rem'}}
          className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
          Sign Up
        </Button> */}
          <Button
            style={{ borderRadius: "3.35rem" }}
            onClick={handleSignIn}
            w={"100%"}
            background="linear-gradient(270.53deg, #E54D60 2.44%, #A342FF 97.51%)"
            mb={{ md: "1.25rem", base: "0.75rem" }}
          >
            Get Started
          </Button>

          <Text
            fontWeight={"400"}
            lineHeight={"18px"}
            fontSize={{ md: "sm", base: "xs" }}
            color={"white"}
          >
            By continuing, you're agreeing to our{" "}
            <a href="/legal/termsofuse" style={{ textDecoration: "underline" }}>
              Terms
            </a>{" "}
            and{" "}
            <a
              href="/legal/privacypolicy"
              style={{ textDecoration: "underline" }}
            >
              Privacy Policy
            </a>
          </Text>

          {/* <Text color="white" textAlign="center" mt="4">
          Already have an account?{" "}
          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={handleSignIn}
          >
            Sign In
          </span>
        </Text> */}

          {/* <Text color="white" textAlign="center" mt="4">
          Don't have an account?{" "}
          <span
            className="text-blue-500 underline cursor-pointer"
            onClick={handleSignUp}
          >
            Sign Up
          </span>
        </Text> */}
        </Box>
      </main>
      {/* <Image
          src={BgRightCircle}
          alt="BgRightCircle"
          style={{position:"absolute",zIndex:'111'}}
    /> */}
    </div>
  );
}
