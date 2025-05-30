'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography, Button, Chip, Stack, IconButton } from '@mui/material';
import { motion } from '@/lib/motion';

export default function ProductCard({
    id,
    name,
    tagline,
    price,
    imageSrc,
    category,
    colors = ['#E5E5E5', '#1A1A1A', '#C79F6C'],
    isNew = false,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
                borderRadius: 12,
                backgroundColor: 'white',
                boxShadow: isHovered ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box
                sx={{
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    overflow: 'hidden',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                        rotateY: isHovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ height: '100%', width: '100%' }}
                >
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>

                {isNew && (
                    <Chip
                        label="New"
                        color="primary"
                        size="small"
                        sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            fontWeight: 500,
                            borderRadius: 9999,
                        }}
                    />
                )}
            </Box>

            <Box p={3}>
                <Typography variant="h6" fontWeight="medium">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                    {tagline}
                </Typography>

                <Stack direction="row" alignItems="center" justifyContent="space-between" mt={3}>
                    <Typography variant="body1" fontWeight="medium">
                        {price}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {colors.map((color) => (
                            <IconButton
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    border: '1px solid #ccc',
                                    p: 0,
                                    backgroundColor: color,
                                    transform: selectedColor === color ? 'scale(1.2)' : 'scale(1)',
                                    boxShadow: selectedColor === color ? `0 0 0 2px ${color}` : 'none',
                                }}
                                aria-label={`Select color ${color}`}
                            />
                        ))}
                    </Stack>
                </Stack>

                <Stack direction="row" spacing={1} mt={3}>
                    <Button fullWidth component={Link} href={`/Products/${category}/${id}`} variant="contained">
                        Learn more
                    </Button>
                    <Button fullWidth variant="outlined">Buy</Button>
                </Stack>
            </Box>
        </motion.div>
    );
}
