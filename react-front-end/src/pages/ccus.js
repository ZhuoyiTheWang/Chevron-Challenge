import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Features from './components/Features';
import FAQ from './components/FAQ';

export default function Page() {

  return (
    <>
    <Box sx={{ bgcolor: 'background.default' }}>
      <Features />
      <Divider />
      <FAQ />
    </Box>
    </>
  );
}