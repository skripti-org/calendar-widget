import React from 'react'
import Event from './Event'
import './EventMapper.scss'

export default function EventMapper(props) {
  return (
    <div className="card-container">
      {props.events.items.map((event) => {
        return (
          <Event
            key={event.id}
            title={event.summary}
            desc={event.description}
            date={event.start.dateTime}
            location={event.location}
            url={event.htmlLink}
          />
        )
      })}
    </div>
  )
}
