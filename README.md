# Project Name

My Awesome Project

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

Welcome to the Person API project! This project aims to create a simple and versatile REST API capable of performing CRUD (Create, Read, Update, Delete) operations on a "person" resource. The API can interact with any MONGO database, providing flexibility in your development stack. To ensure robustness and security, the API dynamically handles parameters, allowing actions like adding or retrieving a person by ID].

![Project Screenshot](/screenshots/screenshot.png)

## Features

### Feature 1: User Registration

- Users can register in the system with their personal information, including name, email, age, phone number, and nationality.
- This feature ensures that new users can easily join the system and begin using the API.

### Feature 2: Person Retrieval

- Users can retrieve the details of a person by providing their unique user ID.
- This feature enables users to access specific user information quickly and efficiently.

### Feature 3: Person Update

- Users have the capability to update the details of an existing person using their user ID.
- This feature allows users to modify specific fields such as name, email, age, phone number, or nationality without affecting other attributes.

### Feature 4: Person Deletion

- Users can remove a person from the system by providing their user ID.
- This feature facilitates the deletion of specific user records, maintaining data cleanliness.

### Feature 5: Dynamic Parameter Handling

- The API can dynamically process CRUD operations based on various parameters provided by users.
- For example, users can perform CRUD operations on a person using their name instead of the user ID, enhancing user-friendliness and versatility.


## Getting Started

To get started with my project, follow these steps.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- [Any other prerequisites...]

### Installation

1. Clone the repository:

   ```bash
   git clone -b task-2 --single-branch https://github.com/adolphTech/hng-backend.git


2. Install the node modules  run the following command:
    ```bash
    npm install