"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import IntroAnimation from "@/components/intro-animation"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const played = sessionStorage.getItem('introPlayed');
      if (played) {
        setIntroComplete(true);
    } else {
        setIntroComplete(false);
        sessionStorage.setItem('introPlayed', 'true');
      }
      // Reset the flag on full reload or close
      window.addEventListener('beforeunload', () => {
        sessionStorage.removeItem('introPlayed');
      });
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-400">
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}

      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: introComplete ? 0 : 0.5,
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="jacquard24 text-white tracking-wide text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Pratik Mishra
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 mb-8 max-w-2xl mx-auto">
            Creative Developer & Graphics Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300"
              asChild
            >
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300"
              asChild
            >
              <Link href="/about">
                About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

