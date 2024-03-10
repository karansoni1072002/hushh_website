import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';

const ReviewSlider = () => {
  // Define customer names and their respective reviews
  const customerReviews = [
    { name: "Emily Smith",     review: "I absolutely love the Hushh Wallet App! It's incredibly user-friendly and helps me keep all my data organized and full control over my digital identity. It's a win-win for both customers and brands!" },
    { name: "David Johnson",   review: "The Hushh Button has made my online shopping experience so much smoother. With just a click, my preferences are synced across brands and giving me a personalized shopping journey every time." },
    { name: "Sophia Martinez", review: "Hushh Chrome Extension is a must-have for anyone concerned about their online privacy. It gives me full control over my digital identity and allows me to choose what information I want to share." },
    { name: "Michael Brown",   review: "The Vibe Search App has revolutionized how I shop online. I no longer have to spend hours browsing through endless product pages. With Vibe Search, I can simply upload a picture & find similar products." },
    { name: "Olivia Wilson",   review: "Hushh Wallet App has helped me take control of my digital identity. I can now manage my data across different platforms and earn rewards for sharing it with trusted brands. It's empowering and rewarding!" },
    { name: "Ethan Thompson",  review: "As a frequent online shopper, the Hushh Button has been a game-changer. It streamlines the shopping process & ensures that I receive personalized recommendations based on my preferences." },
    { name: "Ava Anderson",    review: "With Hushh Chrome Extension, I finally feel in control of my online data. I can choose what information to keep private and what to share, giving me peace of mind while browsing." }
  ];

  // Define the maximum length for review content
  const maxContentLength = 250;

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true, hide:true }}
      scrollbar={{ draggable: true, clickable:true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {customerReviews.map((customer, index) => (
        <SwiperSlide key={index}>
          <Box bg={'white'} borderRadius={'40px'} display={'flex'} gap={'0.75rem'} p={'3rem'} flexDirection={'column'}>
            {/* Trim the review content if it exceeds the maximum length */}
            <Text color='black' fontWeight={'400'} fontSize={'1rem'} lineHeight={'2rem'}>{customer.review.length > maxContentLength ? customer.review.substring(0, maxContentLength) + '...' : customer.review}</Text>
            <HStack display={'flex'} flexDirection={'row'}>
              <Image />
              <Text color='black' fontSize={'1rem'} fontWeight={'700'} lineHeight={'18px'} letterSpacing={'0.8px'}>{customer.name}</Text>
            </HStack>
            <Box className='rating'>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} color='#ffe234' />
              ))}
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
