# Where art thou Pikachu?

## Prerequisites

This app is a multi-container Docker application. Please ensure [Docker Compose](https://docs.docker.com/compose/install/) is installed locally before attempting installation steps.

## Configuration

[Optional] - The free version of the shakespeare translation API limits you to 5 requests per hour. If you have a paid account please export the `FUN_TRANSLATIONS_API_KEY` environment variable, or add it to the `./server/.env` file before running the app.

## Starting the app

`docker-compose up`

This will spin up both the client and server applications on seperate containers.

If this is your first time running the app, please wait a few moments while Docker builds the containers.

Once everything is ready the application will be running at [http://localhost:4000](http://localhost:4000)

## Running tests

### Client

```
cd client
npm i
npm test
```

### Server

#### Unit tests

```
cd server
npm i
npm test
```

#### End to end tests

```
cd server
npm i
npm run test:e2e
```

By default, e2e tests will mock calls to e2e translation API to save credits. If you want to change the please set `MOCK_TEST_API_CALLS=false` in `./server/.env`.
