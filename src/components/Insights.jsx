function Insights() {
  return (
    <section
      id="insights"
      className="px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Financial Insights
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Smarter insights for better financial decisions.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Understand your finances, plan ahead, and make better
            decisions with simple financial insights.
          </p>
        </div>

        {/* Insight Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Investment Card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="/image/investment.png"
              alt="Investment Insights"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Investment
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Explore investment opportunities and understand
                how your money can grow over time.
              </p>
            </div>
          </div>

          {/* Planning Card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="/image/planning.png"
              alt="Financial Planning"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Financial Planning
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Plan your finances effectively and work towards
                your short-term and long-term goals.
              </p>
            </div>
          </div>

          {/* Tax Card */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img
              src="/image/tax.png"
              alt="Tax Planning"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Tax Planning
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Understand tax-related decisions and plan your
                finances more efficiently.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Insights