import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-800 text-slate-200 p-4">
        <ul className="flex items-center justiify-center gap-4">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
