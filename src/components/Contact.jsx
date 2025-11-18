import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setResult({ type: 'success', message: 'Thanks! We will get back to you shortly.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setResult({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h2>
            <p className="text-slate-600 mb-6">Have a question or want to collaborate? Send us a message.</p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-slate-700">
              <p className="mb-2"><span className="font-semibold">Email:</span> info@samfoundation.org</p>
              <p className="mb-2"><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
              <p><span className="font-semibold">Address:</span> 123 Hope Street, Community City</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Email</label>
                <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Subject</label>
              <input required value={form.subject} onChange={(e)=>setForm({...form, subject: e.target.value})} className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Message</label>
              <textarea rows="4" required value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex items-center gap-3">
              <button disabled={loading} className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {result && (
                <p className={`${result.type === 'success' ? 'text-emerald-600' : 'text-red-600'} text-sm`}>{result.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
