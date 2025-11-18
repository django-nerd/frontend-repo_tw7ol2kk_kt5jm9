function Causes() {
  const causes = [
    {
      title: 'Healthcare Assistance',
      desc: 'Supporting medical camps, treatments, and essential supplies for underprivileged families.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      )
    },
    {
      title: 'Child Education',
      desc: 'Scholarships, school kits, and learning programs to empower children with education.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0118 12c0 4.418-3.134 8-7 8s-7-3.582-7-8c0-.56.058-1.104.168-1.628L12 14z"/></svg>
      )
    },
    {
      title: 'Disaster Relief',
      desc: 'Rapid response with food, shelter, and rehabilitation for communities hit by disasters.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h10a4 4 0 100-8h-1"/></svg>
      )
    },
  ]

  return (
    <section id="causes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Focus Areas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-10 h-10 bg-blue-50 rounded grid place-items-center mb-4">{c.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{c.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Causes
