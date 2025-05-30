'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Box, Grid, Button, Typography, Tabs, Tab, Paper } from '@mui/material';
import { motion } from 'framer-motion';


// Mock product data store
const productData = {
    "iphone-15-pro": {
        name: "iPhone 15 Pro",
        tagline: "Titanium. So strong. So light. So Pro.",
        description: "iPhone 15 Pro is the first iPhone to feature an aerospace-grade titanium design, using the same alloy that spacecraft use for missions to Mars. Titanium is stronger than any smartphone material, yet it's lightweight and feels amazing in your hand.",
        price: "From $999",
        images: [
            "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://www.apple.com/in/iphone-16-pro/images/overview/media-card/highlights_apple_intelligence_endframe__esdley4zqkya_xlarge.jpg",
            "https://images.pexels.com/photos/5749802/pexels-photo-5749802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        colors: [
            { name: "Natural Titanium", value: "#E5D3B3" },
            { name: "Blue Titanium", value: "#768CFF" },
            { name: "White Titanium", value: "#E0E0E0" },
            { name: "Black Titanium", value: "#161616" },
        ],
        storage: ["128GB", "256GB", "512GB", "1TB"],
        specs: [
            { name: "Display", value: "6.1-inch Super Retina XDR display" },
            { name: "Chip", value: "A17 Pro chip" },
            { name: "Camera", value: "48MP main | Ultra Wide | Telephoto" },
            { name: "Battery", value: "Up to 29 hours video playback" },
            { name: "Water Resistance", value: "IP68 (6 meters for up to 30 minutes)" },
            { name: "Operating System", value: "iOS 17" },
        ],
        category: "iphone",
    },
    "macbook-pro-m3": {
        name: "MacBook Pro",
        tagline: "Supercharged by M3 Pro and M3 Max.",
        description: "The new MacBook Pro, featuring the M3 family of chips, is the most advanced professional laptop in the world. With the power and efficiency of M3 Pro and M3 Max, it delivers performance that will transform your workflow.",
        price: "From $1999",
        images: [
            "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/705675/pexels-photo-705675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        colors: [
            { name: "Space Black", value: "#161616" },
            { name: "Silver", value: "#E0E0E0" },
        ],
        storage: ["512GB", "1TB", "2TB", "4TB", "8TB"],
        specs: [
            { name: "Display", value: "14.2-inch or 16.2-inch Liquid Retina XDR display" },
            { name: "Chip", value: "Apple M3 Pro or M3 Max chip" },
            { name: "Memory", value: "Up to 128GB unified memory" },
            { name: "Battery", value: "Up to 22 hours of battery life" },
            { name: "Ports", value: "SDXC card slot, HDMI port, 3.5 mm headphone jack, MagSafe 3 port, Three Thunderbolt 4 ports" },
            { name: "Operating System", value: "macOS Sonoma" },
        ],
        category: "mac",
    },
};

// Default fallback product
const defaultProduct = {
    name: "Product",
    tagline: "Product description",
    description: "This product is not available in our catalog.",
    price: "Price not available",
    images: [
        "https://images.pexels.com/photos/5749802/pexels-photo-5749802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    colors: [
        { name: "Default", value: "#E0E0E0" },
    ],
    storage: ["Not applicable"],
    specs: [
        { name: "Information", value: "No specifications available" },
    ],
    category: "unknown",
};
// https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge.jpg

export default function ProductPage() {
    const params = useParams();
    const productId = params?.id;
    const product = productData[productId] || defaultProduct;

    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [tab, setTab] = useState(0);

    return (
        <Box sx={{ pt: 10, px: { xs: 2, md: 6 }, maxWidth: '1200px', mx: 'auto' }}>
            <Box sx={{ mb: 3 }}>
                <Button
                    startIcon={<ArrowLeft size={16} />}
                    component={Link}
                    href={`/${product.category}`}
                    variant="outlined"
                >
                    Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Button>
            </Box>

            <Grid container spacing={6}>
                {/* Images */}
                <Grid size={{ xs: 12, lg: 6 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                paddingTop: '100%',
                                borderRadius: 2,
                                overflow: 'hidden',
                                backgroundColor: 'rgba(0,0,0,0.05)',
                            }}
                        >
                            <Image
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
                            {product.images.map((image, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: 1,
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        border: currentImageIndex === index ? '2px solid #3f51b5' : '1px solid #ccc',
                                    }}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        fill
                                        sizes="64px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </motion.div>
                </Grid>

                {/* Product Info */}
                <Grid size={{ xs: 12, lg: 6 }}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Typography variant="h4" fontWeight="bold">{product.name}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" mt={1}>
                            {product.tagline}
                        </Typography>
                        <Typography variant="h5" mt={2}>{product.price}</Typography>

                        {/* Color */}
                        <Box mt={4}>
                            <Typography variant="subtitle2" mb={1}>Color</Typography>
                            <Box display="flex" gap={2} flexWrap="wrap">
                                {product.colors.map((color) => (
                                    <Box
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: '50%',
                                            border: '2px solid transparent',
                                            backgroundColor: color.value,
                                            position: 'relative',
                                            cursor: 'pointer',
                                            transform: selectedColor.name === color.name ? 'scale(1.1)' : 'scale(1)',
                                            outline: selectedColor.name === color.name ? '2px solid #3f51b5' : 'none',
                                            transition: 'transform 0.2s',
                                        }}
                                        title={color.name}
                                    >
                                        {selectedColor.name === color.name && (
                                            <Check
                                                style={{
                                                    color: ['#E0E0E0', '#E5D3B3', '#FFFFFF'].includes(color.value)
                                                        ? 'black'
                                                        : 'white',
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                }}
                                            />
                                        )}
                                    </Box>
                                ))}
                            </Box>
                            <Typography variant="caption" color="text.secondary" mt={1} display="block">
                                Selected: {selectedColor.name}
                            </Typography>
                        </Box>

                        {/* Storage */}
                        <Box mt={4}>
                            <Typography variant="subtitle2" mb={1}>Storage</Typography>
                            <Box display="flex" gap={1} flexWrap="wrap">
                                {product.storage.map((storage) => (
                                    <Button
                                        key={storage}
                                        variant={selectedStorage === storage ? 'contained' : 'outlined'}
                                        onClick={() => setSelectedStorage(storage)}
                                        size="small"
                                    >
                                        {storage}
                                    </Button>
                                ))}
                            </Box>
                        </Box>

                        {/* Add to Bag */}
                        <Box mt={4}>
                            <Button fullWidth size="large" variant="contained" startIcon={<ShoppingCart size={18} />}>
                                Add to Bag
                            </Button>
                        </Box>

                        {/* Tabs */}
                        <Box mt={6}>
                            <Tabs
                                value={tab}
                                onChange={(_, newTab) => setTab(newTab)}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Overview" />
                                <Tab label="Tech Specs" />
                            </Tabs>

                            <Paper elevation={0} sx={{ mt: 2, p: 2 }}>
                                {tab === 0 && (
                                    <Typography color="text.secondary">{product.description}</Typography>
                                )}
                                {tab === 1 && (
                                    <Box>
                                        {product.specs.map((spec, index) => (
                                            <Box key={index} borderBottom={index < product.specs.length - 1 ? '1px solid #eee' : 'none'} pb={2} mb={2}>
                                                <Typography fontWeight="medium">{spec.name}</Typography>
                                                <Typography variant="body2" color="text.secondary">{spec.value}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                )}
                            </Paper>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
}
