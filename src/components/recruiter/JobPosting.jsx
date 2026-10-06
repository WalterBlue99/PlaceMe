import { useState } from 'react'
import { jobs } from '../../mockData'

export default function JobPosting({ toast }) {
  const [form, setForm] = useState({
    company: 'Google',
    role: 'Software Engineer, University Grad',
    ctc: '48',
    cutoff: '8.0',
    branches: 'CSE, ECE',
    location: 'Bengaluru / Hyderabad',
  })

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  return (
    <div className="grid-2">
      <form
        className="card"
        onSubmit={(e) => {
          e.preventDefault()
          toast(`Campus drive posted · ${form.company} ${form.role}`)
        }}
      >
        <h3>Create campus drive</h3>
        <label className="field">
          Company
          <input value={form.company} onChange={(e) => set('company', e.target.value)} />
        </label>
        <label className="field">
          Role
          <input value={form.role} onChange={(e) => set('role', e.target.value)} />
        </label>
        <label className="field">
          CTC (LPA)
          <input value={form.ctc} onChange={(e) => set('ctc', e.target.value)} />
        </label>
        <label className="field">
          CGPA cutoff
          <input value={form.cutoff} onChange={(e) => set('cutoff', e.target.value)} />
        </label>
        <label className="field">
          Eligible branches
          <input value={form.branches} onChange={(e) => set('branches', e.target.value)} />
        </label>
        <label className="field">
          Locations
          <input value={form.location} onChange={(e) => set('location', e.target.value)} />
        </label>
        <button className="btn btn-primary" type="submit">
          Publish drive
        </button>
      </form>
      <div className="card">
        <h3>Live drives</h3>
        <p className="muted">Currently visible to eligible students</p>
        <ul>
          {jobs.map((j) => (
            <li key={j.id} style={{ marginTop: 10 }}>
              <strong>{j.company}</strong> — {j.role} · {j.ctc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
