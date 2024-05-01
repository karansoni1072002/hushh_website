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

const BrandCards = () => {
  return (
    <Box mt={{ md: '0', base: '1rem' }} p={{ md: '4rem', base: '0.25rem' }} color="white">
      <VStack align="start" spacing={6}>
        {/* Main Heading */}
        <Heading as="h1" fontSize={{ md: '4xl', base: 'xl' }} className="gradient">
          Brand Cards
        </Heading>

        {/* Subheading */}
        <Heading as="h2" fontSize={{ md: '2xl', base: 'lg' }} className="color-gradient">
          Tailor Your Luxury Experiences
        </Heading>

        {/* Description */}
        <Text fontSize={{ md: 'lg', base: 'md' }}>
          Brand Cards serve as your digital passport to personalized brand experiences within the Hushh ecosystem.
        </Text>

        {/* Curated Brand Selection */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Curated Brand Selection
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'md' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon}/>
            Expansive Marketplace: Browse our Card Market to discover a wide array of luxury and consumer brand cards.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon}/>
            Elegant Representation: These cards are digital representations of your engagement with brands.
          </ListItem>
        </List>

        {/* Experience Personalization */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Experience Personalization
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'md' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Share Your Preferences: Use Brand Cards to communicate your preferences to brands and agents.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Unforgettable Encounters: Brands can craft experiences based on your interests.
          </ListItem>
        </List>

        <Divider borderColor="gray.400" opacity={0.3} my={{ md: 4, base: 2 }} />

        {/* QR Code Sharing */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          QR Code Sharing
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'md' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Ease of Access: Each Brand Card features a unique QR code that you can share with others.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Controlled Transparency: You decide what information is tied to your Brand Card QR code.
          </ListItem>
        </List>

        {/* Dynamic Data and Rewards */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Dynamic Data and Rewards
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'md' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Valued Contributions: Populate your Brand Cards with various data points to earn Hushh Coins.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            Rewarding Shares: Sharing your Brand Card with a brand or agent earns you additional Hushh Coins.
          </ListItem>
        </List>

        {/* Engaging with Brand Cards */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Engaging with Brand Cards
        </Heading>

        <OrderedList spacing={3} fontSize={{ md: 'lg', base: 'md' }}>
          <ListItem>
            Open the Hushh app and navigate to the Card Market.
          </ListItem>
          <ListItem>
            Select and add Brand Cards that align with your interests.
          </ListItem>
          <ListItem>
            Customize your card by attaching data that best represents your brand interactions.
          </ListItem>
          <ListItem>
            Utilize the QR code on each Brand Card to share your preferences securely when needed.
          </ListItem>
        </OrderedList>

        <Text fontSize={{ md: 'lg', base: 'md' }}>
          Note: The more you personalize and engage with your Brand Cards, the richer the experiences and the greater the rewards.
        </Text>
      </VStack>
    </Box>
  );
};

export default BrandCards;
