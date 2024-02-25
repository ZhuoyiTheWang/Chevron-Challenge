import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Typography from '@mui/material/Typography';

const WorldMapWithIcons = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedText, setSelectedText] = useState('');

    const iconTexts = [
        'KazMunayGas: Announced a memorandum of understanding to explore potential lower carbon business opportunities in Kazakhstan with JSC NC KazMunayGas (KMG). Chevron and KMG have been evaluating the potential for lower carbon projects in areas such as CCUS; hydrogen; energy efficiency and methane management; and carbon financial disclosure methodology. ',
        `Mitsui Oil Exploration Co., Ltd: Announced the signing of a joint collaboration agreement to explore the technical and commercial feasibility of advanced geothermal power generation in Japan. Building on Chevron and MOECO’s long-standing relationship, the new collaboration will study geothermal resource potential across Japan and will evaluate the effectiveness of advanced-closed loop technology for a future joint pilot project in Japan. 

        JERA: Collaborating on multiple lower carbon opportunities focused on the U.S. and Asia-Pacific regions. Opportunities include the production of lower carbon fuels, CCUS and new technology commercialization. `,
        `Quest: Collaborating on the world’s first commercial-scale CCS project to tackle carbon emissions in the Canadian oil sands. The Quest project safely captures and stores 1 million tonnes of CO2 per year, sequestering over 7 million tonnes of CO2 as of 2021. 

        Svante investment: Led investment in Svante’s Series E fundraising round, which raised $318 million that will be used to accelerate the manufacturing of Svante’s carbon capture technology. Watch this interview to learn more. 
        
        Eavor Technologies: Invested in Eavor Technologies, a company that provides a closed-loop geothermal technology for both power and direct heat markets. Eavor’s innovative system has dispatchability for power load balancing, which is becoming more essential as intermittent renewables saturate more power grids. `,
        `Australia greenhouse gas assessment permits: Announced that Chevron Australia is part of three joint ventures that have been granted an interest in three offshore greenhouse gas assessment permits. The acreage totals nearly 7.8 million acres – an area larger than Belgium. 

        Carbon Sync: Invested in Carbon Sync to develop soil carbon sequestration projects in Western Australia. Through holistic management and regenerative farming practices, Carbon Sync aims to improve soil health, enhancing its ability to capture and sequester carbon. `,
        `Chevron Singapore: As one of 13 partners, Chevron Singapore signed a memorandum of understanding with the Agency for Science, Technology and Research (A*STAR) to formalize a public-private partnership to explore a testbed facility for accelerating industry adoption of emerging carbon capture and utilization technologies to enable companies to rapidly pilot and scale up new CCU technologies. 

        Chevron Singapore CCUS Consortium: Announced a memorandum of understanding with Air Liquide, Keppel Infrastructure and PetroChina to create a consortium that intends to evaluate and advance the development of large-scale CCUS solutions and integrated infrastructure in Singapore. Through research, testing and operational solutions, the consortium aims to provide industrywide CCUS infrastructure to support the energy and chemicals sector by capturing CO2 emissions to utilize for making useful products like plastics and cement, or by transporting the CO2 to geological reservoirs in the Asia-Pacific region for permanent and secure storage. 

        Mitsui O.S.K. Lines, Ltd.: Announced signing a joint study agreement (JSA) with Mitsui O.S.K. Lines, Ltd. on the feasibility of transporting liquified CO2 from Singapore to permanent storage locations offshore Australia. The JSA will complement work to be advanced by a recently announced consortium to explore solutions for large-scale carbon capture, transport and permanent storage of CO2 from Singapore. 
        
        Singapore National Research Foundation: Chevron is a member of a consortium with the Singapore National Research Foundation and other companies. We are working jointly to develop the first end-to-end decarbonization process in Singapore. 
        
        Global Centre for Maritime Decarbonization: Joined the GCMD, an independent, nonprofit organization established with the help of the Maritime and Port Authority of Singapore, to support development of potentially scalable lower carbons. `,
        `Pertamina and Keppel: Signed a joint study agreement (JSA) to explore the development of select lower carbon hydrogen and ammonia projects using renewable energy located primarily in Sumatera, Indonesia.

        Pertamina: Announced a partnership with PT Pertamina to explore potential lower carbon business opportunities in Indonesia. To serve local and potentially regional customers, we plan to consider novel geothermal technologies; carbon offsets through nature-based solutions; carbon capture, utilization, and storage (CCUS); as well as lower carbon hydrogen development, production, storage and transport. `,
        'Hydrogenious LOHC Technologies: Announced an investment in Hydrogenious, a developer of liquid organic hydrogen carrier technology. ',
        'Baseload Capital: Invested in Baseload Capital, a private investment company focused on the development and operation of lower-temperature geothermal and heat power assets. '
        //KAZAKHSTAN, JAPAN, CANADA, AUSTRALIA, SINGAPORE, INDONESIA, GERMANY, SWEDEN 
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
        { top: '25%', left: '63%' },
        { top: '33%', left: '82.3%' },
        { top: '19%', left: '23.3%' },
        { top: '73%', left: '82%' },
        { top: '56.6%', left: '75%' },
        { top: '60%', left: '80%' },
        { top: '24%', left: '49%' },
        { top: '16%', left: '50.5%' },
        //KAZAKHSTAN, JAPAN, CANADA, AUSTRALIA, SINGAPORE, INDONESIA, GERMANY, SWEDEN 
        
    ];

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '800px' }}>
            <Box sx={{ padding: '20px', backgroundColor: 'white', textAlign: 'center' }}>
                <Typography variant="h6">
                    But we didn't stop in the United States!
                </Typography>
            </Box>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/World_Map_%28political%29.svg/1920px-World_Map_%28political%29.svg.png'}
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

export default WorldMapWithIcons;


// Render the component
<WorldMapWithIcons />