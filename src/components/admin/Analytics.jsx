import { analytics } from '../../mockData'

export default function Analytics() {
  return (
    <>
      <div className="grid-4">
        {[
          ['Batch placed', `${analytics.placedPct}%`],
          ['Highest CTC', analytics.highest],
          ['Median CTC', analytics.median],
          ['Total offers', analytics.offers],
        ].map(([label, value]) => (
          <article className="card metric" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
      <div className="grid-2" style={{ marginTop: 16 }}>
        <article className="card">
          <h3>Branch placement</h3>
          {analytics.branchSplit.map((b) => (
            <div key={b.branch} style={{ marginTop: 14 }}>
              <div className="range-row">
                <span>
                  {b.branch} · avg {b.avg} LPA
                </span>
                <strong>{b.placed}%</strong>
              </div>
              <div className="bar">
                <span style={{ width: `${b.placed}%` }} />
              </div>
            </div>
          ))}
        </article>
        <article className="card">
          <h3>Season pulse</h3>
          <p style={{ marginTop: 12 }}>
            {analytics.companies} recruiters on campus · {analytics.internPpo} intern PPOs converted.
          </p>
          <p className="muted" style={{ marginTop: 10 }}>
            Core (TI, Analog) is lifting ECE/EEE packages; product firms still dominate CSE medians.
          </p>
        </article>
      </div>
    </>
  )
}
