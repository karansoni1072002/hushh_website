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

const ReceiptRadar = () => {
  return (
    <Box mt={{ md: '0', base: '1rem' }} p={{ md: '4rem', base: '0.25rem' }} color="white">
      <VStack align="start" spacing={6}>
        {/* Main Heading */}
        <Heading as="h1" fontSize={{ md: '3xl', base: '2xl' }} className="gradient">
          Receipt Radar
        </Heading>

        {/* Subheading */}
        <Heading as="h2" fontSize={{ md: '2xl', base: 'lg' }} className="color-gradient">
          Effortlessly Organize Your Transactions
        </Heading>

        {/* Description */}
        <Text fontSize={{ md: 'lg', base: 'md' }}>
          The Receipt Radar is a powerful feature within Hushh that simplifies how you manage and utilize your financial and transactional data.
        </Text>

        {/* Connect Your Mailbox */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Connect Your Mailbox
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Seamless Integration: </b> Easily link your email account to Hushh, and the Receipt Radar will scan your inbox for receipts and relevant financial documents.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Privacy-Centric:</b> Receipt Radar accesses only the emails you select, ensuring your personal correspondence remains private.
          </ListItem>
        </List>

        {/* Extraction and Categorization */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Extraction and Categorization
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Smart Extraction:</b> Receipt Radar identifies and pulls information from your purchase receipts.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Intelligent Categorization:</b> It categorizes this data, from warranty details to spending habits.
          </ListItem>
        </List>

        {/* Attaching to Cards */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Attaching to Cards
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Automated Sorting:</b> Receipt Radar automatically attaches extracted information to the appropriate cards within your Hushh wallet.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} />
            <b>Card-Specific Insights:</b> Whether it's a Warranty Card for your electronics or a Spending Card for your finances, Receipt Radar ensures that every piece of information is where you need it.
          </ListItem>
        </List>

        {/* Getting Started with Receipt Radar */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Getting Started with Receipt Radar
        </Heading>

        <OrderedList spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            Open the Hushh app and go to Receipt Radar.
          </ListItem>
          <ListItem>
            Follow the prompts to connect your email account securely.
          </ListItem>
          <ListItem>
            Select the types of emails and receipts you want Receipt Radar to scan.
          </ListItem>
          <ListItem>
            Review and confirm the extracted information before it’s attached to your cards.
          </ListItem>
        </OrderedList>

        <Text fontStyle={'italic'} fontSize={{ md: 'lg', base: 'sm' }}>
          Note: The Receipt Radar feature is built with user discretion in mind. You have full control over which receipts are imported and how data is categorized and used within the Hushh app.
        </Text>

      </VStack>
    </Box>
  );
};

export default ReceiptRadar;
