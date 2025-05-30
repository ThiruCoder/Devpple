'use client';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import ProductCard from '../Components/product_card';
import VideoSnap from '../Components/VideoSnap';

const watchProducts = [
    {
        id: "apple-watch-series-9",
        name: "Apple Watch Series 9",
        tagline: "Smarter. Brighter. Mightier.",
        price: "From $399",
        imageSrc: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "watch",
        colors: ["#FF6D6D", "#747474", "#E0E0E0"],
        isNew: true,
    },
    {
        id: "apple-watch-ultra-2",
        name: "Apple Watch Ultra 2",
        tagline: "Next-level adventure.",
        price: "From $799",
        imageSrc: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "watch",
        colors: ["#E0E0E0", "#FF6D6D"],
        isNew: true,
    },
    {
        id: "apple-watch-se",
        name: "Apple Watch SE",
        tagline: "A great deal to love.",
        price: "From $249",
        imageSrc: "https://images.pexels.com/photos/4386423/pexels-photo-4386423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "watch",
        colors: ["#747474", "#FF6D6D", "#E0E0E0"],
    },
    {
        id: "apple-watch-se",
        name: "Apple Watch SE",
        tagline: "A great deal to love.",
        price: "From $249",
        imageSrc: "https://images.pexels.com/photos/4386423/pexels-photo-4386423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "watch",
        colors: ["#747474", "#FF6D6D", "#E0E0E0"],
    },

];
const productData = [
    {
        title: 'Health',
        description: 'Knows you by heart.',
        imageUrl: 'https://www.apple.com/v/watch/br/images/overview/consider/feature_health__b2yo83wkzoaa_large.jpg'
    },
    {
        title: 'Fitness',
        description: 'Every move counts.',
        imageUrl: 'https://www.apple.com/v/watch/br/images/overview/consider/feature_fitness__b5owsglf0ieu_large.jpg'
    },
    {
        title: 'Connectivity',
        description: 'The right call for staying in touch.',
        imageUrl: 'https://www.apple.com/v/watch/br/images/overview/consider/feature_connectivity__cwtqydvy2laq_large.jpg'
    },
    {
        title: 'Safety',
        description: 'Good help is easy to find.',
        imageUrl: 'https://www.apple.com/v/watch/br/images/overview/consider/feature_safety__gln97xcew2em_large.jpg'
    },
    {
        title: 'Apple Watch + iPhone',
        description: 'Dynamic duo.',
        imageUrl: 'https://www.apple.com/v/watch/br/images/overview/consider/feature_watch_and_iphone__fiq5g9njy5qy_large.jpg'
    },
    {
        title: 'Personalization',
        description: 'Make it you-nique.',
        imageUrl: 'https://www.apple.com/v/watch/br/images/overview/consider/feature_personalization__f8bl9mx85j22_large.jpg'
    },
    {
        title: 'Apple Watch Ultra 2',
        description: 'The ultimate sports and adventure watch.',
        imageUrl: 'https://www.apple.com/v/watch/br/images/overview/consider/feature_adventure__d4xvmn7guk02_large.jpg'
    },
    {
        title: 'Apple Watch For Your Kids',
        description: 'Independence for them.Peace of mind for you.',
        imageUrl: 'https://www.apple.com/v/watch/br/images/overview/consider/feature_family_setup__dclbe9jpbiie_large.jpg'
    },

];

const Watches = () => {
    return (
        <div>
            <Container sx={{ mt: 9.5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                    <Divider sx={{ width: '40%', mb: 2 }} />
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
                        Watches
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
                <VideoSnap video={'https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large_2x.mp4'} />
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
                            Apple Watches
                        </Typography>
                        <Grid container spacing={2} mb={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            {watchProducts.map((product) => (
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

export default Watches