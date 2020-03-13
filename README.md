# Swolercise Application

An application to help track workouts and randomize a specific group of exercises when you just aren't sure what to do.

![Homepage](https://i.imgur.com/ecW5cK2.png?1)

## Important Links

-  [Swolercise API Repo](https://github.com/ssolmonson/workout-api)
-  [Deployed Client](https://ssolmonson.github.io/workout-client/)
-  [Deployed API](https://ancient-springs-50859.herokuapp.com/)
-  [GitHub](https://github.com/ssolmonson)
-  [LinkedIn](https://www.linkedin.com/in/scottsolmonson/)

### Planning Story

This project came into mind when a colleague brought up the idea of needing a way to formulate a workout when they may just not know what to do, or challenge themselves in an unknown way.

The main purpose of this application was to randomize a workout based on a specific muscle/workout category. For version 1.0 this method would use one category to request the randomized response and a set number of exercises (5, set on the backend). From here the next step was to design a way to log the workout created, because what use is an application if it just needs another workout tracker to function amazingly.

Unfortunately some ideas initially intended to be ready for release had to be postponed. Still they are not far off from being completed. Structure is in place for these features to be finished and added.

### User Stories:

-   As a user I want to be able to sign up
-   As a user I want to be able to sign in
-   As a user I want to be able to change password
-   As a user I want to be able to sign out
-   As a user I want to save a specific exercise
-   As a user I want to be able to save a whole workout
-   As a user I want to be able to enter my workout w/ sets and reps done
-   As a user I want to save a workout to a specific date
-   As a user I want to see all my workouts done
-   As a user I want to be able to edit a specific excercise
-   As a user I want to delete a workout
-   As a developer I want to define a workout/exercise by a specific category
-   As a user I want to randomize individual workouts by their type
-   As a user I want to be able to see a graph of my workouts completed for a given week/month
-   As a user I want to see a graph of muscle/exercise categories I’ve done in total.

### Technologies Used

-  React
-  Axios
-  Bootstrap
-  CSS
-  SASS
-  JavaScript
-  React Router
-  Ruby-on-Rails API

### Tables

1.  Users
-   Sign in
-   Sign out
-   Sign Up
-   Change Password
2.  Exercises (hardcode exercises?)
-   Exercise
-   Category (i.e. legs, back, arms, etc)
-   Description
3.  Workouts
-   Workout
-   Sets
-   Reps
-   Categories involved ? (Array maybe? or joins table)

### Wireframe:

##### Homepage:
![Homepage](https://media.git.generalassemb.ly/user/24794/files/04da2900-61e6-11ea-9c09-68dc2a39e9a6)

##### Signed In:
![Sign-in](https://media.git.generalassemb.ly/user/24794/files/11f71800-61e6-11ea-92f3-56888a0b6ab3)


### ERD:

![ERD](https://media.git.generalassemb.ly/user/24794/files/04409300-61e4-11ea-9728-c636b776e416)

![ERD V2](https://i.imgur.com/olWxgS7.jpg?1)

### Catalog of Routes:

![Catalog of Routes](https://i.imgur.com/oRaPWqk.png)

##### Future Goals:

- Customize messages for success and errors
- Develop a flow of design for the site, working over fonts and color patterns
- Add a way to create custom workouts, not just from the randomizer
- Utilize Chart.js to display relevant information about workouts logged/created
