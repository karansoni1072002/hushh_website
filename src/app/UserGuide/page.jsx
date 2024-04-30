"use client";
import React from "react";
import {
  Box,
  Divider,
  Heading,
  Stack,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import AttachingCards from "../_components/userGuide/attachingCards";
import BrandCardPreferences from "../_components/userGuide/brandCardPreferences";
import ExpandingHushh from "../_components/userGuide/expandingHushh";

import { ArrowBackIcon } from "@chakra-ui/icons";

const guideContent = [
  {
    subheadings: [
      {
        title:
          "Powering Hushh - The On-Device Wallet Behind Your Privacy-Focused Data Sharing",
        component: <AttachingCards />,
      },
      {
        title: "Expanding the Hushh Ecosystem — The Innovation Beyond",
        component: <ExpandingHushh/>,
      },
      {
        title:
          "Enhancing the Core of Hushh — The Convergence of Luxury and Technology",
        component: <AttachingCards />,
      },
      {
        title: "Create a Hushh Account",
        component: <AttachingCards />,
      },
      {
        title: "Brand Cards - Tailor Your Luxury Experiences",
        component: <AttachingCards />,
      },
      {
        title: "General Cards - Customize Your Everyday Interactions",
        component: <AttachingCards />,
      },
      {
        title:
          "Card Features: Share Your Vibe and Manage Your Card - Optimize Your Hushh Card Experience",
        component: <AttachingCards />,
      },
      {
        title:
          "Adding Brand and General Preferences Cards - Enhance Your Profile with Personalized Cards",
        component: <AttachingCards />,
      },
      {
        title:
          "Attaching Cards for Enhanced Experiences - Link Your Preferences and Brands for Unforgettable Interactions",
        component: <BrandCardPreferences />,
      },
      {
        title: "Receipt Radar - Effortlessly Organize Your Transactions",
        component: <AttachingCards />,
      },
      {
        title: "Hushh Bot - Your Personal Data and Understanding Valet",
        component: <AttachingCards />,
      },
      {
        title: "Discovery Settings - Adjust Your Visibility and Connectivity",
        component: <AttachingCards />,
      },
      {
        title: "Profile and Account Settings - Manage Your Hushh Experience",
        component: <AttachingCards />,
      },
      {
        title: "Send feedback",
        component: <AttachingCards />,
      },
    ],
  },
];

const UserGuide = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const handleSubheadingClick = (component) => {
    // setSelectedContent(content);
    setSelectedComponent(component);
  };

  const handleBackClick = () => {
    setSelectedComponent(""); // Reset to show the list of titles
  };

  return (
    <Box p={6} w={"100%"}>
      {!selectedComponent ? (
        <Stack px={{ md: "6rem", base: "0" }} mt={{ md: "9rem", base: "4rem" }}>
          <Heading
            as="h1"
            mb={6}
            fontWeight={"700"}
            fontSize={{ md: "5rem", base: "2.25rem" }}
            lineHeight={{ md: "76px", base: "40px" }}
            className="gradient"
          >
            A Guide To Our Hushh
          </Heading>
          <VStack
            align="start"
            spacing={6} // Increase spacing between elements
            p={4} // Padding for the VStack
          >
            {guideContent.map((section, index) => (
              <Box key={index} p={4}>
                {" "}
                {/* Add padding to each section */}
                {section.subheadings.map((sub, subIndex) => (
                  <>
                    <Text
                      key={subIndex}
                      cursor="pointer"
                      color={"white"}
                      fontSize={{ md: "1.25rem", base: "0.8rem" }}
                      fontWeight={"400"}
                      py={{ md: 3, base: 1 }} // Padding below the text
                      onClick={() => handleSubheadingClick(sub.component)} // Event handler for clicks
                      _hover={{
                        background:
                          "linear-gradient(263.99deg, #e54d60 71.61%, #a342ff 99.22%)",
                        color: "transparent",
                        bgClip: "text",
                      }}
                    >
                      {sub.title}
                    </Text>
                    {(subIndex + 1) % 4 === 0 && (
                      <Divider
                        borderColor="gray.400"
                        opacity={0.3}
                        my={{ md: 4, base: 2 }}
                      />
                    )}
                  </>
                ))}
              </Box>
            ))}
          </VStack>

          {/* Display the selected content */}
          <Box mt={6}>
            {selectedContent ? (
              <Text>{selectedContent}</Text>
            ) : (
              <Text>Select a subheading to view the content.</Text>
            )}
          </Box>
        </Stack>
      ) : (
        <>
          {selectedComponent && (
            <Box
              onClick={handleBackClick}
              leftIcon={<ArrowBackIcon />}
              mt={{ md: "6rem", base: "3rem" }}
              p={{ md: "0.5rem", base: "0.25rem" }}
              align={"center"}
              border={"1px solid #606060"}
              borderRadius={"5px"}
              w={{ md: "13rem", base: "6rem" }}
              fontWeight={"400"}
              fontSize={{ md: "1.15rem", base: "0.75rem" }}
              className="color-gradient"
              lineHeight={{ md: "32.4px", base: "20px" }}
              letterSpacing={{ md: "0.5rem", base: "0.25rem" }}
              _hover={{
                background:
                  "linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)",
                color: "white",
              }}
              cursor={"pointer"}
            >
              <ArrowBackIcon stroke={"white"} /> GO BACK
            </Box>
          )}
          {selectedComponent}
        </>
      )}
    </Box>
  );
};

export default UserGuide;
