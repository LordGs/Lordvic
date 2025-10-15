import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from "react";
import { Menu, Section, X } from "lucide-react";
import { FaHandshake, FaDownload } from "react-icons/fa";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";
import { useCallback } from "react";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true, // Run animation once (optional)
});

// For Color reference Only Copy Paste
// var(--color-Dark) Dark Gray
// var(--text-Dark) Dark Gray
// var(--color-background-light) Background

export default function Welcome() {

    const controls = useAnimation();

    const handleDragEnd = useCallback(() => {
        // Animate back to original position
        controls.start({ x: 0, y: 0 });
    }, [controls]);

    return (
        <>
            <Head title="Learning JS and Tailwind day 1 | Home" />
            {/* Whole Body */}
            <div className="flex flex-col bg-[var(--color-background-light)]">
                <nav className="flex justify-between w-full text-[var(--text-Dark)] min-h-20 px-10 shadow-2xl fixed top-0 left-0 bg-[var(--color-background-light)] z-10">
                    {/* left side */}
                    <div className="flex text-3xl space-x-5 font-extrabold items-center justify-center">
                        {/* logo sana */}
                        <svg 
                            className="hover:scale-120 hover:animate-pulse transition-all duration-300"
                            version="1.0" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
                            <g fill="var(--color-Dark)">
                                <path d="M540.3 822.3 c-1 -1.6 -2 -3 -2.3 -3.3 -1.6 -1.4 -25 -35.2 -25 -36 0 -0.6 -0.3 -1 -0.8 -1 -0.4 0 -1.6 -1.6 -2.6 -3.5 -1.1 -1.9 -2.3 -3.5 -2.8 -3.5 -0.4 0 -0.8 -0.6 -0.8 -1.4 0 -0.8 -0.3 -1.6 -0.7 -1.8 -0.8 -0.3 -7.8 -10.5 -9.8 -14.3 -1.8 -3.3 -6.8 -11 -7.4 -11.5 -0.7 -0.6 -2.9 -4 -3.8 -6 -0.4 -0.8 -1.1 -1.9 -1.5 -2.5 -0.8 -0.9 -8 -12.7 -11.9 -19.5 -0.8 -1.3 -2 -3 -2.6 -3.8 -0.7 -0.7 -1.3 -2 -1.3 -2.8 0 -0.8 -0.4 -1.4 -0.9 -1.4 -0.5 0 -1.1 -0.8 -1.4 -1.7 -0.6 -1.8 -4.8 -9.4 -5.7 -10.3 -1 -1 -3.1 -4.5 -3.6 -6.2 -0.4 -1 -0.9 -1.8 -1.3 -1.8 -0.4 0 -1.5 -2 -2.6 -4.5 -1.1 -2.5 -2.2 -4.5 -2.5 -4.5 -0.3 0 -1.4 -2 -2.5 -4.5 -1.1 -2.5 -2.3 -4.5 -2.7 -4.5 -0.5 0 -0.8 -0.7 -0.8 -1.5 0 -0.8 -0.4 -1.5 -0.8 -1.5 -0.4 0 -1.6 -2 -2.6 -4.5 -1.1 -2.5 -2.2 -4.5 -2.5 -4.5 -0.3 0 -1.5 -1.9 -2.6 -4.3 -1.1 -2.3 -3.3 -6.4 -5 -9.2 -1.7 -2.7 -3.7 -6.3 -4.5 -8 -0.8 -1.6 -1.7 -3.2 -2 -3.5 -0.3 -0.3 -1.3 -2.1 -2.4 -4 -4.8 -9 -9.1 -16.9 -11.5 -21.5 -1.4 -2.7 -2.9 -5.1 -3.3 -5.3 -0.5 -0.2 -0.8 -0.9 -0.8 -1.5 0 -0.7 -0.6 -2.3 -1.4 -3.7 -3.7 -6.7 -9.4 -17.6 -15 -28.5 -3.3 -6.6 -6.4 -12.1 -6.8 -12.3 -0.5 -0.2 -0.8 -0.8 -0.8 -1.4 0 -1.2 -3.1 -8.1 -4 -8.8 -0.4 -0.3 -1 -1.4 -1.5 -2.5 -0.4 -1.1 -0.9 -2.2 -1 -2.5 -0.2 -0.3 -0.6 -1.5 -1 -2.7 -0.4 -1.3 -1 -2.3 -1.4 -2.3 -0.3 0 -1.2 -1.5 -2 -3.2 -1.7 -4.2 -3.4 -7.8 -4.9 -10.3 -0.6 -1.1 -1.9 -3.8 -2.8 -6 -1 -2.2 -2.1 -4.2 -2.4 -4.5 -0.6 -0.5 -2.2 -3.9 -5.1 -10.7 -0.8 -1.8 -1.7 -3.3 -2.1 -3.3 -0.5 0 -0.8 -0.4 -0.8 -1 0 -1.7 -3.4 -9 -4.2 -9 -0.5 0 -0.8 -0.7 -0.8 -1.5 0 -0.7 -1.5 -4.5 -3.4 -8.2 -6.1 -12 -11.6 -24 -11.6 -25.2 0 -0.6 -0.3 -1.1 -0.8 -1.1 -0.4 0 -1.3 -1.5 -2.1 -3.2 -1.9 -4.6 -5.2 -11.8 -10 -21.9 -2.3 -4.8 -4.1 -9.1 -4.1 -9.8 0 -0.6 -0.3 -1.1 -0.8 -1.1 -0.4 0 -1.3 -1.5 -2.1 -3.2 -0.7 -1.8 -3.1 -7.1 -5.3 -11.8 -2.2 -4.7 -4.8 -10.3 -5.8 -12.5 -1 -2.2 -3.7 -7.9 -5.9 -12.6 -2.3 -4.8 -4.1 -9.1 -4.1 -9.8 0 -0.6 -0.4 -1.1 -1 -1.1 -0.5 0 -1 -0.8 -1 -1.7 0 -1 -0.7 -2.7 -1.5 -3.7 -0.8 -1.1 -1.5 -2.8 -1.5 -3.8 0 -1 -0.4 -1.8 -1 -1.8 -0.5 0 -1 -0.7 -1 -1.5 0 -0.8 -0.9 -3 -2 -4.9 -1.8 -3.3 -1.8 -3.6 -0.2 -5.2 2.3 -2.4 14.8 -10.4 16.1 -10.4 0.6 0 1.1 -0.4 1.1 -1 0 -0.5 0.9 -1 2 -1 1.1 0 2 -0.7 2 -1.5 0 -1.2 -1.7 -1.5 -9.4 -1.5 -8.1 0 -9.9 0.3 -14.2 2.6 -2.7 1.4 -5.1 2.9 -5.4 3.3 -0.6 0.7 -3.8 2.8 -6 3.8 -0.8 0.4 -2.1 1.3 -3 2 -0.8 0.7 -2.4 1.9 -3.5 2.7 -1.9 1.4 -1.9 1.4 0.2 5.7 4.8 9.9 10.3 22 10.3 22.9 0 0.6 0.5 1 1 1 0.6 0 1 0.7 1 1.5 0 0.8 0.4 2.3 0.9 3.3 2.9 5.4 9.1 19 9.1 20 0 0.7 0.3 1.2 0.8 1.2 0.4 0 1.5 2.1 2.6 4.8 3.5 9 4.1 10.2 4.8 10.2 0.5 0 0.8 0.6 0.8 1.3 0 0.6 1.8 4.8 4 9.2 2.2 4.4 4 8.6 4 9.3 0 0.6 0.5 1.2 1 1.2 0.6 0 1 0.6 1 1.3 0 0.7 1.1 3.7 2.5 6.5 1.4 2.9 2.5 5.6 2.5 6.2 0 0.5 0.5 1 1 1 0.6 0 1 0.4 1 1 0 1.1 5.6 13.2 14.1 30.5 3.2 6.6 5.9 12.6 5.9 13.2 0 0.6 0.3 1.3 0.8 1.5 0.9 0.4 6.2 11 6.2 12.6 0 0.6 0.4 1.2 0.8 1.2 2 0 3.6 7.4 4.1 18.5 l0.6 12 5.8 0.3 c4 0.2 5.7 0.7 5.7 1.7 0 0.7 0.3 1.5 0.8 1.7 0.4 0.2 4.6 8 9.3 17.3 10.8 21.6 19.3 37.9 19.9 38.5 0.3 0.3 1.9 3.2 3.5 6.5 1.7 3.3 3.2 6.2 3.5 6.5 0.3 0.3 1.9 3.2 3.5 6.5 1.7 3.3 3.3 6.2 3.8 6.3 0.4 0.2 0.7 0.8 0.7 1.3 0 0.5 1.1 2.7 2.5 4.9 2.8 4.4 3.1 5.5 1.3 4.4 -0.7 -0.5 -10.5 -1.2 -21.8 -1.6 -28.6 -1.1 -61.9 -4.1 -65.2 -5.9 -1 -0.5 -3.6 -0.9 -5.7 -0.9 -2.2 0 -4.2 -0.4 -4.5 -0.9 -0.3 -0.5 -3.5 -1.2 -7.1 -1.6 -3.6 -0.3 -6.7 -1.1 -7 -1.6 -0.4 -0.5 -1.9 -0.9 -3.5 -0.9 -1.6 0 -3.1 -0.4 -3.4 -0.9 -0.3 -0.4 -2.1 -1.1 -3.9 -1.4 -1.9 -0.3 -6.8 -2.1 -10.9 -4.1 -4.2 -2 -8.1 -3.6 -8.7 -3.6 -0.6 0 -1.1 -0.4 -1.1 -0.8 0 -0.4 -1.5 -1.6 -3.2 -2.7 -3 -1.7 -9.9 -8.3 -12.3 -11.7 -4.2 -5.9 -4 -0.5 -4.3 -116.3 -0.2 -102.1 0.7 -168.5 2.8 -211 2 -38.2 2.9 -54.3 3.5 -59 0.4 -2.7 1.1 -8.6 1.5 -13 3.6 -32.1 5.2 -44.1 6.2 -45.1 0.5 -0.4 0.8 -2.7 0.8 -5 0 -2.4 0.4 -4.5 0.9 -4.8 0.5 -0.3 1.2 -3.3 1.6 -6.6 0.4 -3.3 1.1 -6.3 1.6 -6.6 0.5 -0.3 0.9 -1.6 0.9 -2.9 0 -1.3 0.4 -2.7 1 -3 0.5 -0.3 1 -1.5 1 -2.5 0 -3.2 5.7 -14.3 9.1 -17.8 4.1 -4.1 5.8 -4.5 18.2 -4 9.3 0.5 15.7 2.1 15.7 4.1 0 0.4 0.5 0.7 1 0.7 1.2 0 2.3 0.9 7.3 5.5 4.5 4.3 8.1 10.1 12.7 21 0.7 1.7 1.7 3.9 2.1 5 0.8 1.9 1.9 7.1 4 20 0.6 3.3 1.5 43.5 2 89.4 0.5 45.9 1.1 83.7 1.4 83.9 0.2 0.2 2.4 0.7 4.9 0.9 4.2 0.5 5.3 1.4 15.5 11.7 14.1 14.2 20.1 20.7 20.1 21.5 0 0.3 2.3 3 5 5.9 2.8 3 5 5.7 5 6 0 0.4 1.3 2.1 2.8 3.7 1.5 1.7 4.5 5.5 6.7 8.5 2.2 3 4.4 6 5 6.7 0.5 0.6 2.1 2.8 3.5 4.8 1.4 2 3.5 4.9 4.8 6.5 1.2 1.5 2.2 3.2 2.2 3.8 0 0.6 0.3 1.2 0.8 1.4 1 0.4 9.2 12.7 9.2 13.8 0 0.5 0.3 1 0.8 1.2 1.1 0.4 11.2 16.5 11.2 17.7 0 0.6 0.3 1.1 0.8 1.1 0.4 0 1.6 1.7 2.7 3.8 1.1 2 2.3 4.2 2.8 4.7 2.3 3 5.7 8.7 5.7 9.5 0 0.6 0.4 1 0.9 1 0.5 0 1.1 0.8 1.5 1.8 0.6 1.8 2.7 5.4 3.7 6.2 0.3 0.3 1.8 2.6 3.2 5.2 3.4 6 7.8 13.2 8.7 13.8 0.3 0.3 1 1.2 1.4 2 0.8 1.7 1 2.1 7.8 13.3 2.7 4.3 4.8 8 4.8 8.2 0 0.5 7.9 13.1 11.8 19.1 0.7 1 1.5 2.7 1.8 3.7 0.4 0.9 1 1.7 1.5 1.7 0.5 0 0.9 0.6 0.9 1.4 0 0.8 1.2 2.4 2.8 3.4 2.6 1.9 5 2.1 35.7 2.6 70.5 1.3 89.5 1.8 89.5 2.6 0 0.5 -0.3 1 -0.7 1.2 -1.2 0.5 -4.3 6.4 -4.3 8.2 0 0.9 -0.3 1.6 -0.7 1.6 -0.5 0 -2.1 2.9 -3.8 6.5 -1.6 3.6 -3.3 6.5 -3.7 6.5 -0.5 0 -0.8 0.6 -0.8 1.4 0 0.7 -1.2 3.5 -2.6 6.2 -8.6 16.2 -24.4 48.7 -24.4 50.2 0 0.7 -0.4 1.2 -0.9 1.2 -0.5 0 -1.2 1.1 -1.5 2.5 l-0.6 2.5 -14 0 c-9 0 -14 0.4 -14 1 0 0.6 0.9 2.1 2 3.3 1.2 1.2 2.3 3.2 2.6 4.4 0.4 1.3 1 2.3 1.5 2.3 0.5 0 0.9 0.9 0.9 1.9 0 1.1 0.3 2.1 0.8 2.3 0.4 0.2 1.9 2.6 3.3 5.3 5.1 9.9 8.4 16 8.9 16.5 0.3 0.3 1 1.4 1.6 2.5 1.6 2.9 6.8 2.8 7.2 -0.2 0.2 -1.3 0.8 -2.3 1.3 -2.3 0.5 0 0.9 -0.5 0.9 -1.2 0 -0.6 1.1 -3.4 2.4 -6.2 6.2 -13.2 10.5 -22.4 11.7 -25.3 0.8 -1.8 1.7 -3.3 2.1 -3.3 0.5 0 0.8 -0.5 0.8 -1.2 0 -0.6 3 -7.2 6.6 -14.7 3.7 -7.5 8.7 -17.9 11.3 -23.1 2.5 -5.2 4.9 -9.7 5.2 -10 0.4 -0.3 1 -1.6 1.4 -3 0.4 -1.4 1.5 -3.6 2.4 -5 0.9 -1.4 4.1 -7.4 7.1 -13.5 3 -6 5.7 -11.2 6 -11.5 0.3 -0.3 1.4 -2.5 2.5 -5 1.1 -2.5 2.2 -4.7 2.5 -5 0.3 -0.3 1.7 -2.7 3.1 -5.5 7.4 -14.4 13.2 -25.1 13.9 -26 0.8 -1 8.1 -14.6 10.4 -19.2 0.6 -1.3 1.4 -2.3 1.9 -2.3 0.4 0 0.7 -0.9 0.7 -2 0 -1.1 0.4 -2 0.8 -2 0.4 0 1.3 -1.2 1.9 -2.7 0.7 -1.6 2 -4.2 3 -5.8 5.9 -9.9 7.9 -13.3 9.4 -16 5.6 -10.4 7.2 -13 9.4 -16.3 1.4 -2 2.5 -4 2.5 -4.4 0 -0.4 1.6 -3.2 3.5 -6.2 1.9 -3 3.5 -5.8 3.5 -6.1 0 -0.3 0.5 -1.1 1 -1.8 1.2 -1.3 9.9 -15.8 13.8 -22.7 2.6 -4.8 10.8 -16.6 12.9 -18.8 0.7 -0.7 1.3 -1.6 1.3 -2 0 -0.4 1.1 -2 2.5 -3.6 1.4 -1.6 2.5 -3.2 2.5 -3.6 0 -0.3 0.8 -1.5 1.8 -2.6 1 -1 3.1 -3.7 4.7 -5.9 1.6 -2.2 3.4 -4.4 4 -5 0.6 -0.5 2.8 -3.2 5 -5.9 7.5 -9.3 19.8 -21 25.6 -24.2 1.9 -1 3.7 -2.3 4.1 -2.9 0.8 -1 41.8 -1.7 47.7 -0.8 4.8 0.8 15.1 11.5 21.4 22.1 l4.9 8.1 -0.1 14.8 -0.2 14.7 -4.7 9.5 c-2.5 5.3 -4.9 9.8 -5.2 10.1 -0.3 0.3 -2.5 4.6 -5 9.5 -2.5 5 -4.7 9.2 -5 9.5 -0.3 0.3 -2 3.4 -3.8 7 -1.8 3.6 -4.8 9.2 -6.6 12.5 -1.9 3.3 -5.2 9.4 -7.3 13.5 -2.1 4.1 -4 7.7 -4.3 8 -0.3 0.3 -1.2 1.9 -2 3.5 -0.8 1.7 -2.5 4.8 -3.9 7 -1.3 2.2 -4.6 8.2 -7.3 13.5 -2.8 5.2 -5.3 10 -5.8 10.5 -0.8 1 -3.7 6.1 -8.6 15.5 -1.6 3 -3.1 5.7 -3.4 6 -0.3 0.3 -1.4 2.3 -2.5 4.5 -1.1 2.2 -2.2 4.2 -2.5 4.5 -0.3 0.3 -1.2 1.9 -2 3.5 -0.8 1.7 -2.8 5.3 -4.5 8 -1.6 2.8 -3.9 6.8 -5 9 -1.1 2.2 -2.2 4.2 -2.5 4.5 -0.3 0.3 -1.4 2.3 -2.5 4.5 -1.1 2.2 -2.2 4.2 -2.5 4.5 -0.3 0.3 -1.4 2.3 -2.5 4.5 -1.1 2.2 -2.2 4.2 -2.5 4.5 -0.3 0.3 -1.8 3 -3.4 6 -1.6 3 -3.7 6.6 -4.6 8 -1 1.4 -2.5 4.3 -3.6 6.5 -1 2.2 -2.1 4.2 -2.5 4.5 -0.3 0.3 -1.4 2.3 -2.5 4.5 -1 2.2 -2 4.2 -2.3 4.5 -0.4 0.3 -1.1 1.4 -1.7 2.5 -5.3 9.7 -7.9 14.4 -9.3 16.5 -0.9 1.4 -2.6 4.3 -3.6 6.5 -1.1 2.2 -2.5 4.5 -3.1 5.1 -0.6 0.7 -1.7 2.7 -2.4 4.6 -0.8 1.8 -1.6 3.5 -1.9 3.8 -0.5 0.4 -2.3 3.6 -5.5 9.5 -0.6 1.1 -1.3 2.2 -1.6 2.5 -0.3 0.3 -1.4 2.3 -2.5 4.5 -1.1 2.2 -2.2 4.2 -2.5 4.5 -0.4 0.4 -2.4 3.8 -5.4 9.5 -0.6 1.1 -1.3 2.2 -1.6 2.5 -0.7 0.7 -2.9 4.3 -3.7 6 -0.4 0.8 -0.9 1.7 -1.2 2 -0.3 0.3 -1.1 1.4 -1.7 2.5 -3.4 6.4 -5.1 9.1 -6.6 10.9 -1 1 -1.5 2.3 -1.2 2.8 0.3 0.4 0 0.8 -0.5 0.8 -0.6 0 -1.1 0.4 -1.1 1 0 0.7 -9.7 17 -14.8 24.6 -0.7 1 -1.5 2.7 -1.8 3.7 -0.4 0.9 -1 1.7 -1.5 1.7 -0.5 0 -0.9 0.7 -0.9 1.5 0 0.8 -0.4 1.5 -0.8 1.5 -0.5 0 -1.6 1.5 -2.5 3.3 -1 1.7 -2.6 4.6 -3.7 6.2 -1.1 1.7 -2.3 3.8 -2.6 4.8 -0.4 0.9 -1 1.7 -1.5 1.7 -0.5 0 -0.9 0.7 -0.9 1.5 0 0.8 -0.3 1.5 -0.7 1.5 -0.5 0 -2.4 2.7 -4.3 6 -1.9 3.3 -3.8 6 -4.2 6 -0.5 0 -0.8 0.7 -0.8 1.5 0 0.8 -0.4 1.5 -0.8 1.5 -0.5 0 -1.5 1.2 -2.3 2.8 -1.8 3.5 -14.2 20.9 -20 28.1 -0.8 1.1 -2.4 3.2 -3.5 4.6 -1 1.5 -2.4 3.2 -2.9 3.9 -0.6 0.6 -2.1 2.6 -3.4 4.4 l-2.2 3.2 -31.4 0 -31.5 0 -1.7 -2.7z m-213.9 -489.9 c1.2 -3 0.6 -3.4 -5.4 -3.4 -4.7 0 -6 0.3 -6 1.5 0 1 1 1.5 3 1.5 1.7 0 3 0.5 3 1 0 1.6 4.7 1.1 5.4 -0.6z" />
                            </g>
                        </svg>


                        <h1>My Portfolio</h1>
                    </div>

                    {/* Middle */}
                    <div className="flex flex-wrap justify-center items-center text-[var(--text-Dark)] font-bold text-xs sm:text-sm md:text-base">
                        {[
                            { label: "Contact", href: "/" },
                            { label: "Projects", href: "/" },
                            { label: "Socials", href: "/" },
                            { label: "Testimontials", href: "/" },
                            { label: "Education", href: "/" },
                        ].map((item, index) => (
                            <div key={item.label} className="flex items-center my-2">
                                {index !== 0 && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-px h-8 mx-3 text-[var(--text-Dark)]"
                                        viewBox="0 0 1 24"
                                        fill="none"
                                    >
                                        <line x1="0.5" y1="0" x2="0.5" y2="24" stroke="currentColor" />
                                    </svg>
                                )}
                                <Link
                                    href={item.href}
                                    className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-br-2xl rounded-tl-2xl transition-all duration-300 hover:scale-110 hover:text-white hover:bg-accent"
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                    {/* right side */}
                    <div className="text-2xs flex flex-col justify-center space-x-5 text-[var(--text-Dark)] font-bold">
                        <Link href="/" className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-br-2xl rounded-tl-2xl transition-all duration-500 hover:scale-110 text-white bg-accent hover:bg-white border-accent border-2 hover:text-accent">
                            Hire Me
                        </Link>
                    </div>
                </nav>
                {/* Banner */}
                <section className="flex text-[var(--text-Dark)] w-full items-center justify-center py-10 min-h-[89vh]">
                    {/* bg-[url('/images/lordvic-bg.png')] */}
                    <div className="flex justify-end w-1/2 pr-10 bg-cover bg-center" data-aos="fade-in-up">
                        <motion.img
                            src="/images/lordvic-bg.png"
                            alt="Lordvic"
                            className="w-40 sm:w-[25rem] h-40 sm:h-[25rem] object-cover rounded-2xl shadow-2xl"
                            drag
                            animate={controls}
                            onDragEnd={handleDragEnd}
                            whileTap={{ cursor: "grabbing" }}
                            whileDrag={{ cursor: "grabbing", scale: .70, rotate: 1, opacity: .9, zIndex: 50}}
                            
                        />
                    </div>
                    <div className="w-1/2" data-aos="fade-in-up">
                        <p className="font-bold text-3xl">Hello!</p>
                        <p className="animate-typing font-bold text-6xl pt-1">I am Lordvic Gabas!</p>
                        <p className="max-w-150 pt-3 text-1xl">I'm a creative and versatile digital professional with skills spanning web development, 3D art, video editing, game development, and content editing. Passionate about building immersive experiences and bringing ideas to life through code, visuals, and motion.</p>
                        <div className=" flex items-center space-x-3 mt-5">
                            <Link
                                href="/"
                                className="font-bold shadow-2xl mt-5 py-3.5 w-45 text-center rounded-md transition-all duration-300 bg-[var(--color-Dark)] text-white hover:text-[var(--color-Dark)] hover:bg-white border-2 hover:border-2 flex items-center justify-center gap-2">
                                My Projects <HiOutlineDocumentSearch/>
                            </Link>
                            <Link
                                href="/"
                                className="font-bold shadow-2xl mt-5 py-3.5 w-45 text-center rounded-md transition-all duration-300 bg-[var(--color-Dark)] text-white hover:text-[var(--color-Dark)] hover:bg-white border-2 hover:border-2 flex items-center justify-center gap-2">
                                Download CV <FaDownload />
                                
                            </Link>
                        </div>
                    </div>


                </section>

                <div className="flex text-[var(--text-Dark)] w-full justify-center px-35 py-10 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <section className="text-black text-9xl">
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                    <h1 data-aos="fade-in-up">testing</h1>
                </section>



            </div>

        </>
    );
}
