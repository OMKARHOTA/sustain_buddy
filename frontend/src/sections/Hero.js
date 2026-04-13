const Hero = () => {
  return (
    <section className="bg-green-50 px-10 py-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">

        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Simplifying Sustainability & Compliance
          </h1>

          <p className="text-gray-600 mb-6">
            Your AI Partner for Sustainability Strategy, Compliance Cost Optimisation and Regulations Exposure Assessment.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
              Get Started Free
            </button>

            <button className="border px-6 py-3 rounded-lg">
              View Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[500px]">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="dashboard"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;