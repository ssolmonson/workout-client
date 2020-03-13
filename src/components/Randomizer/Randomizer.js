import React, { useState } from 'react'
// import { Redirect } from 'react-router-dom'

import axios from 'axios'

import apiUrl from '../../apiConfig'
import RandomizeForm from './RandomizeForm'
// import TrainingForm from '../Trainings/TrainingForm'
import WorkoutForm from '../Workouts/WorkoutForm'
import messages from '../AutoDismissAlert/messages'

const Randomizer = props => {
  // define const to be used

  const [exercises, setExercises] = useState([])

  const [category, setCategory] = useState('Legs')

  const [workout, setWorkout] = useState({ workout_date: '2020-01-01' })

  // const [workoutCreated, setWorkoutCreated] = useState(false)

  // const [workoutId, setWorkoutId] = useState(null)
  // console.log(props)
  // const exerciseId = []

  // const []
  // send an axios get request
  // useEffect(() => {
  //   axios({
  //     url: `${apiUrl}/exercises/${props.match.params.category}`,
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${props.user.token}`
  //     }
  //   })
  //     .then(res => setExercises(res.data.exercises))
  //     .catch(console.error)
  // }, [])

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/category/${category}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => setExercises(res.data.exercises))
      .catch(error => {
        props.msgAlert({
          heading: 'Failed to create workout: ' + error.message,
          variant: 'danger'
        })
      })
  }

  const handleCreate = event => {
    event.preventDefault()

    let workoutId
    // axios call to create the workout
    axios({
      url: `${apiUrl}/workouts`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      },
      data: { workout }
    })
      // .then(res => console.log(res))
      .then(res => {
        workoutId = res.data.workout.id
      })
      // .then(console.log(workoutId))
    // in .then
    // loop through the exercises cuz we want their ids
      .then(() => {
        const ajaxArray = exercises.map(exercise => {
        // exerciseId.push(exercise.id)
          return axios({
            url: `${apiUrl}/trainings`,
            method: 'POST',
            headers: {
              Authorization: `Bearer ${props.user.token}`
            },
            data: { training: { workout_id: workoutId, exercise_id: exercise.id } }
          })
        })
        return Promise.all(ajaxArray)
      })
      // .then(() => setWorkoutCreated(true))
      .then(() => props.msgAlert({
        heading: 'Workout Saved!',
        message: messages.workoutCreatedSuccess,
        variant: 'success'
      }))
    // use the workout id and the exercise to POST trainings
      // .then(axios({
      //   url: `${apiUrl}/trainings`,
      //   method: 'POST',
      //   headers: {
      //     Authorization: `Bearer ${props.user.token}`
      //   },
      //   data: { workoutId, exerciseId }
      // }))
      .catch(error => {
        props.msgAlert({
          heading: 'Failed to save workout: ' + error.message,
          variant: 'danger'
        })
      })
  }

  const handleWorkChange = event => {
    event.persist()

    setWorkout(workout => ({ ...workout, [event.target.name]: event.target.value }))
    // console.log(workout)
  }

  const handleChange = event => {
    event.persist()

    // setCategory(exercise => ({ ...exercise, [event.target.name]: event.target.value }))
    setCategory(event.target.value)
    // setTimeout(() => console.log(category), 1000)
  }

  const categoriesJsx = exercises.map(exercise => (
    <li key={exercise.id}>
      <ul>
        Exercise: {exercise.title}<br />
        Description: {exercise.description}<br />
        Category: {exercise.category}<br />
      </ul><br />
      {/* <TrainingForm /> */}
    </li>
  ))

  // if (workoutCreated) {
  //   return <Redirect to={
  //     { pathname: '/workouts', state: { props.msgAlert({messages.workoutCreatedSuccess}) } }
  //   } />
  // }

  return (
    <div>
      <div>
        <RandomizeForm
          exercise={exercises}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          /* cancelPath={'/randomize'} */
        />
      </div>
      <div>
        <h4>Exercises</h4>
        <ul>{categoriesJsx}</ul>
      </div>
      <div>
        <WorkoutForm
          workout={workout}
          handleChange={handleWorkChange}
          handleSubmit={handleCreate}
        />
      </div>
    </div>
  )
}

export default Randomizer

// Old steps for randomize component as it's defined on the api

// Define the randomizing exercises method
// Start with a defined amount of exercies to be pulled from a single query
// Further version features will query up to 2 categories and have a range of selections to enter
// or allow multiple selections to be added instead of asking for two categories
// This will be it's own page

// Randomize Component that will query for a selected category,
// and pick 6 workouts from that array
// Category query will be a drop down list that sends the value for querying

// filter response by the category in the drop down box

// pick 5 exercises from the filtered array

// return the filtered data with the full description and links
