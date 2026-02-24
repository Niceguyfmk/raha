'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoError, setVideoError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        console.log('🎬 VideoBackground v2.0 mounted!');

        const video = videoRef.current;
        if (!video) return;

        const handleLoadedData = () => {
            console.log('✅ Video loaded successfully');
            setIsLoaded(true);
            video.play().catch((error) => {
                console.log('⚠️ Video autoplay failed:', error);
            });
        };

        const handleError = (e: Event) => {
            console.error('❌ Video failed to load:', e);
            setVideoError(true);
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('error', handleError);

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('error', handleError);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 0 }}
            data-video-bg="v2.0"
        >
            {/* Video Background */}
            {!videoError && (
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    crossOrigin="anonymous"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        opacity: 0.4,
                        filter: 'brightness(1) saturate(0)',
                        mixBlendMode: 'normal',
                    }}
                >
                    <source
                        src="/hero-vid.mp4"
                        type="video/mp4"
                    />
                    {/* Fallback to Mixkit video */}
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-abstract-particle-wave-background-loop-47302-large.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            )}

            {/* Fallback: If video fails, show subtle gradient animation */}
            {videoError && (
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'radial-gradient(circle at 30% 40%, rgba(100, 100, 100, 0.15) 0%, transparent 50%)',
                        animation: 'pulse 10s ease-in-out infinite',
                    }}
                />
            )}

            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    opacity: 0.15,
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay',
                }}
            />
        </div>
    );
}

