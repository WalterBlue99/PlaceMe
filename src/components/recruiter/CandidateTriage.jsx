import { useState } from 'react'
import { applicants } from '../../mockData'

export default function CandidateTriage({ toast }) {
  const [rows, setRows] = useState(applicants)
  const [preview, setPreview] = useState(null)

  function setStatus(id, status) {
    setRows((r) => r.map((a) => (a.id === id ? { ...a, status } : a)))
    toast(`${status}: ${rows.find((a) => a.id === id)?.name}`)
  }

  return (
    <>
      <div className="card" style={{ overflow: 'auto' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Branch</th>
              <th>CGPA</th>
              <th>Resume</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a) => (
              <tr key={a.id}>
                <td>
                  <strong>{a.name}</strong>
                  <div className="mono">{a.id}</div>
                </td>
                <td>{a.branch}</td>
                <td>{a.cgpa.toFixed(2)}</td>
                <td className="mono">{a.resume}</td>
                <td className={a.status === 'Shortlisted' ? 'status-shortlist' : a.status === 'Rejected' ? 'status-reject' : ''}>
                  {a.status}
                </td>
                <td>
                  <div className="row-actions">
                    <button className="btn btn-sm btn-accent" type="button" onClick={() => setStatus(a.id, 'Shortlisted')}>
                      Shortlist
                    </button>
                    <button className="btn btn-sm btn-danger" type="button" onClick={() => setStatus(a.id, 'Rejected')}>
                      Reject
                    </button>
                    <button className="btn btn-sm btn-ghost" type="button" onClick={() => setPreview(a)}>
                      Preview Resume
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {preview && (
        <div className="preview-card" style={{ marginTop: 12 }}>
          <strong>{preview.name}</strong> · {preview.branch} · CGPA {preview.cgpa}
          <p style={{ marginTop: 8 }}>
            Mock resume preview: campus projects in {preview.branch === 'CSE' || preview.branch === 'IT' ? 'full-stack and DSA' : 'embedded systems'}, internships, and 1-page PDF formatted for ATS.
          </p>
        </div>
      )}
    </>
  )
}
