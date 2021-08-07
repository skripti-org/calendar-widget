import React from 'react'
import './Event.scss'

export default function Event(props) {
  return (
    <>
      <div className="event_container">
        <div className="event_bg"></div>
        <div className="event_info">
          <div className="event_title">
            <h4>{props.title}</h4>
          </div>
          <div className="event_desc">
            <p>{props.desc}</p>
          </div>
          <div className="event_footer">
            <div className="event_date">
              <p>{props.date} {props.time}</p>
            </div>
            <div className="event_more">
              <a href={props.url} className="btn_more">
                Lue lisää
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
