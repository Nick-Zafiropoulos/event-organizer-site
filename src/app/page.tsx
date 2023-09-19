'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { Typography } from '@mui/material';
import IndicatorLine from './../components/IndicatorLine';
import FooterLine from './../components/FooterLine';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
    return (
        <Box
            className='backgroundClass'
            sx={{ height: { xs: 'cover', md: '100%' }, width: { xs: '100vw', md: '100%' }, p: { xs: 2, md: 10 } }}
        >
            <Box
                component={motion.div}
                initial={{ x: '0%', y: '-10%', opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
                animate={{ x: '0%', y: '0%', opacity: 1 }}
                sx={{ display: 'flex' }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        className='statement'
                        sx={{
                            fontSize: { xs: '30px', md: '55px' },

                            width: '100%',

                            mt: { xs: 2, md: 5 },
                            ml: { xs: 2, md: 15 },
                        }}
                    >
                        <b>Meet the Discord Event Organizer</b>
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
            </Box>

            <Box
                component={motion.div}
                initial={{ x: '0%', y: '-10%', opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
                animate={{ x: '0%', y: '0%', opacity: 1 }}
                sx={{ display: 'flex' }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        className='statement'
                        sx={{
                            fontSize: { xs: '15px', md: '30px' },

                            flexWrap: 'wrap',
                            width: { xs: '100%', md: '55%' },
                            mb: { xs: 5, md: 15 },
                            mt: { xs: 3, md: 5 },
                            ml: { xs: 2, md: 15 },
                        }}
                    >
                        <i>Scheduling meetups on Discord just got a lot easier.</i>
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'left', md: 'space-around' },
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box
                    sx={{ width: { xs: '95%', md: '35%' }, m: { xs: 0, md: 5 } }}
                    component={motion.div}
                    className='statement'
                    initial={{ x: '0%', y: '-10%', opacity: 0 }}
                    animate={{ x: '0%', y: '0%', opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Typography
                        align='left'
                        sx={{ p: 0, mt: { xs: 2, md: 10 }, ml: { xs: 2, md: 5 }, fontSize: { xs: '15px', md: '25px' } }}
                    >
                        Use Event Organizer to choose the right date and time for your next get-together by polling your
                        server members.
                    </Typography>
                    <Box
                        sx={{ display: 'flex' }}
                        component={motion.div}
                        className='statement'
                        initial={{ x: '0%', y: '-10%', opacity: 0 }}
                        animate={{ x: '0%', y: '0%', opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <IndicatorLine />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'left', md: 'center' },
                        flexDirection: { xs: 'column-reverse', md: 'row' },
                        p: { xs: 2, md: 5 },
                        mt: { xs: 2, md: 4 },
                    }}
                    component={motion.div}
                    className='frosted'
                    initial={{ x: '0%', y: '-10%', opacity: 0 }}
                    animate={{ x: '0%', y: '0%', opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{}}>
                        <Typography align='left' sx={{ mt: { xs: 2, md: 5 }, mr: { xs: 2, md: 5 }, color: 'white' }}>
                            <b>Full Date/Time Control</b>
                        </Typography>
                        <Typography align='left' sx={{ mt: { xs: 2, md: 5 }, mr: { xs: 2, md: 5 }, color: 'white' }}>
                            <b>Up to 5 Poll Options</b>
                        </Typography>
                        <Typography align='left' sx={{ mt: { xs: 2, md: 5 }, mr: { xs: 2, md: 5 }, color: 'white' }}>
                            <b>Automatic Event Creation</b>
                        </Typography>
                    </Box>
                    <Box sx={{}}>
                        <img className='eoImages' src='/eventorganizerpollembedimgpurple.jpg' />
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{ display: 'flex', justifyContent: 'space-around', mt: { xs: 5, md: 15 }, mb: { xs: 3, md: 15 } }}
                component={motion.div}
                className='frosted-divider divider-glass'
                initial={{ x: '0%', y: '0%', opacity: 0, scale: 0.8 }}
                animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            ></Box>
            <Typography
                className='statement'
                component={motion.div}
                initial={{ x: '0%', y: '-10%', opacity: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0, 0.71, 0.2, 1.01] }}
                animate={{ x: '0%', y: '0%', opacity: 1 }}
                sx={{
                    fontSize: { xs: '30px', md: '45px' },

                    width: '100%',
                    mb: 10,
                    mt: 5,
                    ml: { xs: 2, md: 15 },
                }}
            >
                <b>Here&apos;s How It Works:</b>
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    justifyContent: 'left',
                    mt: { xs: 2, md: 10 },
                }}
            >
                <Box
                    sx={{ width: { xs: '95%', md: '40%' }, m: 5, ml: { xs: 2, md: 10 }, mr: 20 }}
                    component={motion.div}
                    className='statement'
                    initial={{ x: '0%', y: '-10%', opacity: 0, scale: 1 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.8,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',

                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '25px', md: '60px' },
                                mr: { xs: 1, md: 5 },
                                mt: { xs: 1, md: 5 },
                                ml: { xs: 1, md: 5 },
                            }}
                        >
                            <b>1.</b>
                        </Typography>
                        <Typography align='left' sx={{ fontSize: { xs: '15px', md: '25px' }, mt: { xs: 2, md: 5 } }}>
                            Use the /poll command to customize the event poll to your needs.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex' }}
                        component={motion.div}
                        className='statement'
                        initial={{ x: '0%', y: '-10%', opacity: 0 }}
                        animate={{ x: '0%', y: '0%', opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <IndicatorLine />
                    </Box>
                </Box>
                <Box
                    sx={{ display: 'flex', justifyContent: 'center', p: { xs: 1, md: 5 } }}
                    component={motion.div}
                    className='frosted'
                    initial={{ x: '0%', y: '-10%', opacity: 0, scale: 1 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.8,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{}}>
                        <img className='eoImages' src='/eventorganizerpollcreateimg.jpg' />
                        <Box sx={{ display: 'flex' }}>
                            <Typography
                                align='left'
                                sx={{ mt: { xs: 2, md: 5 }, mr: { xs: 2, md: 5 }, color: 'white' }}
                            >
                                <b>- Name your event</b>
                            </Typography>
                            <Typography
                                align='left'
                                sx={{ mt: { xs: 2, md: 5 }, mr: { xs: 2, md: 5 }, color: 'white' }}
                            >
                                <b>- Set how many votes a date needs to win</b>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Typography
                                align='left'
                                sx={{ mt: { xs: 2, md: 5 }, mr: { xs: 2, md: 5 }, color: 'white' }}
                            >
                                <b>- Set the duration of the poll (in hours)</b>
                            </Typography>
                            <Typography
                                align='left'
                                sx={{ mt: { xs: 2, md: 5 }, mr: { xs: 2, md: 5 }, color: 'white' }}
                            >
                                <b>- Set up to 5 date/time choices</b>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'left', mt: 15 }}>
                <Box
                    sx={{ width: '40%', m: 5, ml: 10, mr: 20 }}
                    component={motion.div}
                    className='statement'
                    initial={{ x: '0%', y: '-10%', opacity: 0, scale: 1 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '60px' },
                                mr: 5,
                                mt: 5,
                                ml: 5,
                            }}
                        >
                            <b>2.</b>
                        </Typography>
                        <Typography align='left' sx={{ mt: 5, fontSize: { xs: '100%', md: '25px' } }}>
                            Server members react to the poll to indicate their availability.
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex' }}
                        component={motion.div}
                        className='statement'
                        initial={{ x: '0%', y: '-10%', opacity: 0 }}
                        animate={{ x: '0%', y: '0%', opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <IndicatorLine />
                    </Box>
                </Box>
                <Box
                    sx={{ display: 'flex', justifyContent: 'center', p: 5 }}
                    component={motion.div}
                    className='frosted'
                    initial={{ x: '0%', y: '-10%', opacity: 0, scale: 1 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{}}>
                        <img className='eoImages' src='/eventorganizerpollembedimgreactions.jpg' />
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'left', mt: 15 }}>
                <Box
                    sx={{ width: '40%', m: 5, ml: 10, mr: 20 }}
                    component={motion.div}
                    className='statement'
                    initial={{ x: '0%', y: '-10%', opacity: 0, scale: 1 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '60px' },
                                mr: 5,
                                mt: 5,
                                ml: 5,
                            }}
                        >
                            <b>3.</b>
                        </Typography>
                        <Typography align='left' sx={{ mt: 5, fontSize: { xs: '100%', md: '25px' } }}>
                            The winning choice of your poll is automatically converted to an event for your discord
                            server. No extra work required!
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex' }}
                        component={motion.div}
                        className='statement'
                        initial={{ x: '0%', y: '-10%', opacity: 0 }}
                        animate={{ x: '0%', y: '0%', opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <IndicatorLine />
                    </Box>
                </Box>
                <Box
                    sx={{ display: 'flex', justifyContent: 'center', p: 5 }}
                    component={motion.div}
                    className='frosted'
                    initial={{ x: '0%', y: '-10%', opacity: 0, scale: 1 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{}}>
                        <img className='eoImages' src='/eoeventcreation.jpg' />
                        <Box sx={{}}>
                            <Typography align='left' sx={{ mt: 1, mb: 5, color: 'white' }}>
                                <b>The server is alerted to the event&apos;s creation</b>
                            </Typography>
                        </Box>
                        <img className='eoImages' src='/eoeventinserver.jpg' />

                        <Box sx={{}}>
                            <Typography align='left' sx={{ mt: 1, mb: 2, color: 'white' }}>
                                <b>Checking the events tab shows the newly created event!</b>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                component={motion.div}
                initial={{ x: '0%', y: '-10%', opacity: 0, scale: 1 }}
                animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1.1,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                sx={{ display: 'flex', justifyContent: 'center', mt: 15, mb: 10 }}
            >
                <Box className='statement' sx={{ display: 'flex', justifyContent: 'center', fontSize: '40px' }}>
                    <i>
                        <b>Want To Get Started?</b>
                    </i>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 5 }}>
                    <Button
                        href='https://eventorganizer.up.railway.app/setup'
                        color='secondary'
                        sx={{ fontSize: '15px', display: 'flex', alignItems: 'center' }}
                        variant='contained'
                        endIcon={<PlayCircleOutlineIcon />}
                    >
                        Take Me To Setup
                    </Button>
                </Box>
            </Box>

            <Box
                component={motion.div}
                initial={{ x: '-20%', y: '-10%', opacity: 0, scale: 0.8 }}
                animate={{ x: '-20%', y: '0%', opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.9,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <FooterLine />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Box className='footerText' sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                    <EmailIcon />
                    &nbsp;
                    <a href='mailto: nick.zaff@gmail.com'>Get In Contact</a>
                </Box>
                <Box className='footerText' sx={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
                    <GitHubIcon />
                    &nbsp;GitHub:&nbsp;
                    <a href='https://github.com/Nick-Zafiropoulos/discord-event-organizer'>Event Organizer Repo</a>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <a href='https://github.com/Nick-Zafiropoulos/event-organizer-site'>Website Repo</a>
                </Box>
            </Box>
        </Box>
    );
}
