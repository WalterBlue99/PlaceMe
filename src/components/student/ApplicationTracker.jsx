import { applications, trackerSteps } from '../../mockData'

export default function ApplicationTracker() {
  return (
    <div className="job-list">
      {applications.map((a) => (
        <article className="card" key={a.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div>
              <strong>{a.company}</strong>
              <div className="muted">{a.role}</div>
            </div>
            <span className="tag">{trackerSteps[a.stage]}</span>
          </div>
          <div className="stepper">
            {trackerSteps.map((step, i) => (
              <div key={step} className={`step ${i <= a.stage ? 'done' : ''}`}>
                {step}
              </div>
            ))}
          </div>
          <p className="muted">{a.updated}</p>
        </article>
      ))}
    </div>
  )
}
