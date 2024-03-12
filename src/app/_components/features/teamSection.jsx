import { Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import extendedTheme from "../../theme";

const TeamSection = () => {
  return (
    <>
      <Container>
        <VStack>
          <Heading className="gradient">THE TEAM</Heading>
          <Heading color={extendedTheme.colors.secondary}>OUR TEAM</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default TeamSection;
