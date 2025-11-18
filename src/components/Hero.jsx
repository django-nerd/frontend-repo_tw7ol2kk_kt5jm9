function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Empowering communities through care and education
            </h1>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              SAM Foundation Charity Trust is committed to healthcare assistance, child education, and disaster relief.
              Join us in making a lasting impact in the lives of those who need it most.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pledge" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700">Donate Now</a>
              <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50">Learn More</a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop"
              alt="Volunteers helping"
              className="rounded-xl shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 shadow-lg rounded-xl p-4">
              <p className="text-3xl font-extrabold text-blue-600">10k+</p>
              <p className="text-sm text-slate-600 -mt-1">Lives impacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
