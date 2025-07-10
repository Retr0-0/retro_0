"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"
import { useState } from "react"
import OptimizedImage from "@/components/OptimizedImage"

const projects = [
  {
    id: 1,
    title: "Facial Emotion Detection",
    description: "A deep learning project that recognizes facial emotions from images using a CNN",
    image: "/CNN4.png?height=600&width=800",
    tags: ["Python", "Deep Learning", "Computer Vision"],
  },
  {
    id: 2,
    title: "Sereni Zen",
    description: "A mobile app that combines meditation guidance and fitness tracking for holistic wellness.",
    image: "/SereniZen.png?height=600&width=800",
    tags: ["Onboarding Flow", "Responsive Design", "UI/UX Prototype"],
  },
  {
    id: 3,
    title: "FiTrack",
    description: "A fitness app that streamlines goal-setting, progress monitoring, and onboarding.",
    image: "/fitrackph1.png?height=600&width=800",
    tags: ["Flutter", "Dart", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Sawari", 
    description: "A mobile app connecting riders and drivers for convenient, on-demand transportation.",
    image: "/Sawari.png?height=600&width=800",
    tags: ["Onboarding Flow", "Responsive Design", "UI/UX Prototype"],
  },
  {
    id: 5,
    title: "Client Work", 
    description: "Showcasing a curated collection of videos highlighting my work delivered for clients.",
    image: "/Clientwork.png?height=600&width=800",
    tags: ["Video Editing", "Davinci Resolve", "Filmora"],
  },
  {
    id: 6,
    title: "Polio Rally Filter", 
    description: "AR face filter created using Spark AR Hub, leveraging real-time facial tracking and 2D graphic overlays ",
    image: "/ARP.png?height=600&width=800",
    tags: ["Face Tracking","2D Graphics","AR Integration"],
  },
  {
    id: 7,
    title: "Logos", 
    description: "A showcase of distinctive logos crafted to elevate brand identities.",
    image: "/logomockup.png?height=600&width=800",
    tags: ["Brand Identity","Logo Design","Visual Branding"],
  },
  {
    id: 8,
    title: "Instagram / Facebook Posts",
    description: "A gallery of creative post designs crafted for engaging Facebook and Instagram audiences.",
    image: "/posts.png",
    tags: ["Brand Identity", "Logo Design", "Visual Branding"],
  },
]

const floatingTagMap: Record<string, string[]> = {
  "1": ["Github"],
  "2": ["UI/UX"],
  "3": ["Github"],
  "4": ["UI/UX"],
  "5": ["Videos"],
  "6": ["AR Filter"],
  "7": ["Design"],
  "8": ["Design", "Post", "Instagram"],
};
const floatingTags = ["Github", "UI/UX", "Videos", "AR Filter", "Design", "Post", "Instagram"];

export default function Projects() {
  const [showSereniZenModal, setShowSereniZenModal] = useState(false)
  const [galleryModalOpen, setGalleryModalOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [showVirtualGalleryModal, setShowVirtualGalleryModal] = useState(false)
  const [showClientWorkModal, setShowClientWorkModal] = useState(false)
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false)
  const [videoLightboxIndex, setVideoLightboxIndex] = useState(0)
  const [showPolioModal, setShowPolioModal] = useState(false)
  const [arpVideoPlaying, setArpVideoPlaying] = useState(false)
  const [showArpGalleryModal, setShowArpGalleryModal] = useState(false)
  const [arpGalleryIndex, setArpGalleryIndex] = useState(0)
  const [selectedTag, setSelectedTag] = useState("")
  const [filterActive, setFilterActive] = useState(false)
  const sereniZenGallery = [
    "/SereniZen1.png",
    "/SereniZen2.png",
    "/SereniZen3.png",
    "/SereniZen4.png"
    // Add more image paths as needed
  ]
  // Sawari mockup images for id:4
  const sawariGallery = [
    "/Sawari1.png",
    "/Sawari2.png",
    "/Sawari3.png",
    "/Sawari4.png"
    // Add more image paths as needed
  ]
  // Client Work videos for id:5
  const clientWorkVideos = [
    { src: "/vid1.mp4", orientation: "vertical", poster: "/pcp1.png" },
    { src: "/vid2.mp4", orientation: "vertical", poster: "/pcp2.png" },
    { src: "/vid3.mp4", orientation: "vertical", poster: "/pcp3.png" },
    { src: "/vid4.mp4", orientation: "vertical", poster: "/pcp4.png" },
    { src: "/vid5.mp4", orientation: "vertical", poster: "/pcp5.png" },
    { src: "/PR.mp4", orientation: "vertical", poster: "/pcp7.png" },
    { src: "/PR2.mp4", orientation: "vertical", poster: "/pcp8.png" },
    { src: "/FR1.mp4", orientation: "vertical", poster: "/pcp6.png" },
    { src: "/Sunrise.mp4", orientation: "horizontal", poster: "/pcp9.png" },
  ]
  const arpGallery = [
    { type: 'video', src: '/ARP-video.mp4', poster: '/ARPthumb.png' },
    { type: 'image', src: '/ARP-mockup.png' },
    { type: 'image', src: '/ARP-analytics.png' }
  ]
  const filteredProjects = filterActive && selectedTag
    ? projects.filter(p => floatingTagMap[String(p.id)] && floatingTagMap[String(p.id)].includes(selectedTag))
    : projects
  // Logos gallery for id:7 
  const logosGallery = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
    "/logo8.png",
    "/logo9.png",
    "/logo10.png",
  ];
  const [showLogosGalleryModal, setShowLogosGalleryModal] = useState(false);
  const [logosGalleryIndex, setLogosGalleryIndex] = useState(Array(10).fill(0));
  const [showLogosModal, setShowLogosModal] = useState(false);
  const [logosGalleryModalOpen, setLogosGalleryModalOpen] = useState(Array(10).fill(false));
  const logoSectionHeadings = [
    "Retro_0",
    "Fitrack",
    "Chroner",
    "CollNet",
    "Freelance Designs",
    "Sabhagachhi",
    "Sandhya",
    "Sawari",
    "VibeCraft",
    "CaféTrove",
  ];
  const logoSectionImages = [
    ["/27.png", "/28.png"],
    ["/29.png"],
    ["/30.png"],
    ["/31.png"],
    ["/32.png"],
    ["/33.png"],
    ["/34.png"],
    ["/35.png"],
    ["/36.png"],
    ["/37.png"],
  ];
  // Graphics Designing modal (id:8)
  const [showGraphicsModal, setShowGraphicsModal] = useState(false);
  const [graphicsGalleryModalOpen, setGraphicsGalleryModalOpen] = useState(Array(12).fill(false));
  const [graphicsGalleryIndex, setGraphicsGalleryIndex] = useState(Array(12).fill(0));
  // Business Card modal (id:9)
  const [showCardModal, setShowCardModal] = useState(false);
  const [cardGalleryModalOpen, setCardGalleryModalOpen] = useState(false);
  const [cardGalleryIndex, setCardGalleryIndex] = useState(0);
  const cardGallery = [
    "/card1.png",
    "/card2.png",
    "/card3.png",
    "/card4.png",
    "/card5.png",
    "/card6.png",
    "/card7.png",
    "/card8.png",
  ];
  // Add state for Sereni Zen Mockups gallery in graphics modal
  const [sereniZenMockupGalleryOpen, setSereniZenMockupGalleryOpen] = useState(false);
  const [sereniZenMockupGalleryIndex, setSereniZenMockupGalleryIndex] = useState(0);
  const sereniZenMockupGallery = [
    '/SereniZen1.png',
    '/SereniZen2.png',
    '/SereniZen3.png',
    '/SereniZen4.png',
  ];
  // Add state and gallery arrays for 11 more mockup sections (after Sereni Zen Mockups)
  const mockupSections = [
    {
      heading: 'Freelance Designs (CafeTrove)',
      images: ['/graphics/CafeTroveMockup/CafeTroveMock.png'],
    },
    {
      heading: 'Freelance Designs (BlockX3)',
      images: ['/graphics/Collab/Post.png', '/graphics/Collab/post2.png'],
    },
    {
      heading: 'Praxto Designs (Design Principles)',
      images: [
        '/graphics/Praxto2/1.png',
        '/graphics/Praxto2/2.png',
        '/graphics/Praxto2/3.png',
        '/graphics/Praxto2/4.png',
        '/graphics/Praxto2/5.png',
        '/graphics/Praxto2/6.png',
        '/graphics/Praxto2/7.png',
        '/graphics/Praxto2/8.png',
      ],
    },
    {
      heading: 'Praxto Designs (Mastering Emphasis)',
      images: [
        '/graphics/Emphasis MAIN/1.png',
        '/graphics/Emphasis MAIN/2.png',
        '/graphics/Emphasis MAIN/3.png',
        '/graphics/Emphasis MAIN/4.png',
        '/graphics/Emphasis MAIN/5.png',
        '/graphics/Emphasis MAIN/6.png',
        '/graphics/Emphasis MAIN/7.png',
      ],
    },
    {
      heading: 'Fort 270 Posts',
      images: [
        '/graphics/FortRestaurantDesigns/Fort1.png',
        '/graphics/FortRestaurantDesigns/Fort2.png',
        '/graphics/FortRestaurantDesigns/Fort3.png',
        '/graphics/FortRestaurantDesigns/Fort4.png',
        '/graphics/FortRestaurantDesigns/Fort5.png',
      ],
    },
    {
      heading: 'Freelance Designs (Desingers at Core)',
      images: [
        '/graphics/Frl1/d1.jpg',
        '/graphics/Frl1/d2.jpg',
        '/graphics/Frl1/d3.jpg',
        '/graphics/Frl1/d4.jpg',
        '/graphics/Frl1/d5.jpg',
      ],
    },
    {
      heading: 'Google Developers Group',
      images: [
        '/graphics/GDG/Speaker 1.jpg',
        '/graphics/GDG/Speaker 2.jpg',
        '/graphics/GDG/Event Details.jpg',
        '/graphics/GDG/Event Details.png',
      ],
    },
    {
      heading: 'Interact Club of Yala',
      images: [
        '/graphics/Interact/Interact.webp',
        '/graphics/Interact/polio.jpg',
        '/graphics/Interact/poliorally.jpg',
        '/graphics/Interact/Instagram Post 1080x1080 px (2).png',
        '/graphics/Interact/InteractDen.jpg',
        '/graphics/Interact/SangeetMela Ticket Full.png',
      ],
    },
    {
      heading: 'Praxto Designs (Bad Design?)',
      images: [
        '/graphics/Praxto5/1.png',
        '/graphics/Praxto5/2.png',
        '/graphics/Praxto5/3.png',
        '/graphics/Praxto5/4.png',
        '/graphics/Praxto5/5.png',
        '/graphics/Praxto5/6.png',
        '/graphics/Praxto5/7.png',
      ],
    },
    {
      heading: 'Freelance Designs (Snapnote)',
      images: [
        '/graphics/SnapNote/SnapNote1.png',
        '/graphics/SnapNote/SnapNote2.png',
      ],
    },
  ];
  const [mockupGalleryOpen, setMockupGalleryOpen] = useState(Array(11).fill(false));
  const [mockupGalleryIndex, setMockupGalleryIndex] = useState(Array(11).fill(0));
  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-400">
      <Navigation />
      <PageTransition>
        <main className="flex-1 flex flex-col p-4 md:p-8 max-w-6xl mx-auto w-full">
          <div className="mb-6">
            <Button
              variant="outline"
              className="border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300 px-4 py-2 rounded-md"
              asChild
            >
              <Link href="/" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Link>
            </Button>
          </div>
          <h1 className="jacquard24 text-4xl md:text-5xl font-bold tracking-wide text-zinc-500 mb-6">Projects</h1>
          {/* Dropdown Filter (now below heading) */}
          <form
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-end mb-12"
            onSubmit={e => { e.preventDefault(); setFilterActive(true); }}
          >
            <div className="relative w-full sm:w-64">
              <select
                value={selectedTag}
                onChange={e => setSelectedTag(e.target.value)}
                className="block w-full appearance-none bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              >
                <option value="">All Tags</option>
                {floatingTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            </div>
            <Button
              type="submit"
              variant="outline"
              className="border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300"
            >
              Filter
            </Button>
            {filterActive && (
              <Button
                type="button"
                variant="outline"
                className="ml-0 sm:ml-2 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300"
                onClick={() => { setFilterActive(false); setSelectedTag(""); }}
              >
                Clear
              </Button>
            )}
          </form>
          {/* Animated Modal for Sereni Zen */}
          <AnimatePresence>
            {showSereniZenModal && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowSereniZenModal(false)}
              >
                <motion.div
                  className="bg-zinc-900 rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-screen overflow-y-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-200 text-2xl"
                    onClick={() => setShowSereniZenModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-200">Sereni Zen Design Showcase</h3>
                  {/* Paragraph above the gallery */}
                  <p className="text-zinc-400 mb-4">Explore the onboarding flow and UI/UX design screens for Sereni Zen. Each image below highlights a key part of the user experience.
                    <br />
                    <br />
                  </p>
                  {/* Figma prototype embed */}
                  <div className="w-full aspect-[5/4] min-h-[600px] mb-4">
                    <iframe
                      className="w-full h-full rounded-lg border border-zinc-800"
                      src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/XcbhJGxwzhZ8U4o6DPG4s1/Fitness-App-Design-IOS--for-users?node-id=1174-1099&p=f&t=vy6BpMAEdQNd13ZC-0&scaling=scale-down&content-scaling=fixed&page-id=1174:1094"
                      allowFullScreen
                    />
                  </div>
                  {/* Responsive gallery grid */}
                  <p className="text-zinc-400 mb-4">Sereni Zen Mockups</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                    {sereniZenGallery.map((img, idx) => (
                      <img
                        key={img}
                        src={img}
                        alt={`Sereni Zen design ${idx + 1}`}
                        className="rounded-lg w-full object-cover border border-zinc-800 cursor-pointer hover:opacity-80 transition"
                        onClick={() => {
                          setGalleryIndex(idx);
                          setGalleryModalOpen(true);
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Lightbox Gallery Modal */}
          <AnimatePresence>
            {galleryModalOpen && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setGalleryModalOpen(false)}
              >
                <motion.div
                  className="relative max-w-2xl w-full flex flex-col items-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-300 hover:text-white text-3xl z-10"
                    onClick={() => setGalleryModalOpen(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <img
                    src={sereniZenGallery[galleryIndex]}
                    alt={`Sereni Zen mockup ${galleryIndex + 1}`}
                    className="rounded-lg w-full max-h-[70vh] object-contain bg-zinc-900"
                  />
                  <div className="flex justify-between items-center w-full mt-4">
                    {galleryIndex > 0 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setGalleryIndex(galleryIndex - 1)}
                      >
                        Previous
                      </button>
                    ) : <div />}
                    <span className="text-zinc-400 text-sm">{galleryIndex + 1} / {sereniZenGallery.length}</span>
                    {galleryIndex < sereniZenGallery.length - 1 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setGalleryIndex(galleryIndex + 1)}
                      >
                        Next
                      </button>
                    ) : <div />}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Virtual Gallery Modal for id:4 (Sawari) */}
          <AnimatePresence>
            {showVirtualGalleryModal && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowVirtualGalleryModal(false)}
              >
                <motion.div
                  className="bg-zinc-900 rounded-lg shadow-lg max-w-3xl w-full p-6 relative max-h-screen overflow-y-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-200 text-2xl"
                    onClick={() => setShowVirtualGalleryModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-200">Sawari Design Showcase</h3>
                  {/* Custom paragraph about the ride sharing app */}
                  <p className="text-zinc-400 mb-4">
                    Sawari is a modern ride-sharing app designed to make urban commuting seamless and safe. With a focus on intuitive onboarding, real-time ride tracking, and a beautiful, user-friendly interface, Sawari connects riders and drivers for a smooth journey every time. Explore the prototype and mockups below to see how Sawari reimagines the ride-sharing experience.
                  </p>
                  {/* Figma prototype embed */}
                  <div className="w-full aspect-[5/4] min-h-[600px] mb-4">
                    <iframe
                      className="w-full h-full rounded-lg border border-zinc-800"
                      src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/MJKIabx51pVrA3pGFiUUvB/Sawari?node-id=3-472&p=f&t=sL79cdU56ivMohbh-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2&show-proto-sidebar=1"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Client Work Video Modal for id:5 */}
          <AnimatePresence>
            {showClientWorkModal && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowClientWorkModal(false)}
              >
                <motion.div
                  className="bg-zinc-900 rounded-lg shadow-lg max-w-3xl w-full p-6 relative max-h-screen overflow-y-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-200 text-2xl"
                    onClick={() => setShowClientWorkModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-200">Client Work Video Showcase</h3>
                  <p className="text-zinc-400 mb-4">A curated collection of videos highlighting my work delivered for clients. Each video demonstrates my skills in video editing and post-production.</p>
                  {/* Video gallery grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                    {clientWorkVideos.slice(0, -1).map((vid, idx) => (
                      <div key={vid.src} className="relative cursor-pointer group" onClick={() => { setVideoLightboxIndex(idx); setVideoLightboxOpen(true); }}>
                        <video
                          src={vid.src}
                          className="rounded-lg w-full object-cover border border-zinc-800 bg-black aspect-[9/16]"
                          muted
                          playsInline
                          preload="metadata"
                          poster={vid.poster}
                          controlsList="nodownload"
                        />
                        {/* Play button overlay */}
                        <button
                          className="absolute inset-0 flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 transition bg-black/30 rounded-lg"
                          tabIndex={-1}
                          aria-label="Play video"
                          type="button"
                          onClick={e => { e.stopPropagation(); setVideoLightboxIndex(idx); setVideoLightboxOpen(true); }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white drop-shadow-lg">
                            <circle cx="12" cy="12" r="11" fill="black" fillOpacity="0.5" />
                            <polygon points="10,8 16,12 10,16" fill="white" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  {/* Horizontal video below */}
                  <div className="relative w-full mt-4 cursor-pointer group" onClick={() => { setVideoLightboxIndex(clientWorkVideos.length - 1); setVideoLightboxOpen(true); }}>
                    <video
                      src={clientWorkVideos[clientWorkVideos.length - 1].src}
                      className="rounded-lg w-full object-cover border border-zinc-800 bg-black aspect-video"
                      muted
                      playsInline
                      preload="metadata"
                      poster={clientWorkVideos[clientWorkVideos.length - 1].poster}
                      controlsList="nodownload"
                    />
                    {/* Play button overlay for horizontal video */}
                    <button
                      className="absolute inset-0 flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 transition bg-black/30 rounded-lg"
                      tabIndex={-1}
                      aria-label="Play video"
                      type="button"
                      onClick={e => { e.stopPropagation(); setVideoLightboxIndex(clientWorkVideos.length - 1); setVideoLightboxOpen(true); }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white drop-shadow-lg">
                        <circle cx="12" cy="12" r="11" fill="black" fillOpacity="0.5" />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Video Lightbox Modal */}
          <AnimatePresence>
            {videoLightboxOpen && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setVideoLightboxOpen(false)}
              >
                <motion.div
                  className="relative max-w-md w-full flex flex-col items-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-300 hover:text-white text-3xl z-10"
                    onClick={() => setVideoLightboxOpen(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <video
                    src={clientWorkVideos[videoLightboxIndex].src}
                    controls
                    autoPlay
                    className={`rounded-lg w-full object-contain bg-zinc-900 ${clientWorkVideos[videoLightboxIndex].orientation === 'horizontal' ? 'aspect-video' : 'aspect-[9/16]'}`}
                    style={{ maxHeight: '70vh' }}
                    controlsList="nodownload"
                  />
                  <div className="flex justify-between items-center w-full mt-4">
                    {videoLightboxIndex > 0 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setVideoLightboxIndex(videoLightboxIndex - 1)}
                      >
                        Previous
                      </button>
                    ) : <div />}
                    <span className="text-zinc-400 text-sm">{videoLightboxIndex + 1} / {clientWorkVideos.length}</span>
                    {videoLightboxIndex < clientWorkVideos.length - 1 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setVideoLightboxIndex(videoLightboxIndex + 1)}
                      >
                        Next
                      </button>
                    ) : <div />}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Polio Rally Filter Modal for id:6 */}
          <AnimatePresence>
            {showPolioModal && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowPolioModal(false)}
              >
                <motion.div
                  className="bg-zinc-900 rounded-lg shadow-lg max-w-md w-full p-6 relative max-h-screen overflow-y-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-200 text-2xl"
                    onClick={() => setShowPolioModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-200">Polio Rally AR Filter</h3>
                  {/* Section 1: Paragraph */}
                  <section className="mb-6">
                    <p className="text-zinc-400">
                      In 2021, I created a custom AR face filter for the global Polio Rally conducted by Interact clubs worldwide. The filter leveraged real-time facial tracking and 2D graphic overlays to help raise awareness for polio eradication, allowing participants to show their support in a fun and interactive way on social media.
                    </p>
                  </section>
                  {/* Section 2: Filter Preview Video */}
                  <section className="mb-6">
                    <h4 className="text-lg font-semibold text-zinc-300 mb-2">AR Filter Preview</h4>
                    <div>
                      <button
                        className="w-full md:w-1/2 aspect-[9/16] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center mx-auto cursor-pointer hover:opacity-90 transition"
                        onClick={() => { setShowArpGalleryModal(true); setArpGalleryIndex(0); }}
                        aria-label="Open AR Filter Gallery"
                      >
                        <OptimizedImage
                          src="/ARPthumb.png"
                          alt="AR Filter Video Thumbnail"
                          className="w-full h-full object-contain"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white drop-shadow-lg">
                            <circle cx="12" cy="12" r="11" fill="black" fillOpacity="0.5" />
                            <polygon points="10,8 16,12 10,16" fill="white" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </section>
                  {/* Section 3: Analytics Image */}
                  <section>
                    <h4 className="text-lg font-semibold text-zinc-300 mb-2">Filter Usage Analytics</h4>
                    <button
                      className="w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center cursor-pointer hover:opacity-90 transition"
                      onClick={() => { setShowArpGalleryModal(true); setArpGalleryIndex(2); }}
                      aria-label="Open Analytics in Gallery"
                    >
                      <OptimizedImage
                        src="/ARP-analytics.png"
                        alt="Polio Rally AR Filter Analytics"
                        className="w-full max-h-[300px] object-contain"
                      />
                    </button>
                  </section>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* AR Filter Gallery Modal */}
          <AnimatePresence>
            {showArpGalleryModal && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowArpGalleryModal(false)}
              >
                <motion.div
                  className="relative max-w-md w-full flex flex-col items-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-300 hover:text-white text-3xl z-10"
                    onClick={() => setShowArpGalleryModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  {arpGallery[arpGalleryIndex].type === 'video' ? (
                    <div className="relative w-full flex items-center justify-center">
                      <video
                        src={arpGallery[arpGalleryIndex].src}
                        controls
                        controlsList="nodownload"
                        poster={arpGallery[arpGalleryIndex].poster}
                        className="rounded-lg w-full max-h-[70vh] object-contain bg-zinc-900"
                        autoPlay
                      />
                    </div>
                  ) : (
                    <OptimizedImage
                      src={arpGallery[arpGalleryIndex].src}
                      alt={arpGalleryIndex === 1 ? "AR Filter Mockup" : "AR Filter Analytics"}
                      className="rounded-lg w-full max-h-[70vh] object-contain bg-zinc-900"
                    />
                  )}
                  <div className="flex justify-between items-center w-full mt-4">
                    {arpGalleryIndex > 0 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setArpGalleryIndex(arpGalleryIndex - 1)}
                      >
                        Previous
                      </button>
                    ) : <div />}
                    <span className="text-zinc-400 text-sm">{arpGalleryIndex + 1} / {arpGallery.length}</span>
                    {arpGalleryIndex < arpGallery.length - 1 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setArpGalleryIndex(arpGalleryIndex + 1)}
                      >
                        Next
                      </button>
                    ) : <div />}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: project.id * 0.1 }}
                >
                  <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
                    <div className="relative h-48 w-full">
                      <OptimizedImage
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover object-center w-full h-full"
                      />
                      {floatingTagMap[String(project.id)] && (
                        <div className="absolute top-1 left-1 flex gap-2 z-10">
                          {floatingTagMap[String(project.id)].map((tag) => (
                            <span
                              key={tag}
                              className={
                                (tag === "Github"
                                  ? "bg-zinc-800 text-cyan-400"
                                  : tag === "UI/UX"
                                  ? "bg-purple-800 text-purple-300"
                                  : tag === "Videos"
                                  ? "bg-pink-800 text-pink-300"
                                  : tag === "AR Filter"
                                  ? "bg-green-800 text-green-300"
                                  : tag === "Design"
                                  ? "bg-yellow-800 text-yellow-200"
                                  : tag === "Post"
                                  ? "bg-blue-800 text-blue-200"
                                  : tag === "Instagram"
                                  ? "bg-pink-700 text-pink-100"
                                  : "bg-zinc-800 text-zinc-400") +
                                " text-xs font-semibold px-3 py-1 rounded-md shadow-lg select-none pointer-events-none opacity-90"
                              }
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-zinc-300 mb-2">
                        {project.id === 1 ? (
                          <a
                            href="https://github.com/Retr0-0/facial-emotion-detection-system"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
                          >
                            {project.title}
                          </a>
                        ) : project.id === 2 ? (
                          <button
                            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors focus:outline-none"
                            onClick={() => setShowSereniZenModal(true)}
                          >
                            {project.title}
                          </button>
                        ) : project.id === 3 ? (
                          <a
                            href="https://github.com/rej43/fitrack_new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
                          >
                            {project.title}
                          </a>
                        ) : project.id === 4 ? (
                          <button
                            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors focus:outline-none"
                            onClick={() => setShowVirtualGalleryModal(true)}
                          >
                            {project.title}
                          </button>
                        ) : project.id === 5 ? (
                          <button
                            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors focus:outline-none"
                            onClick={() => setShowClientWorkModal(true)}
                          >
                            {project.title}
                          </button>
                        ) : project.id === 6 ? (
                          <button
                            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors focus:outline-none"
                            onClick={() => setShowPolioModal(true)}
                          >
                            {project.title}
                          </button>
                        ) : project.id === 7 ? (
                          <button
                            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors focus:outline-none"
                            onClick={() => setShowLogosModal(true)}
                          >
                            {project.title}
                          </button>
                        ) : project.id === 8 ? (
                          <button
                            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors focus:outline-none"
                            onClick={() => setShowGraphicsModal(true)}
                          >
                            {project.title}
                          </button>
                        ) : project.id === 9 ? (
                          <button
                            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors focus:outline-none"
                            onClick={() => setShowCardModal(true)}
                          >
                            {project.title}
                          </button>
                        ) : (
                          project.title
                        )}
                      </h2>
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
          {/* Logos Modal for id:10 */}
          <AnimatePresence>
            {showLogosModal && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowLogosModal(false)}
              >
                <motion.div
                  className="bg-zinc-900 rounded-lg shadow-lg max-w-2xl w-full p-6 relative max-h-screen overflow-y-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-200 text-2xl"
                    onClick={() => setShowLogosModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-200">Logo Design Showcase</h3>
                  <p className="text-zinc-400 mb-6">
                    Over the years, I have crafted a diverse range of logos for brands, startups, and personal projects. Each logo is designed to capture the unique identity and vision of the client, blending creativity with strategic thinking. Below are some highlights from my logo design portfolio.
                  </p>
                  <div className="space-y-8">
                    {logoSectionHeadings.map((heading, sectionIdx) => {
                      const imgCount = logoSectionImages[sectionIdx].length;
                      return (
                        <div key={heading} className="flex flex-col items-center min-w-0 w-full">
                          <h4 className="text-lg font-semibold text-zinc-300 mb-2">{heading}</h4>
                          {imgCount === 1 ? (
                            <div className="flex justify-center w-full mb-2">
                              <OptimizedImage
                                key={logoSectionImages[sectionIdx][0]}
                                src={logoSectionImages[sectionIdx][0]}
                                alt={`${heading} 1`}
                                className="rounded-lg w-32 h-32 object-cover border border-zinc-800 cursor-pointer hover:opacity-80 transition"
                                onClick={() => {
                                  const arr = [...logosGalleryModalOpen];
                                  arr[sectionIdx] = true;
                                  setLogosGalleryModalOpen(arr);
                                  const idxArr = [...logosGalleryIndex];
                                  idxArr[sectionIdx] = 0;
                                  setLogosGalleryIndex(idxArr);
                                }}
                              />
                            </div>
                          ) : imgCount === 2 ? (
                            <div className="grid grid-cols-2 gap-4 mb-2 mx-auto" style={{ justifyItems: 'center' }}>
                              {logoSectionImages[sectionIdx].map((img, idx) => (
                                <OptimizedImage
                                  key={img}
                                  src={img}
                                  alt={`${heading} ${idx + 1}`}
                                  className="rounded-lg w-32 h-32 object-cover border border-zinc-800 cursor-pointer hover:opacity-80 transition"
                                  onClick={() => {
                                    const arr = [...logosGalleryModalOpen];
                                    arr[sectionIdx] = true;
                                    setLogosGalleryModalOpen(arr);
                                    const idxArr = [...logosGalleryIndex];
                                    idxArr[sectionIdx] = idx;
                                    setLogosGalleryIndex(idxArr);
                                  }}
                                />
                              ))}
                            </div>
                          ) : imgCount === 3 ? (
                            <div className="grid grid-cols-3 gap-4 mb-2 mx-auto" style={{ justifyItems: 'center' }}>
                              {logoSectionImages[sectionIdx].map((img, idx) => (
                                <OptimizedImage
                                  key={img}
                                  src={img}
                                  alt={`${heading} ${idx + 1}`}
                                  className="rounded-lg w-32 h-32 object-cover border border-zinc-800 cursor-pointer hover:opacity-80 transition"
                                  onClick={() => {
                                    const arr = [...logosGalleryModalOpen];
                                    arr[sectionIdx] = true;
                                    setLogosGalleryModalOpen(arr);
                                    const idxArr = [...logosGalleryIndex];
                                    idxArr[sectionIdx] = idx;
                                    setLogosGalleryIndex(idxArr);
                                  }}
                                />
                              ))}
                            </div>
                          ) : (
                            <div
                              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-2 w-full justify-center"
                              style={{ justifyItems: 'center' }}
                            >
                              {logoSectionImages[sectionIdx].map((img, idx) => (
                                <OptimizedImage
                                  key={img}
                                  src={img}
                                  alt={`${heading} ${idx + 1}`}
                                  className="rounded-lg w-32 h-32 object-cover border border-zinc-800 cursor-pointer hover:opacity-80 transition"
                                  onClick={() => {
                                    const arr = [...logosGalleryModalOpen];
                                    arr[sectionIdx] = true;
                                    setLogosGalleryModalOpen(arr);
                                    const idxArr = [...logosGalleryIndex];
                                    idxArr[sectionIdx] = idx;
                                    setLogosGalleryIndex(idxArr);
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Logos Gallery Modals for each section */}
          {logoSectionHeadings.map((heading, sectionIdx) => (
            <AnimatePresence key={heading}>
              {logosGalleryModalOpen[sectionIdx] && (
                <motion.div
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    const arr = [...logosGalleryModalOpen];
                    arr[sectionIdx] = false;
                    setLogosGalleryModalOpen(arr);
                  }}
                >
                  <motion.div
                    className="relative max-w-md w-full flex flex-col items-center"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.25 }}
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 text-zinc-300 hover:text-white text-3xl z-10"
                      onClick={() => {
                        const arr = [...logosGalleryModalOpen];
                        arr[sectionIdx] = false;
                        setLogosGalleryModalOpen(arr);
                      }}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={logoSectionImages[sectionIdx][logosGalleryIndex[sectionIdx]]}
                        src={logoSectionImages[sectionIdx][logosGalleryIndex[sectionIdx]]}
                        alt={`${heading} ${logosGalleryIndex[sectionIdx] + 1}`}
                        className="rounded-lg w-32 h-32 object-cover border border-zinc-800 cursor-pointer hover:opacity-80 transition"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </AnimatePresence>
                    <div className="flex justify-between items-center w-full mt-4">
                      {logosGalleryIndex[sectionIdx] > 0 ? (
                        <button
                          className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                          onClick={() => {
                            const arr = [...logosGalleryIndex];
                            arr[sectionIdx] = arr[sectionIdx] - 1;
                            setLogosGalleryIndex(arr);
                          }}
                        >
                          Previous
                        </button>
                      ) : <div />}
                      <span className="text-zinc-400 text-sm">{logosGalleryIndex[sectionIdx] + 1} / {logoSectionImages[sectionIdx].length}</span>
                      {logosGalleryIndex[sectionIdx] < logoSectionImages[sectionIdx].length - 1 ? (
                        <button
                          className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                          onClick={() => {
                            const arr = [...logosGalleryIndex];
                            arr[sectionIdx] = arr[sectionIdx] + 1;
                            setLogosGalleryIndex(arr);
                          }}
                        >
                          Next
                        </button>
                      ) : <div />}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
          {/* Graphics Designing Modal for id:8 */}
          <AnimatePresence>
            {showGraphicsModal && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowGraphicsModal(false)}
              >
                <motion.div
                  className="bg-zinc-900 rounded-lg shadow-lg max-w-2xl w-full p-6 relative max-h-screen overflow-y-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-200 text-2xl"
                    onClick={() => setShowGraphicsModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-200">Graphics Designing Showcase</h3>
                  <p className="text-zinc-400 mb-6">
                    Explore a gallery of creative post designs crafted for engaging Facebook and Instagram audiences. Each design is tailored to maximize visual impact and audience engagement.
                  </p>
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-zinc-200 mb-4">Freelance Designs (Sereni Zen)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {sereniZenMockupGallery.map((img, idx) => (
                        <img
                          key={img}
                          src={img}
                          alt={`Sereni Zen Mockup ${idx + 1}`}
                          className="rounded-xl w-full object-cover border border-zinc-800 bg-zinc-950 cursor-pointer hover:opacity-80 transition"
                          onClick={() => {
                            setSereniZenMockupGalleryIndex(idx);
                            setSereniZenMockupGalleryOpen(true);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* 11 more mockup sections */}
                  {mockupSections.map((section, secIdx) => {
                    const isInteract = section.heading === 'Interact Club of Yala';
                    return (
                      <div className="mb-8" key={section.heading}>
                        <h4 className="text-xl font-semibold text-zinc-200 mb-4">{section.heading}</h4>
                        {isInteract ? (
                          <>
                            {/* 2x2 grid for first 4 images */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                              {section.images.slice(0, 4).map((img, idx) => (
                                <img
                                  key={img + idx}
                                  src={img}
                                  alt={`${section.heading} ${idx + 1}`}
                                  className="rounded-xl w-full object-cover border border-zinc-800 bg-zinc-950 cursor-pointer hover:opacity-80 transition"
                                  onClick={() => {
                                    const arr = [...mockupGalleryIndex];
                                    arr[secIdx] = idx;
                                    setMockupGalleryIndex(arr);
                                    const openArr = [...mockupGalleryOpen];
                                    openArr[secIdx] = true;
                                    setMockupGalleryOpen(openArr);
                                  }}
                                />
                              ))}
                            </div>
                            {/* InteractDen.jpg as a wide image */}
                            <div className="mb-4">
                              <img
                                src={'/graphics/Interact/InteractDen.jpg'}
                                alt="Interact Club of Yala InteractDen"
                                className="rounded-xl w-full sm:col-span-2 object-cover border border-zinc-800 bg-zinc-950 cursor-pointer hover:opacity-80 transition"
                                style={{ aspectRatio: '2/1', maxHeight: '320px', objectFit: 'cover' }}
                                onClick={() => {
                                  const arr = [...mockupGalleryIndex];
                                  arr[secIdx] = 4;
                                  setMockupGalleryIndex(arr);
                                  const openArr = [...mockupGalleryOpen];
                                  openArr[secIdx] = true;
                                  setMockupGalleryOpen(openArr);
                                }}
                              />
                            </div>
                            {/* SangeetMela Ticket Full.png as a large image below */}
                            <div>
                              <img
                                src={'/graphics/Interact/SangeetMela Ticket Full.png'}
                                alt="Interact Club of Yala SangeetMela Ticket"
                                className="rounded-xl w-full object-cover border border-zinc-800 bg-zinc-950 cursor-pointer hover:opacity-80 transition"
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                                onClick={() => {
                                  const arr = [...mockupGalleryIndex];
                                  arr[secIdx] = 5;
                                  setMockupGalleryIndex(arr);
                                  const openArr = [...mockupGalleryOpen];
                                  openArr[secIdx] = true;
                                  setMockupGalleryOpen(openArr);
                                }}
                              />
                            </div>
                          </>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {section.images.map((img, idx) => (
                              <img
                                key={img + idx}
                                src={img}
                                alt={`${section.heading} ${idx + 1}`}
                                className="rounded-xl w-full object-cover border border-zinc-800 bg-zinc-950 cursor-pointer hover:opacity-80 transition"
                                onClick={() => {
                                  const arr = [...mockupGalleryIndex];
                                  arr[secIdx] = idx;
                                  setMockupGalleryIndex(arr);
                                  const openArr = [...mockupGalleryOpen];
                                  openArr[secIdx] = true;
                                  setMockupGalleryOpen(openArr);
                                }}
                              />
                            ))}
                          </div>
                        )}
                        {/* Lightbox Modal for this section */}
                        <AnimatePresence>
                          {mockupGalleryOpen[secIdx] && (
                            <motion.div
                              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              onClick={() => {
                                const openArr = [...mockupGalleryOpen];
                                openArr[secIdx] = false;
                                setMockupGalleryOpen(openArr);
                              }}
                            >
                              <motion.div
                                className="relative max-w-2xl w-full flex flex-col items-center"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.25 }}
                                onClick={e => e.stopPropagation()}
                              >
                                <button
                                  className="absolute top-2 right-2 text-zinc-300 hover:text-white text-3xl z-10"
                                  onClick={() => {
                                    const openArr = [...mockupGalleryOpen];
                                    openArr[secIdx] = false;
                                    setMockupGalleryOpen(openArr);
                                  }}
                                  aria-label="Close"
                                >
                                  &times;
                                </button>
                                <img
                                  src={section.images[mockupGalleryIndex[secIdx]]}
                                  alt={`${section.heading} ${mockupGalleryIndex[secIdx] + 1}`}
                                  className="rounded-lg w-full max-h-[70vh] object-contain bg-zinc-900"
                                />
                                <div className="flex justify-between items-center w-full mt-4">
                                  {mockupGalleryIndex[secIdx] > 0 ? (
                                    <button
                                      className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                                      onClick={() => {
                                        const arr = [...mockupGalleryIndex];
                                        arr[secIdx] = arr[secIdx] - 1;
                                        setMockupGalleryIndex(arr);
                                      }}
                                    >
                                      Previous
                                    </button>
                                  ) : <div />}
                                  <span className="text-zinc-400 text-sm">{mockupGalleryIndex[secIdx] + 1} / {section.images.length}</span>
                                  {mockupGalleryIndex[secIdx] < section.images.length - 1 ? (
                                    <button
                                      className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                                      onClick={() => {
                                        const arr = [...mockupGalleryIndex];
                                        arr[secIdx] = arr[secIdx] + 1;
                                        setMockupGalleryIndex(arr);
                                      }}
                                    >
                                      Next
                                    </button>
                                  ) : <div />}
                                </div>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Sereni Zen Mockups Lightbox Modal */}
          <AnimatePresence>
            {sereniZenMockupGalleryOpen && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSereniZenMockupGalleryOpen(false)}
              >
                <motion.div
                  className="relative max-w-2xl w-full flex flex-col items-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-300 hover:text-white text-3xl z-10"
                    onClick={() => setSereniZenMockupGalleryOpen(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <img
                    src={sereniZenMockupGallery[sereniZenMockupGalleryIndex]}
                    alt={`Sereni Zen Mockup ${sereniZenMockupGalleryIndex + 1}`}
                    className="rounded-lg w-full max-h-[70vh] object-contain bg-zinc-900"
                  />
                  <div className="flex justify-between items-center w-full mt-4">
                    {sereniZenMockupGalleryIndex > 0 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setSereniZenMockupGalleryIndex(sereniZenMockupGalleryIndex - 1)}
                      >
                        Previous
                      </button>
                    ) : <div />}
                    <span className="text-zinc-400 text-sm">{sereniZenMockupGalleryIndex + 1} / {sereniZenMockupGallery.length}</span>
                    {sereniZenMockupGalleryIndex < sereniZenMockupGallery.length - 1 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setSereniZenMockupGalleryIndex(sereniZenMockupGalleryIndex + 1)}
                      >
                        Next
                      </button>
                    ) : <div />}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Business Card Modal for id:9 */}
          <AnimatePresence>
            {showCardModal && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setShowCardModal(false)}
              >
                <motion.div
                  className="bg-zinc-900 rounded-lg shadow-lg max-w-2xl w-full p-6 relative max-h-screen overflow-y-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-200 text-2xl"
                    onClick={() => setShowCardModal(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-200">Business Card Showcase</h3>
                  <p className="text-zinc-400 mb-6">
                    A custom business card created with Snapchat Bitmoji and eye catchy visuals. Explore the different design variations below.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cardGallery.map((img, idx) => (
                      <img
                        key={img}
                        src={img}
                        alt={`Business card design ${idx + 1}`}
                        className="rounded-lg w-full object-cover border border-zinc-800 cursor-pointer hover:opacity-80 transition"
                        onClick={() => { setCardGalleryIndex(idx); setCardGalleryModalOpen(true); }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Business Card Gallery Modal for id:9 */}
          <AnimatePresence>
            {cardGalleryModalOpen && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setCardGalleryModalOpen(false)}
              >
                <motion.div
                  className="relative max-w-md w-full flex flex-col items-center"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-zinc-300 hover:text-white text-3xl z-10"
                    onClick={() => setCardGalleryModalOpen(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <img
                    src={cardGallery[cardGalleryIndex]}
                    alt={`Business card design ${cardGalleryIndex + 1}`}
                    className="rounded-lg w-full max-h-[70vh] object-contain bg-zinc-900"
                  />
                  <div className="flex justify-between items-center w-full mt-4">
                    {cardGalleryIndex > 0 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setCardGalleryIndex(cardGalleryIndex - 1)}
                      >
                        Previous
                      </button>
                    ) : <div />}
                    <span className="text-zinc-400 text-sm">{cardGalleryIndex + 1} / {cardGallery.length}</span>
                    {cardGalleryIndex < cardGallery.length - 1 ? (
                      <button
                        className="px-4 py-2 bg-zinc-800 text-zinc-200 rounded hover:bg-zinc-700"
                        onClick={() => setCardGalleryIndex(cardGalleryIndex + 1)}
                      >
                        Next
                      </button>
                    ) : <div />}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </PageTransition>
      <Footer />
    </div>
  )
}

