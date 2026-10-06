import { roles } from '../mockData'

export default function RoleSwitcher({ role, onSwitch }) {
  return (
    <aside className="role-switcher" aria-label="Portfolio role switcher">
      <div className="switcher-label">View as</div>
      {Object.values(roles).map((r) => (
        <button
          key={r.id}
          className={role === r.id ? 'active' : ''}
          onClick={() => onSwitch(r.id)}
          type="button"
        >
          {r.label}
        </button>
      ))}
    </aside>
  )
}
