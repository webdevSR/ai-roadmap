export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* HERO SECTION */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Still Watching AI Videos <br /> While Others Are Building Projects?
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            You don’t need another course. You need a roadmap that forces you
            to build something real in 30 days.
          </p>
          <a
            href="YOUR_RAZORPAY_LINK_HERE"
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
          >
            Get The Roadmap for ₹199
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Instant PDF Access. No Videos. No Fluff.
          </p>
        </section>

        {/* PAIN SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">
            The Truth?
          </h2>
          <ul className="space-y-3 text-gray-300 text-lg">
            <li>• Saving AI reels</li>
            <li>• Watching 2-hour tutorials</li>
            <li>• Comparing expensive courses</li>
            <li>• Waiting to “feel ready”</li>
          </ul>
          <p className="mt-6 text-lg">
            Someone else is building projects and adding them to their resume.
          </p>
          <p className="mt-4 text-xl font-semibold">
            AI isn’t slowing you down. Confusion is.
          </p>
        </section>

        {/* COURSE CONTRAST */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">
            The ₹50,000+ Course Trap
          </h2>
          <p className="text-gray-300 mb-4">
            AI courses today cost anywhere between ₹50,000 – ₹1,50,000.
          </p>
          <p className="text-gray-300 mb-4">
            They promise transformation. But they don’t guarantee execution.
          </p>
          <p className="text-lg font-semibold">
            This roadmap flips the order. You build first.
          </p>
        </section>

        {/* WHAT YOU BUILD */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">
            What You’ll Build in 30 Days
          </h2>
          <ul className="space-y-3 text-gray-300 text-lg">
            <li>✔ A real AI Productivity Workflow System</li>
            <li>✔ A resume-ready project</li>
            <li>✔ A clear interview explanation</li>
            <li>✔ Practical AI confidence</li>
          </ul>
          <p className="mt-6 text-gray-400">
            No coding required. No paid tools required.
          </p>
        </section>

        {/* PRICE SECTION */}
        <section className="text-center mb-20">
          <p className="text-gray-400 line-through text-lg">
            AI Courses: ₹50,000 – ₹1,50,000
          </p>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            ₹199 Only
          </h2>
          <a
            href="YOUR_RAZORPAY_LINK_HERE"
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
          >
            Get The 30-Day AI Roadmap
          </a>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Stop Watching. Start Building.
        </footer>

      </div>
    </main>
  );
}
