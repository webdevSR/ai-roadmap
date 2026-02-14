"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0A0F1C] text-white overflow-x-hidden relative">

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918793458846?text=Hi%20I%20want%20a%20website%20for%20my%20business."
        className="fixed bottom-6 right-6 bg-cyan-500 text-black px-5 py-3 rounded-full shadow-2xl font-semibold z-50 hover:scale-105 transition"
      >
        💬 Chat
      </a>

      {/* HERO */}
      <section className="relative py-32 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-3xl opacity-40"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-6xl md:text-7xl font-bold leading-tight mb-6"
        >
          Design. Convert. Scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Premium websites crafted to position your business as an authority
          and turn visitors into real customers.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/918793458846?text=I%20want%20to%20start%20a%20website."
          className="relative bg-cyan-500 text-black px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-cyan-400 transition"
        >
          Start Your Project
        </motion.a>
      </section>

      {/* PORTFOLIO DEMOS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Recent Design Concepts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Real Estate Agency", "Luxury Cafe", "Fitness Studio"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-b from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 shadow-xl"
            >
              <div className="h-48 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-xl mb-6"></div>
              <h3 className="text-xl font-bold mb-3">{item}</h3>
              <p className="text-gray-300 text-sm">
                Modern, conversion-focused layout built for credibility and lead generation.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyan-600/10 to-purple-600/10">
        <h2 className="text-4xl font-bold text-center mb-16">
          Website Packages
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {/* Starter Lite */}
          <motion.div whileHover={{ y: -10 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Starter Lite</h3>
            <p className="text-3xl font-bold mb-6">₹2,500</p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>✔ 1–3 Pages</li>
              <li>✔ Free Hosting (Vercel)</li>
              <li>✔ Mobile Responsive</li>
              <li>✔ WhatsApp Integration</li>
              <li>✔ Domain Cost Separate</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Interested%20in%20Starter%20Lite%20Plan."
              className="block text-center bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400"
            >
              Get Started
            </a>
          </motion.div>

          {/* Basic */}
          <motion.div whileHover={{ y: -10 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Basic</h3>
            <p className="text-3xl font-bold mb-6">₹3,999</p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>✔ 4–5 Pages</li>
              <li>✔ Contact Form</li>
              <li>✔ WhatsApp Integration</li>
              <li>✔ Basic SEO Setup</li>
              <li>✔ Mobile Optimized</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Interested%20in%20Basic%20Plan."
              className="block text-center bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400"
            >
              Get Started
            </a>
          </motion.div>

          {/* Business */}
          <motion.div whileHover={{ y: -10 }} className="bg-gradient-to-b from-cyan-500/20 to-purple-600/20 border border-cyan-400 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-3 text-cyan-300">Business</h3>
            <p className="text-3xl font-bold mb-6">₹7,999</p>
            <ul className="space-y-3 text-gray-200 mb-6">
              <li>✔ Everything in Basic</li>
              <li>✔ Domain + Hosting Setup</li>
              <li>✔ Google Indexing</li>
              <li>✔ Lead Optimization</li>
              <li>✔ 1 Month Support</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Interested%20in%20Business%20Plan."
              className="block text-center bg-white text-black py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Most Popular
            </a>
          </motion.div>

          {/* Custom */}
          <motion.div whileHover={{ y: -10 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Custom</h3>
            <p className="text-3xl font-bold mb-6">Custom Pricing</p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>✔ E-commerce</li>
              <li>✔ Booking Systems</li>
              <li>✔ Advanced SEO</li>
              <li>✔ Automation</li>
              <li>✔ Full UI/UX Custom</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Need%20Custom%20Website."
              className="block text-center bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400"
            >
              Get Quote
            </a>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-400 text-sm border-t border-white/10">
        © {new Date().getFullYear()} ScaleVia Studio. All rights reserved.
      </footer>

    </main>
  );
}

