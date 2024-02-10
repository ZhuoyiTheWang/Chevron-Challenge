import React from 'react';
import App from './_app';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import FAQ from './components/FAQ';

export default function Home() {

  return (
    <>
    <Hero />
    <Box sx={{ bgcolor: 'background.default' }}>
      <Features />
      <Divider />
      <Highlights />
      <Divider />
      <FAQ />
    </Box>
    </>
  );
}