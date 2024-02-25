import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import Co2Icon from '@mui/icons-material/Co2';
import PowerIcon from '@mui/icons-material/Power';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import ForestIcon from '@mui/icons-material/Forest';
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';


const items = [
  {
    icon: <Co2Icon />,
    title: 'Carbon capture, utilization, and storage (CCUS) ',
    description:
      'Enabler of global net zero and our commitment to accelerate progress toward the lower carbon ambitions of our customers and company.',
  },
  {
    icon: <PowerIcon />,
    title: 'Hydrogen',
    description:
      'Chevron believes in the value of delivering large-scale hydrogen solutions that support a lower carbon world. ',
  },
  {
    icon: < SolarPowerIcon/>,
    title: 'Renewable Energy',
    description:
      'We are responsive to our customers who will increasingly need renewable fuels and products like renewable natural gas, hydrogen, renewable diesel, sustainable aviation fuel and renewable base oils and lubricants.',
  },
  {
    icon: <ForestIcon />,
    title: 'Carbon Offsets',
    description:
      'Carbon offsets are expected to play an important role in global carbon reductions, especially in sectors that do not have cost-effective reduction opportunities or for activities where emissions are harder to abate.',
  },
  {
    icon: <SchoolIcon />,
    title: 'Emerging Technologies',
    description:
      'Chevron has a long history of identifying and driving innovation through investments in emerging technologies, research and development, and university partnerships.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Global Partnerships',
    description:
      'We believe investing in multiple projects around the world and collaborating with other companies is one of the best ways to better serve our community.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Our Focuses
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore our current and past goals to improve the service we provide our customers with
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
