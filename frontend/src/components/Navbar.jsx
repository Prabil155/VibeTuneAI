function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        🎵 VibeTune AI
      </h1>

      <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-xl font-semibold">
        Login
      </button>
    </nav>
  );
}

export default Navbar;