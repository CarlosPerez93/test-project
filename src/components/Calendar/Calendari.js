import parse from 'date-fns/parse'
import getDay from 'date-fns/getDay'
import format from 'date-fns/format'
import { DatePicker } from 'antd'
import { useEffect, useState } from 'react'
import startOfWeek from 'date-fns/startOfWeek'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0)
  },
  {
    title: 'Vocation',
    allDay: true,
    start: new Date(2022, 6, 7),
    end: new Date(2022, 6, 10)
  },
  {
    title: 'Conference',
    allDay: true,
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23)
  }
]

export const Calendari = () => {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' })
  const [allEvents, setAllEvents] = useState(events)

  useEffect(() => {}, [newEvent])
  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div>
      <h2> Add new Event </h2>
      <div>
        <input
          type="text"
          placeholder="Add title"
          style={{ width: '20%', marginRight: '10px' }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: '10px' }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          style={{ marginRight: '10px' }}
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />

        <button style={{ marginTop: '10px' }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  )
}
