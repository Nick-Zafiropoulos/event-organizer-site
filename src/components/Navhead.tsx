import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Navhead() {
    return (
        <Box className='headcss' sx={{ display: 'flex', justifyContent: 'left', p: 1.5 }}>
            <Button sx={{ fontFamily: 'roboto' }} variant='text'>
                Test Navbar
            </Button>
        </Box>
    );
}

export default Navhead;
