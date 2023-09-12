'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { Typography } from '@mui/material';
import testbg from '../images/testbg.jpeg';
import exampleimg from '../images/testpollimg.jpg';
import { IndicatorLine } from './../components/IndicatorLine';

export default function Home() {
    return (
        <Box
            className='backgroundClass'
            sx={{ height: { xs: '200vw', md: '100%' }, width: { xs: 'cover', md: '100%' }, p: { xs: 2, md: 10 } }}
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
                            fontSize: { xs: '100%', md: '55px' },

                            flexWrap: 'wrap',
                            width: '70%',

                            mt: 5,
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
                            fontSize: { xs: '100%', md: '30px' },

                            flexWrap: 'wrap',
                            width: '50%',
                            mb: 20,
                            mt: 5,
                            ml: { xs: 2, md: 15 },
                        }}
                    >
                        <i>Scheduling meetups on Discord just got a lot easier.</i>
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box
                    sx={{ width: '30%', m: 5 }}
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
                    <Typography align='left' sx={{ p: 0, mt: 10, ml: 5, fontSize: { xs: '100%', md: '25px' } }}>
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
                    sx={{ display: 'flex', justifyContent: 'center', p: 5, mt: 4 }}
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
                        <Typography align='left' sx={{ mt: 5, mr: 5, color: 'white' }}>
                            Full Date/Time Control
                        </Typography>
                        <Typography align='left' sx={{ mt: 5, mr: 5, color: 'white' }}>
                            Up to 5 Poll Options
                        </Typography>
                        <Typography align='left' sx={{ mt: 5, mr: 5, color: 'white' }}>
                            Automatic Event Creation
                        </Typography>
                    </Box>
                    <Box sx={{}}>
                        <img className='eoImages' src='/eventorganizerpollembedimgpurple.jpg' />
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{ display: 'flex', justifyContent: 'space-around', mt: 15, mb: 15 }}
                component={motion.div}
                className='frosted-divider divider-glass'
                initial={{ x: '0%', y: '0%', opacity: 0, scale: 0.5 }}
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
                    fontSize: { xs: '100%', md: '40px' },

                    flexWrap: 'wrap',
                    width: '50%',
                    mb: 20,
                    mt: 5,
                    ml: { xs: 2, md: 15 },
                }}
            >
                Here's how it works:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'left', mt: 15 }}>
                <Box
                    sx={{ width: '40%', m: 5, ml: 10, mr: 20 }}
                    component={motion.div}
                    className='statement'
                    initial={{ x: '0%', y: '0%', opacity: 0, scale: 0.5 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '60px' },
                                mr: 5,
                                mt: 5,
                                ml: 5,
                            }}
                        >
                            1.
                        </Typography>
                        <Typography align='left' sx={{ fontSize: { xs: '100%', md: '25px' }, mt: 5 }}>
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
                    sx={{ display: 'flex', justifyContent: 'center', p: 5 }}
                    component={motion.div}
                    className='frosted'
                    initial={{ x: '0%', y: '0%', opacity: 0, scale: 0.5 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{}}>
                        <img className='eoImages' src='/eventorganizerpollcreateimg.jpg' />
                        <Box sx={{ display: 'flex' }}>
                            <Typography align='left' sx={{ mt: 5, mr: 5, color: 'white' }}>
                                - Name your event
                            </Typography>
                            <Typography align='left' sx={{ mt: 5, mr: 5, color: 'white' }}>
                                - Set how many votes a date needs to win
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Typography align='left' sx={{ mt: 5, mr: 5, color: 'white' }}>
                                - Set the duration of the poll (in hours)
                            </Typography>
                            <Typography align='left' sx={{ mt: 5, mr: 5, color: 'white' }}>
                                - Set up to 5 date/time choices
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
                    initial={{ x: '0%', y: '0%', opacity: 0, scale: 0.5 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '60px' },
                                mr: 5,
                                mt: 5,
                                ml: 5,
                            }}
                        >
                            2.
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
                    initial={{ x: '0%', y: '0%', opacity: 0, scale: 0.5 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
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
                    initial={{ x: '0%', y: '0%', opacity: 0, scale: 0.5 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography
                            className='statement'
                            sx={{
                                fontSize: { xs: '100%', md: '60px' },
                                mr: 5,
                                mt: 5,
                                ml: 5,
                            }}
                        >
                            3.
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
                    initial={{ x: '0%', y: '0%', opacity: 0, scale: 0.5 }}
                    animate={{ x: '0%', y: '0%', opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Box sx={{}}>
                        <img src='/eventorganizeralertimg.jpg' />
                        <Box sx={{}}>
                            <Typography align='left' sx={{ mt: 2, mb: 5, color: 'white' }}>
                                The server is alerted to the event's creation
                            </Typography>
                        </Box>
                        <img src='/eventorganizereventimg.jpg' />

                        <Box sx={{}}>
                            <Typography align='left' sx={{ mt: 2, mb: 2, color: 'white' }}>
                                Checking the events tab shows the newly created event!
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
