"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0B1120] text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl opacity-40"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-5xl md:text-6xl font-bold leading-tight mb-6"
        >
          Build Authority. <br />
          Generate Leads. <br />
          <span className="text-cyan-400">Scale Your Business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          We design premium, high-converting websites engineered to
          turn visitors into paying customers.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/918793458846?text=Hi%20I%20want%20a%20website%20for%20my%20business."
          className="relative bg-cyan-500 text-black px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-cyan-400 transition"
        >
          Start Your Project
        </motion.a>
      </section>

      {/* PACKAGES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Website Packages
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Starter Lite */}
          <motion.div whileHover={{ y: -10 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Starter Lite</h3>
            <p className="text-3xl font-bold mb-6">₹2,999</p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li>✔ 1–3 Page Website</li>
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
              <li>✔ Mobile Optimized</li>
              <li>✔ Contact Form</li>
              <li>✔ WhatsApp Integration</li>
              <li>✔ Basic SEO Setup</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Interested%20in%20Basic%20Plan."
              className="block text-center bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400"
            >
              Get Started
            </a>
          </motion.div>

          {/* Business */}
          <motion.div whileHover={{ y: -10 }} className="bg-gradient-to-b from-cyan-500/20 to-blue-500/20 border border-cyan-400 rounded-2xl p-8 shadow-2xl">
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
              <li>✔ E-commerce Setup</li>
              <li>✔ Booking Systems</li>
              <li>✔ Advanced SEO</li>
              <li>✔ Automation</li>
              <li>✔ Custom UI/UX</li>
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

      {/* FINAL CTA */}
      <section className="py-24 text-center px-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <h2 className="text-4xl font-bold mb-6">
          Ready To Elevate Your Online Presence?
        </h2>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/918793458846?text=I%20want%20to%20start%20my%20website."
          className="bg-cyan-500 text-black px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-cyan-400"
        >
          Chat With Us Now
        </motion.a>
      </section>

      <footer className="py-10 text-center text-gray-400 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Scale Via Us. All rights reserved.
      </footer>

    </main>
  );
}
