"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

const services = [
  {
    icon: Volume2,
    title: "Car Audio",
    description:
      "Premium speakers, subwoofers, amplifiers, and full sound system upgrades tailored to your ride.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: Sun,
    title: "Window Tinting",
    description:
      "High-quality ceramic and carbon tints for UV protection, privacy, and a sleek look.",
    color: "from-purple-400 to-fuchsia-600",
  },
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description:
      "Interior ambient lighting, underglow, headlight upgrades, and custom LED installs.",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Key,
    title: "Remote Starters",
    description:
      "Start your car from anywhere. Smartphone integration, keyless entry, and security systems.",
    color: "from-emerald-400 to-green-600",
  },
  {
    icon: Wrench,
    title: "Custom Installs",
    description:
      "Full custom builds — from show cars to daily drivers. We bring your vision to life.",
    color: "from-rose-400 to-red-600",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop",
    alt: "Custom car audio install",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
    alt: "Car interior with premium sound",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    alt: "Sport car with tinted windows",
  },
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
    alt: "Car stereo head unit",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
    alt: "Car with LED underglow",
  },
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop",
    alt: "Car audio subwoofer setup",
  },
];

const features = [
  "20+ Years of Experience",
  "Lifetime Warranty on Labor",
  "Certified Installers",
  "Same-Day Service Available",
  "Top Brands Only",
  "Free Consultations",
];

const reviews = [
  {
    name: "Rob S.",
    stars: 5,
    text: "Great place! Super quick installs too! They reinstalled my sub, amp, and double din stereo in no time.",
  },
  {
    name: "Collin U.",
    stars: 5,
    text: "Fast work — did all my wiring for my amp and installed a new one. Guy was fair with price, $180 cheaper than competitors!",
  },
  {
    name: "Verified Customer",
    stars: 5,
    text: "Very professional, and kept me updated throughout the install. They deserve a TEN star rating!",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Hollywood <span className="text-cyan-400">Sound</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Services", "Gallery", "Why Us", "Reviews", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+17344273333"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 px-4 py-4 space-y-3"
          >
            {["Services", "Gallery", "Why Us", "Reviews", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
                  className="block w-full text-left text-slate-300 hover:text-white py-2"
                >
                  {item}
                </button>
              )
            )}
            <a
              href="tel:+17344273333"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="sms:+17344273333"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mt-2"
            >
              <MessageSquare className="w-4 h-4" />
              Text Us
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-cyan-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Hollywood
              </span>
              <br />
              <span className="text-white">Sound</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-4">
              Garden City's Trusted Aftermarket Car Audio & Customization Shop
            </p>
            <p className="text-slate-500 mb-10">
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
              href="tel:+17344273333"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5" />
              Call (734) 427-3333
            </a>
            <a
              href="sms:+17344273333"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-lg font-bold hover:bg-white/20 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Text Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
                className="group relative p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 bg-slate-900/30">
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
                className="group relative aspect-[3/2] rounded-xl overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-4">
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
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">{feature}</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop"
                  alt="Custom car audio installation"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4 bg-slate-900/30">
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
              Rated 4.3★ with 200+ reviews. Don't just take our word for it — hear from real customers.
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
                className="p-8 rounded-2xl bg-slate-900/50 border border-white/5"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-bold text-white">— {review.name}</p>
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
              href="https://www.google.com/search?q=Hollywood+Sound+Garden+City+MI+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-lg font-bold hover:bg-white/20 transition-colors"
            >
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              See All Google Reviews
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
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
              href="tel:+15551234567"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-slate-400">(734) 427-3333</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-slate-900/50 border border-white/5"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-slate-400 text-center">
                30254 Ford Road
                <br />
                Garden City, MI 48135
              </p>
            </motion.div>

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
                Mon, Wed-Fri: 9AM – 6:30PM
                <br />
                Tue: 9:30AM – 6PM
                <br />
                Sat: 9AM – 5PM
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
                href="tel:+17344273333"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xl font-bold hover:scale-105 transition-transform shadow-xl shadow-cyan-500/25"
              >
                <Phone className="w-6 h-6" />
                Call Now — Free Quote!
              </a>
              <a
                href="sms:+17344273333"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/10 border border-white/20 text-xl font-bold hover:bg-white/20 transition-colors"
              >
                <MessageSquare className="w-6 h-6" />
                Text Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Hollywood <span className="text-cyan-400">Sound</span>
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>© 2025 Hollywood Sound</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">
                Detroit's Finest Car Audio
              </span>
            </div>

            <a
              href="tel:+17344273333"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" />
              (734) 427-3333
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
