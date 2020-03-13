import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import WorkoutForm from './WorkoutForm'

// Utilizing the Workout Form, this will handle sending a POST request to create a Workout
const WorkoutCreate = props => {
  const [workout, setWorkout] = useState({ workout_date: '' })
  const [createdWorkoutId, setCreatedWorkoutId] = useState(null)

  const handleChange = event => {
    event.persist()

    setWorkout(workout => ({ ...workout, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    // console.log(event)
    axios({
      url: `${apiUrl}/workouts`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      },
      data: { workout }
    })
      .then(res => setCreatedWorkoutId(res.data.workout.id))
      .catch(error => {
        props.msgAlert({
          heading: 'Failed to create workout: ' + error.message,
          variant: 'danger'
        })
      })
  }

  if (createdWorkoutId) {
    props.msgAlert({
      heading: 'Workout Created!',
      variant: 'success'
    })
    return <Redirect to={`workouts/${createdWorkoutId}`} />
  }

  return (
    <div>
      <WorkoutForm
        workout={workout}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/'
      />
    </div>
  )
}

export default WorkoutCreate
