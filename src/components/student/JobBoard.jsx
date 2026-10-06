import { useMemo, useState } from 'react'
import { MapPin, IndianRupee, Clock } from 'lucide-react'
import { jobs } from '../../mockData'

const filters = ['All', 'SDE', 'Core', 'FinTech', 'Onsite']

export default function JobBoard({ toast }) {
  const [filter, setFilter] = useState('All')
  const [applied, setApplied] = useState({ oracle: true })

  const list = useMemo(
    () => (filter === 'All' ? jobs : jobs.filter((j) => j.tags.includes(filter))),
    [filter],
  )

  function apply(job) {
    setApplied((a) => ({ ...a, [job.id]: true }))
    toast(`Quick applied to ${job.company} — ${job.role}`)
  }

  return (
    <>
      <div className="filters">
        {filters.map((f) => (
          <button key={f} type="button" className={`chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="job-list">
        {list.map((job) => (
          <article className="card job-card" key={job.id}>
            <div className={`logo-badge tone-${job.tone}`}>{job.logo}</div>
            <div>
              <strong>{job.company}</strong>
              <div>{job.role}</div>
              <div className="job-meta">
                <span>
                  <IndianRupee size={14} style={{ verticalAlign: '-2px' }} /> {job.ctc}
                </span>
                <span>
                  <MapPin size={14} style={{ verticalAlign: '-2px' }} /> {job.location}
                </span>
                <span>
                  <Clock size={14} style={{ verticalAlign: '-2px' }} /> {job.deadline}
                </span>
                <span className="tag">{job.eligibility}</span>
                {job.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              {applied[job.id] ? (
                <div className="applied">Applied</div>
              ) : (
                <button className="btn btn-accent" type="button" onClick={() => apply(job)}>
                  Quick Apply
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
