import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, IconButton, Input, Text, VStack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useResponsiveSizes } from '../../context/responsive';
import contentMap from '../productData/contentMap';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const router = useRouter();
  const isMobile = useResponsiveSizes();

  const updateRecommendations = (query) => {
    if (!query) {
      setRecommendations([]);
      setShowRecommendations(false);
      return;
    }

    const matched = contentMap.filter(
      (item) =>
        item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query.toLowerCase())
        ) ||
        item.content.toLowerCase().includes(query.toLowerCase())
    );

    setRecommendations(matched);
    setShowRecommendations(true);
  };

  useEffect(() => {
    updateRecommendations(searchQuery);
  }, [searchQuery]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <VStack width="100%" spacing={4}>
      <Flex width="100%" position="relative">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={handleChange}
          variant="filled"
          borderRadius="md"
          size="md"
          bg="white"
          _hover={{
            bg: 'white',
          }}
          _focus={{
            outline: 'none',
            boxShadow: '0 0 0 2px teal',
          }}
          _placeholder={{ color: 'gray.500' }}
        />
        <IconButton
          icon={<SearchIcon />}
          aria-label="Search"
          onClick={() => updateRecommendations(searchQuery)}
          variant="outline"
          position="absolute"
          right="0"
          top="0"
          bottom="0"
          m={2}
          colorScheme="teal"
        />
      </Flex>
      {showRecommendations && (
        <VStack
          align="stretch"
          position="absolute"
          zIndex="10"
          borderRadius={'16px'}
          
          bg="white"
          shadow="md"
          maxH="300px"
          overflowY="auto"
          p={2}
          maxW={'25rem'}
          mt={'3rem'}
        >
          {recommendations.map((rec, index) => (
            <Box
              key={index}
              onClick={() => {
                router.push(rec.url);
                setShowRecommendations(false);
              }}
              _hover={{ bg: 'gray.100', cursor: 'pointer' }}
              p={3}
              minW={{ base: '90%', md: '20rem' }}
              borderBottom="1px solid"
              borderColor="gray.200"
              display={'flex'}
              gap={'1rem'}
            >
             <Box>{rec.icon}</Box>
             <Box display={'flex'} flexDirection={'column'}>
             <Text>{rec.showRecommentationContentHeading}</Text> 
             <Text>{rec.showRecommentationContentDescription}</Text>
             </Box>
            </Box>
          ))}
        </VStack>
      )}
    </VStack>
  );
};

export default SearchBar;