export default function Toast({ toasts }) {
  if (!toasts.length) return null
  return (
    <div className="toast-stack" aria-live="polite">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          {t.message}
        </div>
      ))}
    </div>
  )
}
