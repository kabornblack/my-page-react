import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center pt-12 p-7 text-xs z-50">
      <p className="bg-black font-bold text-red-900 p-9 h-10">
        Copyright © {year}
      </p>
    </footer>
  );
}

export default Footer;
