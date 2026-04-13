const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
      <h1 className="text-xl font-semibold flex items-center gap-2">
         SustainBuddy
      </h1>

      <div className="flex items-center gap-6 text-gray-600">
        <button>Aviation</button>
        <button>maritime</button>
        <button>Integrations</button>
        <button>Regulatory Updates</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;