import { useState } from 'react'
import { Megaphone, X } from 'lucide-react'

const channels = ['Email', 'SMS', 'WhatsApp']

export default function Broadcast({ toast }) {
  const [open, setOpen] = useState(false)
  const [channel, setChannel] = useState('Email')
  const [title, setTitle] = useState('Google Super Day — shortlist live')
  const [body, setBody] = useState(
    'Congratulations. You are shortlisted for Google Super Day on 08 Oct, LH-1. Report 15 minutes early with college ID.',
  )

  function send() {
    toast(`Broadcast sent via ${channel} to 48 shortlisted candidates`)
    setOpen(false)
  }

  return (
    <div className="card">
      <h3>Batch notifications</h3>
      <p className="muted">Draft a 1-click announcement for the current shortlist (Google SDE).</p>
      <button className="btn btn-accent" style={{ marginTop: 16 }} type="button" onClick={() => setOpen(true)}>
        <Megaphone size={16} /> Draft broadcast
      </button>
      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Send announcement</h3>
              <button className="btn btn-sm btn-ghost" type="button" onClick={() => setOpen(false)}>
                <X size={16} />
              </button>
            </div>
            <div className="channels">
              {channels.map((c) => (
                <button key={c} type="button" className={`chip ${channel === c ? 'active' : ''}`} onClick={() => setChannel(c)}>
                  {c}
                </button>
              ))}
            </div>
            <label className="field">
              Title
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className="field">
              Message
              <textarea rows={5} value={body} onChange={(e) => setBody(e.target.value)} />
            </label>
            <button className="btn btn-primary" type="button" onClick={send}>
              Send broadcast
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
