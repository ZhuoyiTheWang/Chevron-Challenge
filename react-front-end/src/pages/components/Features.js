import * as React from 'react';
import {useRouter} from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import Co2 from '@mui/icons-material/Co2';
import Factory from '@mui/icons-material/Factory';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PublicIcon from '@mui/icons-material/Public';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WindPowerIcon from '@mui/icons-material/WindPower';
import ExpandIcon from '@mui/icons-material/Expand';
import RecyclingIcon from '@mui/icons-material/Recycling';


function getItemsForPage(currentPage) {
  switch (currentPage) {
    case '/ccus':
      return [
        {
          icon: <Co2 />,
          title: 'What is CCUS?',
          description:
            'Carbon capture, utilization, and storage is the process of capturing carbon dioxide (CO2) and store it underground',
          imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
        },
        {
          icon: <Factory />,
          title: 'How does it work?',
          description:
            'Carbon emissions are captured from large industrial sources that produce significant amounts of CO2 – such as refineries, petrochemical, steel mills, power facilities and cement factories. ',
          imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
        },
        {
          icon: <LocalGasStationIcon />,
          title: 'What are the benefits? ',
          description:
            'CCUS allows for the continued use of fossil fuels, such as coal and natural gas, in a more environmentally friendly manner.',
          imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
        },
      ];
    case '/co':
      return [
        {
          icon: <PublicIcon />,
          title: 'What are Carbon Offsets?',
          description:
            'Carbon offsets are a mechanism used to compensate for emissions of carbon dioxide (CO2) or other greenhouse gases (GHGs) by providing a reduction, avoidance, or removal of these emissions in another location. ',
          imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
        },
        {
          icon: <CalculateIcon />,
          title: 'How do We Calculate the Amount Needed?',
          description:
            'There are four main steps to calculating the amount: Measuring CO2 emissions, choosing a project, calculating offset and finally purchasing/retiring offsets.',
          imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
        },
        {
          icon: <AccessTimeIcon />,
          title: 'How long have we been doing this for?',
          description:
            'Chevron’s experience in developing and using carbon offsets dates back nearly two decades. ',
          imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
        },
      ];
    case '/pp':
      return [
        {
          icon: <ViewQuiltRoundedIcon />,
          title: 'Lorem ipsum',
          description:
            '12fafs',
          imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
        },
        
      ];
    case '/reh':
      return [
        {
          icon: <WindPowerIcon />,
          title: 'Our Role in Hydrogen and Renewable Energy',
          description:
            'Chevron believes in the value of delivering large-scale hydrogen solutions that support a lower carbon world. ',
          imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
        },
        {
          icon: <ExpandIcon />,
          title: 'Our Current Plans and Projects',
          description:
            'We are exploring profitable opportunities for growth across the value chain',
          imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
        },
        {
          icon: <RecyclingIcon />,
          title: 'Importance of Hydrogen and Renewable Energy',
          description:
            'Renewable fuels are important products that can help reduce the lifecycle carbon intensity of transportation fuels while meeting the world’s growing energy needs. ',
          imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
        },
      ];
    // Add more cases as needed
    default:
      return []; // Default case if no page matches
  }
}


export default function Features() {
  // Use the function to set the items
  const router = useRouter();
  const items = getItemsForPage(router.pathname);
  console.log(router.pathname);

  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Product features
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Here you can provide a brief overview of the key features of the
              product. For example, you could list the number of features, the types
              of features, add-ons, or the benefits of the features.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : '';
                    }
                    return selectedItemIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : '';
                    }
                    return selectedItemIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <div>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain',
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
