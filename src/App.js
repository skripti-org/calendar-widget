import React from 'react'
import './App.css'
import EventMapper from './components/EventMapper'

function App() {
  //TODO data google kalenterista
  const events = [
    {
      id: 1,
      title: 'Event 1',
      description: 'Description 1',
      location: 'Location 1',
      date: '2018-01-01',
      time: '10:00',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'Description 2',
      location: 'Location 2',
      date: '2018-01-02',
      time: '11:00',
    },
    {
      id: 3,
      title: 'Event 3',
      description: 'Description 3',
      location: 'Location 3',
      date: '2018-01-03',
      time: '12:00',
    },
    {
      id: 4,
      title: 'Event 4',
      description: 'Description 4',
      location: 'Location 4',
      date: '2018-01-04',
      time: '13:00',
    },
  ]

  return (
    <div className="App">
      <EventMapper events={events} />
      <p className="App-info">
        <a className="App-link" href="https://github.com/">
          tapahtumakalenteri v. 0.1
        </a>
      </p>
    </div>
  )
}

export default App
