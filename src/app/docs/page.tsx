'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { Typography } from '@mui/material';
import { Example } from '../../components/Example';

export default function Docs() {
    return (
        <Box
            className='backgroundClassDocs'
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
                        Using Event Organizer
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
            </Box>

            <Box
                sx={{ display: 'flex', justifyContent: 'center', p: 5, pb: 100, mt: 10 }}
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
                        This is placeholder text for the usage docs...
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
