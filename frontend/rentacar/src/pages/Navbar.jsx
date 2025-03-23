"use client";
import React from "react";

const NavBar = () => {
  // Navigation items with their corresponding section IDs
  const navItems = [
    { label: "Become a renter", id: "become-a-renter" },
    { label: "Rental deals", id: "rental-deals" },
    { label: "Why choose us", id: "why-choose-us" },
    { label: "Testimonials", id: "testimonials" },
  ];

  return (
    <header className="flex justify-between items-center px-60 py-5 bg-slate-950 max-md:p-10 max-sm:p-5">
      {/* Logo */}
      <a href="/" aria-label="Go to homepage">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c443c00c830c27fd984f0076c21a899726fbf029"
          alt="Logo"
          className="rounded-md border border-black border-solid h-[50px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[155px] hover:opacity-80 transition-opacity duration-200"
        />
      </a>

      {/* Navigation Menu */}
      <nav className="flex gap-10 max-sm:hidden">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`} // Link to the section ID
            className="text-base text-white cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity duration-200"
            aria-label={item.label}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="flex gap-4 items-center max-sm:gap-2">
        <button
          onClick={() => {
            // Add logic for Sign Up
            console.log("Sign Up clicked");
            // Example: Redirect to signup page
            window.location.href = "/signup";
          }}
          className="text-base text-white cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity duration-200"
          aria-label="Sign up"
        >
          Sign up
        </button>
        <button
          onClick={() => {
            // Add logic for Sign In
            console.log("Sign In clicked");
            // Example: Redirect to login page
            window.location.href = "/login";
          }}
          className="px-8 py-4 text-base text-white rounded-lg cursor-pointer bg-zinc-500 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-200"
          aria-label="Sign in"
        >
          Sign in
        </button>
      </div>
    </header>
  );
};

export default NavBar;