import { useState } from 'react'
import { Gauge } from 'lucide-react'
import { resumeDefaults, atsTips } from '../../mockData'

export default function ResumeBuilder({ toast }) {
  const [form, setForm] = useState(resumeDefaults)
  const [score, setScore] = useState(null)

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  return (
    <div className="resume-wrap">
      <div className="card">
        <h3>Resume details</h3>
        {Object.entries({
          name: 'Full name',
          title: 'Headline',
          email: 'Email',
          phone: 'Phone',
          summary: 'Summary',
          skills: 'Skills',
          experience: 'Experience',
          education: 'Education',
        }).map(([key, label]) => (
          <label className="field" key={key}>
            {label}
            {key === 'summary' || key === 'experience' ? (
              <textarea rows={3} value={form[key]} onChange={(e) => set(key, e.target.value)} />
            ) : (
              <input value={form[key]} onChange={(e) => set(key, e.target.value)} />
            )}
          </label>
        ))}
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            setScore(91)
            toast('ATS Score Checker · 91 / 100')
          }}
        >
          <Gauge size={18} /> ATS Score Checker
        </button>
        {score !== null && (
          <div className="ats">
            <div className="muted">Mock ATS score</div>
            <div className="ats-score">{score}/100</div>
            <ul>
              {atsTips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="a4">
        <h2>{form.name}</h2>
        <div>{form.title}</div>
        <div className="mono">
          {form.email} · {form.phone}
        </div>
        <div className="line" />
        <h3>Summary</h3>
        <p>{form.summary}</p>
        <h3 style={{ marginTop: 16 }}>Skills</h3>
        <p>{form.skills}</p>
        <h3 style={{ marginTop: 16 }}>Experience</h3>
        <p>{form.experience}</p>
        <h3 style={{ marginTop: 16 }}>Education</h3>
        <p>{form.education}</p>
      </div>
    </div>
  )
}
