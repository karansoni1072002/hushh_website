'use client'
import { Box, Divider, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

// Example content with headings, subheadings, and content
const guideContent = [
  {
    subheadings: [
      {
        title: 'Powering Hushh - The On-Device Wallet Behind Your Privacy-Focused Data Sharing',
        content: 'Here is the content for the Installation process.',
      },
      {
        title: 'Expanding the Hushh Ecosystem — The Innovation Beyond',
        content: 'Here is how you can set up your account.',
      },
      {
        title: 'Enhancing the Core of Hushh — The Convergence of Luxury and Technology',
        content: 'Here is the content for the Installation process.',
      },
      {
        title: 'Create a Hushh Account',
        content: 'Here is how you can set up your account.',
      },
      {
        title: 'Brand Cards - Tailor Your Luxury Experiences',
        content: 'Here is the content for the Installation process.',
      },
      {
        title: 'General Cards - Customize Your Everyday Interactions',
        content: 'Here is how you can set up your account.',
      },
      {
        title: 'Card Features: Share Your Vibe and Manage Your Card - Optimize Your Hushh Card Experience',
        content: 'Here is the content for the Installation process.',
      },
      {
        title: 'Adding Brand and General Preferences Cards - Enhance Your Profile with Personalized Cards',
        content: 'Here is how you can set up your account.',
      },
      {
        title: 'Attaching Cards for Enhanced Experiences - Link Your Preferences and Brands for Unforgettable Interactions',
        content: 'Here is the content for the Installation process.',
      },
      {
        title: 'Receipt Radar - Effortlessly Organize Your Transactions',
        content: 'Here is how you can set up your account.',
      },
      {
        title: 'Hushh Bot - Your Personal Data and Understanding Valet',
        content: 'Here is how you can set up your account.',
      },
      {
        title: 'Discovery Settings - Adjust Your Visibility and Connectivity',
        content: 'Here is how you can set up your account.',
      },
      {
        title: 'Profile and Account Settings - Manage Your Hushh Experience',
        content: 'Here is how you can set up your account.',
      },
      {
        title: 'Send feedback',
        content: 'Here is how you can set up your account.',
      },
    ],
  },
];

const UserGuide = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleSubheadingClick = (content) => {
    setSelectedContent(content); // Change the displayed content
  };

  return (
    <Box p={6} w={'100%'}>
     <Stack  px={{md:'6rem',base:'0'}} mt={{md:'9rem',base:'4rem'}}>
     <Heading as="h1" mb={6} fontWeight={'700'} fontSize={{md:'5rem',base:'2.25rem'}} lineHeight={{md:'76px',base:'40px'}} className='gradient'>
        A Guide To Our Hushh 
      </Heading>
      <VStack
      align="start"
      spacing={6} // Increase spacing between elements
      p={4} // Padding for the VStack
    >
      {guideContent.map((section, index) => (
        <Box key={index} p={4}> {/* Add padding to each section */}
          {section.subheadings.map((sub, subIndex) => (
            <>
              <Text
                key={subIndex}
                cursor="pointer"
                color={'white'}
                fontSize={{ md: '1.25rem', base: '0.8rem' }}
                fontWeight={'400'}
                py={{md:3,base:1}} // Padding below the text
                onClick={() => handleSubheadingClick(sub.content)} // Event handler for clicks
                _hover={{
                  background: 'linear-gradient(263.99deg, #e54d60 71.61%, #a342ff 99.22%)',
                  color: 'transparent',
                  bgClip:'text'
                }}
              >
                {sub.title}
              </Text>
              {((subIndex + 1) % 4 === 0) && (
                <Divider
                  borderColor="gray.400" 
                  opacity={0.3} 
                  my={{md:4,base:2}}
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
      
    </Box>
  );
};

export default UserGuide;
