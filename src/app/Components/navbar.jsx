"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Search, ShoppingBag } from "lucide-react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useScrollTrigger,
    Slide,
    CssBaseline
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";

const navLinks = [
    { name: "Store", href: "/Store" },
    { name: "Mac", href: "/Mac" },
    { name: "iPad", href: "/iPads" },
    { name: "Mobile", href: "/MobilePage" },
    { name: "Watch", href: "/Watches" },
    // { name: "AirPods", href: "/airpods" },
    // { name: "TV & Home", href: "/tv-home" },
    // { name: "Entertainment", href: "/entertainment" },
    // { name: "Accessories", href: "/accessories" },
    // { name: "Support", href: "/support" },
];

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };


    return (
        <>
            <CssBaseline />
            <HideOnScroll>
                <AppBar
                    color="inherit"
                    sx={{
                        backdropFilter: 'blur(6px)',
                        backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
                        transition: 'all 0.3s ease',
                        boxShadow: (theme) => theme.shadows[1]
                    }}
                >
                    <Toolbar sx={{ maxWidth: 'lg', mx: 'auto', width: '100%', px: { xs: 2, sm: 3, lg: 4 } }}>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <Link href="/" passHref style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                                <Image src={'/logo.ico'} width={30} height={30} style={{ borderRadius: 20 }} />
                                <Button
                                    sx={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        background: (theme) =>
                                            `linear-gradient(to right, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.8)})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        textTransform: 'none',
                                        minWidth: 'auto',
                                        p: 0,
                                    }}
                                >
                                    Devple
                                </Button>
                            </Link>
                        </Box>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }}>
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} passHref>
                                    <Button
                                        sx={{
                                            color: 'text.secondary',
                                            '&:hover': {
                                                color: 'text.primary',
                                                backgroundColor: 'transparent'
                                            },
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            textTransform: 'none',
                                            mx: 0.5
                                        }}
                                    >
                                        {link.name}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton aria-label="Search">
                                <Search fontSize="small" />
                            </IconButton>
                            <IconButton aria-label="Shopping bag">
                                <ShoppingBag fontSize="small" />
                            </IconButton>
                            {mounted && (
                                <IconButton onClick={toggleTheme} aria-label="Toggle theme">
                                    {theme === "dark" ? (
                                        <Sun fontSize="small" />
                                    ) : (
                                        <Moon fontSize="small" />
                                    )}
                                </IconButton>
                            )}
                            <IconButton
                                aria-label="Open menu"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' } }}
                            >
                                {mobileOpen ? <X fontSize="small" /> : <Menu fontSize="small" />}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            {/* Mobile Navigation */}
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 240,
                            top: '64px'
                        }
                    }}
                >
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.name} disablePadding>
                                <Link href={link.href} passHref>
                                    <ListItemButton
                                        component="a"
                                        onClick={handleDrawerToggle}
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'action.hover'
                                            }
                                        }}
                                    >
                                        <ListItemText
                                            primary={link.name}
                                            primaryTypographyProps={{
                                                fontSize: '0.875rem',
                                                fontWeight: 500
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
        </>
    );
}