import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

const Exercises = props => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/exercises`)
      .then(res => setExercises(res.data.exercises))
      .catch(console.error)
  }, [])

  const exercisesJsx = exercises.map(exercise => (
    <li key={exercise.id}>
      <Link to={`/exercises/${exercise.id}`}>{exercise.title}</Link>
    </li>
  ))

  return (
    <div>
      <h4>Exercises</h4>
      <ul>
        {exercisesJsx}
      </ul>
    </div>
  )
}

export default Exercises
