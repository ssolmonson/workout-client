import React from 'react'
import { Link } from 'react-router-dom'

// Defined values for the category key
// Keeps the key consistent, and will be used for graph data

// The select element maps over the array to create entries for the drop down list
const WorkoutForm = ({ workout, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Workout Completed On</label>
    <input
      name='workout_date'
      type='date'
      value={workout.workout_date}
      onChange={handleChange}
    />

    <button type='submit'>Save Workout</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default WorkoutForm
