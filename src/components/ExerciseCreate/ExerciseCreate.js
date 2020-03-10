import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ExerciseForm from '../ExerciseForm/ExerciseForm'

// Utilizing the Exercise Form, this will handle sending a POST request to create a Exercise
const ExerciseCreate = props => {
  const [exercise, setExercise] = useState({ title: '', description: '', category: 'Legs' })
  const [createdExerciseId, setCreatedExerciseId] = useState(null)

  const handleChange = event => {
    event.persist()

    setExercise(exercise => ({ ...exercise, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    // console.log(event)
    axios({
      url: `${apiUrl}/exercises`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      },
      data: { exercise }
    })
      .then(res => setCreatedExerciseId(res.data.exercise.id))
      .catch(console.error)
  }

  if (createdExerciseId) {
    return <Redirect to={`exercises/${createdExerciseId}`} />
  }

  return (
    <div>
      <ExerciseForm
        exercise={exercise}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/'
      />
    </div>
  )
}

export default ExerciseCreate
