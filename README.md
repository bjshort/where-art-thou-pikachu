# Where art thou Pikachu?

Search for Pokemon and get their Shakespearean description!

## Prerequisites

This app is a multi-container Docker application. Please ensure [Docker Compose](https://docs.docker.com/compose/install/) is installed locally before attempting installation steps.

## Starting the app

`docker-compose up`

If this is your first time running the app, this will take a few minutes as Docker builds the containers :tea: :coffee:.

Once everything is ready the app will be running at [http://localhost:4000](http://localhost:4000).

## Configuration

**[Optional]** - The free version of the Shakespeare Translation API limits you to 5 requests per hour. If you have a paid account please export the `FUN_TRANSLATIONS_API_KEY` environment variable before running the app.

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

By default, e2e tests will mock calls to the Shakespeare Translation API to save credits. If you want to change this please set `MOCK_TEST_API_CALLS=false` in `./server/.env`.
