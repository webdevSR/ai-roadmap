"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-x-hidden">

      {/* HERO */}
      <section className="py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
        >
          Scale Your Business With A <br />
          High-Converting Website
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Professional, mobile-first websites built to generate real leads — not just look good.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/918793458846?text=Hi%20I%20want%20a%20website%20for%20my%20business."
          className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition"
        >
          Get Free Consultation
        </motion.a>
      </section>

      {/* PACKAGES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Website Packages
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Free Hosting Plan */}
          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 shadow-md border">
            <h3 className="text-xl font-bold mb-3">Starter Lite</h3>
            <p className="text-3xl font-bold mb-6">₹2,999</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✔ 1–3 Page Website</li>
              <li>✔ Free Hosting (Vercel)</li>
              <li>✔ Mobile Responsive</li>
              <li>✔ WhatsApp Button</li>
              <li>✔ You Only Pay Domain Cost</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Hi%20I%20am%20interested%20in%20Starter%20Lite%20Plan."
              className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Choose Plan
            </a>
          </motion.div>

          {/* Basic */}
          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 shadow-md border">
            <h3 className="text-xl font-bold mb-3">Basic</h3>
            <p className="text-3xl font-bold mb-6">₹3,999</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✔ 4–5 Pages</li>
              <li>✔ Mobile Optimized</li>
              <li>✔ Contact Form</li>
              <li>✔ WhatsApp Integration</li>
              <li>✔ Basic SEO Structure</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Hi%20I%20am%20interested%20in%20Basic%20Plan."
              className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Choose Plan
            </a>
          </motion.div>

          {/* Business */}
          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-black">
            <h3 className="text-xl font-bold mb-3">Business</h3>
            <p className="text-3xl font-bold mb-6">₹7,999</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✔ Everything in Basic</li>
              <li>✔ Domain + Hosting Setup</li>
              <li>✔ Google Indexing</li>
              <li>✔ Lead Capture Optimization</li>
              <li>✔ 1 Month Support</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Hi%20I%20am%20interested%20in%20Business%20Plan."
              className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Choose Plan
            </a>
          </motion.div>

          {/* Custom */}
          <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 shadow-md border">
            <h3 className="text-xl font-bold mb-3">Custom</h3>
            <p className="text-3xl font-bold mb-6">Custom Pricing</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✔ Custom Design</li>
              <li>✔ Advanced SEO</li>
              <li>✔ E-commerce Setup</li>
              <li>✔ Booking Systems</li>
              <li>✔ Full Automation</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Hi%20I%20need%20a%20Custom%20Website."
              className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Get Quote
            </a>
          </motion.div>

        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold mb-8">
          Why Choose Scale Via Us?
        </h2>
        <div className="flex flex-wrap justify-center gap-10 text-gray-700 text-lg">
          <div>⚡ Fast Delivery</div>
          <div>📱 Mobile First Design</div>
          <div>🔍 SEO Optimized</div>
          <div>📈 Built for Conversions</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready To Build Your Website?
        </h2>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/918793458846?text=Hi%20I%20want%20to%20start%20my%20website."
          className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
        >
          Chat on WhatsApp Now
        </motion.a>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Scale Via Us. All rights reserved.
      </footer>

    </main>
  );
}
