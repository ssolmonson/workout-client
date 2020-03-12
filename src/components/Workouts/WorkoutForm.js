import React from 'react'
// import { Link } from 'react-router-dom'

const WorkoutForm = ({ workout, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>Workout Completed On</label>
    <input
      name='workout_date'
      type='date'
      value={workout.workout_date}
      onChange={handleChange}
    />

    <button type='submit'>Save Workout</button>
    {/* <Link to={cancelPath}>
      <button>Cancel</button>
    </Link> */}
  </form>
)

export default WorkoutForm
