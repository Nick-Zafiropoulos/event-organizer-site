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

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Event Organizer Infosite',
    description:
        'Event Organizer is a scheduler for Discord that allows a user to poll other users for their availability and automatically creates events based on the result of the poll.',
};

export default function RootLayout(props) {
    const { children } = props;
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
