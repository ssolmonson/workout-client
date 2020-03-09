import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ExerciseForm from '../ExerciseForm/ExerciseForm'

const ExerciseEdit = props => {
  const [exercise, setExercise] = useState({ title: '', description: '', category: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/exercises/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => setExercise(res.data.exercise))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()

    setExercise(exercise => ({ ...exercise, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/exercises/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      },
      data: { exercise }
    })
      .then(res => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/exercises/${props.match.params.id}`} />
  }

  return (
    <div>
      <ExerciseForm
        exercise={exercise}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/exercises/${props.match.params.id}`}
      />
    </div>
  )
}

export default ExerciseEdit
