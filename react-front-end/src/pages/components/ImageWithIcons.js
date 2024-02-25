 import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FmdGoodIcon from '@mui/icons-material/FmdGood'; // Import the icon component

const ImageWithIcons = ({ icons }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%', // Full width of the page
                height: '800px', // Set a fixed height or make it responsive as per your layout
                display: 'flex', // Use flexbox for alignment
                justifyContent: 'flex-start', // Align children to the left
            }}
        >
            <img 
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Map_of_USA_with_state_names_2.svg/1920px-Map_of_USA_with_state_names_2.svg.png'} 
                style={{ 
                    width: '100%', // Ensures the image does not exceed the box width
                    height: 'auto', // Maintain aspect ratio
                    //objectFit: 'contain' // Prevents image stretching
                }} 
            />
            {(icons || []).map((icon, index) => (
                <IconButton
                    key={index}
                    onClick={icon.onClick}
                    sx={{
                        position: 'absolute',
                        top: icon.top,
                        left: icon.left,
                        zIndex: 2, // Ensure the icon is above the image
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

// Render the component
<ImageWithIcons
    icons={myIcons}
/>