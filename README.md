# Angular Blog

The challenge is to implement a blog and consume a API to GET and POST data.

### Prerequisites

- [Node js - Latest Long Term Support (LTS)](https://nodejs.org/en/)

### Installing

Run `npm install`

## Running the project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running the API

Run `npm run api` to execute the API via [JSON Server](https://www.npmjs.com/package/json-server).

## Running the test

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Using the REST API

> Note: Ensure that you've started the API server with `npm run api`.

A REST API is provided with seed data for blog posts and comments. The REST API returns and accepts JSON. Changes made to the "database" will persist as long as the API is running on `localhost:9000`.

**Base path:** http://localhost:9000

**GET** `/posts` _List all blog posts_<br>
**GET** `/posts/{id}` _View single blog post_<br>
**GET** `/posts/{id}/comments` _List all comments for single blog post_<br>
**POST** `/posts/{id}/comments` _Add comment to single blog post_<br>

## Author

- **[Patrick Carmo](https://github.com/patrickcarmo)**
