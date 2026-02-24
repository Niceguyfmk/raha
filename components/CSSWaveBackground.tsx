'use client';

export default function CSSWaveBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
            {/* Animated gradient waves */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `
            radial-gradient(circle at 20% 50%, rgba(100, 100, 100, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(120, 120, 120, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(80, 80, 80, 0.25) 0%, transparent 50%)
          `,
                    animation: 'wave1 20s ease-in-out infinite',
                }}
            />

            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: `
            radial-gradient(circle at 60% 30%, rgba(90, 90, 90, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(110, 110, 110, 0.3) 0%, transparent 50%)
          `,
                    animation: 'wave2 25s ease-in-out infinite reverse',
                }}
            />

            <div
                className="absolute inset-0 opacity-25"
                style={{
                    background: `
            radial-gradient(circle at 70% 60%, rgba(95, 95, 95, 0.35) 0%, transparent 50%),
            radial-gradient(circle at 10% 40%, rgba(105, 105, 105, 0.25) 0%, transparent 50%)
          `,
                    animation: 'wave3 30s ease-in-out infinite',
                }}
            />

            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay',
                }}
            />

            <style jsx>{`
        @keyframes wave1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-5%, 5%) scale(1.1);
          }
          66% {
            transform: translate(5%, -5%) scale(0.9);
          }
        }

        @keyframes wave2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(3%, -3%) scale(1.05);
          }
        }

        @keyframes wave3 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(-3%, 3%) rotate(2deg) scale(1.08);
          }
          75% {
            transform: translate(3%, -2%) rotate(-2deg) scale(0.95);
          }
        }
      `}</style>
        </div>
    );
}
