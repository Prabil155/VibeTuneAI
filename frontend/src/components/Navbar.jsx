function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <h1 className="text-3xl font-bold text-purple-500">
        🎵 VibeTune AI
      </h1>

      <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl">
        Login
      </button>
    </nav>
  );
}

export default Navbar;