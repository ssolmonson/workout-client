import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
// import MovieForm from '../shared/MovieForm'

const ExerciseEdit = props => {
  const [exercise, setExercise] = useState({ title: '', description: '', category: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/exercises/${props.match.params.id}`)
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
      data: { exercise }
    })
      .then(res => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`exercises/${props.match.params.id}`} />
  }

  return (
    <div>
      {exercise}
      {handleChange}
      {handleSubmit}
    </div>
  )
}

export default ExerciseEdit
