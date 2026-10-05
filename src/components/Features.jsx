function Features() {
  return (
    <section
      id="product"
      className="bg-gray-50 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Your financial journey
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need to make better money decisions.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From understanding where you stand today to planning
            where you want to go next.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Understand */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="text-3xl">◉</div>

            <h3 className="mt-6 text-2xl font-semibold">
              Understand
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Get a clearer picture of your finances and
              understand where your money is going.
            </p>

            <a
              href="#product"
              className="mt-6 inline-block font-medium text-green-600"
            >
              Learn more →
            </a>
          </div>

          {/* Act */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="text-3xl">↗</div>

            <h3 className="mt-6 text-2xl font-semibold">
              Act
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Turn financial information into informed
              decisions that fit your goals.
            </p>

            <a
              href="#tools"
              className="mt-6 inline-block font-medium text-green-600"
            >
              Explore tools →
            </a>
          </div>

          {/* Grow */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="text-3xl">✦</div>

            <h3 className="mt-6 text-2xl font-semibold">
              Grow
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Build better financial habits and work towards
              your long-term goals with confidence.
            </p>

            <a
              href="#insights"
              className="mt-6 inline-block font-medium text-green-600"
            >
              Get inspired →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features