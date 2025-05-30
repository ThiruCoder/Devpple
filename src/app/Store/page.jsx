'use client';
import { Box, Container, IconButton, Typography } from '@mui/material';
import ProductShowcase from "../Components/product_showcase";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import VideoSnap from '../Components/VideoSnap';
const metadata = {
    title: 'Apple Store - Shop Apple Products',
    description: 'Shop the latest Apple products, accessories, and offers. Experience new products, ways to shop, and get the help you need.',
};

// Mock data for different product categories
const macProducts = [
    {
        id: "macbook-air-m2",
        name: "MacBook Air",
        tagline: "Supercharged by M2",
        price: "From $1199",
        imageSrc: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "mac",
        colors: ["#747474", "#E0E0E0", "#FFD700"],
    },
    {
        id: "macbook-pro-m3",
        name: "MacBook Pro",
        tagline: "Supercharged by M3 Pro and M3 Max",
        price: "From $1999",
        imageSrc: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "mac",
        colors: ["#747474", "#E0E0E0"],
        isNew: true,
    },
    {
        id: "imac-m3",
        name: "iMac",
        tagline: "Inspired by the best of Apple",
        price: "From $1299",
        imageSrc: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "mac",
        colors: ["#747474", "#E0E0E0", "#76FF7A", "#FF76E7", "#768CFF"],
    },
    {
        id: "mac-mini-m2",
        name: "Mac mini",
        tagline: "More muscle. More hustle.",
        price: "From $599",
        imageSrc: "https://images.pexels.com/photos/4841658/pexels-photo-4841658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "mac",
        colors: ["#747474"],
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
];

const navProducts = [
    {
        title: 'Mac',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4VEpBUDFBeEhMZS9GUnNSYXdEd0hscisrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazVVcFlOTkdoMWg4ZkdDS1ovMUlzcW8'
    },
    {
        title: 'iPhone',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202502?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXOG9vbGw5MnhRZ3BpYVMwQTIvb2xsaDVoZlhhY1p4QWdsTjFNaGRHM3FYWW15d1FhSDJ0bkR0ZGZtUjZJNmFveFVockp1czQ4Q0pvWUU1bC9ERnl2dFE'
    },
    {
        title: 'iPad',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg'
    },
    {
        title: 'Apple Watch',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkNDJNVmlnVytwalkvOTJ2M1BKWUREdkh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2oxdUo4aWtyK05IRkZuWjBWbW5HM00'
    },
    {
        title: 'AirPods',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yNlJ5eGFhR1FVd2NNNDB0VWRUSzVCUFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFI0R1M4eFpKRTFIclV0ZHRqakVRd1k'
    },
    {
        title: 'AirTag',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1ydzduWDk4YUM5R1JVL2gwcEZnWWNaRFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFpQclc0OVE3cmhmS3FBaXd6cG8yYzg'
    },
    {
        title: 'Apple TV 4K',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA'
    },
    {
        title: 'Home Pod',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA'
    },
    {
        title: 'Accessories',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=QnhsNk96S0o4R1dkN2FveStNM1hwNzZGMHVrNGw2NTM5Vmk2bHZzMXQ3aUJGVHdnWkxMaklDeW9JYU5tT3FWeVBrcjVFNVdueFRVbVY3TGtiL2RjUVhQYS92MS9scmN4eTZLbFFkMHVzTVhuL2FLN3hwSUJhbzdFUHltVU1ldnQ'
    },
]

export default function StorePage() {
    const scrollRef = useRef();

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{ pt: 10 }}>
            <Box sx={{ py: 8, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
                        Apple Store
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        maxWidth="md"
                        mx="auto"
                    >
                        The best way to buy the products you love.
                    </Typography>
                    <Box sx={{ position: 'relative', width: '100%' }}>
                        {/* Left Arrow */}
                        <IconButton
                            onClick={() => scroll('left')}
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                            }}
                        >
                            <ChevronLeft color="white" />
                        </IconButton>

                        {/* Scrollable product list */}
                        <Box
                            ref={scrollRef}
                            sx={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                                overflowX: 'auto',
                                gap: 2,
                                paddingY: 2,
                                paddingX: 4,
                                mt: 4,
                                width: '100%',
                                scrollBehavior: 'smooth',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }}
                        >
                            {navProducts?.map((product, index) => (
                                <Box key={index} sx={{ flex: '0 0 auto' }}>
                                    <Image
                                        src={product?.imageUrl}
                                        alt="Store Product"
                                        width={160}
                                        height={130}
                                        style={{
                                            width: '200px',
                                            height: '130px',
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            cursor: 'pointer',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>

                        {/* Right Arrow */}
                        <IconButton
                            onClick={() => scroll('right')}
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                            }}
                        >
                            <ChevronRight color="white" />
                        </IconButton>
                    </Box>

                </Container>
            </Box >
            <Box sx={{ mt: 6 }}>
                <VideoSnap video={'https://www.apple.com/105/media/us/ipad-pro/2024/97d7edf3-aac0-443d-9731-38d40ff50951/anim/design-hero/large_2x.webm'} />
            </Box>
            <Box sx={{ mt: 5 }}>
                <ProductShowcase
                    title="iPhone"
                    subtitle="Find the iPhone that's right for you."
                    products={iphoneProducts}
                    seeAllLink="/MobilePage"
                />

                <ProductShowcase
                    title="Mac"
                    subtitle="Powerful. Fast. Revolutionary."
                    products={macProducts}
                    seeAllLink="/Mac"
                    theme="dark"
                />

                <ProductShowcase
                    title="Apple Watch"
                    subtitle="A healthy leap ahead."
                    products={watchProducts}
                    seeAllLink="/watch"
                />
            </Box>
        </Box >
    );
}