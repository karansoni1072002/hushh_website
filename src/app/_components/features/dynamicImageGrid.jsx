'use client'
import { useState, useEffect } from 'react';
import { Box, Grid } from '@chakra-ui/react';
import square1 from '../svg/ImageGrid/square1.svg';
import square2 from '../svg/ImageGrid/sqaure2.svg';
import Vertical1 from '../svg/ImageGrid/Vertical1.svg';
import Image from 'next/image';


const images = {
  left: [
    Vertical1,
    Vertical1,
    // Add more left images
  ],
  right: [
    [square1, square2],
    [square2, square1],
    // Add more pairs of right images
  ],
};

export default function ImageGrid() {
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentRightImages, setCurrentRightImages] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeftImage((prev) => (prev + 1) % images.left.length);
      setCurrentRightImages((prev) => (prev + 1) % images.right.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box>
      <Grid templateColumns="1fr 1fr" gap={4}>
        <Box>
          <Image src={images.left[currentLeftImage]} alt="Left Image" />
        </Box>
        <Grid templateRows="1fr 1fr" gap={4}>
          <Image src={images.right[currentRightImages][0]} alt="Right Top Image" />
          <Image src={images.right[currentRightImages][1]} alt="Right Bottom Image" />
        </Grid>
      </Grid>
    </Box>
  );
}
