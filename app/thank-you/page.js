export default function ThankYou() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-6">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-300 mb-8">
          You now have access to the 30-Day AI Execution Roadmap.
        </p>
        <a
          href="YOUR_GOOGLE_DRIVE_PDF_LINK_HERE"
          target="_blank"
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
        >
          Download Your Roadmap PDF
        </a>
      </div>
    </main>
  );
}
