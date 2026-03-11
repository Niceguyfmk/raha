'use client';
import type { Variants } from 'framer-motion';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaWhatsapp, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// ─── Types ───────────────────────────────────────────────────────────────────
interface TeamMember {
    id: number;
    name: string;
    title: string;
    bio: string;
    photo: string;
    linkedin: string;
    whatsapp: string;
    /** Optional gradient background shown while photo loads / if no photo */
    gradient?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Talal Aziz',
        title: 'Founder & CEO',
        bio: 'Operator-led vision with 10+ years of experience scaling consumer brands across the GCC market. Daryll leads the overarching strategy for Raha Partners.',
        photo: '/images/t-1.avif',
        linkedin: 'https://www.linkedin.com/company/raha-partners',
        whatsapp: "https://wa.me/971585799283?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
    },
    {
        id: 2,
        name: 'Faiz Khan',
        title: 'Digital Solution Architect (Web & E-Commerce)',
        bio: 'Marketplace specialist and ex-Noon operative. Faiz is an expert at navigating the Amazon and Noon ecosystems to maximize brand visibility and sales.',
        photo: '/images/t-2.avif',
        linkedin: 'https://www.linkedin.com/company/raha-partners',
        whatsapp: "https://wa.me/971585799283?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
    },
    {
        id: 3,
        name: 'Carol',
        title: 'Logistics & Regulatory',
        bio: 'Logistics architect specializing in GCC market entry. Hamzah manages the complexities of municipality registrations, labeling, and import compliance.',
        photo: '/images/t-3.avif',
        linkedin: 'https://www.linkedin.com/company/raha-partners',
        whatsapp: "https://wa.me/971585799283?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
    },
    {
        id: 4,
        name: 'Zeeshan Ali',
        title: 'Head of International Business',
        bio: 'With 6+ years experience in the European & UK market, Zeeshan is responsible for expanding RAHA Partners\' footprint in the international market.',
        photo: '/images/t-4.avif',
        linkedin: 'https://www.linkedin.com/in/zeeshan-laique-ali/',
        whatsapp: "https://wa.me/34612505467?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
    },
    {
        id: 5,
        name: 'Salman Ahmed',
        title: 'Retail & Partnerships',
        bio: 'Retail connector with deep ties to the region. Salman is responsible for getting brands on the shelves of the biggest retailers across the GCC.',
        photo: '/images/t-5.avif',
        linkedin: 'https://www.linkedin.com/company/raha-partners',
        whatsapp: "https://wa.me/971585799283?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
    },
];



// ─── Animation Variants ───────────────────────────────────────────────────────
const textVariants: Variants = {
    initial: (dir: number) => ({ opacity: 0, y: dir > 0 ? 20 : -20 }),
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -20 : 20, transition: { duration: 0.25 } }),
};

const photoVariants: Variants = {
    initial: (dir: number) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? 30 : -30 }),
    animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: (dir: number) => ({ opacity: 0, scale: 0.97, x: dir > 0 ? -30 : 30, transition: { duration: 0.3 } }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function TeamSlider() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const goTo = (index: number, dir: number) => {
        setDirection(dir);
        setCurrent(index);
    };
    const prev = () => goTo((current - 1 + teamMembers.length) % teamMembers.length, -1);
    const next = () => goTo((current + 1) % teamMembers.length, 1);

    const member = teamMembers[current];

    return (
        <div className="grid grid-cols-1 xl:grid-cols-[2.4fr_1.6fr_0.8fr] gap-[6px] xl:h-[734px]">

            {/* ── Left: Info Panel ──────────────────────────────────────── */}
            <div className="flex flex-col gap-[6px] h-full w-full">

                {/* Top Stepper Card */}
                <div className="bg-gradient-to-br from-bg-team-card-from to-bg-card rounded-xl h-[180px] p-6 xl:p-13 flex items-center justify-between">

                    <span className="text-[22px] md:text-[26px] xl:text-[28px] font-medium tracking-[-0.04em] leading-[1.2] text-text-muted">
                        Team Raha Partners
                    </span>
                    <div className="flex items-center gap-1 w-[120px] h-[12px] justify-end">
                        {teamMembers.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i, i > current ? 1 : -1)}
                                className={`rounded-full transition-all duration-500 ${i === current
                                    ? 'w-[40px] h-[12px] bg-orange-main'
                                    : 'w-[12px] h-[12px] bg-bg-dot-inactive'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Info Card */}
                <div className="bg-gradient-to-br from-bg-team-card-from to-bg-card rounded-xl flex flex-col justify-between flex-1 p-6 xl:p-13">

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={`name-${current}`}
                            custom={direction}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <h3 className="text-[48px] font-medium tracking-[-0.05em] leading-[1.1] text-text-warm text-balance mb-2">
                                {member.name}
                            </h3>

                            <p className="text-[16px] md:text-[18px] xl:text-[21px] font-normal tracking-[-0.05em] leading-[1.4] text-text-muted">
                                {member.title}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.p
                            key={`bio-${current}`}
                            custom={direction}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-[16px] md:text-[18px] xl:text-[21px] font-normal tracking-[-0.05em] leading-[1.4] text-text-muted mt-auto"
                        >
                            {member.bio}
                        </motion.p>
                    </AnimatePresence>

                </div>

            </div>

            {/* ── Center: Photo ─────────────────────────────────────────── */}
            <div className="relative rounded-xl overflow-hidden h-full">
                <AnimatePresence mode="wait" custom={direction}>
                    {member.photo ? (
                        <motion.img
                            key={`photo-${current}`}
                            custom={direction}
                            variants={photoVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            src={member.photo}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                    ) : (
                        <motion.div
                            key={`photo-${current}`}
                            custom={direction}
                            variants={photoVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`absolute inset-0 bg-bg-card flex items-end p-8`}
                        >
                            {/* Initials placeholder */}
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-[8rem] font-thin text-white/5 select-none leading-none">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ── Right: Controls ───────────────────────────────────────── */}
            <div className="flex flex-col gap-[6px] h-full w-full">

                {/* Top: Arrows Card — same height as stepper card on the left */}
                <div className="bg-gradient-to-br from-bg-team-card-from to-bg-card rounded-xl h-[180px] p-6 xl:p-13 flex items-center justify-center gap-6">
                    <button
                        onClick={prev}
                        className="text-orange-main hover:text-orange-hover transition-colors duration-200 hover:scale-110 transform"
                        aria-label="Previous member"
                    >
                        <FaArrowLeft size={28} />
                    </button>
                    <button
                        onClick={next}
                        className="text-orange-main hover:text-orange-hover transition-colors duration-200 hover:scale-110 transform"
                        aria-label="Next member"
                    >
                        <FaArrowRight size={28} />
                    </button>
                </div>

                {/* Bottom: Social Links Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`social-${current}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-bg-team-card-from to-bg-card rounded-xl flex-1 p-6 xl:p-13 flex flex-col justify-center items-center gap-4"
                    >
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dot-color hover:text-orange-main transition-colors duration-200 p-2 rounded-lg hover:bg-white/5 w-fit"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                        <a
                            href={member.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dot-color hover:text-orange-main transition-colors duration-200 p-2 rounded-lg hover:bg-white/5 w-fit"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp size={18} />
                        </a>
                    </motion.div>
                </AnimatePresence>

            </div>
        </div>
    );
}
