function HowItWorks() {
  return (
    <section className="bg-gray-50 px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            How it works
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            From understanding to action.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Fermor helps you move from understanding your finances
            to making better decisions for your future.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8">
            <p className="text-sm font-semibold text-gray-400">
              01
            </p>

            <h3 className="mt-6 text-2xl font-semibold">
              Understand
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Get a clear view of your financial position and
              understand the factors that affect your money.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <p className="text-sm font-semibold text-gray-400">
              02
            </p>

            <h3 className="mt-6 text-2xl font-semibold">
              Act
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Use insights and practical tools to make informed
              financial decisions.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <p className="text-sm font-semibold text-gray-400">
              03
            </p>

            <h3 className="mt-6 text-2xl font-semibold">
              Grow
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Build better financial habits and work towards
              your long-term financial goals.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default HowItWorks