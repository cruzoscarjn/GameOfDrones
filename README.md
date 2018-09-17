# Overview
Game of drones.

# Requirements

- Nodejs v8.12.x
- NPM 5.6.x
- Postgres
- Angular 6.x
  
Docker build is recommended for testing purposes but feel free to try manual build.

# Build

- Install packages
  ```
  npm install
  ```
- Copy .env.example to new .env file and change to fit your vars.

- run 
  ```
  ./node_modules/knex/bin/cli.js migrate:latest
  ./node_modules/.bin/nodemon -L /code/index.js
  ```

# Build using docker

Run commands on root folder

- Install packages
  ```
  npm install
  ```
- start docker environment
  
  ```
  docker-compose up -d
  ```

`listen at your docker host at port: ` 9888

`connect to docker postgres via: ` 6432

`postgress user`: postgres

`postgres password`: secret

# Test server
  Test with
  ```
  npm run tests
  ```

# Environment Variables

- `PORT`: **Required**. Port for the web server to listen.
- `PG_CONNECTION`: **Required**. Connection string to postgres database.
- `API_KEY`: **Required**. Required fot api auth.


# Run web app

- Open environment.ts and set your vars
  
  Note that if you use mac api route should be localhost:port/api

- Run
  ```
  ng serve
  ```

# Contributors
- Oscar Cruz

# License

This project is property of Oscar Cruz.
