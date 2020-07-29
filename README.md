# Where art thou Pikachu?

- Locally cache resources whenever you request them
- Use the correct user-agent header in API requests.
- check services are the appropriate name, Adapter etc.
- Add flag to run tests against real apis
- hard code flavour text version for now, later on select from ui
- add tests to handle api error codes, not found etc.
- decide where to handle error codes, or let bubble up?
- Add unit tests with mocks for pokemon service, don't overtest
- e2e tests for pokemon controller
- Want to refactor pokemon service so it can retrieve more info about species/pokemon, more logic up to pokemon service rather than having a 'getdescription' method in the pokeapi service
- Should aggregate all data into a neat json object with some data about the pokemon, original and translated descriptions, plus href so the browser can fetch images etc.
