'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Box, Button, Typography, IconButton, Stack, useTheme, Link as MuiLink } from '@mui/material';
import { motion } from '@/lib/motion';
import ProductCard from './product_card';
import Link from 'next/link';

export default function ProductShowcase({
    title,
    subtitle,
    products,
    showSeeAll = true,
    seeAllLink = '#',
    theme = 'light',
}) {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const isDark = theme === 'dark';
    const muiTheme = useTheme();

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction = 'left') => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.8;

            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });

            setTimeout(checkScrollButtons, 300);
        }
    };

    return (
        <Box
            component="section"
            sx={{
                py: 10,
                px: { xs: 2, sm: 3, lg: 4 },
                bgcolor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}
        >
            <Box maxWidth="lg" mx="auto">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ sm: 'flex-end' }}
                    spacing={2}
                    mb={6}
                >
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h4" fontWeight="bold">
                                {title}
                            </Typography>
                        </motion.div>
                        {subtitle && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Typography variant="subtitle1" color={isDark ? 'grey.400' : 'grey.700'} mt={1}>
                                    {subtitle}
                                </Typography>
                            </motion.div>
                        )}
                    </Box>

                    {showSeeAll && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <MuiLink component={Link} href={seeAllLink} underline="hover" color="primary" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                                See all products
                                <ChevronRight style={{ marginLeft: 4 }} size={18} />
                            </MuiLink>
                        </motion.div>
                    )}
                </Stack>

                <Box position="relative">
                    {canScrollLeft && (
                        <IconButton
                            onClick={() => scroll('left')}
                            sx={{
                                position: 'absolute',
                                left: -24,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                bgcolor: isDark ? 'grey.800' : 'white',
                                boxShadow: 3,
                                zIndex: 10,
                                '&:hover': {
                                    bgcolor: isDark ? 'grey.700' : 'grey.100',
                                },
                            }}
                        >
                            <ChevronLeft />
                        </IconButton>
                    )}

                    <Box
                        ref={scrollContainerRef}
                        onScroll={checkScrollButtons}
                        sx={{
                            display: 'flex',
                            gap: 3,
                            overflowX: 'auto',
                            scrollSnapType: 'x mandatory',
                            pb: 2,
                            px: 1,
                            '&::-webkit-scrollbar': { display: 'none' },
                        }}
                    >
                        {products.map((product) => (
                            <Box
                                key={product.id}
                                sx={{
                                    minWidth: { xs: 280, md: 320 },
                                    flexShrink: 0,
                                    scrollSnapAlign: 'start',
                                }}
                            >
                                <ProductCard {...product} />
                            </Box>
                        ))}
                    </Box>

                    {canScrollRight && (
                        <IconButton
                            onClick={() => scroll('right')}
                            sx={{
                                position: 'absolute',
                                right: -24,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                bgcolor: isDark ? 'grey.800' : 'white',
                                boxShadow: 3,
                                zIndex: 10,
                                '&:hover': {
                                    bgcolor: isDark ? 'grey.700' : 'grey.100',
                                },
                            }}
                        >
                            <ChevronRight />
                        </IconButton>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
