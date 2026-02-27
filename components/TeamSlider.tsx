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
        name: 'Daryll Netscher',
        title: 'Founder & CEO',
        bio: 'As the CEO, I drive our mission of building disruptive B2C brands. I\'m dedicated to turning market insights into exceptional consumer experiences with scalable platforms that revolutionize how people shop and interact. As a founder I remain deeply involved in both the vision and hands-on execution at every stage of our growth, ensuring we deliver market-leading results.',
        photo: '/images/t-1.avif',
        linkedin: 'https://www.linkedin.com/company/raha-partners',
        whatsapp: "https://wa.me/971585799283?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
    },
    {
        id: 2,
        name: 'Carman VD',
        title: 'Solutions Specialist',
        bio: 'As a Solutions Specialist, I partner with brands to identify where digital transformation can drive the most impact. I guide teams through market discovery, help scope initiatives that align with consumer acquisition goals, and ensure smooth handoffs from brand strategy to digital implementation. My focus is on making market expansion clear, practical, and achievable.',
        photo: '/images/t-2.avif',
        linkedin: 'https://www.linkedin.com/company/raha-partners',
        whatsapp: "https://wa.me/971585799283?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
    },
    {
        id: 3,
        name: 'Jordan Osei',
        title: 'Lead Engineer',
        bio: 'As Lead Engineer, I architect the high-scale commerce foundations of every solution we build. I believe great engineering is invisible — platforms that handle millions of transactions, scale reliably during peaks, and surprise no one. I care deeply about system performance, user flow, and shipping experiences that customers love.',
        photo: '/images/t-3.avif',
        linkedin: 'https://www.linkedin.com/company/raha-partners',
        whatsapp: "https://wa.me/971585799283?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
    },
    {
        id: 4,
        name: 'Amara Diallo',
        title: 'Product Designer',
        bio: 'I shape the consumer experience layer — from first clicks to final conversion. Design at Raha is about understanding consumer psychology and behavior. I work closely with strategy to translate brand values into interfaces that feel effortless, intuitive, and desirable for the modern customer.',
        photo: '/images/t-4.avif',
        linkedin: 'https://www.linkedin.com/company/raha-partners',
        whatsapp: "https://wa.me/971585799283?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services.",
    },
    {
        id: 5,
        name: 'Chen Wei',
        title: 'Growth & Data Lead',
        bio: 'I design the growth engines at the core of our brand platforms. From consumer segmentation to multi-channel data pipelines, I ensure our solutions are not only data-driven but focused on retention and lifetime value. I bridge the gap between analytics and real-world results, making sure every brand we build performs at its peak.',
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
                <div className="bg-gradient-to-br from-[#232428] to-[#1c1d20] rounded-xl h-[180px] p-6 xl:p-13 flex items-center justify-between">

                    <span className="text-[22px] md:text-[26px] xl:text-[28px] font-medium tracking-[-0.04em] leading-[1.2] text-[#888891]">
                        Team Raha Partners
                    </span>
                    <div className="flex items-center gap-1 w-[120px] h-[12px] justify-end">
                        {teamMembers.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i, i > current ? 1 : -1)}
                                className={`rounded-full transition-all duration-500 ${i === current
                                    ? 'w-[40px] h-[12px] bg-[#FF5722]'
                                    : 'w-[12px] h-[12px] bg-[#434346]'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Info Card */}
                <div className="bg-gradient-to-br from-[#232428] to-[#1c1d20] rounded-xl flex flex-col justify-between flex-1 p-6 xl:p-13">

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={`name-${current}`}
                            custom={direction}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <h3 className="text-[48px] font-medium tracking-[-0.05em] leading-[1.1] text-[#dfd9d7] text-balance mb-2">
                                {member.name}
                            </h3>

                            <p className="text-[16px] md:text-[18px] xl:text-[21px] font-normal tracking-[-0.05em] leading-[1.4] text-[#888891]">
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
                            className="text-[16px] md:text-[18px] xl:text-[21px] font-normal tracking-[-0.05em] leading-[1.4] text-[#888891] mt-auto"
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
                            className={`absolute inset-0 bg-[#1c1d20] flex items-end p-8`}
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
                <div className="bg-gradient-to-br from-[#232428] to-[#1c1d20] rounded-xl h-[180px] p-6 xl:p-13 flex items-center justify-center gap-6">
                    <button
                        onClick={prev}
                        className="text-[#FF5722] hover:text-[#ff7a4f] transition-colors duration-200 hover:scale-110 transform"
                        aria-label="Previous member"
                    >
                        <FaArrowLeft size={28} />
                    </button>
                    <button
                        onClick={next}
                        className="text-[#FF5722] hover:text-[#ff7a4f] transition-colors duration-200 hover:scale-110 transform"
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
                        className="bg-gradient-to-br from-[#232428] to-[#1c1d20] rounded-xl flex-1 p-6 xl:p-13 flex flex-col justify-center items-center gap-4"
                    >
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#e3dbd8] hover:text-[#FF5722] transition-colors duration-200 p-2 rounded-lg hover:bg-white/5 w-fit"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                        <a
                            href={member.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#e3dbd8] hover:text-[#FF5722] transition-colors duration-200 p-2 rounded-lg hover:bg-white/5 w-fit"
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
