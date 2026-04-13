const Button = ({ children }) => {
  return (
    <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
      {children}
    </button>
  );
};

export default Button;