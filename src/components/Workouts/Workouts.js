// Will grab all workouts for a the user
import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Workouts = props => {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/workouts`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      // .then(res => console.log(res.data.workouts))
      .then(res => setWorkouts(res.data.workouts))
      .catch(console.error)
  }, [])
  // const exerciseTitle = workouts.map(workout => (
  //   <p key ={workout.id}>{workout.exercises.title}</p>
  // ))
  // console.log(workouts)

  if (workouts.length === 0) {
    return <p>No workouts entered. Please create a workout first.</p>
  }

  const workoutsJsx = workouts.map(workout => (
    <li key={workout.id}>
      <p>{workout.workout_date}</p>
      {workout.exercises.map(exercise => (
        <div key={exercise.id}>{exercise.title}</div>
      ))}
      <p></p>
    </li>
  ))

  return (
    <div>
      <h4>Workouts</h4>
      <ul>
        {workoutsJsx}
      </ul>
    </div>
  )
}

export default Workouts
