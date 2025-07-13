import React, { useState, useEffect } from 'react';
import { Play, Star, Users, Award, Mail, Smartphone, Check, ArrowRight, Menu, X, Gamepad2, Zap, Target, DollarSign, Clock, Shield } from 'lucide-react';

const GameAnimationLandingPage = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailSubmit = () => {
    if (email) {
      setIsEmailSubmitted(true);
      // CPA TRACKING POINT - Email Lead
      console.log('CPA EVENT: Email Lead Generated', { email, timestamp: new Date() });
      setTimeout(() => setIsEmailSubmitted(false), 3000);
    }
  };

  const handleAppInstall = (platform) => {
    // CPA TRACKING POINT - App Install
    console.log('CPA EVENT: App Install Click', { platform, timestamp: new Date() });
  };

  const handleServiceQuote = (service, price) => {
    // CPA TRACKING POINT - Service Quote Request
    console.log('CPA EVENT: Service Quote Request', { service, price, timestamp: new Date() });
  };

  const handleMainCTA = (action) => {
    // CPA TRACKING POINT - Main Call to Action
    console.log('CPA EVENT: Main CTA Click', { action, timestamp: new Date() });
  };

  const testimonials = [
    {
      name: "Alex Rodriguez",
      company: "Infinity Games",
      text: "Epic RPG animations that increased player retention by 85% - worth every penny",
      rating: 5,
      gameImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop"
    },
    {
      name: "Jordan Kim",
      company: "Pixel Studios",
      text: "Revolutionary character animations boosted our mobile game downloads by 300%",
      rating: 5,
      gameImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop"
    },
    {
      name: "Sam Carter",
      company: "NextGen Gaming",
      text: "AAA-quality cutscenes that made our indie game go viral on social media",
      rating: 5,
      gameImage: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop"
    }
  ];

  const services = [
    {
      title: "Character Animation",
      description: "Epic character movements, combat sequences, and emotional expressions for immersive gameplay experiences",
      originalPrice: "$899",
      price: "$599",
      deliveryTime: "5-7 days",
      icon: <Users className="w-8 h-8" />,
      gameImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      features: ["Combat Animations", "Idle Movements", "Facial Expressions", "Death Sequences"]
    },
    {
      title: "VFX & Particles",
      description: "Explosive visual effects, magic spells, weapon impacts, and environmental particle systems",
      originalPrice: "$699",
      price: "$449",
      deliveryTime: "3-5 days",
      icon: <Zap className="w-8 h-8" />,
      gameImage: "https://images.unsplash.com/photo-1538481199464-7160b8c9fb02?w=400&h=250&fit=crop",
      features: ["Spell Effects", "Explosions", "Weather Systems", "Impact Particles"]
    },
    {
      title: "UI/UX Animation",
      description: "Smooth interface transitions, menu animations, and interactive game elements that enhance user experience",
      originalPrice: "$499",
      price: "$299",
      deliveryTime: "2-4 days",
      icon: <Target className="w-8 h-8" />,
      gameImage: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=250&fit=crop",
      features: ["Menu Transitions", "Button Animations", "HUD Elements", "Loading Screens"]
    },
    {
      title: "Cinematic Cutscenes",
      description: "Movie-quality cutscenes and story sequences that captivate players and drive narrative engagement",
      originalPrice: "$1499",
      price: "$999",
      deliveryTime: "7-10 days",
      icon: <Play className="w-8 h-8" />,
      gameImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=250&fit=crop",
      features: ["Story Sequences", "Character Dialogue", "Camera Work", "Post-Production"]
    }
  ];

  const portfolioGames = [
    {
      title: "Mystic Realms RPG",
      category: "Fantasy RPG",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
      description: "Epic fantasy animations with magic systems"
    },
    {
      title: "Cyber Strike 2077",
      category: "Sci-Fi Shooter",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop",
      description: "Futuristic combat and weapon animations"
    },
    {
      title: "Dragon's Quest Mobile",
      category: "Mobile Adventure",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      description: "Character animations for mobile gaming"
    },
    {
      title: "Racing Thunder",
      category: "Racing Game",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      description: "High-speed vehicle and environment effects"
    }
  ];``

  return (
    <div className="bg-black text-white  overflow-x-hidden">
      {/* Letterbox Top */}
      <div className="fixed top-0 left-0 right-0 h-16 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10  to-purple-500/10"></div>
      </div>

      {/* Letterbox Bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-black z-50 ">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10"></div>
      </div>

      {/* Navigation */}
      <nav className={` relative w-full z-40 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'}`} style={{ top: '64px' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-cyan-400" />
              GameAnimatePro
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-cyan-400 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors font-medium">Portfolio</a>
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors font-medium">Reviews</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-cyan-500/30">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#services" className="hover:text-cyan-400 transition-colors font-medium">Services</a>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors font-medium">Portfolio</a>
                <a href="#testimonials" className="hover:text-cyan-400 transition-colors font-medium">Reviews</a>
                <a href="#contact" className="hover:text-cyan-400 transition-colors font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="pt-16 pb-16">
        {/* Hero Section */}
          {/* Hero Background Image */}
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop)'
          }}></div>
          
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Gaming Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 border-2 border-cyan-400/30 rotate-45 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 text-center z-10">
            <div className="max-w-5xl mx-auto">
              {/* Game-style UI Frame */}
              <div className="border-2 border-cyan-500/50 bg-black/50 backdrop-blur-sm p-8 md:p-12 relative">
                <div className="absolute top-2 left-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>

                <div className="text-xs md:text-sm text-cyan-400 mb-4 font-mono tracking-wider">
                  {'>'} INITIALIZING GAME ANIMATION PROTOCOL...
                </div>

                <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">
                  LEVEL UP YOUR GAME
                </h1>
                <p className="text-lg md:text-2xl mb-8 text-gray-300 font-mono">
                  EPIC ANIMATIONS • CINEMATIC QUALITY • NEXT-GEN VISUALS
                </p>

                {/* Special Offer Badge */}
                <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-8 animate-pulse">
                  🔥 LIMITED TIME: 40% OFF ALL SERVICES
                </div>
                
                {/* CTA Buttons - CPA TRACKING POINTS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <button 
                    onClick={() => handleMainCTA('start_mission')}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 border-2 border-cyan-400 text-lg font-bold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 font-mono"
                  >
                    [START MISSION - $299]
                  </button>
                  <button 
                    onClick={() => handleMainCTA('watch_demo')}
                    className="px-8 py-4 border-2 border-cyan-400 bg-black/50 text-lg font-bold hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                  >
                    <Play size={20} />
                    [WATCH DEMO]
                  </button>
                </div>

                {/* Email Capture - CPA TRACKING POINT */}
                <div className="max-w-md mx-auto">
                  <div className="text-sm text-cyan-400 mb-2 font-mono">{'>'} ENTER EMAIL FOR EXCLUSIVE GAME ASSETS + 20% DISCOUNT:</div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="player@email.com"
                      className="flex-1 px-4 py-3 bg-black border-2 border-cyan-500/50 focus:border-cyan-400 focus:outline-none text-cyan-400 placeholder-gray-500 font-mono"
                    />
                    <button
                      onClick={handleEmailSubmit}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 border-2 border-cyan-400 font-bold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                    >
                      {isEmailSubmitted ? <Check size={20} /> : <Mail size={20} />}
                      {isEmailSubmitted ? '[JOINED]' : '[JOIN & SAVE]'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-cyan-400">
                {'>'} GAME PORTFOLIO
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
                Real games we've animated for top studios worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioGames.map((game, index) => (
                <div
                  key={index}
                  className="border-2 border-cyan-500/30 bg-black/50 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-cyan-400 font-mono text-sm">{game.category}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-white font-mono">{game.title}</h3>
                    <p className="text-gray-300 text-sm font-mono">{game.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-cyan-400">
                {'>'} ANIMATION SERVICES
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
                Professional game animation solutions with guaranteed results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border-2 border-cyan-500/30 bg-black/50 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 relative group overflow-hidden"
                >
                  {/* Service Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.gameImage} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="absolute top-4 right-4 text-cyan-400 bg-black/50 p-2 rounded">
                      {service.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400 font-mono">{service.title}</h3>
                    <p className="text-gray-300 mb-4 font-mono text-sm">{service.description}</p>
                    
                    {/* Features List */}
                    <div className="mb-4">
                      <div className="text-sm text-cyan-400 font-mono mb-2">INCLUDES:</div>
                      <ul className="grid grid-cols-2 gap-1 text-xs font-mono text-gray-300">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-1">
                            <Check size={12} className="text-cyan-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-2xl font-bold text-cyan-400 font-mono">{service.price}</div>
                      <div className="text-lg text-gray-400 line-through font-mono">{service.originalPrice}</div>
                      <div className="text-sm text-green-400 font-mono">SAVE 33%</div>
                    </div>

                    {/* Delivery Time */}
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-300 font-mono">
                      <Clock size={16} className="text-cyan-400" />
                      Delivery: {service.deliveryTime}
                    </div>

                    {/* CTA Button - CPA TRACKING POINT */}
                    <button 
                      onClick={() => handleServiceQuote(service.title, service.price)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 border-2 border-cyan-400 font-bold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                    >
                      [ORDER NOW - {service.price}]
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Install Section - CPA TRACKING POINT */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="border-2 border-cyan-500/30 bg-black/50 p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono text-cyan-400">
                {'>'} DOWNLOAD GAME TOOLKIT
              </h2>
              <p className="text-xl text-gray-300 mb-12 font-mono">
                Access our mobile animation tools. Create epic game visuals on the go + Get 25% off your first order.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleAppInstall('ios')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 border-2 border-blue-400 text-lg font-bold hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 font-mono"
                >
                  <Smartphone size={24} />
                  [iOS DOWNLOAD + 25% OFF]
                </button>
                <button
                  onClick={() => handleAppInstall('android')}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 border-2 border-green-400 text-lg font-bold hover:from-green-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 font-mono"
                >
                  <Smartphone size={24} />
                  [ANDROID DOWNLOAD + 25% OFF]
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="container mx-auto px-4">
            <div className="border-2 border-cyan-500/30 bg-black/50 p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 font-mono">1,247</div>
                  <div className="text-gray-300 font-mono">GAMES ANIMATED</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 font-mono">$2.5M+</div>
                  <div className="text-gray-300 font-mono">REVENUE GENERATED</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-pink-400 font-mono">847</div>
                  <div className="text-gray-300 font-mono">STUDIOS SERVED</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-400 font-mono">98.7%</div>
                  <div className="text-gray-300 font-mono">SATISFACTION RATE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-cyan-400">
                {'>'} CLIENT SUCCESS STORIES
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
                Real results from game studios who trusted us with their animations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border-2 border-cyan-500/30 bg-black/50 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Game Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={testimonial.gameImage} 
                      alt={testimonial.company}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="absolute top-2 right-2 text-xs text-cyan-400 font-mono bg-black/50 px-2 py-1 rounded">
                      CLIENT #{index + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 text-sm font-mono">"{testimonial.text}"</p>
                    <div className="border-t border-cyan-500/30 pt-4">
                      <div className="font-bold text-cyan-400 font-mono">{testimonial.name}</div>
                      <div className="text-purple-300 font-mono text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - CPA TRACKING POINT */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
          <div className="container mx-auto px-4 text-center">
            <div className="border-2 border-cyan-500/30 bg-black/50 p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-mono text-cyan-400">
                {'>'} READY TO DOMINATE?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-mono">
                Join 847+ game studios who've increased their revenue by 300% with our animations
              </p>

              {/* Money-Back Guarantee */}
              <div className="flex items-center justify-center gap-2 mb-8 text-green-400 font-mono">
                <Shield size={24} />
                30-DAY MONEY-BACK GUARANTEE
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleMainCTA('start_project')}
                  className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 border-2 border-cyan-400 text-xl font-bold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 font-mono"
                >
                  [START PROJECT - FROM $299]
                </button>
                <button 
                  onClick={() => handleMainCTA('get_quote')}
                  className="px-12 py-4 border-2 border-cyan-400 bg-black/50 text-xl font-bold hover:bg-cyan-500/20 transition-all duration-300 font-mono"
                >
                  [GET FREE QUOTE]
                </button>
              </div>
            </div>
          </div>
        </section>

 {/* <footer className="py-12 bg-black/80">
          <div className="container mx-auto text-center">
            <div className="border-2 border-cyan-500/30 bg-black/50 p-8">
              <p className="text-gray-400 font-mono text-sm">© 2025 GameAnimatePro. All rights reserved.</p>
            </div>
          </div>
        </footer> */}
      </div>
    </div>   
  );
};

export default GameAnimationLandingPage;