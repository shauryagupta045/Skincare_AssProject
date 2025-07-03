import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu and handle body scroll
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = menuOpen ? "auto" : "hidden"; // Prevent scroll when menu is open
  };

  useEffect(() => {
    // GSAP animation for header
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5, // Reduced delay for faster load
        ease: "power3.out",
      }
    );

    // GSAP animation for mobile menu
    if (menuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }

    // Cleanup body overflow on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#EFF5E1] backdrop-blur-sm w-full shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="Home">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2D3B36] font-inter tracking-wider">
                SKINCARE
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1 ml-8">
            {["All Products", "Serum", "Sunscreen", "Bundle"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-[#2D3B36] hover:text-[#35433E] transition-colors duration-300 font-inter text-sm lg:text-base mx-4"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Icons - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <button
              className="flex items-center text-[#2D3B36] hover:text-[#35433E] focus:outline-none focus:ring-2 focus:ring-[#2D3B36] rounded-full p-2"
              aria-label="Shopping Cart"
            >
              <HiOutlineShoppingBag className="w-6 h-6" />
              <span className="ml-2 font-inter text-sm">Cart (1)</span>
            </button>
            <button
              className="text-[#2D3B36] hover:text-[#35433E] focus:outline-none focus:ring-2 focus:ring-[#2D3B36] rounded-full p-2"
              aria-label="Wishlist"
            >
              <AiOutlineHeart className="w-6 h-6" />
            </button>
            <button
              className="text-[#2D3B36] hover:text-[#35433E] focus:outline-none focus:ring-2 focus:ring-[#2D3B36] rounded-full p-2"
              aria-label="Profile"
            >
              <BiUser className="w-6 h-6" />
            </button>
          </div>

          {/* Hamburger Icon - Mobile Only */}
          <div className="absolute right-0 md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-[#2D3B36] hover:text-[#35433E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2D3B36] rounded-md"
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={menuOpen}
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu (Dropdown) */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col space-y-3 pt-4 pb-6 border-t border-[#cbd5c0]">
            {["All Products", "Serum", "Sunscreen", "Bundle"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-[#2D3B36] hover:text-[#35433E] transition-colors duration-300 font-inter text-base"
                onClick={toggleMenu} // Close menu on link click
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-6 pb-4">
            <button
              className="flex items-center text-[#2D3B36] hover:text-[#35433E] focus:outline-none focus:ring-2 focus:ring-[#2D3B36] rounded-full p-2"
              aria-label="Shopping Cart"
              onClick={toggleMenu}
            >
              <HiOutlineShoppingBag className="w-6 h-6" />
              <span className="ml-2 font-inter text-sm">Cart (1)</span>
            </button>
            <button
              className="text-[#2D3B36] hover:text-[#35433E] focus:outline-none focus:ring-2 focus:ring-[#2D3B36] rounded-full p-2"
              aria-label="Wishlist"
              onClick={toggleMenu}
            >
              <AiOutlineHeart className="w-6 h-6" />
            </button>
            <button
              className="text-[#2D3B36] hover:text-[#35433E] focus:outline-none focus:ring-2 focus:ring-[#2D3B36] rounded-full p-2"
              aria-label="Profile"
              onClick={toggleMenu}
            >
              <BiUser className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;