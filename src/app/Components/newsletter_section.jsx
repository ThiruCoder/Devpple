'use client';

import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from '@/lib/motion';
import {
    Box,
    Typography,
    TextField,
    Button,
    CircularProgress,
    Stack,
    useTheme,
} from '@mui/material';

export default function NewsletterSection({
    title = 'Stay updated with Apple news',
    description = 'Sign up for our newsletter to get the latest news, product updates, and exclusive offers.',
    theme = 'light',
}) {
    const muiTheme = useTheme();
    const isDark = theme === 'dark';

    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            setEmail('');
        }, 1000);
    };

    return (
        <Box
            component="section"
            sx={{
                py: 10,
                px: { xs: 2, sm: 4, lg: 6 },
                backgroundColor: isDark ? 'black' : muiTheme.palette.grey[100],
                color: isDark ? 'white' : 'inherit',
            }}
        >
            <Box maxWidth="sm" mx="auto" textAlign="center">
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="body1"
                        mt={2}
                        color={isDark ? 'grey.400' : 'text.secondary'}
                    >
                        {description}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Box mt={5}>
                        {isSubmitted ? (
                            <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" color="success.main">
                                <Check size={20} />
                                <Typography variant="body2">Thank you for subscribing!</Typography>
                            </Stack>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <Stack
                                    direction={{ xs: 'column', sm: 'row' }}
                                    spacing={2}
                                    justifyContent="center"
                                    alignItems="stretch"
                                >
                                    <TextField
                                        fullWidth
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        error={Boolean(error)}
                                        helperText={error}
                                        disabled={isLoading}
                                        sx={{ bgcolor: 'background.paper' }}
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={isLoading}
                                        sx={{ minHeight: 56, px: 4 }}
                                    >
                                        {isLoading ? (
                                            <CircularProgress size={20} color="inherit" />
                                        ) : (
                                            <>
                                                Subscribe <ArrowRight style={{ marginLeft: 8 }} size={18} />
                                            </>
                                        )}
                                    </Button>
                                </Stack>
                            </form>
                        )}
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="caption"
                        mt={4}
                        color={isDark ? 'grey.500' : 'text.secondary'}
                        display="block"
                    >
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
}
