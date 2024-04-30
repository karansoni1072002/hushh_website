import { Box, Heading, Text, List, ListItem, ListIcon, OrderedList, VStack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import React from 'react';

const AttachingCards = () => {
  return (
    <Box p={{ md: '2rem', base: '0.25rem' }} color={'white'}>
      <VStack spacing={6} align="start">
        {/* Main heading */}
        <Heading as="h1" fontSize={{ md: '3xl', base: 'lg' }} className='gradient'>
          Powering Hushh - The On-Device Wallet Behind Your Privacy-Focused Data Sharing
        </Heading>

        {/* Introductory text */}
        <Text fontSize={{ md: 'lg', base: 'sm' }}>
          We often receive inquiries about how Hushh ensures the privacy and security of our users' data. 
          Here is a detailed look at how the Hushh on-device wallet operates:
        </Text>

        {/* Section heading */}
        <Heading as="h2" fontSize={{ md: '2xl', base: 'lg' }} className='color-gradient'>
          Storing and Sharing Data
        </Heading>

        {/* Ordered list for numbered items */}
        <OrderedList spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>Hushh ID Card: A digital identity card representing the user within the Hushh ecosystem.</ListItem>
          <ListItem>Demographic Card: Contains demographic details that a user may choose to share with select parties.</ListItem>
        </OrderedList>

        {/* Unordered list for bullet points */}
        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon}  />
            Brands Card: For affiliations and brand preferences.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon}  />
            General Preferences Card: For lifestyle and general interests.
          </ListItem>
        </List>

        {/* Section heading */}
        <Heading as="h2" fontSize={{ md: '2xl', base: 'md' }} className='color-gradient'>
          Data Attachment and Sharing
        </Heading>

        {/* Bullet points for additional content */}
        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon}/>
            Users can attach any piece of information to these cards for detailed data management.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon}/>
            All data input is stored locally on the user's device to ensure privacy.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon}/>
            When sharing is initiated, data moves to the user's personal cloud.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon}/>
            Data is securely shared with intended recipients using state-of-the-art encryption.
          </ListItem>
        </List>

        {/* More content */}
        <Text fontSize={{ md: 'xl', base: 'sm' }} fontWeight={'500'} className='gradient'>
          Hushh’s "wallet as a service" is a comprehensive solution integrating core data functionalities, including:
        </Text>

        {/* Ordered list for additional information */}
        <OrderedList spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>Data Analytics: Understanding and utilizing your data patterns.</ListItem>
          <ListItem>Search: To navigate through your data with ease.</ListItem>
          <ListItem>Chatbot Capabilities: For interactive, AI-powered assistance.</ListItem>
          <ListItem>Data Management: Comprehensive tools for data storage, categorization, and sharing.</ListItem>
        </OrderedList>
      </VStack>
    </Box>
  );
};

export default AttachingCards;
