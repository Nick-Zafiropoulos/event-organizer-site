'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { Typography } from '@mui/material';
import testbg from '../images/testbg.jpeg';
import exampleimg from '../images/testpollimg.jpg';

export default function Home() {
    return (
        <Box
            className='backgroundClass'
            sx={{ height: { xs: '200vw', md: '100%' }, width: { xs: 'cover', md: '100%' }, p: { xs: 2, md: 10 } }}
        >
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        className='statement'
                        sx={{
                            fontSize: { xs: '100%', md: '55px' },

                            flexWrap: 'wrap',
                            width: '50%',
                            mb: 20,
                            mt: 5,
                            ml: { xs: 2, md: 15 },
                        }}
                    >
                        Scheduling meetups on Discord just got a lot easier.
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box
                    sx={{ width: '30%', height: '20vw', m: 5 }}
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
                    <Typography align='center' sx={{ p: 0, mt: 10, fontSize: { xs: '100%', md: '25px' } }}>
                        Use Event Organizer to choose the right date and time for your next get-together by polling your
                        server members.
                    </Typography>
                </Box>
                <Box
                    sx={{ width: '50%' }}
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
                    <Box>
                        <Typography align='left' sx={{ mt: 10, ml: 10 }}>
                            Full Date/Time Control
                        </Typography>
                        <Typography align='left' sx={{ mt: 10, ml: 10 }}>
                            Up to 5 poll options
                        </Typography>
                        <Typography align='left' sx={{ mt: 10, ml: 10 }}>
                            Automatic Event Creation
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Box
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
                    <Typography align='center' sx={{ p: 10 }}>
                        THIS IS A LOT OF TEXT
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
