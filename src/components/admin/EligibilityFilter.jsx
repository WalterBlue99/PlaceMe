import { useMemo, useState } from 'react'
import { Download } from 'lucide-react'
import { students } from '../../mockData'

const branches = ['All', 'CSE', 'IT', 'ECE', 'EEE']

export default function EligibilityFilter({ toast }) {
  const [cgpa, setCgpa] = useState(7)
  const [branch, setBranch] = useState('All')
  const [backlogs, setBacklogs] = useState(1)

  const filtered = useMemo(
    () =>
      students.filter(
        (s) =>
          s.cgpa >= cgpa &&
          s.backlogs <= backlogs &&
          (branch === 'All' || s.branch === branch),
      ),
    [cgpa, branch, backlogs],
  )

  function downloadCsv() {
    const header = 'id,name,branch,cgpa,backlogs,skills'
    const rows = filtered.map((s) => `${s.id},${s.name},${s.branch},${s.cgpa},${s.backlogs},"${s.skills}"`)
    const blob = new Blob([[header, ...rows].join('\n')], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'placeme-shortlist.csv'
    a.click()
    URL.revokeObjectURL(url)
    toast(`Downloaded CSV · ${filtered.length} students`)
  }

  return (
    <>
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="grid-2">
          <label className="field">
            <div className="range-row">
              <span>Min CGPA</span>
              <strong>{cgpa.toFixed(1)}</strong>
            </div>
            <input type="range" min="6" max="9.5" step="0.1" value={cgpa} onChange={(e) => setCgpa(Number(e.target.value))} />
          </label>
          <label className="field">
            Branch
            <select value={branch} onChange={(e) => setBranch(e.target.value)}>
              {branches.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <div className="range-row">
              <span>Max backlogs</span>
              <strong>{backlogs}</strong>
            </div>
            <input type="range" min="0" max="3" step="1" value={backlogs} onChange={(e) => setBacklogs(Number(e.target.value))} />
          </label>
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <button className="btn btn-primary" type="button" onClick={downloadCsv}>
              <Download size={16} /> Download CSV
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <p className="muted">{filtered.length} students match this filter</p>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Branch</th>
              <th>CGPA</th>
              <th>Backlogs</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id}>
                <td className="mono">{s.id}</td>
                <td>{s.name}</td>
                <td>{s.branch}</td>
                <td>{s.cgpa.toFixed(2)}</td>
                <td>{s.backlogs}</td>
                <td>{s.skills}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
