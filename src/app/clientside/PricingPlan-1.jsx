"use client";
import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Text,
    List,
    ListItem,
    ListIcon,
    Badge,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Container,
    SimpleGrid,
  } from '@chakra-ui/react';
  import { CheckCircleIcon } from '@chakra-ui/icons';
  
  // The content of the pricing page structured as an array of objects
  const pricingTiers = [
    {
      category: 'HushhAI & HushhPDA',
      plans: [
        { name: 'Standard', price: 'Free', description: 'with basic AI functionalities' },
        { name: 'Premium', price: '$9.99/month', description: 'Advanced personal insights and data integration' },
        { name: 'Ultra X', price: '$99/month', description: 'Bespoke AI concierge services, including real-time decision support' },
        { name: 'Ultra Max', price: '$499/month', description: 'Full-suite personal assistant with predictive lifestyle management' },
      ],
    },
    {
        category: 'HushhQR and HushhPay',
        plans: [
          { name: 'Basic', price: 'Free', description: 'Free basic transactions' },
          { name: 'Business', price: '$29.99/month', description: 'Enhanced transaction capabilities and analytics' },
          { name: 'Luxury Retail Tier', price: '$199/month', description: 'High-value transaction services, luxury consumer engagement tools' },
        ],
      },
      {
        category: 'HushhFeed and Vibe Search',
        plans: [
          { name: 'Standard Access', price: 'Free', description: 'Free with ads' },
          { name: 'Premium', price: '$4.99/month', description: 'Ad-free experience with enhanced customization' },
          { name: 'Exclusive Content Tier', price: '$19.99/month', description: 'Access to premium content, exclusive deals' },
        ],
      },
      {
        category: 'HushhAI & HushhPDA',
        plans: [
          { name: 'Standard', price: 'Free', description: 'with basic AI functionalities' },
          { name: 'Premium', price: '$9.99/month', description: 'Advanced personal insights and data integration' },
          { name: 'Ultra X', price: '$99/month', description: 'Bespoke AI concierge services, including real-time decision support' },
          { name: 'Ultra Max', price: '$499/month', description: 'Full-suite personal assistant with predictive lifestyle management' },
        ],
      },
      {
        category: 'Hushh Marketplace',
        plans: [
          { name: 'Free Listing', price: 'Free', description: 'Basic listing with transaction fees' },
          { name: 'Professional', price: '$49/month', description: 'Enhanced visibility and analytics' },
          { name: 'Elite Seller', price: '$149/month', description: 'Top-tier visibility, dedicated support, and business insights' },
        ],
      },
      {
        category: 'HushhAPI & Developer SDK',
        plans: [
          { name: 'Developer Free Tier', price: 'Free', description: 'Access to basic APIs' },
          { name: 'Pro', price: '$99/month', description: 'Extended access and higher request limits' },
          { name: 'Enterprise Solution', price: 'Custom pricing', description: 'Comprehensive access with full support and integration services' },
        ],
      },
      {
        category: 'HushhAds',
        plans: [
          { name: 'CPC/CPM Model', price: 'Competitive industry rates', description: 'Access to basic Models' },
          { name: 'Premium Campaigns', price: 'Custom pricing', description: 'High-engagement campaigns with advanced targeting' },
        ],
      },
      {
        category: 'Hushh Concierge Services',
        plans: [
          { name: 'Per Use', price: 'Custom', description: 'Standard rates for booking services' },
          { name: 'Membership', price: '$999/year', description: 'Includes premium bookings and exclusive access to events' },
          { name: 'Ultra Concierge', price: '$9,999/year', description: 'Tailored for the ultra-rich with bespoke global concierge services' },
        ],
      },
      {
        category: 'Hushh Vibe Search & Valet Chat',
        plans: [
          { name: 'Basic', price: 'Free', description: 'Basic functionality with ads' },
          { name: 'Premium', price: '$6.99/month', description: 'Enhanced features and no ads' },
          { name: 'Business', price: ' $49.99/month', description: 'Business-grade features, analytics, and support' },
        ],
      },
  ];
  
  const operationalStrategy = [
    { name: '1 Marketing Guru', description: 'Manages branding, marketing campaigns, and oversees the AI-driven marketing content creation.' },
    { name: '1 Business Guru', description: 'Focuses on strategy, partnerships, and maintaining optimal operational performance.' },
    { name: '36 Engineers', description: 'Develops and maintains the AI and machine learning algorithms, oversees the platform’s technical infrastructure, and ensures seamless integration across services.' },
    // ... Add any additional operational strategy points here
  ];
  
  const salesModel = [
    { name: 'Affiliate Program', description: 'Empowers sales affiliates through training and tools to create engaging content and sell effectively via social media and personal networks.' },
    { name: 'AI-Driven Engagement', description: 'AI tools help affiliates identify potential customers, optimize sales pitches, and manage interactions.' },
    { name: 'Content Creation Platforms', description: 'Leverage platforms like TikTok, Instagram, and YouTube to drive sales directly through embedded commerce functionalities.' },
    // ... Add any additional sales model points here
  ];
  
  const PricingPage = () => {
    // State to manage which tab is selected
    const [tabIndex, setTabIndex] = useState(0);
  
    // Handle tab change
    const handleTabsChange = (index) => {
      setTabIndex(index);
    };
  
    return (
      <Container maxW="container.xl" py={10} >
        <Box mt={{md:'4rem', base:'2rem'}}>
        <Heading as="h1" size="xl" textAlign="center" mb={10} className="gradient">
          Hushh Exclusive Pricing Plans
        </Heading>
        <Tabs index={tabIndex} onChange={handleTabsChange} isFitted variant="enclosed-colored" colorScheme="purple">
          <TabList>
            <Tab>Pricing Tiers</Tab>
            <Tab>Operational Strategy</Tab>
            <Tab>Sales Model</Tab>
          </TabList>
          <TabPanels color={'white'}>
            <TabPanel>
              <Accordion allowToggle>
                {pricingTiers.map((tier, index) => (
                  <AccordionItem key={index}>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {tier.category}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <List spacing={3}>
                        {tier.plans.map((plan, index) => (
                          <ListItem key={index}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            {plan.name} - <Badge ml={1} colorScheme="green">{plan.price}</Badge> {plan.description}
                          </ListItem>
                        ))}
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                {operationalStrategy.map((item, index) => (
                  <Box p={5} shadow="md" borderWidth="1px" key={index}>
                    <Heading fontSize="xl">{item.name}</Heading>
                    <Text mt={4}>{item.description}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <List spacing={3}>
                {salesModel.map((model, index) => (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text as="span" fontWeight="bold">{model.name} - </Text>{model.description}
                  </ListItem>
                ))}
              </List>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
      
      </Container>
    );
  };
  
  export default PricingPage;