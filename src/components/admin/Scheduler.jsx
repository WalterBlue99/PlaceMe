import { rooms, timeSlots, schedule } from '../../mockData'

export default function Scheduler() {
  return (
    <div className="card" style={{ overflow: 'auto' }}>
      <h3>Interview rooms</h3>
      <p className="muted" style={{ marginBottom: 14 }}>
        Assign company panels to labs and lecture halls.
      </p>
      <div className="schedule">
        <div />
        {timeSlots.map((t) => (
          <div className="head" key={t}>
            {t}
          </div>
        ))}
        {rooms.map((room) => (
          <RoomRow key={room} room={room} />
        ))}
      </div>
    </div>
  )
}

function RoomRow({ room }) {
  return (
    <>
      <div className="lab">{room}</div>
      {timeSlots.map((t) => {
        const fill = schedule[room]?.[t]
        return (
          <div className={`cell ${fill ? 'filled' : ''}`} key={t}>
            {fill || '—'}
          </div>
        )
      })}
    </>
  )
}
