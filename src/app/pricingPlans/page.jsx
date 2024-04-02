'use client'
import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Text, Link, SimpleGrid, VStack } from '@chakra-ui/react';

export default function PricingPlans() {
    const [tabIndex, setTabIndex] = useState(0);
    const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

    const handleTabsChange = (index) => {
        setTabIndex(index);
        setActiveAccordionIndex(index);
    };

  return (
    <Box ml={{ base: "1rem", md: "5.5rem" }} p={{ base: 4, md: 8 }}>
      <VStack  spacing={2} mt={'5rem'} mr={'50%'}>
        <Heading lineHeight={'32px'} display={'flex'} alignSelf={'flex-start'} textAlign={'left'} as={'h2'} color={'#FFFFFF'} fontSize={{ base: '0.75rem', md: '1.25rem' }} letterSpacing={'0.04rem'} fontWeight="500">
          Pricing
        </Heading>
        <Heading as={'h1'} lineHeight={{md:'90.28px', base:'50px'}} className='gradient' fontSize={{ base: '2.5rem', md: '4.625rem' }} fontWeight="700">
          Find the right plan for your needs
        </Heading>
      </VStack>

      <Tabs onChange={handleTabsChange} position="relative" variant="unstyled" mt={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <TabList p={'0.5rem'}  borderRadius={'8px'} border={'1px solid #222222'} minH={'4.125rem'} w={'55%'} justifyContent={'space-between'}>
          <Tab _selected={{ color: 'white', bg: '#363636', borderRadius:'4px' }} color={'#898989'} lineHeight={'22px'} fontWeight={'600'} fontSize={'15px'}>Everyday Consumers</Tab>
          <Tab _selected={{ color: 'white', bg: '#363636', borderRadius:'4px' }} color={'#898989'} lineHeight={'22px'} fontWeight={'600'} fontSize={'15px'}>Developers & Engineers</Tab>
          <Tab _selected={{ color: 'white', bg: '#363636', borderRadius:'4px' }} color={'#898989'} lineHeight={'22px'} fontWeight={'600'} fontSize={'15px'}>Sales Agents</Tab>
          <Tab _selected={{ color: 'white', bg: '#363636', borderRadius:'4px' }} color={'#898989'} lineHeight={'22px'} fontWeight={'600'} fontSize={'15px'}>Creators & Aspiring Influence</Tab>
        </TabList>

        <TabPanels>
          {['Starter', 'Team', 'Pro', 'Business', 'Enterprise'].map((plan, index) => (
            <TabPanel key={index}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <Box>
                  <Heading as="h2" fontWeight="bold">{plan}</Heading>
                  <Text fontSize="sm" color="gray.500">
                    {plan === 'Enterprise' ? 'Contact us for a custom quote' : 'Perfect for small teams just getting started'}
                  </Text>
                </Box>
                <VStack align="flex-end" justify="end">
                  <Heading as="h2" fontWeight="bold">{index === 0 ? '$0' : `$${15 * index}`}</Heading>
                  <Link color="gray.500" href="#" _hover={{ color: 'gray.900', textDecoration: 'underline' }}>
                    View features
                  </Link>
                </VStack>
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}