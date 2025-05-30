"use client";

import {
    motion as framerMotion,
    AnimatePresence,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from "framer-motion";

// Create a mock version of the functions if the user has reduced motion enabled
const createReducedMotionMock = () => {
    const noOpReturnSelf = (props) => {
        return {
            ...props,
            animate: props.animate || {},
            transition: props.transition || {},
            whileHover: props.whileHover || {},
            whileTap: props.whileTap || {},
            whileInView: props.whileInView || {},
        };
    };

    return {
        motion: {
            div: noOpReturnSelf,
            span: noOpReturnSelf,
            button: noOpReturnSelf,
            a: noOpReturnSelf,
            ul: noOpReturnSelf,
            li: noOpReturnSelf,
            p: noOpReturnSelf,
            h1: noOpReturnSelf,
            h2: noOpReturnSelf,
            h3: noOpReturnSelf,
            h4: noOpReturnSelf,
            section: noOpReturnSelf,
            header: noOpReturnSelf,
            footer: noOpReturnSelf,
            main: noOpReturnSelf,
            article: noOpReturnSelf,
            nav: noOpReturnSelf,
        },
        AnimatePresence,
        useScroll: () => ({ scrollYProgress: { current: 0 } }),
        useTransform: () => 0,
        useSpring: () => 0,
    };
};

// Export the real functions
export const motion = framerMotion;
export { AnimatePresence, useScroll, useTransform, useSpring };

// Export a helper to respect reduced motion preferences
export function useMotionSafe() {
    const prefersReducedMotion = useReducedMotion();
    if (prefersReducedMotion) {
        return createReducedMotionMock();
    }
    return {
        motion,
        AnimatePresence,
        useScroll,
        useTransform,
        useSpring,
    };
}