'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';

export default function FeatureSection({
    heading,
    subheading,
    features,
    imageSrc,
    imageAlt = 'Feature image',
    imagePosition = 'right',
    theme = 'light',
}) {
    const muiTheme = useTheme();
    const isDark = theme === 'dark';

    const textColor = isDark ? '#fff' : '#000';
    const mutedTextColor = isDark ? muiTheme.palette.grey[300] : muiTheme.palette.grey[600];
    const bgColor = isDark ? '#000' : '#fff';
    const iconBgColor = isDark ? muiTheme.palette.grey[800] : muiTheme.palette.grey[100];

    const renderImage = (
        <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: 500,
                    borderRadius: 4,
                    overflow: 'hidden',
                }}
            >
                <Image
                    src={imageSrc || ''}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                />
            </Box>
        </motion.div>
    );

    return (
        <Box sx={{ py: 12, px: 2, backgroundColor: bgColor }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={8}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            color: textColor,
                        }}
                    >
                        {heading}
                    </motion.h2>
                    {subheading && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                marginTop: '1rem',
                                maxWidth: '600px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                fontSize: '1.125rem',
                                color: mutedTextColor,
                            }}
                        >
                            {subheading}
                        </motion.p>
                    )}
                </Box>

                <Grid container spacing={6} alignItems="center">
                    {imageSrc && imagePosition === 'left' && (
                        <Grid size={{ xs: 12, lg: 6 }}>
                            {renderImage}
                        </Grid>
                    )}

                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Box display="flex" flexDirection="column" gap={5}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{ display: 'flex' }}
                                >
                                    {feature.icon && (
                                        <Box
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: iconBgColor,
                                                borderRadius: 2,
                                                mr: 2,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                    )}
                                    <Box>
                                        <Typography variant="h6" sx={{ color: textColor }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ mt: 1, color: mutedTextColor }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </Grid>

                    {imageSrc && imagePosition === 'right' && (
                        <Grid size={{ xs: 12, lg: 6 }}>
                            {renderImage}
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Box>
    );
}
