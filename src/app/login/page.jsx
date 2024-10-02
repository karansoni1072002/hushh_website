"use client";
import React, { useState } from "react";
import supabase from "../supabaseClient";
import { Box, Button, Container, Text } from "@chakra-ui/react";

const LoginPage = () => {
  const [user, setUser] = useState(null); // State to hold user data

  const handleGoogleSignIn = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error signing in with Google:", error);
    } else {
      setUser(user); // Set user data in state
      console.log("User signed in with Google:", user);
    }
  };

  const handleAppleSignIn = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "apple",
    });
    if (error) {
      console.error("Error signing in with Apple:", error);
    } else {
      setUser(user); // Set user data in state
      console.log("User signed in with Apple:", user);
    }
  };

  const fetchUserData = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Error fetching user data:', error);
    } else {
      console.log('User data:', user);
      setUser(user); // Set user data in state
    }
  };

  return (
<Box
        maxW={"100%"}
        minW={"100%"}
        display={"flex"}
        flexDirection={"column"}
      >    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      color={"white"}
      mt={{md:'4rem',base:'2rem'}}
      gap={{md:'4rem',base:'2rem'}}
    >
      <Text className="gradient" fontSize={{md:'4.5rem',base:'2rem'}}>Login for Hushh Wallet App</Text>
      <Button
        border="1px solid #606060"
        borderRadius="2px"
        color={"white"}
        lineHeight="28px" 
        background="transparent"
        onClick={handleGoogleSignIn}
        px="21px"
        py="15px"
        fontSize={{ md: "1rem", base: "0.75rem" }}
        fontWeight="400"
        letterSpacing={{ md: "0.1rem", base: "0.1rem" }}
        _hover={{
          background:
            "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
          border: "none",
        }}
        w={{ md: "18rem", base: "14rem" }}
      >
        Sign in with Google
      </Button>
      <Button
        border="1px solid #606060"
        borderRadius="2px"
        color={"white"}
        lineHeight="28px"
        background="transparent"
        px="21px"
        py="15px"
        fontSize={{ md: "1rem", base: "0.75rem" }}
        fontWeight="400"
        letterSpacing={{ md: "0.1rem", base: "0.1rem" }}
        _hover={{
          background:
            "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
          border: "none",
        }}
        w={{ md: "18rem", base: "14rem" }}
        onClick={handleAppleSignIn}
      >
        Sign in with Apple
      </Button>
    </Box>
  </Box>  
  );
};

export default LoginPage;
