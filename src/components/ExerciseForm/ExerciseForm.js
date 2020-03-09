import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseForm = ({ exercise, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Exercise</label>
    <input
      name='title'
      placeholder='Name of Exercise'
      value={exercise.title}
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      name='description'
      placeholder='Enter a description'
      value={exercise.description}
      onChange={handleChange}
    />

    <label>Category</label>
    <input
      name='category'
      placeholder='Muscle category'
      value={exercise.category}
      onChange={handleChange}
    />

    <button type='submit'>Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ExerciseForm
