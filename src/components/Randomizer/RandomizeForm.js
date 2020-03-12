import React from 'react'
// import { Link } from 'react-router-dom'

// Defined values for the category key
// Keeps the key consistent, and will be used for graph data
const categoryData = [
  { value: 'Legs', name: 'Legs' },
  { value: 'Upper Back', name: 'Upper Back' },
  { value: 'Lower Back', name: 'Lower Back' },
  { value: 'Shoulders', name: 'Shoulders' },
  { value: 'Arms', name: 'Arms' },
  { value: 'Cardio', name: 'Cardio' },
  { value: 'Core', name: 'Core' },
  { value: 'Chest', name: 'Chest' }
]

// The select element maps over the array to create entries for the drop down list
const RandomizeForm = ({ exercise, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Category</label>
    <select
      name='category'
      value={exercise.category}
      onChange={handleChange}
    >
      {categoryData.map((event, value) => {
        // console.log()
        return <option key={value}>{event.name}</option>
      })}
    </select>

    <button type='submit'>Randomize!</button>
    {/* <Link to={cancelPath}>
      <button>Cancel</button>
    </Link> */}
  </form>
)

export default RandomizeForm
