import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ProductCard from '../Components/product_card';
import VideoSnap from '../Components/VideoSnap';
// https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge.jpg

const productData = [
    {
        title: 'Apple Intelligence and macOS',
        description: 'Easy to use. Easy to love.',
        imageUrl: 'https://www.apple.com/in/mac/home/images/overview/consider/mac_intelligence__esfi0qmvis6e_xlarge.jpg'
    },
    {
        title: 'Performance and Battery Life',
        description: 'Go fast. Go far.',
        imageUrl: 'https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg'
    },
    {
        title: 'Mac and iPhone',
        description: 'Dream team.',
        imageUrl: 'https://www.apple.com/in/mac/home/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge.jpg'
    },
    {
        title: 'Compatibility',
        description: 'Mac runs your favourite apps.',
        imageUrl: 'https://www.apple.com/in/mac/home/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge.jpg'
    },
    {
        title: 'Privacy and Security',
        description: 'Your business is nobody else’s.',
        imageUrl: 'https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg'
    },
    {
        title: 'Durability',
        description: 'Built to stand the test of time.',
        imageUrl: 'https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_durability__epiwcuk7zkeq_xlarge.jpg'
    },
    {
        title: 'Apple Values',
        description: 'Our values drive everything we do.',
        imageUrl: 'https://www.apple.com/v/mac/home/cg/images/overview/consider/mac_values__c9gck9qi4kia_xlarge.jpg'
    },
    {
        title: 'Apple MacBook Air',
        description: 'Ultra-Portable Powerhouse',
        imageUrl: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1743960568/Croma%20Assets/Computers%20Peripherals/Laptop/Images/314075_7_uguzcm.png'
    }
];

const featuredProducts = [
    {
        id: "iphone-15-pro",
        name: "iPhone 15 Pro",
        tagline: "Titanium. So strong. So light. So Pro.",
        price: "From $999",
        imageSrc: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "iphone",
        colors: ["#555555", "#E5D3B3", "#161616"],
        isNew: true,
    },
    {
        id: "macbook-pro-m3",
        name: "MacBook Pro",
        tagline: "Supercharged by M3 Pro and M3 Max.",
        price: "From $1999",
        imageSrc: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "mac",
        colors: ["#747474", "#E0E0E0"],
        isNew: true,
    },
    {
        id: "ipad-pro",
        name: "iPad Pro",
        tagline: "Supercharged by M2",
        price: "From $799",
        imageSrc: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "ipad",
        colors: ["#747474", "#E0E0E0"],
    },
    {
        id: "apple-watch-series-9",
        name: "Apple Watch Series 9",
        tagline: "Smarter. Brighter. Mightier.",
        price: "From $399",
        imageSrc: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "watch",
        colors: ["#FF6D6D", "#747474", "#E0E0E0"],
    },
    {
        id: "airpods-pro",
        name: "AirPods Pro",
        tagline: "Adaptive Audio. Now playing.",
        price: "From $249",
        imageSrc: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "airpods",
    },
];


export default function MacPage() {
    return (
        <div>
            <Container sx={{ mt: 9.5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                    <Divider sx={{ width: '40%', mb: 2 }} />
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
                        Mac
                    </Typography>
                    <Divider sx={{ width: '40%', mb: 2 }} />
                </Box>

                <Grid container spacing={2}>
                    {productData.map((product, index) => (
                        <Grid size={{ xs: 6, md: 3 }} sx={{ position: 'relative' }} key={`product-${index}.${product?.title}`}>
                            <Box sx={{ position: 'absolute', top: 1, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent', color: 'white' }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 200,
                                        background: 'linear-gradient(to bottom, rgba(3, 0, 0, 0.2),rgba(3, 0, 0, 0.2),rgba(0, 0, 0, 0.2), transparent)',
                                        pointerEvents: 'none',
                                        zIndex: 1,
                                        borderRadius: 2,
                                    }}
                                />
                                <Box sx={{ position: 'relative', zIndex: 2 }}>
                                    <Typography variant="h5" sx={{
                                        mb: 2, fontWeight: 'bold', px: 2, pt: 3,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        maxWidth: '100%',
                                    }}>
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2, color: 'white', px: 2, }}>
                                        {product.description}
                                    </Typography>
                                </Box>
                            </Box>
                            <Image
                                src={product?.imageUrl}
                                alt="Apple Intelligence"
                                width={200}
                                height={100}
                                style={{
                                    width: '100%',
                                    height: '480px',
                                    objectFit: 'cover',
                                    borderRadius: 8,
                                }}
                            />

                        </Grid>
                    ))}
                    <Grid size={{ xs: 12, md: 6 }}></Grid>
                </Grid>
            </Container>
            <Box sx={{ mt: 6 }}>
                <VideoSnap video={'https://www.apple.com/105/media/us/mac/family/2025/59856fc1-d007-421a-90ee-734ddf3fd25d/anim/welcome/large_2x.mp4'} />
            </Box>
            <Box sx={{ bgcolor: 'rgba(248, 234, 234, 0.5)', width: '100%' }}>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 3,
                            pb: 2,
                            pt: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography variant="h3" fontWeight="bold">
                            Mac
                        </Typography>
                        <Grid container spacing={2} mb={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            {featuredProducts.map((product) => (
                                <Grid size={{ xs: 12, sm: 4, md: 3, lg: 3 }} key={product.id} sx={{ position: 'relative' }}>
                                    <ProductCard {...product} />
                                </Grid>

                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}
