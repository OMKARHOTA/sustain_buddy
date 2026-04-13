const Features = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-2xl font-semibold mb-10">
        Our Key Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">Aviation</h3>
          <p className="text-gray-600">
            Navigate complex aviation sustainability requirements with confidence. SustainBuddy simplifies compliance with evolving carbon regulations, emissions tracking, and reporting — so you can focus on safe, efficient operations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2">Maritime</h3>
          <p className="text-gray-600">
            The maritime industry is under growing pressure to meet global decarbonization targets. SustainBuddy equips shipping companies with the tools to monitor emissions, align with IMO frameworks, and stay ahead of sustainability mandates.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-2"> Sustainability Experts</h3>
          <p className="text-gray-600">
            Sustainability Experts
Our team combines regulatory expertise with real-world sustainability insights. Whether you’re just starting or scaling your initiatives, SustainBuddy ensures seamless compliance, risk management, and measurable environmental impact.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;