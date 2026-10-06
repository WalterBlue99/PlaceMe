import { useState } from 'react'
import {
  LayoutDashboard,
  Briefcase,
  GitBranch,
  FileText,
  Megaphone,
  SlidersHorizontal,
  CalendarDays,
  BarChart3,
  ClipboardList,
  Users,
  MessageSquare,
} from 'lucide-react'
import Login from './components/Login.jsx'
import Layout from './components/Layout.jsx'
import Toast from './components/Toast.jsx'
import RoleSwitcher from './components/RoleSwitcher.jsx'
import Chatbot from './components/Chatbot.jsx'
import StudentOverview from './components/student/StudentOverview.jsx'
import JobBoard from './components/student/JobBoard.jsx'
import ApplicationTracker from './components/student/ApplicationTracker.jsx'
import ResumeBuilder from './components/student/ResumeBuilder.jsx'
import NoticeBoard from './components/student/NoticeBoard.jsx'
import EligibilityFilter from './components/admin/EligibilityFilter.jsx'
import Broadcast from './components/admin/Broadcast.jsx'
import Scheduler from './components/admin/Scheduler.jsx'
import Analytics from './components/admin/Analytics.jsx'
import JobPosting from './components/recruiter/JobPosting.jsx'
import CandidateTriage from './components/recruiter/CandidateTriage.jsx'
import TpoChat from './components/recruiter/TpoChat.jsx'

const navByRole = {
  student: [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'jobs', label: 'Job Board', icon: Briefcase },
    { id: 'tracker', label: 'Application Tracker', icon: GitBranch },
    { id: 'resume', label: 'Resume Builder', icon: FileText },
    { id: 'notices', label: 'Notice Board', icon: Megaphone },
  ],
  admin: [
    { id: 'eligibility', label: 'Eligibility Filter', icon: SlidersHorizontal },
    { id: 'broadcast', label: 'Broadcast', icon: Megaphone },
    { id: 'scheduler', label: 'Slot & Room Scheduler', icon: CalendarDays },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ],
  recruiter: [
    { id: 'posting', label: 'Job Posting', icon: ClipboardList },
    { id: 'triage', label: 'Candidate Triage', icon: Users },
    { id: 'chat', label: 'TPO Chat', icon: MessageSquare },
  ],
}

const defaultPage = {
  student: 'overview',
  admin: 'eligibility',
  recruiter: 'posting',
}

export default function App() {
  const [role, setRole] = useState(null)
  const [page, setPage] = useState('overview')
  const [toasts, setToasts] = useState([])

  function toast(message) {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, message }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2400)
  }

  function enter(nextRole) {
    setRole(nextRole)
    setPage(defaultPage[nextRole])
  }

  const nav = role ? navByRole[role] : []

  let screen = null
  if (role === 'student') {
    if (page === 'overview') screen = <StudentOverview />
    if (page === 'jobs') screen = <JobBoard toast={toast} />
    if (page === 'tracker') screen = <ApplicationTracker />
    if (page === 'resume') screen = <ResumeBuilder toast={toast} />
    if (page === 'notices') screen = <NoticeBoard />
  }
  if (role === 'admin') {
    if (page === 'eligibility') screen = <EligibilityFilter toast={toast} />
    if (page === 'broadcast') screen = <Broadcast toast={toast} />
    if (page === 'scheduler') screen = <Scheduler />
    if (page === 'analytics') screen = <Analytics />
  }
  if (role === 'recruiter') {
    if (page === 'posting') screen = <JobPosting toast={toast} />
    if (page === 'triage') screen = <CandidateTriage toast={toast} />
    if (page === 'chat') screen = <TpoChat toast={toast} />
  }

  return (
    <div className="app-shell">
      <Toast toasts={toasts} />
      {!role ? (
        <>
          <Login onSignIn={enter} />
          <RoleSwitcher role="student" onSwitch={enter} />
          <Chatbot />
        </>
      ) : (
        <>
          <Layout role={role} page={page} nav={nav} onNav={setPage} onSignOut={() => setRole(null)}>
            {screen}
          </Layout>
          <RoleSwitcher role={role} onSwitch={enter} />
          <Chatbot />
        </>
      )}
    </div>
  )
}
