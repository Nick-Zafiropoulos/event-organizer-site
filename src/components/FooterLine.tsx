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

        fill: 'rgba(100, 100, 100, 100)',
    },
};

function FooterLine() {
    return (
        <>
            {' '}
            <Box
                sx={{ display: 'flex', justifyContent: 'left', width: '100%', mt: 15 }}
                className='container mobile-footer-line'
            >
                <motion.svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 100 100'
                    className='footerLines mobile-footer-line'
                >
                    <motion.path
                        d='M900 0L7320 3'
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
            <Box
                sx={{ display: 'flex', justifyContent: 'left', width: '100%', mt: { xs: 5, md: 0 } }}
                className='container desktop-footer-line'
            >
                <motion.svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 100 100'
                    className='footerLines desktop-footer-line'
                >
                    <motion.path
                        d='M100 0L7320 3'
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
        </>
    );
}

export default FooterLine;
