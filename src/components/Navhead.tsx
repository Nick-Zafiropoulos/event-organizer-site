import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Navhead() {
    return (
        <Box
            className='headcss'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1.5,
                minWidth: '100%',
            }}
        >
            <Box sx={{ flexGrow: { xs: '0', xxl: '1' } }}></Box>
            <Box
                sx={{
                    display: 'flex',

                    maxWidth: '1920px',
                    flexGrow: { xs: '1', xl: '2' },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'left', pl: 5 }}>
                    <img className='logo' src='/EventOrganizerLogo.png' />

                    <Button sx={{ fontFamily: 'arial', fontWeight: 'bold', color: 'white', ml: 3 }} variant='text'>
                        DOCS
                    </Button>
                    <Button sx={{ fontFamily: 'arial', fontWeight: 'bold', color: 'white' }} variant='text'>
                        SETUP
                    </Button>
                </Box>
            </Box>

            <Box sx={{ flexGrow: { xs: '0', xxl: '1' } }}></Box>
        </Box>
    );
}

export default Navhead;
