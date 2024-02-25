import * as React from 'react';
import { useState } from 'react';
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
          moreText: 'It is done either to prevent it from entering the atmosphere or to directly remove it from the atmosphere, then to reuse the captured CO2 in products such as cement or permanently store that CO2 underground.',
          description:
            'Carbon capture, utilization, and storage is the process of capturing carbon dioxide (CO2) and storing it underground',
          imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
        },
        {
          icon: <Factory />,
          title: 'How does it work?',
          moreText: 'CO2 is transported through pipelines, on the road or shipped to be stored. By capturing CO2 emissions from the aforementioned sources before they are released into the atmosphere, CCUS helps prevent them from adding to the greenhouse effect. The captured carbon is injected in the depths of up to twenty-two football fields beneath the Earth\'s surface. There, it can be held in rock formations or saline aquifers.',
          description:
            'Carbon emissions are captured from large industrial sources that produce significant amounts of CO2 – such as refineries, petrochemical, steel mills, power facilities and cement factories. ',
          imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
        },
        {
          icon: <LocalGasStationIcon />,
          title: 'What are the benefits? ',
          moreText: ' This can help bridge the transition to renewable energy sources by providing a way to reduce emissions from existing fossil fuel infrastructure while renewable technologies continue to advance. CCUS involves storing CO2 underground for prolonged periods, potentially thousands of years. Ensuring the secure containment of CO2 over such timescales requires ongoing monitoring and maintenance. To prevent this, Chevron keeps close monitoring of storage sites and sealing. ',
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
          moreText: 'Carbon offsets are a form of trade. When you buy an offset, you fund projects that reduce greenhouse gas (GHG) emissions. These projects might involve renewable energy, energy efficiency, tree planting, or other activities that capture carbon dioxide or prevent its release into the atmosphere. The idea is that these activities offset or compensate for the emissions you can\'t eliminate personally or through your business.',
          imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
        },
        {
          icon: <CalculateIcon />,
          title: 'How do We Calculate the Amount Needed?',
          moreText: 'Calculate Your Carbon Footprint: Before you can offset your emissions, you need to know how much you are producing. This involves calculating your carbon footprint, which can be done through various online calculators or tools. This calculation should include all sources of emissions such as travel, energy use, and consumption habits. \n \n  Reduce Your Emissions: The next step is to look for ways to reduce your own emissions. This can include changes in lifestyle, business operations, or manufacturing processes. Examples include using energy more efficiently, switching to renewable energy sources, reducing travel, or improving waste management. \n \nSelect a Carbon Offset Project: Once you\'ve reduced your emissions as much as reasonably possible, you can look into offsetting the remaining emissions. This involves funding projects that reduce emissions or absorb carbon dioxide from the atmosphere, such as reforestation, renewable energy projects, or community-based projects in developing countries. \n \n Verify the Quality of the Offset Project: It is important to ensure that the offset project you choose is credible and actually contributes to a reduction in GHGs. Look for projects that are certified by recognized standards such as the Gold Standard, Verified Carbon Standard (VCS), or the Clean Development Mechanism (CDM). \n \n Purchase Carbon Credits: Once you\'ve selected a project, you can purchase carbon credits. One carbon credit typically represents the reduction of one metric ton of carbon dioxide or its equivalent in other greenhouse gases.',
          description:
            'There are four main steps to calculating the amount: Measuring CO2 emissions, choosing a project, calculating offset and finally purchasing/retiring offsets.',
          imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
        },
        {
          icon: <AccessTimeIcon />,
          title: 'How long have we been doing this for?',
          moreText: 'We have a global carbon trading organization and actively invest in scalable, nature-based solutions – like soil carbon storage, reforestation, and mangrove restoration – to build a portfolio of high-quality credits. ', 
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
          title: 'International Outreach Efforts ',
          description:
            'A lower carbon future is best achieved through collaboration.',
          moreText: ' We are working in new ways with innovators, policymakers, partners, and customers to understand and address the complex needs of the essential industries that enable modern society. We are working every day toward providing ever-cleaner energy that is also affordable and reliable.',
          imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
        },
        {
          icon: <ViewQuiltRoundedIcon />,
          title: 'Many Multi-Country Collaborations',
          description:
            'Some of our projects have no definite home, since they involve multiple organizations and areas.',
          moreText: `BNSF and Caterpillar: Announced a memorandum of understanding to advance the demonstration of a locomotive powered by hydrogen fuel cells. 

          Cummins: Announced a memorandum of understanding with BNSF and Caterpillar to explore a strategic alliance for commercially viable business opportunities in hydrogen and other alternative energy sources. 
         
          Angelicoussis: Announced a Joint Study Agreement (JSA) to explore how tankers can be used to transport ammonia, a potential lower carbon marine fuel. The initial study will evaluate the ammonia transportation market, existing infrastructure, the safety aspects of ammonia, potential next generation vessel requirements and a preliminary system to transport ammonia between the U.S. Gulf Coast and Europe. Ammonia is a carrier of hydrogen and is believed to have potential to lower the carbon intensity of the marine industry. 
          
          Institute of International Finance Taskforce on Scaling Voluntary Carbon Markets: Serving as a consultative group member of the Institute of International Finance Taskforce on Scaling Voluntary Carbon Markets (TSVCM). A large, transparent, verifiable and robust voluntary carbon market can help deliver carbon-reduction goals and is key to the integrity of reductions. 
          
          Markets for Natural Climate Solutions Initiative: As a founding member, serving in the Markets for Natural Climate Solutions Initiative to boost climate action. NCS provides a potentially cost-effective form of carbon management that can contribute to the goals of the Paris Agreement. 
          
          Oil and Gas Climate Initiative: Participating in the OGCI’s Natural Climate Solutions workstream, exploring ways to enhance the scientific, technological and operational basis for a global scaling up of natural climate solutions (NCSs). 
          
          World Bank: Participating in a memorandum of understanding with the World Bank. The World Bank’s goal is to enhance global climate ambitions in mitigation actions and activities to facilitate the development of carbon and climate markets and associated infrastructure based on emerging international and national regulatory frameworks. `
          ,
          imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
        },
        
      ];
    case '/reh':
      return [
        {
          icon: <WindPowerIcon />,
          title: 'Our Role in Hydrogen and Renewable Energy',
          moreText: 'We aim to deliver lower carbon energy to a growing world by creating a profitable, large-scale, lower carbon hydrogen business that builds on our existing assets, capabilities, and customers. We are well positioned to participate across the value chain to supply industrial, power, and heavy-duty transportation customers. ',
          description:
            'Chevron believes in the value of delivering large-scale hydrogen solutions that support a lower carbon world. ',
          imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
        },
        {
          icon: <ExpandIcon />,
          title: 'Our Current Plans and Projects',
          moreText: 'From upstream production through distribution into transportation, power generation and other industrial sectors. We are also evaluating using hydrogen as an alternative for industries dependent on combustible fuels and assessing development of hydrogen production hubs. ',
          description:
            'We are exploring profitable opportunities for growth across the value chain',
          imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
          imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
        },
        {
          icon: <RecyclingIcon />,
          title: 'Importance of Hydrogen and Renewable Energy',
          moreText: 'We co-process bio feedstock in our own facilities, partner with others for renewable natural gas (RNG) and compressed natural gas (CNG) and have an equity stake in producing renewable base oil. We are responsive to our customers who will increasingly need renewable fuels and products like renewable natural gas, hydrogen, renewable diesel, sustainable aviation fuel and renewable base oils and lubricants. ',
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
    <Box sx={(theme) => ({
      width: '100%',
      backgroundImage:
        theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
          : 'linear-gradient(#02294F, #090E10)',
      backgroundSize: '100% 20%',
      backgroundRepeat: 'no-repeat',
    })}>
      <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography component="h2" variant="h4" color="text.primary">
                
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: { xs: 2, sm: 4 } }}
              >
                Click on each box to see more about the topic!
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
                  <span></span>
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
                        <span></span>
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
              <Box sx={{ p: 2 }}>
                <Typography variant="body1" sx={{ textAlign: 'center', whiteSpace: 'pre-line' }}>
                  {selectedFeature.moreText}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}