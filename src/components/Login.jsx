import { useState } from 'react'
import { ArrowRight, Flame } from 'lucide-react'
import { collegeStats, tickerItems, roles } from '../mockData'

export default function Login({ onSignIn }) {
  const [role, setRole] = useState('student')
  const [email, setEmail] = useState('aarav.mehta@campus.edu')
  const [password, setPassword] = useState('placeme')

  const doubledTicker = [...tickerItems, ...tickerItems]

  return (
    <div className="login">
      <section className="login-hero">
        <div>
          <div className="brand">
            <span className="brand-mark">
              <Flame size={18} />
            </span>
            PlaceMe
          </div>
          <div className="hero-copy" style={{ marginTop: 48 }}>
            <h1>The campus placement OS built for Day-1 energy.</h1>
            <p>
              Track every drive, broadcast shortlists, and close offers — a portfolio-ready
              intra-college career platform for students, TPOs, and recruiters.
            </p>
            <div className="stat-grid">
              {collegeStats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {doubledTicker.map((item, i) => (
              <span className="ticker-item" key={i}>
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="login-panel">
        <form
          className="auth-box"
          onSubmit={(e) => {
            e.preventDefault()
            onSignIn(role)
          }}
        >
          <h2>Sign in to PlaceMe</h2>
          <p className="lede">Pick a role — any email and password will open that dashboard.</p>
          <div className="role-tabs">
            {Object.values(roles).map((r) => (
              <button
                key={r.id}
                type="button"
                className={`role-tab ${role === r.id ? 'active' : ''}`}
                onClick={() => setRole(r.id)}
              >
                <strong>{r.id === 'admin' ? 'Placement Cell' : r.id === 'recruiter' ? 'Recruiter' : 'Student'}</strong>
                <span>{r.hint}</span>
              </button>
            ))}
          </div>
          <label className="field">
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </label>
          <label className="field">
            Password
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          </label>
          <button className="btn btn-primary" type="submit">
            Sign In <ArrowRight size={18} />
          </button>
          <p className="hint">Demo auth · no backend · switch roles anytime from the floating widget.</p>
        </form>
      </section>
    </div>
  )
}
