import React from 'react';
import { Box, IconButton } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import mapImage from './images/map.jpg';

const ImageWithIcons = ({ icons }) => { // Accepting icons as a prop
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
            }}
        >
            <img src={'https://www.clipartbest.com/clipart-9cz6Greyi.jpg'} />
            {(icons || []).map((icon, index) => ( // Check if icons is defined
                <IconButton
                    key={index}
                    onClick={icon.onClick}
                    sx={{
                        position: 'absolute',
                        top: icon.top,
                        left: icon.left,
                    }}
                >
                    <FmdGoodIcon />
                </IconButton>
            ))}
        </Box>
    );
};


export default ImageWithIcons;
// Usage example

const myIcons = [
    { top: '10%', left: '20%', onClick: () => console.log('Icon 1 clicked') },
    { top: '30%', left: '50%', onClick: () => console.log('Icon 2 clicked') },
];

<ImageWithIcons
    icons={myIcons}
/>

