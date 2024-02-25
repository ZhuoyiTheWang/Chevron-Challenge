import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const ImageWithIcons = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedText, setSelectedText] = useState('');

    const iconTexts = [
     'Aurora Hydrogen: Invested in Aurora Hydrogen, which is developing a hydrogen production technology that uses microwave energy without generating any CO2 emissions or consuming water. Hydrogen production using Aurora’s technology has the potential to reduce global CO2 emissions. ',
      `Acorns and One Tree Planted: Collaborating with Acorns, a saving and investing app in the United States, to pilot a new program in California to have five trees planted via the One Tree Planted organization every time a customer fills up at the pump. While not an offset credit-generating activity, the program provides an opportunity to better understand consumer interest in offsetting emissions from use of our products. \n \n Blue Planet: Invested in Blue Planet, which uses CO2 as a raw material for making carbonate rocks used in place of quarried limestone in building material.  \n \nBoomitra: Invested in Boomitra, a startup developing an agricultural technology to enable farm carbon sequestration and monetization. Boomitra has the potential to cost-effectively grow the supply of carbon offsets to meet increasing demand. \n \nCarbon Clean: Invested in Carbon Clean, a carbon capture company providing solutions for hard-to-abate industries. As part of the investment, Chevron and Carbon Clean are seeking to develop a carbon capture pilot for Carbon Clean’s CycloneCC™ technology on a gas turbine in San Joaquin Valley, California. \n \n Eastridge Carbon Capture and Storage Project: Developing a carbon capture and storage (CCS) project aimed at reducing the carbon intensity of our operations in San Joaquin Valley, California, by installing post-combustion carbon capture equipment to capture CO2 and store it thousands of feet underground. \n \nIwatani: Announced an agreement with Iwatani to co-develop and construct 30 hydrogen fueling sites in California by 2026. \n \nKern River Carbon Capture Project: Awarded a project from the U.S. Department of Energy (project #DE-FE0031944) to pilot technology that captures CO2 from post-combustion gas. \n
      Mainspring Energy: Invested in Mainspring Energy, a startup developing technology that has the potential to enable greater fuel flexibility and utilization of lower carbon fuels with near-zero NOx emissions. \n \nMcKittrick Carbon Capture Project: Implementing engineering design for a commercial-scale project in the San Joaquin Valley, California, to capture CO2 from a cogeneration plant’s gas turbine. \n \nNatel Energy: Invested in Natel Energy, a startup providing hydropower-based technology that has the potential to unlock distributed hydropowered resources and that aims to provide a reliable, dispatchable power resource to balance intermittent renewables.
      \nRaven SR and Hyzon: Announced collaboration with Raven SR and Hyzon to commercialize operations of a green waste-to-hydrogen production facility in Richmond intended to supply hydrogen fuel to transportation markets in Northern California. \n \nSonoma Clean Power: Working with Sonoma Clean Power to identify and develop geothermal opportunities in Sonoma and Mendocino counties, California. \n \nToyota Motor North America: Announced a memorandum of understanding with Toyota to explore a strategic alliance to catalyze and lead the development of commercially viable, large-scale businesses in hydrogen, with the goal of advancing a functional, thriving global hydrogen economy. \n \nZero Emissions Industries (ZEI): Chevron is invested in ZEI, a developer of hydrogen fuel cell power systems for the maritime industry. `,
       `IHS Markit: Serving as an advisory board member of the IHS Markit Carbon Meta-Registry. IHS Markit is leading a consortium of stakeholders in the global carbon markets to develop the market infrastructure needed to support the realization of Paris Agreement carbon-emissions targets. 

       Starfire: Invested in Starfire, a Boulder, Colorado–based startup developing a modular, distributed ammonia production and cracking system. `,
        'Solar Turbines: We are working with Caterpillar-owned Solar Turbines to adapt a low-emissions turbine engine partially fueled by hydrogen. Blending hydrogen with traditional fuels to power the engine could help reduce its greenhouse gas emissions. ',
         'Restore the Earth Foundation: Chevron is participating in a reforestation project for up to 18,800 acres, planting approximately 3.7 million trees in St. Charles Parish, Louisiana. ',
          'Carbon Engineering: Invested in Carbon Engineering to accelerate the commercialization of its direct air capture technology, which removes CO2 directly from the air. ',
           'University of Maryland: Supports the University of Maryland’s modeling and analysis to promote carbon markets and transferability of emissions credits. ',
            'MIT: Chevron is a sustaining member of the MIT Energy Initiative, which fosters new research and education to develop innovative tools, technologies and solutions to address global energy needs and challenges. ',
             'Ocergy: Invested in Ocergy, a developer of floating offshore wind foundation technology. The investment will also fund the development of an environmental monitoring buoy that has the potential to gather data and support biodiversity. ',
              `Air Liquide, Lyondellbasell, and Uniper: Announced intent to collaborate on a joint study that will evaluate and potentially advance the development of a hydrogen and ammonia production facility along the U.S. Gulf Coast. The facility could support industrial decarbonization and mobility applications in the region and expand clean ammonia exports, helping to increase the supply of lower carbon power internationally. 

              Bayou Bend: Entered this CCS hub joint venture that has a footprint of nearly 140,000 acres both onshore and offshore in Chambers and Jefferson Counties, Texas, positioning Bayou Bend to be one of the largest carbon storage projects in the United States. 
              
              Greentown Labs: Partnered with Greentown Labs, the largest climate technology startup incubator in North America, to support opening a Houston, Texas, location. This builds on our support for Greentown Labs in Boston since 2013. 

              Houston CCS Hub: Joined more than 10 industry partners to support large-scale CCS deployment to help decarbonize industrial facilities in Houston, Texas, one of the largest concentrated sources in the United States. 
              
              HyVelocity Hub: Comprised of leading energy companies and organizations, the HyVelocity Hub is working to accelerate the development of clean hydrogen projects in Texas, Southwest Louisiana, and the U.S. Gulf Coast. GTI Energy, The Center for Houston’s Future, The University of Texas at Austin, Air Liquide, and Chevron are among the founding members of the HyVelocity Hub. 
              
              Rice Alliance for Technology and Entrepreneurship: Chevron is a founding supporter of the Rice Alliance Clean Energy Technology Accelerator, which develops programs to support early-stage energy startups. 
              
              Texas Geothermal Energy Alliance (TXGEA): Chevron is a member of TXGEA, an education and advocacy organization created to enhance geothermal energy in Texas. 
              
              Syzygy Plasmonics: Chevron is invested in Syzygy, a developer of lower carbon hydrogen technology. `,
               'ACES Delta: Chevron has a majority interest in the Advanced Clean Energy Storage Delta (ACES Delta) electrolytic hydrogen storage project in Delta, Utah, with operations planned by mid 2025. ',
            'Zap Energy: Invested in Zap Energy, a startup developing a next-generation modular nuclear reactor with an innovative approach to advancing cost-effective, flexible and commercially scalable fusion. '
        ];

    const handleClick = (event, text) => {
        setAnchorEl(event.currentTarget);
        setSelectedText(text);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const iconPositions = [
        { top: '83%', left: '64.5%' },
        { top: '61%', left: '6%' },
        { top: '57%', left: '31%' },
        { top: '52%', left: '59%' },
        { top: '97%', left: '55%' },
        { top: '16%', left: '89%' },
        { top: '51%', left: '80%' },
        { top: '34%', left: '85.5%' },
        { top: '47%', left: '12%' },
        { top: '93%', left: '41.5%' },
        { top: '51%', left: '20.5%' },
        { top: '8%', left: '10%' },
        //In order: ALABAMA, CALIFORNIA, COLORADO, ILLINOIS, LOUISIANA, MAINE, MARYLAND, MASSACHUSSETS, NEVADA, TEXAS, UTAH, WASHINGTON 
    ];

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '800px' }}>

            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Map_of_USA_with_state_names_2.svg/1920px-Map_of_USA_with_state_names_2.svg.png'}
                style={{ width: '100%', height: 'auto' }}
            />
            {iconPositions.map((position, index) => (
                <IconButton
                    key={index}
                    sx={{ position: 'absolute', top: position.top, left: position.left }}
                    onClick={(e) => handleClick(e, iconTexts[index])}
                >
                    <FmdGoodIcon />
                </IconButton>
            ))}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box p={2} style={{ maxWidth: '400px' }}>
    {selectedText.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index !== selectedText.split('\n').length - 1 && <br />} {/* Add line break except after the last line */}
        </React.Fragment>
    ))}
</Box>
            </Popover>
        </Box>
    );
};

export default ImageWithIcons;


// Render the component
<ImageWithIcons />