function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">
            Fermor
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Making financial decisions simpler.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          <a href="#product" className="hover:text-black">
            Product
          </a>

          <a href="#insights" className="hover:text-black">
            Insights
          </a>

          <a href="#about" className="hover:text-black">
            About
          </a>

          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </div>

      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-gray-100 pt-6 text-sm text-gray-400">
        © 2026 Fermor. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer