"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Volume2,
  Sun,
  Lightbulb,
  Key,
  Wrench,
  CheckCircle,
  Menu,
  X,
  Calendar,
  ArrowUp,
  ImageIcon,
  Disc3,
  Navigation,
} from "lucide-react";

/* ─────────────── DATA ─────────────── */

const services = [
  {
    icon: Volume2,
    title: "Car Audio",
    description:
      "Premium speakers, subwoofers, amplifiers, and full sound system upgrades tailored to your ride.",
    color: "from-cyan-400 to-blue-600",
    image: "/images/car-audio-subwoofers.webp",
    extraImage: "/images/car-audio-new.jpeg",
  },
  {
    icon: Sun,
    title: "Window Tinting",
    description:
      "High-quality ceramic and carbon tints for UV protection, privacy, and a sleek look. Stay cool in the summer and protect your interior from fading.",
    color: "from-purple-400 to-fuchsia-600",
    image: "/images/unnamed (7).webp",
    extraImage: "/images/unnamed1.webp",
  },
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description:
      "Interior ambient lighting, underglow, headlight upgrades, and custom LED installs.",
    color: "from-amber-400 to-orange-600",
    image: "/images/car-dashboard.jpg",
  },
  {
    icon: Key,
    title: "Remote Starters",
    description:
      "Start your car from anywhere. Smartphone integration, keyless entry, and security systems.",
    color: "from-emerald-400 to-green-600",
    image: "/images/remote-starter-snow.jpg",
    extraImage: "/images/remote-start-new.jpeg",
  },
  {
    icon: Disc3,
    title: "Apple CarPlay & Android Auto",
    description:
      "Apple CarPlay, Android Auto, touchscreen head units, and backup cameras.",
    color: "from-sky-400 to-indigo-600",
    image: "/images/apple-carplay.avif",
  },
  {
    icon: Wrench,
    title: "Custom Installs",
    description:
      "Full custom builds — from show cars to daily drivers. We bring your vision to life.",
    color: "from-rose-400 to-red-600",
    image: "/images/unnamed (1).webp",
  },
];

const galleryImages = [
  { src: "/images/unnamed (5).webp", alt: "Can-Am Spyder trike custom audio installation at Hollywood Sound" },
  { src: "/images/unnamed (2).webp", alt: "Teal Chevrolet Corvette custom build at Hollywood Sound" },
  { src: "/images/unnamed (4).webp", alt: "Black McLaren supercar at Hollywood Sound Ann Arbor" },
  { src: "/images/unnamed (6).webp", alt: "Blue Chevrolet Corvette at Hollywood Sound shop" },
  { src: "/images/audio-system.jpeg", alt: "Custom audio system installation at Hollywood Sound" },
  { src: "/images/unnamed (9).webp", alt: "White Ford Mustang custom audio and lighting" },
  { src: "/images/bike.png", alt: "Custom motorcycle audio installation at Hollywood Sound" },
  { src: "/images/remote-start-new.jpeg", alt: "Remote starter installation at Hollywood Sound" },
  { src: "/images/car-audio-2.png", alt: "Car audio system installation at Hollywood Sound" },
];

const features = [
  { text: "20+ Years of Experience", icon: CheckCircle },
  { text: "Certified Installers", icon: CheckCircle },
  { text: "Same-Day Service Available", icon: CheckCircle },
  { text: "Top Brands & Budget Options", icon: CheckCircle },
  { text: "Free Consultations", icon: Calendar },
];

const reviews = [
  {
    name: "Marcus T.",
    stars: 5,
    text: "Professional installation of window tinting and dash cam. Friendly staff, quick service, and fair prices. Very satisfied with the results!",
    service: "Window Tinting",
  },
  {
    name: "Jennifer K.",
    stars: 5,
    text: "Got my remote starter installed here. The team was knowledgeable and got it done fast. Works perfectly every time, even from my office!",
    service: "Remote Starter",
  },
  {
    name: "David R.",
    stars: 5,
    text: "These guys transformed my daily driver into a concert hall on wheels. The subwoofer setup is insane — clean, punchy bass that doesn't rattle anything.",
    service: "Car Audio",
  },
];

const brands = [
  "JVC", "Kicker", "Pioneer", "JL Audio",
  "Rockford Fosgate", "Sony", "Kenwood", "Alpine",
  "JBL", "BOSS", "Ex Calibur", "Time Stopper",
  "Compustar", "Viper", "CrimeStopper Remote Starter", "DB Drive Audio",
];

/* ─────────────── COMPONENTS ─────────────── */

function ImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
      <ImageIcon className="w-8 h-8 text-slate-600" />
    </div>
  );
}

function LazyImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative ${className || ""}`}>
      {!loaded && <ImageSkeleton />}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

/* ─────────────── MAIN PAGE ─────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src="/logo.svg"
                alt="Hollywood Sound Logo"
                className="h-16 w-auto bg-transparent"
              />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {["Services", "Gallery", "Why Us", "Reviews", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollTo(item.toLowerCase().replace(" ", "-"))
                    }
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+17349751111"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-white/10 px-4 py-4 space-y-3 overflow-hidden"
            >
              {["Services", "Gallery", "Why Us", "Reviews", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollTo(item.toLowerCase().replace(" ", "-"))
                    }
                    className="block w-full text-left text-slate-300 hover:text-white py-2"
                  >
                    {item}
                  </button>
                )
              )}
              <a
                href="tel:+17349751111"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="sms:+17346868500"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                Text Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Shop interior background */}
        <div className="absolute inset-0">
          <img
            src="/images/DSC07335.JPG"
            alt="Hollywood Sound shop interior"
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Subtle corner accents */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-slate-950/60 to-transparent" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-slate-950/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950/90 border border-cyan-500/40 text-base text-white font-bold mb-6 backdrop-blur-md shadow-lg shadow-cyan-500/20"
            >
              <Navigation className="w-5 h-5 text-cyan-400" />
              3897 Platt Rd, Ann Arbor, MI 48108
            </motion.div>

            <img
              src="/logo.svg"
              alt="Hollywood Sound - Ann Arbor's Premier Car Audio Shop"
              className="h-48 md:h-60 lg:h-72 w-auto mx-auto mb-6 drop-shadow-2xl bg-transparent"
            />
            <h1 className="sr-only">
              Hollywood Sound — Car Audio, Tinting & Customization in Ann Arbor, MI
            </h1>
            <p className="text-xl md:text-3xl text-white max-w-4xl mx-auto mb-4 px-4 tracking-wide drop-shadow-lg">
              Ann Arbor's Trusted Aftermarket Car Audio & Customization Shop
            </p>
            <p className="text-white mb-10 text-lg md:text-xl px-4 tracking-wide drop-shadow-md">
              Speakers · Tinting · LED Lighting · Remote Starters · Custom Builds
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+17349751111"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5" />
              Call (734) 975-1111
            </a>
            <a
              href="sms:+17346868500"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-lg font-bold hover:bg-white/20 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Text Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Everything your ride needs to stand out and sound incredible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 overflow-hidden"
              >
                {/* Main featured image with text overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} service at Hollywood Sound`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Icon badge */}
                  <div
                    className={`absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Text overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold mb-1.5">{service.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Single extra image thumbnail */}
                {(service as any).extraImage && (
                  <div className="border-t border-white/5">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={(service as any).extraImage}
                        alt={`${service.title} work at Hollywood Sound`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Tint Details Promo Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative rounded-2xl bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/tint-details.png"
                  alt="Window tinting shade options and details at Hollywood Sound"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br from-purple-400 to-fuchsia-600 flex items-center justify-center shadow-lg">
                  <Sun className="w-5 h-5 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold mb-1.5">Tint Shade Guide</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    From light UV protection to full privacy limo tint — we carry ceramic and carbon films in every shade.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Location Banner ── */}
      <section className="py-8 px-4 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center"
          >
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <Navigation className="w-5 h-5 text-cyan-400" />
              3897 Platt Rd, Ann Arbor, MI 48108
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="w-4 h-4 text-amber-400" />
              Mon–Sat: 10AM – 5PM
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Brands Bar ── */}
      <section className="py-12 px-4 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-slate-400 mb-6 uppercase tracking-wider font-medium">
            Trusted Brands We Install
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-white font-bold text-sm hover:text-cyan-400 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-purple-400">Work</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Real installs. Real results. See what we can do for your ride.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[3/2] rounded-xl overflow-hidden bg-slate-800 border border-white/5"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section id="why-us" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Hollywood Sound?
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We've been in the game for over two decades. Our certified
                installers treat every car like their own — no shortcuts, no
                compromises.
              </p>

              <div className="space-y-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
                <img
                  src="/images/unnamed (2).webp"
                  alt="Teal Chevrolet Corvette custom build at Hollywood Sound Ann Arbor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Customer <span className="text-amber-400">Reviews</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Don't just take our word for it — hear from real customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-white">— {review.name}</p>
                  <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://www.google.com/search?q=Hollywood+Sound+Ann+Arbor+MI+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-lg font-bold hover:bg-white/20 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              See All Google Reviews
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Ready to upgrade your ride? Call, text, or stop by today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.a
              href="tel:+17349751111"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-slate-400">(734) 975-1111</p>
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=3897+Platt+Rd+Ann+Arbor+MI+48108"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-slate-900/50 border border-cyan-500/30 hover:border-cyan-500/60 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-cyan-400">Visit Us</h3>
              <p className="text-white text-center font-semibold">
                3897 Platt Rd
                <br />
                Ann Arbor, MI 48108
              </p>
              <p className="text-cyan-400 text-sm mt-2">Get Directions →</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-slate-900/50 border border-white/5"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Hours</h3>
              <p className="text-slate-400 text-center">
                Mon–Sat: 10AM – 5PM
                <br />
                Sun: Closed
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+17349751111"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xl font-bold hover:scale-105 transition-transform shadow-xl shadow-cyan-500/25"
              >
                <Phone className="w-6 h-6" />
                Call Now — Free Quote!
              </a>
              <a
                href="sms:+17346868500"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/10 border border-white/20 text-xl font-bold hover:bg-white/20 transition-colors"
              >
                <MessageSquare className="w-6 h-6" />
                Text Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Hollywood Sound"
                className="h-12 w-auto bg-transparent"
              />
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>© {currentYear} Hollywood Sound</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">
                Ann Arbor's Finest Car Audio
              </span>
            </div>

            <a
              href="tel:+17349751111"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" />
              (734) 975-1111
            </a>
          </div>
        </div>
      </footer>

      {/* ── Scroll to Top ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

    </main>
  );
}