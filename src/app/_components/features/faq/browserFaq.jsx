'use client'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Heading,
    Container,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  
  const faqData = {
    General: [
      { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
      { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
      { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },

    ],
    Payments: [
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
      ],
    Refund: [
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
          ],
    Services: [
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
      ],
    Contact: [
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
        { question: 'What services does TanahAir Offer?', answer: 'TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.' },
      ],
  };
  
  export default function BrowserFaq() {
    const [tabIndex, setTabIndex] = useState(0);
  
    const handleTabsChange = (index) => {
      setTabIndex(index);
    };
  
    return (
      <Box py={10} px={{md:'10rem'}}>
        <Heading className={'gradient'} fontWeight={'400'} fontSize={{md:"3.75rem", base:"2.25rem"}} lineHeight={'75px'} mb={8} textAlign='left'>
          Frequently Asked Questions
        </Heading>
        <Tabs index={tabIndex} onChange={handleTabsChange} variant="soft-rounded" colorScheme="purple">
        <TabList mb="1em" >
  {Object.keys(faqData).map((category,index) => (
    <Tab
      key={category}
      color={'white'}
      className={index === tabIndex ? 'gradientText' : ''}
      _selected={{
        color: 'transparent',
        sx: {
          backgroundImage: 'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        _after: {
          content: '""',
          display: 'block',
          height: '2px',
          background: 'linear-gradient(265.3deg, #E54D60 8.81%, #A342FF 94.26%)',
          borderRadius: '2px',
        },
      }}
    >
        {category}     
    </Tab>
  ))}
</TabList>

          <TabPanels>
            {Object.keys(faqData).map((category, index) => (
              <TabPanel p={4} key={category}>
                <Accordion allowToggle>
                  {faqData[category].map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} bg={'#141414'}>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left" color={'#CFD3D7'}>
                            {faq.question}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} color={'#A2A9B0'}>{faq.answer}</AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    );
  }