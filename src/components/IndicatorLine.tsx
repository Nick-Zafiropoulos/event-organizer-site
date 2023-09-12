import * as React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
        opacity: 1,
        pathLength: 1,

        fill: 'rgba(60, 60, 100, 0.514)',
    },
};

export const IndicatorLine = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }} className='container'>
            <motion.svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' className='indicatorLines'>
                <motion.path
                    d='M0 0L0 100'
                    variants={icon}
                    initial='hidden'
                    animate='visible'
                    transition={{
                        default: { duration: 1, ease: 'backIn' },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                />
            </motion.svg>
            <motion.svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' className='indicatorLines'>
                <motion.path
                    d='M0 0L3000 3'
                    variants={icon}
                    initial='hidden'
                    animate='visible'
                    transition={{
                        delay: 0.9,
                        default: { duration: 1, ease: 'easeInOut' },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                />
            </motion.svg>
        </Box>
    );
};
