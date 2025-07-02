import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-8 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-zinc-600 mb-4 md:mb-0">
          © {new Date().getFullYear()} Pratik Mishra. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link href="https://github.com/Retr0-0" className="text-zinc-600 hover:text-zinc-400 transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://x.com/Retr0Booming" className="text-zinc-600 hover:text-zinc-400 transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">X (Twitter)</span>
          </Link>
          <Link href="https://linkedin.com/in/pratikmis14" className="text-zinc-600 hover:text-zinc-400 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

