"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-400">
      <Navigation />
      <PageTransition>
        <main className="flex-1 flex flex-col p-4 md:p-8 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Button
              variant="outline"
              className="border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300 mb-8"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Link>
            </Button>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-500 mb-8">About Me</h1>

            <div className="space-y-6 text-zinc-400">
              <p className="text-lg">
                Hi, I'm Pratik Mishra, also known as Retr0_0. I'm a creative developer and digital artist passionate
                about building immersive digital experiences.
              </p>

              <p className="text-lg">
                With a background in both design and development, I create work that balances aesthetic appeal with
                technical excellence. My projects range from interactive websites to digital art installations and
                experimental interfaces.
              </p>

              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or experimenting with generative art.
              </p>

              <h2 className="text-2xl font-semibold text-zinc-500 mt-12 mb-6">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {/* JavaScript */}
                <div className="flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                      <line x1="16" y1="8" x2="2" y2="22"></line>
                      <line x1="17.5" y1="15" x2="9" y2="15"></line>
                    </svg>
                  </div>
                  <span className="text-zinc-500 text-sm">JavaScript</span>
                </div>

                {/* React */}
                <div className="flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-cyan-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                    </svg>
                  </div>
                  <span className="text-zinc-500 text-sm">React</span>
                </div>

                {/* Node.js */}
                <div className="flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-green-400"
                    >
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <span className="text-zinc-500 text-sm">Node.js</span>
                </div>

                {/* Xcode */}
                <div className="flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-blue-500"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <span className="text-zinc-500 text-sm">Xcode</span>
                </div>

                {/* Figma */}
                <div className="flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-purple-400"
                    >
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                    </svg>
                  </div>
                  <span className="text-zinc-500 text-sm">Figma</span>
                </div>

                {/* DaVinci Resolve */}
                <div className="flex flex-col items-center">
                  <div className="bg-zinc-900 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-orange-400"
                    >
                      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"></path>
                      <path d="m9 9 6 6"></path>
                      <path d="m15 9-6 6"></path>
                    </svg>
                  </div>
                  <span className="text-zinc-500 text-sm">DaVinci Resolve</span>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-zinc-500 mt-12 mb-6">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-zinc-600" />
                  <p className="text-zinc-500">
                    <a href="mailto:pratikmis14@gmail.com" className="hover:text-zinc-300 transition-colors">
                      pratikmis14@gmail.com
                    </a>{" "}
                    /{" "}
                    <a href="mailto:prats14@proton.me" className="hover:text-zinc-300 transition-colors">
                      prats14@proton.me
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-zinc-600" />
                  <p className="text-zinc-500">
                    <a
                      href="https://instagram.com/patrickkallyy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-300 transition-colors"
                    >
                      @patrickkallyy
                    </a>{" "}
                    /{" "}
                    <a
                      href="https://instagram.com/frldesigns"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-300 transition-colors"
                    >
                      @frldesigns
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-zinc-600" />
                  <p className="text-zinc-500">
                    <a
                      href="https://www.linkedin.com/in/pratikmis14/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-300 transition-colors"
                    >
                      www.linkedin.com/in/pratikmis14/
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Twitter className="w-5 h-5 text-zinc-600" />
                  <p className="text-zinc-500">
                    <a
                      href="https://x.com/Retr0Booming"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-300 transition-colors"
                    >
                      @Retr0Booming
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  )
}

