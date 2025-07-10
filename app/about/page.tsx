"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image" // Keep if you use Image for other elements, otherwise remove if only SVGs
import { ArrowLeft, Mail, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"
import OptimizedImage from "@/components/OptimizedImage"

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

            <h1 className="jacquard24 text-4xl md:text-5xl font-bold tracking-wide text-zinc-500 mb-8">About Me</h1>

            {/* Flex container: image + intro paragraphs */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
              {/* Image */}
              <div className="w-full flex justify-center md:justify-end md:w-auto order-1 md:order-2 mb-4 md:mb-0">
                <OptimizedImage
                  src="/placeholder-user1.png"
                  alt="Pratik Mishra"
                  width={250}
                  height={250}
                  className="rounded-xl border-2 border-zinc-800 shadow-lg object-cover"
                />
              </div>
              {/* Text */}
              <div className="flex-1 space-y-6 text-zinc-400 order-2 md:order-1">
                <p className="text-lg">
                  Hi, I&apos;m Pratik Mishra, also known as <span className="jacquard24 text-2xl align-middle">Retr0_0</span>. I&apos;m a creative developer and digital artist passionate
                  about building immersive digital experiences.
                </p>
                <p className="text-lg">
                  With a background in both design and development, I create work that balances aesthetic appeal with
                  technical excellence. My projects range from interactive websites to digital art installations and
                  experimental interfaces.
                </p>
                <p className="text-lg">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or experimenting with generative art.
                </p>
              </div>
            </div>

            {/* Everything else (skills, contact, etc.) comes after */}
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

              {/* TypeScript - Custom SVG based on screenshot (Triangle with A) */}
              <div className="flex flex-col items-center">
                <div className="bg-zinc-900 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-2">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                    <rect width="24" height="24" rx="2" fill="#3178C6" />
                     <path
                        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                        fill="white"
                      />
                  </svg>
                </div>
                <span className="text-zinc-500 text-sm">TypeScript</span>
              </div>

              {/* Flutter - Custom SVG based on provided image */}
              <div className="flex flex-col items-center">
                <div className="bg-zinc-900 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-2">
                  <svg width="30" height="30" viewBox="0 0 256 317" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <polygon fill="#47C5FB" points="156.6,0 0,158.1 52.1,210.2 261.9,0"/>
                      <polygon fill="#47C5FB" points="156.6,0 156.6,63.6 209.7,63.6 261.9,0"/>
                      <polygon fill="#00569E" points="52.1,210.2 104.2,262.3 156.6,210.2 104.2,158.1"/>
                      <polygon fill="#00B5F8" points="156.6,210.2 209.7,263.3 261.9,210.2 209.7,158.1"/>
                      <polygon fill="#00B5F8" points="104.2,262.3 156.6,314.4 209.7,263.3 156.6,210.2"/>
                      <polygon fill="#00233F" points="156.6,314.4 209.7,263.3 261.9,314.4"/>
                    </g>
                  </svg>
                </div>
                <span className="text-zinc-500 text-sm">Flutter</span>
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
                <span className="text-zinc-500 text-sm">UI/UX</span>
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
                    href="https://instagram.com/patrickkallyyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-300 transition-colors"
                  >
                    @patrickkallyyy
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
          </motion.div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  )
}
