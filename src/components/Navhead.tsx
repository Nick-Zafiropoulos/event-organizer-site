import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Navhead() {
    return (
        // Desktop Navbar

        <Box
            className='headcss desktop-header'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                p: { xs: 1, md: 1.2 },
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
                <Box sx={{ display: 'flex', justifyContent: 'left', pl: { xs: 1, md: 5 } }}>
                    <a href='/'>
                        <img className='logo' src='/EventOrganizerLogo.png' />
                    </a>

                    {/* <Button
                        href='/'
                        sx={{
                            fontFamily: 'arial',
                            maxWidth: { xs: '30%', md: '100%' },
                            fontWeight: 'bold',
                            color: 'white',
                            ml: 2,
                        }}
                        variant='text'
                    >
                        Event Organizer
                    </Button> */}

                    <Button
                        href='/setup'
                        sx={{ fontFamily: 'arial', fontWeight: 'bold', color: 'white', ml: { xs: 2, md: 3 } }}
                        variant='text'
                    >
                        SETUP
                    </Button>

                    <Button
                        href='/docs'
                        sx={{ fontFamily: 'arial', fontWeight: 'bold', color: 'white' }}
                        variant='text'
                    >
                        DOCS
                    </Button>
                </Box>
            </Box>

            <Box sx={{ flexGrow: { xs: '0', xxl: '1' } }}></Box>
        </Box>
    );
}

export default Navhead;
