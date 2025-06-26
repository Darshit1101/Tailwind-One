import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </nav>
  );
}

export default Navbar;
