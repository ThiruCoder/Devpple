import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ProductShowcase from '../Components/product_showcase';
import ProductCard from '../Components/product_card';
import VideoSnap from '../Components/VideoSnap';
// https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge.jpg

const productData = [
    {
        title: "Apple Intelligence",
        description: "Discover the power of Apple Intelligence with our latest innovations.",
        imageUrl: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge.jpg"
    },
    {
        title: "iPhone 15 Pro",
        description: "Titanium. So strong. So light. So Pro.",
        imageUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/consider/camera__exi2qfijti0y_xlarge.jpg'
    },
    {
        title: "iPhone 15 Pro Max",
        description: "The ultimate iPhone experience with a larger display and advanced features.",
        imageUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/consider/battery__2v7w6kmztvm2_xlarge.jpg'
    },
    {
        title: "iPhone 15",
        description: "The perfect balance of performance and design.",
        imageUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/consider/innovation__os9bmmo3mjee_xlarge.jpg'
    },
    {
        title: "iPhone 15 Plus",
        description: "A larger display for an immersive experience.",
        imageUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/consider/environment__e3v3gj88dl6q_xlarge.jpg'
    },
    {
        title: "iPhone 15 Pro Max",
        description: "The ultimate iPhone experience with a larger display and advanced features.",
        imageUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/consider/privacy__ckc0wa30o55y_xlarge.jpg'
    },
    {
        title: "iPhone 15 Pro",
        description: "Titanium. So strong. So light. So Pro.",
        imageUrl: 'https://www.apple.com/v/iphone/home/cb/images/overview/consider/personalize__dwg8srggrbo2_xlarge.jpg'
    },
    {
        title: "iPhone 15",
        description: "The perfect balance of performance and design.",
        imageUrl: 'https://www.apple.com/in/iphone/home/images/overview/consider/safety__d9zsvrorjfcm_xlarge.jpg'
    },
];

const iphoneProducts = [
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
        id: "iphone-15",
        name: "iPhone 15",
        tagline: "Newphoria",
        price: "From $799",
        imageSrc: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "iphone",
        colors: ["#76FF7A", "#768CFF", "#FFD700", "#FF76E7", "#E0E0E0"],
        isNew: true,
    },
    {
        id: "iphone-14",
        name: "iPhone 14",
        tagline: "A total powerhouse.",
        price: "From $699",
        imageSrc: "https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet-white-40739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "iphone",
        colors: ["#FF6D6D", "#747474", "#E0E0E0", "#F5F5DC"],
    },
    {
        id: "iphone-se",
        name: "iPhone SE",
        tagline: "Serious power. Serious value.",
        price: "From $429",
        imageSrc: "https://images.pexels.com/photos/818043/pexels-photo-818043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "iphone",
        colors: ["#FF6D6D", "#747474", "#E0E0E0"],
    },
];

export default function MobilePage() {
    return (
        <div>
            <Container sx={{ mt: 9.5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                    <Divider sx={{ width: '40%', mb: 2 }} />
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
                        Mobile
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
                <VideoSnap video={'https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/large_2x.mp4'} />
            </Box>
            <Box sx={{ mt: 5, bgcolor: 'rgba(248, 234, 234, 0.5)', width: '100%' }}>
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
                            iPhone
                        </Typography>
                        <Grid container spacing={2} mb={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            {iphoneProducts.map((product) => (
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
