import React from 'react'
import Moment from 'react-moment'
import ReactHtml from 'html-react-parser'
import 'moment/locale/fi'
import './Event.scss'

export default function Event(props) {
  const location = () => {
    if (props.location && props.location.split(',').length > 1) {
      return <h5>{props.location.split(',')[0]}</h5>
    } else if (props.location) {
      return <h5>{props.location}</h5>
    } else {
      return null
    }
  }

  const date = () => {
    // dddd[na] -> tiistaina
    if (props.date) {
      return (
        <Moment element="h5" format=" [Klo] HH:mm, DD.MM.YYYY" locale="fi">
          {props.date}
        </Moment>
      )
    }
  }

  return (
    <>
      <div className="event_container">
        <div className="event_bg"></div>
        <div className="event_info">
          <div className="event_title">
            <h4>{props.title}</h4>
          </div>

          <div className="event_location">
            <span className="location">{location()}</span>
            <span className="date">{date()}</span>
          </div>

          {props.desc && (
            <div className="event_desc">
              {/*korvataan rivinvaihdot <br>*/}
              <p>{ReactHtml(props.desc.replace(/\n/g, '<br />'))}</p>
            </div>
          )}

          <div className="event_footer">
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
