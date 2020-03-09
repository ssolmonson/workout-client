import React from 'react'
import { Link } from 'react-router-dom'

const categoryData = [
  { value: 'Legs', name: 'Legs' },
  { value: 'Upper Back', name: 'Upper Back' },
  { value: 'Lower Back', name: 'Lower Back' },
  { value: 'Shoulders', name: 'Shoulders' },
  { value: 'Arms', name: 'Arms' },
  { value: 'Cardio', name: 'Cardio' },
  { value: 'Core', name: 'Core' }
]

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
    <select
      name='category'
      value={exercise.category}
      onChange={handleChange}
    >
      {categoryData.map((event, value) => {
        console.log()
        return <option key={value}>{event.name}</option>
      })}
    </select>

    <button type='submit'>Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ExerciseForm
