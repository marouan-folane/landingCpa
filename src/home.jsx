"use client"

import { useState, useEffect } from "react"
import {
  Play,
  Star,
  Users,
  Check,
  Menu,
  X,
  Gamepad2,
  Zap,
  Clock,
  Download,
  ExternalLink,
  Send,
  Gift,
} from "lucide-react"

import resident from "./assets/resident.jpg"
import crash from "./assets/crush.jpg"
import theft from "./assets/theft.jpg"
import silent from "./assets/silent.jpg"
import r2 from "./assets/r2.png"
import React from "react"

const featuredGames = [
  {
    id: "re4",
    title: "Resident Evil 4",
    genre: "Survival Horror",
    rating: 4.9,
    players: "1 Player",
    description: "Experience the legendary survival horror masterpiece that redefined the genre.",
    features: ["Enhanced Graphics", "All DLC Included", "Save States", "Cheats Available"],
    image: resident,
    price: "Free with Email",
    originalPrice: "$29.99",
    downloadCount: "2.1M+",
    fileSize: "4.2 GB",
    hasGame: true,
  },
  {
    id: "crash",
    title: "Crash Bandicoot: Wrath of Cortex",
    genre: "Platform Adventure",
    rating: 4.7,
    players: "1-2 Players",
    description: "Join Crash in his wildest adventure yet with enhanced gameplay and graphics.",
    features: ["Co-op Mode", "All Levels Unlocked", "Bonus Content", "HD Textures"],
    image: crash,
    price: "Free with Email",
    originalPrice: "$24.99",
    downloadCount: "1.8M+",
    fileSize: "3.8 GB",
    hasGame: true,
  },
  {
    id: "re-cv",
    title: "Resident Evil: Code Veronica X",
    genre: "Survival Horror",
    rating: 4.8,
    players: "1 Player",
    description: "The complete edition of the acclaimed survival horror classic.",
    features: ["Director's Cut", "Bonus Modes", "Gallery Unlocked", "Multiple Endings"],
    image: r2,
    price: "Free with Email",
    originalPrice: "$19.99",
    downloadCount: "1.5M+",
    fileSize: "3.2 GB",
    hasGame: true,
  },
  {
    id: "gta-sa",
    title: "Grand Theft Auto: San Andreas",
    genre: "Action Adventure",
    rating: 4.9,
    players: "1 Player",
    description: "The most ambitious GTA game ever created, now with enhanced features.",
    features: ["All Missions", "Cheat Codes", "Enhanced Graphics", "Bonus Content"],
    image: theft,
    price: "Free with Email",
    originalPrice: "$39.99",
    downloadCount: "3.2M+",
    fileSize: "4.7 GB",
    hasGame: false,
  },
]

const services = [
  {
    title: "Free Game Starter Pack",
    icon: <Gamepad2 size={32} />,
    description:
      "Get instant access to 50+ classic PS2 games absolutely free. Just enter your email and start playing!",
    offer: "50+ Games FREE",
    originalValue: "Worth $299",
    deliveryTime: "Instant Access",
    features: ["50+ Classic Games", "No Ads", "High-Speed Downloads", "Mobile Compatible", "Email Support"],
    badge: "Most Popular",
    color: "from-blue-600 to-purple-600",
    buttonText: "Get Free Games",
  },
  {
    title: "Ultimate Collection Bundle",
    icon: <Zap size={32} />,
    description:
      "Download our complete PS2 collection with over 200 games, bonus content, and exclusive cheats - completely free!",
    offer: "200+ Games FREE",
    originalValue: "Worth $599",
    deliveryTime: "Instant Download",
    features: ["Complete Collection", "Bonus Content", "Cheat Codes", "HD Graphics Pack", "Exclusive Games"],
    badge: "Best Value",
    color: "from-green-600 to-teal-600",
    buttonText: "Download Collection",
  },
  {
    title: "VIP Gaming Experience",
    icon: <Users size={32} />,
    description:
      "Join our exclusive community and get early access to new games, beta versions, and premium support - all free!",
    offer: "VIP Access FREE",
    originalValue: "Worth $199",
    deliveryTime: "Instant Activation",
    features: ["Early Game Access", "Beta Versions", "Private Discord", "Priority Support", "Monthly New Games"],
    badge: "Exclusive",
    color: "from-purple-600 to-pink-600",
    buttonText: "Join VIP Free",
  },
]

export default function PS2GamesLandingPage() {
  const [email, setEmail] = useState("")
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showHeroEmailModal, setShowHeroEmailModal] = useState(false)
  const [selectedGame, setSelectedGame] = useState(null)
  const [gameEmail, setGameEmail] = useState("")
  const [heroEmail, setHeroEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const aff = params.get("aff")
    if (aff) {
      localStorage.setItem("cpa_aff", aff)
    }
  }, [])

  const handleSubscribe = () => {
    if (!email) return
    const affId = localStorage.getItem("cpa_aff") || "default"
    window.location.href = `https://ogads.com/track/${affId}?email=${encodeURIComponent(email)}`
  }

  const handleHeroEmailSubmit = async () => {
    if (!heroEmail) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to affiliate link with email
    const affId = localStorage.getItem("cpa_aff") || "default"
    window.location.href = `https://ogads.com/track/${affId}?email=${encodeURIComponent(heroEmail)}`
  }

  const handlePlayGame = (game) => {
    setSelectedGame(game)
    setShowEmailModal(true)
    setGameEmail("")
    setSubmitSuccess(false)
  }

  const handleGameEmailSubmit = async () => {
    if (!gameEmail || !selectedGame) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (selectedGame.hasGame) {
      // Game exists - simulate sending zip file
      setSubmitSuccess(true)
      setTimeout(() => {
        setShowEmailModal(false)
        setIsSubmitting(false)
        // In real implementation, this would trigger zip file email
        alert(`Download link for ${selectedGame.title} has been sent to ${gameEmail}!`)
      }, 1500)
    } else {
      // Game doesn't exist - redirect to external site
      const affId = localStorage.getItem("cpa_aff") || "default"
      window.open(`https://my.games/fr-FR/search?q=${encodeURIComponent(selectedGame.title)}&aff=${affId}`, "_blank")
      setShowEmailModal(false)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
              <Gamepad2 className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              PS2 Legends
            </h1>
          </div>

          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav
            className={`${isNavOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-black/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 gap-6 border-b md:border-0 border-gray-800/50`}
          >
            <a href="#games" className="hover:text-cyan-400 transition-colors font-medium">
              Games
            </a>
            <a href="#services" className="hover:text-cyan-400 transition-colors font-medium">
              Services
            </a>
           
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="w-full h-full relative">
          {/* Background Image */}
          <img src={r2 || "/placeholder.svg"} alt="PS2 Gaming Experience" className="w-full h-full object-cover" />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

          {/* Main Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Over 2M+ Downloads</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Play PS2 Games
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Online
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-3xl leading-relaxed">
              Download and enjoy the <span className="text-cyan-400 font-semibold">classics for free</span>
              <br className="hidden md:block" />
              with enhanced graphics and instant access
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white font-medium">500+ Games</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white font-medium">No Ads</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-white font-medium">Instant Download</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-lg md:text-xl font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => setShowHeroEmailModal(true)}
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download Now
                </div>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>

          {/* Floating Game Icons */}
          <div className="absolute top-20 right-10 opacity-20 animate-float">
            <svg className="w-12 h-12 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="absolute bottom-32 left-16 opacity-20 animate-float delay-1000">
            <svg className="w-10 h-10 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Featured Games */}
      <section id="games" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Games
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Download your favorite PS2 classics instantly. Just enter your email and get the game files sent directly
              to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-700/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-bold">
                    {game.genre}
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/80 backdrop-blur-sm rounded-lg px-2 py-1">
                    <Star className="text-yellow-400 fill-current" size={12} />
                    <span className="text-xs font-bold">{game.rating}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-green-500 text-black rounded-lg px-2 py-1 text-xs font-bold">
                    {game.price}
                  </div>

                  <div className="absolute bottom-3 right-3 text-xs text-white/80 bg-black/60 rounded px-2 py-1">
                    {game.fileSize}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {game.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{game.description}</p>

                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {game.players}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download size={12} />
                      {game.downloadCount}
                    </span>
                  </div>

                  <button
                    onClick={() => handlePlayGame(game)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                  >
                    <Play size={14} />
                    Download Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Free Gaming Offers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your free gaming package - no payment required, just your email for instant access
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 border border-gray-700/50"
              >
                {service.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`bg-gradient-to-r ${service.color} px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg`}
                    >
                      {service.badge}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-green-400">{service.offer}</span>
                  </div>
                  <div className="text-lg text-gray-400 line-through mb-2">{service.originalValue}</div>
                  <div className="flex items-center justify-center gap-1 text-cyan-400">
                    <Clock size={14} />
                    <span className="text-sm">{service.deliveryTime}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="text-green-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    // Scroll to email signup or open email modal
                    const emailInput = document.querySelector('input[type="email"]')
                    if (emailInput) {
                      emailInput.scrollIntoView({ behavior: "smooth" })
                      emailInput.focus()
                    }
                  }}
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2`}
                >
                  <Gift size={20} />
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Email Signup Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="text-green-400" size={24} />
                <h3 className="text-2xl font-bold">Claim Your Free Games Now!</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Enter your email below to instantly access any of our free gaming packages above
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                >
                  <Send size={16} />
                  Get Free Access
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                🎁 Bonus: Get exclusive cheat codes and bonus games with your signup!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Email Modal */}
      {showHeroEmailModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Start Your Gaming Journey!</h3>
              <p className="text-gray-300 text-sm">
                Enter your email to get instant access to 500+ PS2 games and exclusive bonuses!
              </p>
            </div>

            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowHeroEmailModal(false)}
                className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleHeroEmailSubmit}
                disabled={!heroEmail || isSubmitting}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Get Free Access
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">🎮 500+ Games • 🚀 Instant Access • 🎁 Exclusive Bonuses</p>
            </div>
          </div>
        </div>
      )}

      {/* Game Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {selectedGame?.hasGame ? <Gift size={32} /> : <ExternalLink size={32} />}
              </div>
              <h3 className="text-2xl font-bold mb-2">{selectedGame?.title}</h3>
              <p className="text-gray-300 text-sm">
                {selectedGame?.hasGame
                  ? "Enter your email to receive the download link instantly!"
                  : "This game will open in a new tab. Enter your email to continue."}
              </p>
            </div>

            {submitSuccess ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} />
                </div>
                <h4 className="text-xl font-bold text-green-400 mb-2">Success!</h4>
                <p className="text-gray-300">Download link sent to your email!</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={gameEmail}
                    onChange={(e) => setGameEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowEmailModal(false)}
                    className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleGameEmailSubmit}
                    disabled={!gameEmail || isSubmitting}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {selectedGame?.hasGame ? "Send Download" : "Continue"}
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                  <Gamepad2 className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">PS2 Legends</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reliving the golden age of gaming, one classic at a time. Download your favorite PS2 games instantly.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Games</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  Action Games
                </a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  Adventure Games
                </a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  Horror Games
                </a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  Sports Games
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  Download Help
                </a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  System Requirements
                </a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  DMCA
                </a>
                <a href="#" className="block hover:text-cyan-400 transition-colors">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 PS2 Legends. All rights reserved. PlayStation and PS2 are trademarks of Sony Interactive
              Entertainment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
