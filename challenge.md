# Where art thou Pikachu?

- Develop a simple search engine that, given a Pokemon name, returns it's Shakespearean description.
- The user should be able to add individual Pokemon to "Your Favourites".
- "Your Favourites" should be visible on the same page as search
- "Your favourites" should persist if the page / app is reloaded.

## Backend requirements

`[GET] /pokemon/:name` E.g. `http://localhost:3000/pokemon/charizard`

Example response:

```
{
  "name": "charizard",
  "description": "Charizard files 'round the sky in search of powerful opponents...."
}
```

### Reccomendations

- Any language / framework.
- Solution should be concise, readable and correct.
- TESTS
- Use [Shakespeare Translator](https://funtranslations.com/api/shakespeare) to translate
- Use [PokeApI](https://pokeapi.co/docs/v2) to find Pokemom. Get the pokemon species resource, then "flavour_text_entries" in th species resource.
- Describe how to run in the readme, don't assume anything is installed.
- Bonus points for Dockerfile.
