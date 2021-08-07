import React from 'react'
import Event from './Event'
import './EventMapper.scss'

export default function EventMapper(props) {
  return (
    <div className="card-container">
      {props.events.map((event) => {
        return (
          <Event
            key={event.id}
            title={event.title}
            desc={event.description}
            date={event.date}
            time={event.time}
          />
        )
      })}
    </div>
  )
}
