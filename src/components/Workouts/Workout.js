// Future implementation
// Plan to set custom route to grab by a selected date
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Workout = props => {
  const [workout, setWorkout] = useState(null)
  const [deleted, setDeleted] = useState(false)

  // console.log(props.match)

  useEffect(() => {
    axios({
      url: `${apiUrl}/workouts/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => setWorkout(res.data.workout))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/workouts/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!workout) {
    return <p>Loading...</p>
  }

  if (deleted) {
    props.msgAlert({
      heading: 'Workout Deleted',
      variant: 'danger'
    })
    return <Redirect to={
      { pathname: '/workouts', state: { msg: 'Workout deleted successfully!' } }
    } />
  }

  return (
    <div>
      <h4>{workout.workout_date}</h4>
      {workout.exercises.map(exercise => (
        <div key={exercise.id}>{exercise.title}</div>
      ))}
      <button onClick={destroy}>Delete Workout</button>
      <Link to='/workouts'>Back to all workouts</Link>
    </div>
  )
}

export default Workout
