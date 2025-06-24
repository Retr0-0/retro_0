"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"

const projects = [
  {
    id: 1,
    title: "Digital Dreamscape",
    description: "An interactive WebGL experience exploring abstract digital landscapes.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["WebGL", "Three.js", "React"],
  },
  {
    id: 2,
    title: "Neon Pulse",
    description: "A responsive web application with dynamic animations and audio visualization.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Canvas API", "Web Audio"],
  },
  {
    id: 3,
    title: "Cyber Interface",
    description: "Futuristic UI components library inspired by cyberpunk aesthetics.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "TypeScript", "Styled Components"],
  },
  {
    id: 4,
    title: "Virtual Gallery",
    description: "3D virtual exhibition space for digital artists to showcase their work.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Three.js", "React Three Fiber", "Next.js"],
  },
]

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-400">
      <Navigation />
      <PageTransition>
        <main className="flex-1 flex flex-col p-4 md:p-8 max-w-6xl mx-auto w-full">
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

            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-500 mb-12">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: project.id * 0.1 }}
                >
                  <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-zinc-300 mb-2">{project.title}</h2>
                      <p className="text-zinc-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </PageTransition>
      <Footer />
    </div>
  )
}

