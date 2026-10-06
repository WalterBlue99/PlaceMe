import { useState } from 'react'
import { Send } from 'lucide-react'
import { tpoThread } from '../../mockData'

export default function TpoChat({ toast }) {
  const [messages, setMessages] = useState(tpoThread)
  const [text, setText] = useState('')

  function send(e) {
    e.preventDefault()
    if (!text.trim()) return
    setMessages((m) => [...m, { from: 'recruiter', text: text.trim(), time: 'now' }])
    setText('')
    toast('Message sent to TPO coordinator')
  }

  return (
    <div className="card chat">
      <h3>TPO coordinator — Dr. Kavya Nair</h3>
      <p className="muted">Google University Recruiting · mock messenger</p>
      <div className="bubbles">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.from}`}>
            {m.text}
            <div className="mono" style={{ marginTop: 4, color: m.from === 'recruiter' ? '#d4d4d8' : undefined }}>
              {m.time}
            </div>
          </div>
        ))}
      </div>
      <form className="composer" onSubmit={send}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Message the TPO…" />
        <button className="btn btn-accent" type="submit">
          <Send size={16} />
        </button>
      </form>
    </div>
  )
}
