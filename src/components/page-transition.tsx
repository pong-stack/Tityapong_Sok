'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

// Define a type for the particle's style property
interface ParticleStyle {
  width: number;
  height: number;
  left: string;
  top: string;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);
  const [pageTitle, setPageTitle] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [particles, setParticles] = useState<{ id: number; style: ParticleStyle }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseY, [0, windowWidth], [5, -5]);
  const rotateY = useTransform(mouseX, [0, windowWidth], [-5, 5]);

  // Add spring physics for smoother motion
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  // Handle window resize and initial size detection
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Generate particles on client side only
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, index) => ({
      id: index,
      style: {
        width: Math.floor(Math.random() * 6) + 2,
        height: Math.floor(Math.random() * 6) + 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      },
    }));
    setParticles(newParticles);
  }, []);

  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    if (typeof window !== 'undefined' && containerRef.current) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  // Get page title based on pathname
  useEffect(() => {
    setIsAnimating(true);
    setShowContent(false);

    // Always use "Tityapong" for all pages
    setPageTitle('Tityapong');

    // After animation completes, show content
    const timer = setTimeout(() => {
      setShowContent(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 2000); // Total animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  // Calculate font size based on screen width
  const getFontSize = () => {
    if (windowWidth < 375) return 'text-5xl'; // Extra small screens
    if (windowWidth < 640) return 'text-6xl'; // Small screens
    if (windowWidth < 768) return 'text-7xl'; // Medium screens
    if (windowWidth < 1024) return 'text-8xl'; // Large screens
    return 'text-9xl'; // Extra large screens
  };

  // Split text into individual characters for animation
  const characters = pageTitle.split('');

  return (
    <div className="min-h-screen w-full">
      <AnimatePresence mode="wait">
        {isAnimating && !showContent ? (
          <motion.div
            key={`animation-${pathname}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <motion.div
              ref={containerRef}
              className="overflow-hidden px-4 w-full perspective-1000"
              style={{
                perspective: 1000,
              }}
            >
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center flex-wrap"
                style={{
                  rotateX: springRotateX,
                  rotateY: springRotateY,
                  transformStyle: 'preserve-3d',
                }}
              >
                {characters.map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    className={`${getFontSize()} font-bold inline-block`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center',
                    }}
                    initial={{
                      opacity: 0,
                      y: 50,
                      filter: 'blur(8px)',
                      scale: 0.9,
                      z: -50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      scale: 1,
                      z: index * 5,
                      background: 'linear-gradient(to right, #fff, #888)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 20px rgba(255,255,255,0.2)',
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>

              {/* Floating particles for depth effect */}
              <div className="absolute inset-0 pointer-events-none">
                {particles.map(particle => (
                  <motion.div
                    key={`particle-${particle.id}`}
                    className="absolute rounded-full bg-white opacity-20"
                    style={particle.style}
                    animate={{
                      y: [0, Math.random() * -100, 0],
                      x: [0, Math.random() * 50 - 25, 0],
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.5, 1],
                      z: [0, 50, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Animated line underneath with 3D glow effect */}
            <motion.div
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                bottom: windowWidth < 640 ? '35%' : '30%',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow:
                  '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,255,255,0.2)',
              }}
              initial={{ width: '0%', opacity: 0 }}
              animate={{
                width: windowWidth < 640 ? '80%' : '60%',
                opacity: [0, 1, 1, 0],
                x: ['-50%', '-50%', '-50%', '-50%'],
                z: [0, 20, 20, 0],
              }}
              transition={{
                duration: 1.8,
                delay: 0.5,
                times: [0, 0.2, 0.8, 1],
              }}
            />

            {/* Ambient glow effect */}
            <motion.div
              className="absolute rounded-full blur-3xl opacity-20"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                width: '60vw',
                height: '60vw',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isAnimating && (
          <motion.div
            key={`content-${pathname}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
