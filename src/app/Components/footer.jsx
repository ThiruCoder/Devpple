'use client';
import Link from "next/link";
import { Box, Grid, Typography, Link as MuiLink, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Apple, Music, Tv, Dumbbell, Newspaper, Gamepad2, Cloud, Smartphone, Tablet, Watch, Headphones, Home, MapPin, Wrench, Calendar, ShoppingBag, Users, Briefcase, TrendingUp, Scale, Mail, FlameKindling } from "lucide-react";

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionLink = motion(MuiLink);


const iconMap = {
    "Store": <ShoppingBag size={14} />,
    "Mac": <Apple size={14} />,
    "iPad": <Tablet size={14} />,
    "iPhone": <Smartphone size={14} />,
    "Watch": <Watch size={14} />,
    "AirPods": <Headphones size={14} />,
    "TV & Home": <Home size={14} />,
    "Apple Music": <Music size={14} />,
    "Apple TV+": <Tv size={14} />,
    "Apple Fitness+": <Dumbbell size={14} />,
    "Apple News+": <Newspaper size={14} />,
    "Apple Arcade": <Gamepad2 size={14} />,
    "iCloud": <Cloud size={14} />,
    "Find a Store": <MapPin size={14} />,
    "Genius Bar": <Wrench size={14} />,
    "Today at Apple": <Calendar size={14} />,
    "Apple Camp": <FlameKindling size={14} />,
    "Newsroom": <Newspaper size={14} />,
    "Apple Leadership": <Users size={14} />,
    "Career Opportunities": <Briefcase size={14} />,
    "Investors": <TrendingUp size={14} />,
    "Contact Apple": <Mail size={14} />
};

const footerLinks = [
    {
        title: "Shop and Learn",
        links: [
            { name: "Store", href: "/store" },
            { name: "Mac", href: "/mac" },
            { name: "iPad", href: "/ipad" },
            { name: "iPhone", href: "/iphone" },
            { name: "Watch", href: "/watch" },
            { name: "AirPods", href: "/airpods" },
            { name: "TV & Home", href: "/tv-home" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Apple Music", href: "/services/apple-music" },
            { name: "Apple TV+", href: "/services/apple-tv-plus" },
            { name: "Apple Fitness+", href: "/services/apple-fitness-plus" },
            { name: "Apple News+", href: "/services/apple-news-plus" },
            { name: "Apple Arcade", href: "/services/apple-arcade" },
            { name: "iCloud", href: "/services/icloud" },
            { name: "Apple One", href: "/services/apple-one" },
        ],
    },
    {
        title: "Apple Store",
        links: [
            { name: "Find a Store", href: "/store/find" },
            { name: "Genius Bar", href: "/store/genius-bar" },
            { name: "Today at Apple", href: "/store/today" },
            { name: "Apple Camp", href: "/store/camp" },
            { name: "Order Status", href: "/store/order-status" },
            { name: "Shopping Help", href: "/store/shopping-help" },
        ],
    },
    {
        title: "About Apple",
        links: [
            { name: "Newsroom", href: "/about/newsroom" },
            { name: "Apple Leadership", href: "/about/leadership" },
            { name: "Career Opportunities", href: "/about/careers" },
            { name: "Investors", href: "/about/investors" },
            { name: "Ethics & Compliance", href: "/about/ethics" },
            { name: "Events", href: "/about/events" },
            { name: "Contact Apple", href: "/about/contact" },
        ],
    },
];


const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <MotionBox
            component="footer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            sx={{
                bgcolor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider',
                py: 8
            }}
        >
            <Box sx={{ maxWidth: 'lg', mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
                <MotionGrid container spacing={4} variants={containerVariants}>
                    {footerLinks.map((section) => (
                        <Grid size={{ xs: 6, lg: 3, sm: 3 }} key={section.title}>
                            <MotionBox variants={itemVariants}>
                                <Typography
                                    variant="subtitle2"
                                    component="h3"
                                    gutterBottom
                                    sx={{ fontWeight: 600 }}
                                >
                                    {section.title}
                                </Typography>
                                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                    {section.links.map((link) => (
                                        <MotionBox
                                            component="li"
                                            key={link.name}
                                            variants={itemVariants}
                                            sx={{ mb: 1.5 }}
                                        >
                                            <MuiLink
                                                component={Link}
                                                href={link.href}
                                                color="text.secondary"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    fontSize: '0.875rem',
                                                    textDecoration: 'none',
                                                    '&:hover': {
                                                        color: 'text.primary',
                                                    },
                                                    transition: 'color 0.2s ease'
                                                }}
                                            >
                                                {iconMap[link.name] || null}
                                                {link.name}
                                            </MuiLink>
                                        </MotionBox>
                                    ))}
                                </Box>
                            </MotionBox>
                        </Grid>
                    ))}
                </MotionGrid>

                <Divider sx={{ my: 6 }} />

                <MotionBox
                    variants={itemVariants}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', md: 'center' },
                        gap: 2
                    }}
                >
                    <Typography variant="caption" color="text.secondary" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        Copyright © {currentYear} Apple Inc. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        {['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'].map((item) => (
                            <MotionLink
                                key={item}
                                component={Link}
                                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                color="text.secondary"
                                variant="caption"
                                sx={{
                                    textDecoration: 'none',
                                    '&:hover': {
                                        color: 'text.primary',
                                    },
                                    transition: 'color 0.2s ease'
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {item}
                            </MotionLink>
                        ))}
                    </Box>
                </MotionBox>
            </Box>
        </MotionBox>
    );
}