import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider
} from "@chakra-ui/react";
import {
  InfoIcon,
  QuestionOutlineIcon,
  SearchIcon,
  ArrowForwardIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";

const HushhBot = () => {
  return (
    <Box
      mt={{ md: "0", base: "1rem" }}
      p={{ md: "4rem", base: "0.25rem" }}
      color="white"
    >
      <VStack spacing={6} align="start">
        <Heading
          as="h1"
          fontSize={{ md: "3xl", base: "2xl" }}
          className="gradient"
        >
          Hushh Bot
        </Heading>

        <Text fontSize={{ md: "xl", base: "lg" }}>
          <b>"Your" Personal Data and Understanding Valet</b>
        </Text>

        <Text fontSize={{ md: "lg", base: "sm" }}>
          The Hushh Bot is an intelligent assistant designed to help you manage
          and interact with your data effortlessly. It enhances your ability to
          control and utilize your information.
        </Text>

        <Heading
          as="h2"
          fontSize={{ md: "2xl", base: "lg" }}
          className="color-gradient"
        >
          Capabilities of Hushh Bot
        </Heading>

        <List spacing={4} fontSize={{ md: "lg", base: "sm" }}>
          <ListItem display={"flex"} flexDirection={"row"}>
            <ListIcon as={InfoIcon} color="white" />
            <Text>
              <b>Document Assistance:</b> Manage any document imported into the
              app. Retrieve, organize, and understand receipts, financial
              statements, and more.
            </Text>
          </ListItem>
          <ListItem display={"flex"} flexDirection={"row"}>
            <ListIcon as={QuestionOutlineIcon} color="white" />
            <Text>
              <b>Question Answering:</b> Get answers to your queries using
              advanced natural language processing.
            </Text>
          </ListItem>
          <ListItem display={"flex"} flexDirection={"row"}>
            <ListIcon as={SearchIcon} color="white" />
            <Text>
              <b>Data Navigation:</b> Navigate your stored data with ease, using
              Hushh Bot to guide you through your Hushh Cards.
            </Text>
          </ListItem>
        </List>

        <Divider borderColor="gray.400" opacity={0.3} my={{ md: 4, base: 2 }} />

        <Heading
          as="h2"
          fontSize={{ md: "2xl", base: "lg" }}
          className="color-gradient"
        >
          Interacting with Hushh Bot
        </Heading>

        <List spacing={3} fontSize={{ md: "lg", base: "sm" }}>
          <ListItem>
            <ListIcon as={ArrowForwardIcon} />
            <b>Access the Bot:</b> Open the Hushh app and tap on the Hushh Bot
            icon to start your interaction.
          </ListItem>
          <ListItem>
            <ListIcon as={ArrowForwardIcon} />
            <b>Ask a Question:</b> Type your query or request for specific
            document details, assistance with data entries, or guidance on using
            your data.
          </ListItem>
          <ListItem>
            <ListIcon as={ArrowForwardIcon} />
            <b>Receive Guidance:</b> Hushh Bot will process your request and
            provide actionable responses, directing you to the appropriate card
            or data point, or explaining the content of your documents.
          </ListItem>
        </List>

        <Divider borderColor="gray.400" opacity={0.3} my={{ md: 4, base: 2 }} />

        <Heading
          as="h2"
          fontSize={{ md: "2xl", base: "lg" }}
          className="color-gradient"
        >
          Benefits of Using Hushh Bot
        </Heading>

        <List spacing={3} fontSize={{ md: "lg", base: "sm" }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Efficiency:</b> Save time by quickly finding and utilizing your
            stored data without manually searching through files.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Understanding:</b> Gain better insights into your data and
            documents with Hushh Bot’s ability to explain and clarify details.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Convenience:</b> Access Hushh Bot from anywhere within the app,
            making it easy to get help whenever you need it.
          </ListItem>
        </List>
        <Text fontStyle={"italic"} fontSize={{ md: "lg", base: "sm" }}>
          Note: Hushh Bot is continuously learning and improving, adapting to
          your preferences and usage patterns to provide even more personalized
          support over time.
        </Text>
      </VStack>
    </Box>
  );
};

export default HushhBot;
