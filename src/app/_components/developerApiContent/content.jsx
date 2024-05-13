import { Button, Box, Text, List, UnorderedList, ListItem } from '@chakra-ui/react'
import React from 'react'

const ApiContent = () => {
    return (
        <>
      <Box direction="row" display={'flex'} mt={{md:'4rem',base:'2rem'}} justifyContent={'space-between'} gap={{md:'4rem',base:'2rem'}}>
          <Box mr={{md:'1rem',base:'0.5rem'}} flex={1} direction={'column'} bg="#F3F3F3" padding={'2rem'} borderRadius={'1rem'} mb="6" align="left" justify="space-between">
            <Text fontWeight="600" mb="3" fontSize={{md:'1.25rem',base:'0.9rem'}} color="#000000">Retail businesses</Text>
            <Text fontSize="sm" mb="3" color="#00000099">
            Step into the future of retail excellence with Hush APIs- a game changer for high-end luxury giants as well as e-commerce businesses.
            </Text>
            <UnorderedList>
                <ListItem>
               <b>Precision Marketing: </b>Imagine a world where marketing strategies are not just targeted but finely tuned to match individual customer preferences
                </ListItem>
                <ListItem>
                <b>Another Layer of luxury: </b>Add another layer of luxury to your customers’ experience by serving them with exactly what they need by understanding individual preferences.
                </ListItem>
            </UnorderedList>
            <Text>Because it’s not just about selling, it’s about crafting an unforgettable journey for customers. </Text>
          </Box>
          <Box color={'white'}>&n</Box>
          <Box ml={{md:'1rem',base:'0.5rem'}} flex={1} direction={'column'} bg="#F3F3F3" padding={'2rem'} borderRadius={'1rem'}  mb="6" align="left" justify="space-between">
            <Text fontWeight="600" mb="3" fontSize={{md:'1.25rem',base:'0.9rem'}} color="#000000">Application Developers</Text>
            <UnorderedList>
            <ListItem fontSize="sm" mb="3" color="#00000099">
             Enabling a world, where your applications not only meet but exceed user expectations, all thanks to the power of Hushh.
            </ListItem>
            <ListItem fontSize="sm" mb="3" color="#00000099">
            It’s your key to unlocking first-hand consent driven customer data without worrying about privacy laws and regulations.             </ListItem>
            <ListItem fontSize="sm" mb="3" color="#00000099">
            Whether you’re crafting the next groundbreaking app or enhancing your CRM system, we’ve got it covered. 
            </ListItem>
            <ListItem fontSize="sm" mb="3" color="#00000099">
            With Hushh, developers become architects of bespoke interactions, aligning applications with user preferences and consent.            </ListItem>
            <ListItem fontSize="sm" mb="3" color="#00000099">
            Set a new standard for excellence and help your brand build a meaningful connection with the customers.
            </ListItem>
            </UnorderedList>
            {/* <Button variant="link" textDecoration="underline" color="#000000">No Code Option</Button> */}
          </Box>        
      </Box>
  </>
    );
  }
  
  export default ApiContent;