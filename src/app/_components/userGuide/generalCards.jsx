import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Divider,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const GeneralCards = () => {
  return (
    <Box mt={{ md: '0', base: '1rem' }} p={{ md: '4rem', base: '0.25rem' }} color="white">
      <VStack align="start" spacing={6}>

        <Heading as="h1" fontSize={{ md: '3xl', base: '2xl' }} className="gradient">
          General Cards
        </Heading>

        <Heading as="h2" fontSize={{ md: '2xl', base: 'lg' }} className="color-gradient">
          Customize Your Everyday Interactions
        </Heading>

        <Text fontSize={{ md: 'lg', base: 'sm' }}>
          General Cards are the building blocks for a personalized lifestyle experience in the Hushh ecosystem, catering to your daily preferences and needs.
        </Text>

        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Diverse Daily Use Cases
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Versatile Marketplace: Our Card Market hosts various General Cards covering everyday categories like Coffee Preferences, Allergy Information, Cuisine Likes, and more.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Practical Application: These cards streamline your daily interactions and transactions.
          </ListItem>
        </List>

        {/* Personalization and Convenience */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Personalization and Convenience
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Tailored Experiences: Fill out General Cards with your preferences to guide brands and agents.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Memorable Services: Every interaction becomes an opportunity for a memorable experience.
          </ListItem>
        </List>

        <Divider borderColor="gray.400" opacity={0.3} my={{ md: 4, base: 2 }} />

        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          QR Code Functionality
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Instant Sharing: Each General Card comes with a unique QR code, allowing for instantaneous sharing.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Selective Transparency: You control what data is accessible through your General Card.
          </ListItem>
        </List>

        {/* Rewards for Engagement */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Rewards for Engagement
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Value Your Input: Adding information to your General Cards earns you Hushh Coins.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Incentivized Sharing: Sharing your General Card with a brand or agent earns additional Hushh Coins.
          </ListItem>
        </List>

        {/* Utilizing General Cards */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Utilizing General Cards
        </Heading>

        <OrderedList spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            Launch the Hushh app and visit the Card Market.
          </ListItem>
          <ListItem>
            Choose from a selection of General Cards that align with your daily life.
          </ListItem>
          <ListItem>
            Add your data to the cards to reflect your specific preferences.
          </ListItem>
          <ListItem>
            Share your General Cards using the integrated QR code for secure experiences.
          </ListItem>
        </OrderedList>

        <Text fontStyle={'italic'} fontSize={{ md: 'lg', base: 'sm' }}>
          Note: As with Brand Cards, your interaction with General Cards accumulates Hushh Coins, which can be redeemed for unique experiences or benefits.
        </Text>
      </VStack>
    </Box>
  );
};

export default GeneralCards;
