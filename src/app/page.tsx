'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { Typography } from '@mui/material';

export default function Home() {
    return (
        <main>
            <Box
                component={motion.div}
                className='circle-purple'
                initial={{ x: '-100%', y: '0%', opacity: 0, scale: 0.5 }}
                animate={{ x: '-50%', y: '0%', opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <Typography align='center' sx={{ p: 10 }}>
                    hello
                </Typography>
            </Box>
            <Box
                component={motion.div}
                className='circle-blue'
                initial={{ x: '-100%', y: '0%', opacity: 0, scale: 0.5 }}
                animate={{ x: '-20%', y: '-50%', opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <Typography align='center' sx={{ p: 10 }}>
                    hello
                </Typography>
            </Box>
            <Box
                component={motion.div}
                className='frosted'
                initial={{ x: '100%', y: '0%', opacity: 0, scale: 0.5 }}
                animate={{ x: '20%', y: '-800%', opacity: 1, scale: 1 }}
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
        </main>
    );
}
