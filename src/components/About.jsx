function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            About Fermor
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Financial clarity for everyone.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-gray-600">
            Fermor is designed to make personal finance easier
            to understand. We bring useful financial information,
            practical tools, and simple insights together so you
            can make decisions with greater confidence.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our goal is simple: help people understand their money,
            take meaningful action, and build towards a stronger
            financial future.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About