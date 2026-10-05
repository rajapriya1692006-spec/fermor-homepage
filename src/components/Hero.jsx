function Hero() {
  return (
    <section className="overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left side */}
        <div>
          <div className="mb-6 inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
            Smarter financial decisions
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Your money,
            <br />
            <span className="text-green-600">understood.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600 md:text-xl">
            Understand your finances, make informed decisions,
            and build towards your financial goals with clarity.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-full bg-black px-7 py-3.5 font-medium text-white shadow-sm hover:-translate-y-0.5 hover:bg-gray-800">
              Get Started →
            </button>

            <button className="rounded-full border border-gray-300 px-7 py-3.5 font-medium hover:-translate-y-0.5 hover:bg-gray-50">
              Explore Fermor
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>✓ Simple</span>
            <span>✓ Clear</span>
            <span>✓ Actionable</span>
          </div>
        </div>

        {/* Dashboard */}
        <div className="relative">
          <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-5 shadow-xl md:p-7">

            {/* Dashboard header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Total wealth
                </p>

                <p className="mt-2 text-3xl font-bold md:text-4xl">
                  ₹53,00,000
                </p>

                <p className="mt-2 text-sm font-medium text-green-600">
                  +12.8% this year
                </p>
              </div>

              <div className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                Growing
              </div>
            </div>

            {/* Chart */}
            <div className="mt-10 rounded-2xl bg-white p-5">
              <div className="flex items-end gap-2">

                <div className="h-16 flex-1 rounded-t-md bg-green-100"></div>
                <div className="h-24 flex-1 rounded-t-md bg-green-200"></div>
                <div className="h-20 flex-1 rounded-t-md bg-green-200"></div>
                <div className="h-32 flex-1 rounded-t-md bg-green-300"></div>
                <div className="h-28 flex-1 rounded-t-md bg-green-400"></div>
                <div className="h-36 flex-1 rounded-t-md bg-green-500"></div>
                <div className="h-40 flex-1 rounded-t-md bg-green-600"></div>

              </div>

              <div className="mt-4 flex justify-between text-xs text-gray-400">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-gray-500">
                  Investments
                </p>

                <p className="mt-2 text-xl font-semibold">
                  ₹32.4L
                </p>

                <p className="mt-1 text-sm text-green-600">
                  +8.4%
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-gray-500">
                  Savings
                </p>

                <p className="mt-2 text-xl font-semibold">
                  ₹12.6L
                </p>

                <p className="mt-1 text-sm text-green-600">
                  +5.2%
                </p>
              </div>

            </div>

          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-3 hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-lg sm:block md:-left-8">
            <p className="text-xs text-gray-500">
              Monthly progress
            </p>

            <p className="mt-1 text-lg font-semibold">
              On track ✓
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero