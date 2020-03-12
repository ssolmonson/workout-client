import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
// import ExerciseCreate from '../ExerciseCreate/ExerciseCreate'

const Exercises = (props, { match }) => {
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
      <div>
        <h4>Exercises</h4>
        <ul>
          {exercisesJsx}
        </ul>
      </div>
      <div>
        <button>
          <Link to='/exercises-create'>Create an Exercise</Link>
        </button>
      </div>
    </div>
  )
}

export default Exercises
