'use client';

import SectionHeader from './SectionHeader';
import TeamSlider from './TeamSlider';

export default function Team() {
    return (
        <section id="team" className="relative bg-[#161719] pt-0 pb-20 lg:pt-0 lg:pb-24 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    brandName="Our Team"
                    title="Meet the Team"
                    statement="Get to know the team behind the work. Makers, thinkers, and problem-solvers."
                    description="We shape Raha every day, focusing on clear decisions and getting things done right."
                />

                <TeamSlider />
            </div>
        </section>
    );
}
