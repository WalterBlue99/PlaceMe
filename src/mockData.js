export const collegeStats = [
  { label: 'Placed', value: '94%' },
  { label: 'Highest', value: '48 LPA' },
  { label: 'Average', value: '12.4 LPA' },
  { label: 'Recruiters', value: '180+' },
]

export const tickerItems = [
  'Google Super Day — 12 offers rolled out today',
  'JP Morgan OA window closes Friday 6 PM',
  'Oracle intern conversion list published',
  'Zomato on-campus drive: 8 LPA + ESOPs',
  'Texas Instruments analog track shortlist live',
  'Microsoft intern PPO: 18 students converted',
]

export const jobs = [
  {
    id: 'google',
    company: 'Google',
    role: 'Software Engineer, University Grad',
    ctc: '48 LPA',
    type: 'Full-time',
    eligibility: 'CGPA ≥ 8.0 · CSE / ECE',
    location: 'Bengaluru / Hyderabad',
    deadline: 'Oct 12',
    tags: ['SDE', 'Onsite'],
    logo: 'G',
    tone: 'indigo',
  },
  {
    id: 'jpmorgan',
    company: 'JP Morgan',
    role: 'Software Engineer I',
    ctc: '19.5 LPA',
    type: 'Full-time',
    eligibility: 'CGPA ≥ 7.0 · All circuital',
    location: 'Mumbai / Bengaluru',
    deadline: 'Oct 09',
    tags: ['FinTech', 'OA'],
    logo: 'JP',
    tone: 'sky',
  },
  {
    id: 'oracle',
    company: 'Oracle',
    role: 'Applications Engineer',
    ctc: '16 LPA',
    type: 'Full-time',
    eligibility: 'CGPA ≥ 7.5 · CSE / IT',
    location: 'Hyderabad',
    deadline: 'Oct 18',
    tags: ['Cloud', 'Java'],
    logo: 'OR',
    tone: 'red',
  },
  {
    id: 'zomato',
    company: 'Zomato',
    role: 'SDE — Backend',
    ctc: '21 LPA',
    type: 'Full-time',
    eligibility: 'CGPA ≥ 7.0 · CSE / IT / ECE',
    location: 'Gurugram',
    deadline: 'Oct 14',
    tags: ['Startup', 'Scale'],
    logo: 'Z',
    tone: 'rose',
  },
  {
    id: 'ti',
    company: 'Texas Instruments',
    role: 'Analog Design Engineer',
    ctc: '28 LPA',
    type: 'Full-time',
    eligibility: 'CGPA ≥ 8.5 · ECE / EEE',
    location: 'Bengaluru',
    deadline: 'Oct 21',
    tags: ['Core', 'Hardware'],
    logo: 'TI',
    tone: 'amber',
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    role: 'SWE Intern + FTE',
    ctc: '44 LPA',
    type: 'PPO Track',
    eligibility: 'CGPA ≥ 8.0 · CSE / IT',
    location: 'Hyderabad / Noida',
    deadline: 'Oct 16',
    tags: ['SDE', 'OA'],
    logo: 'MS',
    tone: 'teal',
  },
]

export const studentStats = [
  { key: 'applied', label: 'Total Applied', value: 14, hint: 'This season' },
  { key: 'shortlisted', label: 'Shortlisted', value: 6, hint: 'Across 4 firms' },
  { key: 'interviews', label: 'Interviews Scheduled', value: 3, hint: 'Next 10 days' },
  { key: 'offers', label: 'Offers', value: 1, hint: 'Oracle AE' },
]

export const applications = [
  {
    id: 1,
    company: 'Oracle',
    role: 'Applications Engineer',
    stage: 3,
    updated: 'Selected · 16 LPA',
  },
  {
    id: 2,
    company: 'JP Morgan',
    role: 'Software Engineer I',
    stage: 2,
    updated: 'Tech round · Oct 08, 10:30 AM',
  },
  {
    id: 3,
    company: 'Google',
    role: 'SWE University Grad',
    stage: 1,
    updated: 'OA cleared · Super Day pending',
  },
  {
    id: 4,
    company: 'Zomato',
    role: 'SDE Backend',
    stage: 0,
    updated: 'Applied · waiting for OA link',
  },
]

export const trackerSteps = ['Applied', 'OA Cleared', 'Tech Round', 'Selected']

export const notices = [
  {
    id: 1,
    title: 'Pre-placement talk: Google — LH-1, 4:00 PM',
    body: 'Dress code: formals. Carry college ID. Attendance is mandatory for applicants.',
    tag: 'Urgent',
    date: '06 Oct 2026',
  },
  {
    id: 2,
    title: 'JP Morgan OA instructions',
    body: 'HackerRank window: 90 minutes. Camera + lockdown browser required. No extra attempts.',
    tag: 'Drive',
    date: '05 Oct 2026',
  },
  {
    id: 3,
    title: 'Resume freeze for Day-1 companies',
    body: 'Upload final PDF on the portal by 11:59 PM. Late uploads will not be forwarded.',
    tag: 'Deadline',
    date: '04 Oct 2026',
  },
  {
    id: 4,
    title: 'Internship PPO conversion list published',
    body: '18 students converted from Microsoft, Cisco, and Analog Devices. Check mail for next steps.',
    tag: 'Info',
    date: '02 Oct 2026',
  },
]

export const students = [
  { id: '21CS041', name: 'Aarav Mehta', branch: 'CSE', cgpa: 9.12, backlogs: 0, skills: 'DSA, React, Go' },
  { id: '21CS088', name: 'Diya Sharma', branch: 'CSE', cgpa: 8.64, backlogs: 0, skills: 'ML, Python, SQL' },
  { id: '21EC012', name: 'Kabir Singh', branch: 'ECE', cgpa: 8.91, backlogs: 0, skills: 'VLSI, C++, Verilog' },
  { id: '21IT056', name: 'Meera Iyer', branch: 'IT', cgpa: 7.82, backlogs: 1, skills: 'Java, Spring, AWS' },
  { id: '21EE033', name: 'Rohan Gupta', branch: 'EEE', cgpa: 8.21, backlogs: 0, skills: 'Power, MATLAB, C' },
  { id: '21CS102', name: 'Sara Khan', branch: 'CSE', cgpa: 7.45, backlogs: 0, skills: 'UI, JS, Node' },
  { id: '21EC077', name: 'Vikram Rao', branch: 'ECE', cgpa: 9.04, backlogs: 0, skills: 'Embedded, C, RTOS' },
  { id: '21IT019', name: 'Ananya Das', branch: 'IT', cgpa: 8.33, backlogs: 0, skills: 'Full-stack, TS' },
  { id: '21CS061', name: 'Ishaan Patel', branch: 'CSE', cgpa: 6.98, backlogs: 2, skills: 'Python, SQL' },
  { id: '21EE048', name: 'Nisha Verma', branch: 'EEE', cgpa: 7.70, backlogs: 0, skills: 'Controls, Python' },
]

export const rooms = ['LH-1', 'LH-2', 'Lab A-204', 'Lab B-110', 'Seminar Hall']
export const timeSlots = ['09:00', '10:30', '12:00', '14:00', '15:30']

export const schedule = {
  'LH-1': { '09:00': 'Google PPT', '10:30': 'Google interviews', '14:00': 'Microsoft OA brief' },
  'LH-2': { '10:30': 'JP Morgan HR', '15:30': 'Zomato debrief' },
  'Lab A-204': { '09:00': 'Oracle coding', '12:00': 'Oracle tech' },
  'Lab B-110': { '14:00': 'TI analog lab', '15:30': 'TI design round' },
  'Seminar Hall': { '09:00': 'TPO briefing', '12:00': 'Offer letters' },
}

export const analytics = {
  placedPct: 94,
  highest: '48 LPA',
  median: '11.8 LPA',
  offers: 412,
  companies: 180,
  internPpo: 67,
  branchSplit: [
    { branch: 'CSE', placed: 98, avg: '16.2' },
    { branch: 'IT', placed: 95, avg: '13.4' },
    { branch: 'ECE', placed: 92, avg: '12.1' },
    { branch: 'EEE', placed: 88, avg: '9.6' },
  ],
}

export const applicants = [
  { id: '21CS041', name: 'Aarav Mehta', branch: 'CSE', cgpa: 9.12, resume: 'aarav_mehta.pdf', status: 'Applied' },
  { id: '21CS088', name: 'Diya Sharma', branch: 'CSE', cgpa: 8.64, resume: 'diya_sharma.pdf', status: 'Applied' },
  { id: '21IT056', name: 'Meera Iyer', branch: 'IT', cgpa: 7.82, resume: 'meera_iyer.pdf', status: 'Applied' },
  { id: '21CS102', name: 'Sara Khan', branch: 'CSE', cgpa: 7.45, resume: 'sara_khan.pdf', status: 'Applied' },
  { id: '21IT019', name: 'Ananya Das', branch: 'IT', cgpa: 8.33, resume: 'ananya_das.pdf', status: 'Applied' },
]

export const tpoThread = [
  { from: 'tpo', text: 'Hi Priya — Lab A-204 is free after 2 PM if Google needs overflow rooms.', time: '09:12' },
  { from: 'recruiter', text: 'Perfect. We may need 4 extra panels for Super Day.', time: '09:18' },
  { from: 'tpo', text: 'Noted. I’ll block Seminar Hall as backup and share the invigilator list.', time: '09:21' },
]

export const resumeDefaults = {
  name: 'Aarav Mehta',
  title: 'B.Tech CSE · Class of 2027',
  email: 'aarav.mehta@campus.edu',
  phone: '+91 98765 43210',
  summary:
    'CSE junior focused on distributed systems and product engineering. Built a campus placement tracker used by 1.2k students.',
  skills: 'C++, JavaScript, React, SQL, Go, DSA',
  experience: 'SWE Intern, Nimbus Labs — shipped interview scheduler used by 40 recruiters.',
  education: 'B.Tech Computer Science · CGPA 9.12 / 10',
}

export const atsTips = [
  'Lead with quantified impact in the first two bullets.',
  'Mirror keywords from the JD: “distributed systems”, “React”, “SQL”.',
  'Keep the file as a single-column PDF under 1 page for campus drives.',
]

export const chatPrompts = [
  'Am I eligible for Microsoft with a 7.5 CGPA?',
  'Draft an email to TPO requesting slot change',
  'What is the highest package this year?',
  'How do I prepare for JP Morgan OA?',
]

export const chatReplies = {
  'Am I eligible for Microsoft with a 7.5 CGPA?':
    'Microsoft’s current campus cutoff is CGPA ≥ 8.0 for CSE/IT with no active backlogs. At 7.5 you are just under the bar for this drive — watch the off-campus intern form, or apply to JP Morgan / Zomato (7.0+) this week.',
  'Draft an email to TPO requesting slot change':
    'Subject: Request to reschedule Google Super Day slot — Aarav Mehta (21CS041)\n\nDear TPO,\nI have a clash with my Oracle tech round at 10:30 AM. Could you please move my Google panel to the 2:00 PM batch in LH-1? Happy to take any remaining slot the same day.\nRegards,\nAarav',
  'What is the highest package this year?':
    'Highest so far is 48 LPA (Google SDE). Median sits at 11.8 LPA with 94% of the eligible batch already placed. Texas Instruments analog is the next high-band drive at 28 LPA.',
  'How do I prepare for JP Morgan OA?':
    'Expect 2 coding questions (arrays + graphs) and an MCQ set on OS/DBMS in 90 minutes on HackerRank. Revise two-pointers, BFS, and SQL joins. Keep camera + lockdown browser ready — no extra attempts.',
}

export const defaultChatReply =
  'PlaceMe AI here. For this showcase I can help with eligibility, TPO drafts, drive timelines, and resume tips. Try a chip above, or ask about Google, Oracle, or your CGPA cutoff.'

export const roles = {
  student: {
    id: 'student',
    label: 'Student',
    hint: 'Track drives, apply, polish your resume',
    user: 'Aarav Mehta',
    meta: 'CSE · 21CS041',
  },
  admin: {
    id: 'admin',
    label: 'Placement Cell (Admin/TPO)',
    hint: 'TPO / Admin — filter, broadcast, schedule',
    user: 'Dr. Kavya Nair',
    meta: 'TPO · Placement Cell',
  },
  recruiter: {
    id: 'recruiter',
    label: 'Recruiter / Company',
    hint: 'Post drives and triage campus talent',
    user: 'Priya Menon',
    meta: 'Google University Recruiting',
  },
}
