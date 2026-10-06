import { Flame, LogOut } from 'lucide-react'
import { roles } from '../mockData'

export default function Layout({ role, page, nav, onNav, onSignOut, children }) {
  const r = roles[role]
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">
            <Flame size={16} />
          </span>
          PlaceMe
        </div>
        <nav className="nav-list">
          {nav.map((item) => (
            <button
              key={item.id}
              className={`nav-btn ${page === item.id ? 'active' : ''}`}
              type="button"
              onClick={() => onNav(item.id)}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="user-chip">
          <strong>{r.user}</strong>
          <div>
            <small>{r.meta}</small>
          </div>
          <button className="btn btn-sm btn-ghost" style={{ marginTop: 10, width: '100%', color: '#fff', background: 'transparent', borderColor: 'rgba(255,255,255,.2)' }} type="button" onClick={onSignOut}>
            <LogOut size={14} /> Sign out
          </button>
        </div>
      </aside>
      <div className="main">
        <header className="topbar">
          <div>
            <h1>{nav.find((n) => n.id === page)?.label}</h1>
            <p>{r.hint}</p>
          </div>
        </header>
        <div className="content">{children}</div>
      </div>
    </div>
  )
}
