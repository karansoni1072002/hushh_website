import { Container, Box, VStack, Heading, Text } from '@chakra-ui/react';
import NextImage from "next/image";
import React from 'react';
import LVCardMobile from "../../../../public/Images/mobileIcons/LVCardMobile.png";
import MarketIcon from '../svg/marketIcon';
import extendedTheme from '../../theme';

const HushhCoinUiBox = () => {
  return (
    <Container mt={{ base: '2rem', md: '5rem' }} display="flex" alignItems="center" justifyContent="space-between" flexDirection={{ base: 'column', md: 'row' }}>
      {/* <Box maxWidth={{ base: '100%', md: '40%' }}>
        <NextImage src={LVCardMobile} alt="CoinBox" />
      </Box> 
      */}
      <VStack alignItems={{ base: 'center', md: 'flex-start' }} maxW={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'left' }}>
        <Heading className="gradient" fontWeight="700" fontSize={{ md: '3.75rem', base: '2rem' }}>
          Earn hushh coins on your valuable data sharing
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
        </Text>
        <VStack align="flex-start" spacing={4} w="100%">
          <Box display="flex" alignItems="center">
            <MarketIcon />
            <Text color={extendedTheme.colors._white}>Lowest fees in market</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <MarketIcon />
            <Text color={extendedTheme.colors._white}>Lowest fees in market</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <MarketIcon />
            <Text color={extendedTheme.colors._white}>Lowest fees in market</Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default HushhCoinUiBox;
