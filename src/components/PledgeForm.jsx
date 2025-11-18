import { useState, useEffect } from 'react'

function PledgeForm() {
  const [form, setForm] = useState({ name: '', email: '', amount: '', cause: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [pledges, setPledges] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    loadPledges()
  }, [])

  async function loadPledges() {
    try {
      const res = await fetch(`${baseUrl}/api/pledges?limit=6`)
      if (res.ok) {
        const data = await res.json()
        setPledges(data)
      }
    } catch (e) {
      // ignore
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const payload = {
        name: form.name,
        email: form.email,
        amount: parseFloat(form.amount),
        message: form.message || undefined,
        cause: form.cause || undefined,
      }
      const res = await fetch(`${baseUrl}/api/pledge`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const data = await res.json()
      setResult({ type: 'success', message: 'Thank you! Your pledge has been recorded.' })
      setForm({ name: '', email: '', amount: '', cause: '', message: '' })
      loadPledges()
    } catch (err) {
      setResult({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="pledge" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Make a Pledge</h2>
            <p className="text-slate-600 mb-6">Your support helps us sustain critical programs throughout the year.</p>

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
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Amount (USD)</label>
                  <input required type="number" min="1" step="0.01" value={form.amount} onChange={(e)=>setForm({...form, amount: e.target.value})} className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">Cause (optional)</label>
                  <input value={form.cause} onChange={(e)=>setForm({...form, cause: e.target.value})} className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Message (optional)</label>
                <textarea rows="3" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex items-center gap-3">
                <button disabled={loading} className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 disabled:opacity-60">
                  {loading ? 'Submitting...' : 'Submit Pledge'}
                </button>
                {result && (
                  <p className={`${result.type === 'success' ? 'text-emerald-600' : 'text-red-600'} text-sm`}>{result.message}</p>
                )}
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Recent Support</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {pledges.length === 0 && (
                <div className="text-slate-600 text-sm">No pledges yet. Be the first to support!</div>
              )}
              {pledges.map((p) => (
                <div key={p.id} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-slate-900">{p.name}</p>
                    <span className="text-blue-600 font-bold">${Number(p.amount).toLocaleString()}</span>
                  </div>
                  {p.cause && <p className="text-xs text-slate-500 mb-1">For: {p.cause}</p>}
                  {p.message && <p className="text-sm text-slate-700">“{p.message}”</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PledgeForm
