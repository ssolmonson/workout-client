import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Exercise = props => {
  const [exercise, setExercise] = useState(null)
  const [deleted, setDeleted] = useState(false)

  // console.log(props.match)

  useEffect(() => {
    axios({
      url: `${apiUrl}/exercises/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => setExercise(res.data.exercise))
      .catch(error => {
        props.msgAlert({
          heading: 'Failed to load exercise: ' + error.message,
          variant: 'danger'
        })
      })
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/exercises/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch(error => {
        props.msgAlert({
          heading: 'Failed to delete exercise: ' + error.message,
          variant: 'danger'
        })
      })
  }

  if (!exercise) {
    return <p>Loading...</p>
  }

  if (deleted) {
    props.msgAlert({
      heading: 'Exercise Deleted',
      variant: 'danger'
    })
    return <Redirect to={
      { pathname: '/exercises', state: { msg: 'Exercise deleted successfully!' } }
    } />
  }

  return (
    <div>
      <h4>{exercise.title}</h4>
      <p>Description: {exercise.description}</p>
      <p>Category: {exercise.category}</p>
      <button onClick={destroy}>Delete Exercise</button>
      <Link to={`/exercises/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to='/exercises'>Back to all exercises</Link>
    </div>
  )
}

export default Exercise
