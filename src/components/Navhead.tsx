import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Navbar() {
    return (
        <Box className='headcss' sx={{ display: 'flex', justifyContent: 'left', p: 1.5 }}>
            <Button sx={{ fontFamily: 'monospace' }} variant='text'>
                Text
            </Button>
        </Box>
    );
}

export default Navbar;
