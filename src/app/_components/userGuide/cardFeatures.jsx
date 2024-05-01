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

const CardFeatures = () => {
  return (
    <Box mt={{ md: '0', base: '1rem' }} p={{ md: '4rem', base: '0.25rem' }} color="white">
      <VStack align="start" spacing={6}>
        {/* Main Heading */}
        <Heading as="h1" fontSize={{ md: '3xl', base: '2xl' }} className="gradient">
          Card Features: Share Your Vibe and Manage Your Card
        </Heading>

        {/* Subheading */}
        <Text fontSize={{ md: 'lg', base: 'md' }}>
          Optimize Your Hushh Card Experience by utilizing the specialized features in the Hushh app for Brand and General Preferences Cards.
        </Text>

        {/* Share Your Vibe */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Share Your Vibe
        </Heading>

        <OrderedList spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <b>Attach Images:</b> Add photos that reflect your style or preferences directly to your card.
          </ListItem>
          <ListItem>
            <b>Upload Receipts and Documents:</b> Easily upload receipts or documents to your card for tracking purchases or expenses.
          </ListItem>
          <ListItem>
            <b>How to Use Share Your Vibe:</b>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={CheckCircleIcon}  />
                Open the desired Brand or General Preferences Card.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon}  />
                Tap on 'Share Your Vibe'.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon}  />
                Choose the type of content to attach—images, receipts, or documents.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon}  />
                Upload the files from your device.
              </ListItem>
            </List>
          </ListItem>
        </OrderedList>

        <Divider borderColor="gray.400" opacity={0.3} my={{ md: 4, base: 2 }} />

        {/* Manage Your Card */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Manage Your Card
        </Heading>

        <OrderedList spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <b>Update Minimum Bid Amount: </b>Set or update the minimum bid amount for data sharing or monetization.
          </ListItem>
          <ListItem>
            <b>Shortcut to Dashboard:</b> Quickly navigate to view all your assets and receipts tied to the card.
          </ListItem>
          <ListItem>
            <b>Share Via Hushh Chat or Traditional Mediums:</b> Share card information through Hushh’s in-built chat or other sharing options.
          </ListItem>
          <ListItem>
            <b>How to Use Manage Your Card:</b>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={CheckCircleIcon}  />
                Access the card you want to manage.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon}  />
                Select 'Manage Your Card'.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon}  />
                Adjust the minimum bid amount, view linked assets, or use sharing options.
              </ListItem>
            </List>
          </ListItem>
        </OrderedList>
        <Divider borderColor="gray.400" opacity={0.3} my={{ md: 4, base: 2 }} />

        {/* Benefits of Card Features */}
        <Heading as="h3" fontSize={{ md: 'xl', base: 'lg' }} className="color-gradient">
          Benefits of Card Features
        </Heading>

        <List spacing={3} fontSize={{ md: 'lg', base: 'sm' }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon}  />
            <b>Personalization:</b> By sharing your vibe, you make each interaction more tailored and meaningful.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon}  />
           <b>Control and Flexibility:</b>  Managing your card settings allows you to maintain control over how your data is used.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon}  />
            <b>Ease of Access:</b> Shortcuts and integrated sharing options provide convenience and efficiency.
          </ListItem>
        </List>
      </VStack>
    </Box>
  );
};

export default CardFeatures;
