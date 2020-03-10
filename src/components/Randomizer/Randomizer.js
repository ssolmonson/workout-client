import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import axios from 'axios'

import apiUrl from '../../apiConfig'
import RandomizeForm from './RandomizeForm'

const Randomizer = props => {
  // define const to be used
  const [exercises, setExercises] = useState([])

  const [category, setCategory] = useState('Legs')
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
      .catch(console.error)
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
        <p>Exercise: {exercise.title}</p>
        <p>Description: {exercise.description}</p>
        <p>Category: {exercise.category}</p>
      </ul>
    </li>
  ))

  return (
    <div>
      <div>
        <RandomizeForm
          exercise={exercises}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          cancelPath={'/randomize'}
        />
      </div>
      <div>
        <h4>Exercises</h4>
        <ul>{categoriesJsx}</ul>
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
