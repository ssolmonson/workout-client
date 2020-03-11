import React from 'react'
import { Link } from 'react-router-dom'

// Defined values for the category key
// Keeps the key consistent, and will be used for graph data

// The select element maps over the array to create entries for the drop down list
const TrainingForm = ({ training, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Enter amount of sets</label>
    <input
      name='sets'
      type='number'
      value={training.sets}
      onChange={handleChange}
    />

    <label>Enter Reps Done</label>
    <input
      name='repititions'
      type='number'
      value={training.repititions}
      onChange={handleChange}
    />

    <label>Enter Weight (in pounds)</label>
    <input
      name='weight'
      type='number'
      value={training.weight}
      onChange={handleChange}
    />

    <button type='submit'>Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default TrainingForm
