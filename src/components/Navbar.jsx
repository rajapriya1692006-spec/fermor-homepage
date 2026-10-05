import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Fermor
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm md:flex">

          <a
            href="#product"
            className="hover:text-green-600"
          >
            Product
          </a>

          <a
            href="#insights"
            className="hover:text-green-600"
          >
            Insights
          </a>

          <a
            href="#about"
            className="hover:text-green-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-green-600"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="rounded-full bg-black px-5 py-2.5 font-medium text-white hover:bg-gray-800"
          >
            Get Started
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5 text-sm">

            <a
              href="#product"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-600"
            >
              Product
            </a>

            <a
              href="#insights"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-600"
            >
              Insights
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-600"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-full bg-black px-5 py-2.5 font-medium text-white"
            >
              Get Started
            </a>

          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar