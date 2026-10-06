import { useState } from 'react'
import { MessageCircle, Send, X, Sparkles } from 'lucide-react'
import { chatPrompts, chatReplies, defaultChatReply } from '../mockData'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi — I am PlaceMe AI. Ask about eligibility, drives, or TPO emails.' },
  ])

  function replyTo(text) {
    const answer = chatReplies[text] || defaultChatReply
    setMessages((m) => [...m, { role: 'me', text }, { role: 'bot', text: answer }])
    setInput('')
  }

  return (
    <div className="chatbot-wrap">
      {open && (
        <div className="chat-window">
          <div className="chat-head">
            <strong>
              <Sparkles size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />
              Campus AI
            </strong>
            <button className="btn btn-sm btn-ghost" type="button" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>
          <div className="prompt-row">
            {chatPrompts.map((p) => (
              <button key={p} type="button" onClick={() => replyTo(p)}>
                {p}
              </button>
            ))}
          </div>
          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.role === 'me' ? 'me' : 'tpo'}`} style={{ whiteSpace: 'pre-wrap' }}>
                {m.text}
              </div>
            ))}
          </div>
          <form
            className="composer"
            style={{ padding: 12 }}
            onSubmit={(e) => {
              e.preventDefault()
              if (input.trim()) replyTo(input.trim())
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask PlaceMe AI…"
            />
            <button className="btn btn-accent btn-sm" type="submit">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
      <button className="chat-fab" type="button" onClick={() => setOpen((v) => !v)} aria-label="Open campus AI chatbot">
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
