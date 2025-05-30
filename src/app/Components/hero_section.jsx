'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button, Stack, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection({
    title,
    subtitle,
    imageSrc,
    ctaText = 'Learn more',
    ctaLink = '#',
    secondaryCtaText = 'Buy',
    secondaryCtaLink = '#',
    theme = 'light',
}) {
    const heroRef = useRef(null);
    const muiTheme = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDark = theme === 'dark';

    return (
        <div
            style={{
                position: 'relative',
                height: '100vh',
                overflow: 'hidden',
                backgroundColor: isDark ? '#000' : '#fff',
            }}
        >
            {/* Background Image with parallax scroll */}
            <div
                ref={heroRef}
                style={{ position: 'absolute', inset: 0, zIndex: 0 }}
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>

            {/* Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    padding: '0 1.5rem',
                    textAlign: 'center',
                }}
            >
                <Stack spacing={4} alignItems="center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                color: isDark ? '#fff' : '#000',
                            }}
                        >
                            {title}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                maxWidth: 600,
                                color: isDark ? '#ccc' : '#555',
                            }}
                        >
                            {subtitle}
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <Button
                                variant="contained"
                                href={ctaLink}
                                size="large"
                                endIcon={<ArrowRight size={18} />}
                            >
                                {ctaText}
                            </Button>
                            <Button
                                variant="outlined"
                                href={secondaryCtaLink}
                                size="large"
                            >
                                {secondaryCtaText}
                            </Button>
                        </Stack>
                    </motion.div>
                </Stack>
            </div>

            {/* Gradient Overlay */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '8rem',
                    zIndex: 10,
                    background: `linear-gradient(to top, ${isDark ? '#000' : '#fff'}, transparent)`,
                }}
            />
        </div>
    );
}
