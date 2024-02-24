import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Highlights from './components/Highlights';
import Features from './components/Features';
import FAQ from './components/FAQ';
import ImageWithIcons from './components/ImagesWithIcons';

export default function Page() {

  return (
    <>
    <Box sx={{ bgcolor: 'background.default' }}>
      <Features />
      <ImageWithIcons />
      <Divider />
      <Highlights />
      <Divider />
      <FAQ />
    </Box>
    </>
  );
}