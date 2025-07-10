"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import OptimizedImage from "./OptimizedImage"

interface IntroAnimationProps {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000)
    const timer2 = setTimeout(() => setStep(2), 2000)
    const timer3 = setTimeout(() => {
      setStep(3)
      setTimeout(onComplete, 800) // Allow exit animation to complete
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* First reveal - Retr0_0 (now logo) */}
          <AnimatePresence>
            {step === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <OptimizedImage
                  src="/retr2.png"
                  alt="Retr0_0 Logo"
                  className="h-32 md:h-56 lg:h-72 w-auto object-contain drop-shadow-lg"
                  loading="eager"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main name reveal */}
          <motion.h1
            className="jacquard24 text-white tracking-wide text-6xl md:text-8xl lg:text-9xl font-bold text-zinc-500"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: step >= 1 ? 1 : 0,
              y: step >= 1 ? 0 : 40,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Pratik Mishra
          </motion.h1>

          {/* Subtitle reveal */}
          <motion.p
            className="text-xl text-zinc-600 mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: step >= 2 ? 1 : 0,
            }}
            transition={{ duration: 0.8 }}
          >
            Creative Developer & Graphics Designer
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

