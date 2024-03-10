import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, HStack, Heading, Input, Text } from '@chakra-ui/react';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <Box display={'flex'}>
      <Box pl={'2rem'} pr={'5rem'} className='new-gradient-bg' borderRadius={'0.5rem'} flexDirection={'column'}>
       <HStack textAlign={'left'} alignItems={'left'} flexDirection={'column'} mb={'6rem'} >
        <Heading color={'#FFFFFF'} fontWeight={'600'} fontSize={'3.75rem'} lineHeight={{base:'28px',md:'55px'}}>Connect with hushh</Heading>
        <Text color={'#C9C9C9'}>Say something to start a live chat!</Text>
        </HStack> 
        <HStack gap={'3rem'} textAlign={'left'} alignItems={'left'} flexDirection={'column'} color={'#FFFFFF'}> 
            <Text>+1012 3456 789</Text>
            <Text>demo@gmail.com</Text>
            <Text>132 Dartmouth Street Boston, Massachusetts 02156 United States</Text>
        </HStack>
        </Box>  
    <Box>
    <form onSubmit={handleSubmit(onSubmit)}>
    <HStack gap={'1rem'}>
      <Text>First Name</Text>  
         <Input type="text" value={'fname'} placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <Text>Last Name</Text>  
          <Input type="text" value={'lname'} placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      </HStack>
      <HStack gap={'1rem'}>
      <Text>Email</Text>  
      <input type="text" value={'email'} placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <Text>Phone Number</Text>  
      <input type="tel" value={'number'} placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      </HStack>
     
    
      <select {...register("Select your query", { required: true })}>
        <option value="product-Inquiry">Product Inquiry</option>
        <option value="general-Inquiry">General Inquiry</option>
        <option value="collaboration">Collaboration</option>
      </select>
      <input type="text" placeholder="Message" {...register} />

      <input type="submit" />
    </form>
    </Box>    

    </Box>

    </>
  );
}