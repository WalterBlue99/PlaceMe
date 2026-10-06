import { Briefcase, CalendarCheck, FileCheck2, Trophy } from 'lucide-react'
import { studentStats, applications, trackerSteps } from '../../mockData'

const icons = {
  applied: Briefcase,
  shortlisted: FileCheck2,
  interviews: CalendarCheck,
  offers: Trophy,
}

export default function StudentOverview() {
  return (
    <>
      <div className="grid-4">
        {studentStats.map((s) => {
          const Icon = icons[s.key]
          return (
            <article className="card metric" key={s.key}>
              <div className="metric-icon">
                <Icon size={18} />
              </div>
              <span>{s.label}</span>
              <strong>{s.value}</strong>
              <div className="muted">{s.hint}</div>
            </article>
          )
        })}
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Live pipeline</h3>
        <p className="muted">Your most active drives this week</p>
        <div className="job-list" style={{ marginTop: 14 }}>
          {applications.slice(0, 3).map((a) => (
            <div key={a.id} style={{ paddingBottom: 12, borderBottom: '1px solid var(--line)' }}>
              <strong>{a.company}</strong>
              <span className="muted"> · {a.role}</span>
              <div className="stepper">
                {trackerSteps.map((step, i) => (
                  <div key={step} className={`step ${i <= a.stage ? 'done' : ''}`}>
                    {step}
                  </div>
                ))}
              </div>
              <div className="muted">{a.updated}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
