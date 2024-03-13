import { Container, Heading, VStack, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import extendedTheme from "../../theme";
import vivek from '../svg/vivek.svg';
import linkedln from '../svg/icons/linkedIn.svg';
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  return (
    <>
      <Box w={'100%'} h={'100%'}>
        <VStack>
          <Heading 
            as={"h2"}
            className="color-gradient"
            fontWeight={600}
            letterSpacing={"0.25rem"}
            fontSize={"1rem"}
           >
            THE TEAM
          </Heading>
          <Heading className="gradient" fontWeight={'400'} fontSize={{base:'2.5rem',md:'3.75rem'}} lineHeight={'63.3px'}>Our Team</Heading>
          <Text mt={'2rem'} textAlign={'center'} color={extendedTheme.colors.secondary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </Text>
        </VStack>
            <Grid templateColumns='repeat(4, 1fr)'>
                   <VStack mb={'1rem'}>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Vivek Swaminathan</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href='https://www.linkedin.com/in/vivek-swaminathan-374891a6/'><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                    
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Subash Manoharan</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={'https://www.linkedin.com/in/subash-manoharan/'}><Image alt="subash" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Karthick Muthu</Text>
                     <Text color={'#ABABAB'}>UX Designer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Rohan Sidankar</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Keerthi Sree Marrapu</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Satyam Arora</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Omkar Kailas Malpure</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Vasundhhara Katoch</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Devesh Paragiri</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Susanna Liu</Text>
                     <Text color={'#ABABAB'}>UX Designer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Ankit Kumar Singh</Text>
                     <Text color={'#ABABAB'}>Customer Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Kavya Chauhan</Text>
                     <Text color={'#ABABAB'}>Customer Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Yash Makan</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Anurag Ghose</Text>
                     <Text color={'#ABABAB'}>UX/ UI Designer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Akash Katla</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Karan Soni</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Neelesh Meena</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
                   <VStack>
                     <Image alt="vivek" src={vivek} width={260} height={276}/>
                     <Text color={'#E5E5E5'} fontWeight={'700'} fontSize={{ md:'1.3rem', base:'1rem'}}>Apoorv Bedmutha</Text>
                     <Text color={'#ABABAB'}>Software Engineer</Text>
                     <Link href={''}><Image alt="vivekLinkedIn" src={linkedln} width={24} height={24}/></Link>
                   </VStack>
            </Grid>
      </Box>
    </>
  );
};

export default TeamSection;
