import React from 'react'
import { Grid, Box, Heading, Text } from "@chakra-ui/react";

const LibrariesUIBox = () => {
  return (
<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4} mb={6}>
  <Box
    rounded="lg"
    borderWidth="1px"
    borderColor="text-card-foreground"
    boxShadow="sm"
    bg="gray.100"
  >
    <Box p={6}>
      <Heading size="xl" fontWeight="semibold" whiteSpace="nowrap">
        Ruby
      </Heading>
    </Box>
    <Box p={6}>
      <Text fontSize="sm">
        A dynamic, open source programming language with a focus on simplicity and productivity.
      </Text>
    </Box>
  </Box>

  <Box
    rounded="lg"
    borderWidth="1px"
    borderColor="text-card-foreground"
    boxShadow="sm"
    bg="gray.100"
  >
    <Box p={6}>
      <Heading size="xl" fontWeight="semibold" whiteSpace="nowrap">
        Python
      </Heading>
    </Box>
    <Box p={6}>
      <Text fontSize="sm">
        A dynamic, open source programming language with a focus on simplicity and productivity.
      </Text>
    </Box>
  </Box>

  <Box
    rounded="lg"
    borderWidth="1px"
    borderColor="text-card-foreground"
    boxShadow="sm"
    bg="gray.100"
  >
    <Box p={6}>
      <Heading size="xl" fontWeight="semibold" whiteSpace="nowrap">
        Node.js
      </Heading>
    </Box>
    <Box p={6}>
      <Text fontSize="sm">
        A dynamic, open source programming language with a focus on simplicity and productivity.
      </Text>
    </Box>
  </Box>
</Grid> 
 )
}

export default LibrariesUIBox