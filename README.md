# crudOperations
Crud Operation using Express js and MySQL ORM(Sequelize)  for Movies 

# Movie Management API

This is a Node.js application for managing movie data.

## Installation

To install the project dependencies, you can use either npm or yarn.

Using npm:
```bash
npm install
yarn install
```
## To Start project
```bash
npm start
yarn start
```

## API Endpoints
## Insert a Movie

    POST /movies
        Add a new movie to the database.

## Get All Movies

    GET /movies
        Retrieve a list of movies. You can filter by name, rating, and sort the results.

## Get a Movie by ID

    GET /movies/:id
        Retrieve a specific movie by its ID.

## Update a Movie by ID

    PUT /movies/:id
        Update the details of a specific movie by its ID.

## Delete a Movie

    DELETE /movies/:id
        Delete a specific movie by its ID.

Controllers
insertMoive

Inserts a new movie into the database.
getAllmovies

Retrieves a list of movies with optional filtering and sorting.
getMoviebyId

Retrieves a specific movie by its ID.
updateMoviebyId

Updates the details of a specific movie by its ID.
deleteMovie

Deletes a specific movie by its ID.

For more details on how to use these controllers, refer to the source code in the movieController.js file.


