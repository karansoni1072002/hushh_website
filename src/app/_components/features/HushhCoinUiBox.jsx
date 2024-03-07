import { Container, Box, VStack, Heading, Text} from '@chakra-ui/react';
import NextImage from "next/image";
import React from 'react'
import LVCardMobile from "../../../../public/Images/mobileIcons/LVCardMobile.png";

const HushhCoinUiBox = () => {
  return (
    <>
       <Container w={'100%'} mt={'5rem'} display={'flex'} flexDirection={'row'}>
          <Box>
            <NextImage
              src={LVCardMobile}
              alt='CoinBox'
              />
          </Box>
          <Box>
              <VStack>
                <Heading className='gradient'>
                Earn hushh coins on your valuable data sharing
                </Heading>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                </Text>
              </VStack>
          </Box>
       </Container>
    </>
  )
}

export default HushhCoinUiBox;