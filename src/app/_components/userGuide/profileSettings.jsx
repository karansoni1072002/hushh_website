import React from 'react';
import { Box, VStack, Heading, Text, List, ListItem, OrderedList, Divider, ListIcon } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ProfileSettings = () => {
  return (
    <Box mt={{ md: '0', base: '1rem' }} p={{ md: '4rem', base: '0.25rem' }} color="white">
      <VStack spacing={6} align="start">

        <Heading as="h1" fontSize={{ md: '3xl', base: '2xl' }} className="gradient">
          Profile and Account Settings
        </Heading>

        <Text fontSize={{ md: 'lg', base: 'sm' }}>
          Manage Your Hushh Experience
        </Text>

        <Text fontSize={{ md: 'lg', base: 'sm' }}>
          Your profile and account settings are where you can control your Hushh experience, manage your personal information, and adjust your participation in our services.
        </Text>

        <Heading as="h2" fontSize={{ md: '2xl', base: 'lg' }} className="color-gradient">
          Accessing Profile and Account Settings
        </Heading>

        <OrderedList spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            Open the Hushh app.
          </ListItem>
          <ListItem>
            Tap the profile icon to enter your account.
          </ListItem>
        </OrderedList>

        <Text fontStyle={'italic'} fontSize={{ md: 'lg', base: 'sm' }}>
          Here, you’ll find the following options to manage your account:
        </Text>

        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
          <ListIcon as={ArrowForwardIcon}/>
            <strong>Permissions:</strong> Review and modify the permissions for data access and sharing. Fine-tune what information you share and who you share it with.
          </ListItem>
          <ListItem>
            <ListIcon as={ArrowForwardIcon}/>
            <strong>Switching to Agent Profile:</strong> If you're a data manager or agent, switch to your Agent profile for tools designed for data handling and client management at a professional level.
          </ListItem>
          <ListItem>
            <ListIcon as={ArrowForwardIcon}/>
            <strong>Send Feedback:</strong> Your feedback is important to us. Use this feature to send feedback to the Hushh team, whether it's a suggestion, compliment, or concern.
          </ListItem>
          <ListItem>
            <ListIcon as={ArrowForwardIcon}/>
            <strong>Delete My Data:</strong> If you want to retract any shared data, use this option to remove it from our systems, respecting your right to be forgotten.
          </ListItem>
          <ListItem>
            <ListIcon as={ArrowForwardIcon}/>
            <strong>Logout:</strong> Securely sign out of your Hushh account to ensure your account is inaccessible when you’re not using the app.
          </ListItem>
        </List>

        <Divider borderColor="gray.400" opacity={0.3} my={{ md: 4, base: 2 }} />

        <Heading as="h2" fontSize={{ md: '2xl', base: 'lg' }} className="color-gradient">
          Editing Your Profile Information
        </Heading>

        <Text fontSize={{ md: 'lg', base: 'sm' }}>
          Your profile is based on the Hushh ID Card and Demographic Card, which contain your personal details.
        </Text>

        <OrderedList spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            Tap on the Hushh ID Card or Demographic Card within your profile.
          </ListItem>
          <ListItem>
            Select the information you want to edit.
          </ListItem>
          <ListItem>
            Make your changes and save them to update your profile instantly.
          </ListItem>
        </OrderedList>

        <Text fontStyle="italic" fontSize={{ md: 'lg', base: 'sm' }}>
          Note: Changes made to your Hushh ID Card and Demographic Card reflect immediately across the Hushh ecosystem, keeping your profile up to date with your latest information.
        </Text>

      </VStack>
    </Box>
  );
};

export default ProfileSettings;
