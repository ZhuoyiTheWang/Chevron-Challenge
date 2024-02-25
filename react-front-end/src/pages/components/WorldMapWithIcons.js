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
        '',''
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
        { top: '83%', left: '64.5%' },
        { top: '61%', left: '6%' },
        
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