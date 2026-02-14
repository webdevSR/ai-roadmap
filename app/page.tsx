export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Professional Websites That Help Your Business Grow
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We build fast, mobile-optimized websites that turn visitors into customers.
        </p>
        <a
          href="https://wa.me/918793458846?text=Hi%20I%20am%20interested%20in%20getting%20a%20website%20for%20my%20business."
          className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
        >
          Get Free Consultation
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Website Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">₹4,999</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✔ 4–5 Pages Website</li>
              <li>✔ Mobile Responsive</li>
              <li>✔ WhatsApp Integration</li>
              <li>✔ Contact Form</li>
              <li>✔ Basic SEO Setup</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Hi%20I%20am%20interested%20in%20the%20Starter%20Website%20Package."
              className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Choose Starter
            </a>
          </div>

          {/* Business */}
          <div className="border-2 border-black rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-4">Business</h3>
            <p className="text-3xl font-bold mb-6">₹7,999</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✔ Everything in Starter</li>
              <li>✔ Domain + Hosting Setup</li>
              <li>✔ Google Indexing</li>
              <li>✔ Lead Form Optimization</li>
              <li>✔ 1 Month Support</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Hi%20I%20am%20interested%20in%20the%20Business%20Website%20Package."
              className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Choose Business
            </a>
          </div>

          {/* Growth */}
          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Growth</h3>
            <p className="text-3xl font-bold mb-6">₹12,999</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✔ Custom Design</li>
              <li>✔ Advanced SEO Structure</li>
              <li>✔ Conversion Optimization</li>
              <li>✔ Speed Optimization</li>
              <li>✔ 2 Months Support</li>
            </ul>
            <a
              href="https://wa.me/918793458846?text=Hi%20I%20am%20interested%20in%20the%20Growth%20Website%20Package."
              className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90"
            >
              Choose Growth
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Scale Via Us?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          We focus on building websites that are fast, mobile-friendly,
          and designed to generate real business leads — not just look good.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-gray-700">
          <div>⚡ Fast Delivery</div>
          <div>📱 Mobile Optimized</div>
          <div>🔍 SEO Ready</div>
          <div>💬 Direct WhatsApp Support</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Your Business Website?
        </h2>
        <a
          href="https://wa.me/918793458846?text=Hi%20I%20want%20to%20build%20a%20website%20for%20my%20business."
          className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90"
        >
          Chat on WhatsApp Now
        </a>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Scale Via Us. All rights reserved.
      </footer>
    </main>
  );
}
