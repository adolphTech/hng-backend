# HGN BACKEND stage two - Person API

## Table of Contents

- [Introduction](#introduction)
- [Routes and Controllers](#routes-and-controllers)
  - [Create a Person](#create-a-person)
  - [Create a Person with JSON Body](#create-a-person-with-json-body)
  - [Retrieve a Person by ID or Name](#retrieve-a-person-by-id-or-name)
  - [Update a Person by ID or Name](#update-a-person-by-id-or-name)
  - [Delete a Person by ID or Name](#delete-a-person-by-id-or-name)
- [Database Model](#database-model)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage / API Documentation](#usage)


## Introduction

Welcome to the Person API project! This API is designed to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource. It offers flexibility by allowing actions based on either a person's ID or name. Below, you'll find details about the routes and controllers that handle these operations.

## Routes and Controllers

### Create a Person

- **POST `/api/:name`**: This route allows you to create a new person (user) by providing their name as a parameter. It uses the `createPerson` controller function to handle the creation. You can also check the JSON body for the name, allowing you to create a person either by providing the name in the URL parameter or in the request body.

### Create a Person with JSON Body

- **POST `/api/`**: This route is similar to the previous one, but it allows you to create a new person with the name provided in the JSON body. Again, it uses the `createPerson` controller function to handle the creation.

### Retrieve a Person by ID or Name

- **GET `/api/:idOrName`**: This route allows you to retrieve a person (user) by either their ID or name. It uses the `getPerson` controller function to handle the retrieval. The `idOrName` parameter in the URL can be either an ID or a name, and the controller function will determine the appropriate way to query the database based on the input.

### Update a Person by ID or Name

- **PUT `/api/:idOrName`**: This route allows you to update a person (user) by either their ID or name. It uses the `updatePerson` controller function to handle the update. Similar to the GET route, it takes the `idOrName` parameter and updates the person based on the provided fields in the request body.

### Delete a Person by ID or Name

- **DELETE `/api/:idOrName`**: This route allows you to delete a person (user) by either their ID or name. It uses the `deletePerson` controller function to handle the deletion. Like the GET and PUT routes, it takes the `idOrName` parameter and deletes the person based on whether it's an ID or a name.

## Database Model

Your database model defines the structure and behavior of the "user" resource. It ensures data integrity and validation. Here's a summary of the key features:

- **Name Field**: The "name" field is of type String and has specific options, including being required, trimmed, and stored in lowercase. It also enforces uniqueness.
```
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    set: (value) => value.toLowerCase(), 
  },
});
```


## Getting Started

To get started with my project, follow these steps.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- MongoDB (v4 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone -b task-2 --single-branch https://github.com/adolphTech/hng-backend.git


2. Install the node modules  run the following command:
    ```bash
    npm install

3. Input your string connection ```MONGO_URI``` in the ```.env``` file