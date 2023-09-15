'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import Navbar from '../components/Navbar';
import Navhead from '../components/Navhead';
import Box from '@mui/material/Box';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

function ClientComponent({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <AnimatePresence mode='wait'>
            <html lang='en'>
                <body>
                    {/* <Navbar sx={{ backgroundColor: '#000' }} /> */}
                    <Navhead />
                    {/* <Navbar /> */}
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
                    </Box>
                </body>
            </html>
        </AnimatePresence>
    );
}

export default ClientComponent;
