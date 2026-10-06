import { notices } from '../../mockData'

const pillClass = {
  Urgent: 'pill-urgent',
  Drive: 'pill-drive',
  Deadline: 'pill-deadline',
  Info: 'pill-info',
}

export default function NoticeBoard() {
  return (
    <div>
      {notices.map((n) => (
        <article className="card notice" key={n.id}>
          <div>
            <h3>{n.title}</h3>
            <p className="muted" style={{ marginTop: 6 }}>
              {n.body}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className={`pill ${pillClass[n.tag]}`}>{n.tag}</span>
            <div className="muted" style={{ marginTop: 8 }}>
              {n.date}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
