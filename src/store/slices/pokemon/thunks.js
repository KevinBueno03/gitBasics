import { pokemonAPI } from '../../../API/pokemonAPI.js'
import { setPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
	return async (dispatch, getState) => {
		const { data } = await pokemonAPI.get(
			`pokemon?limit=10&offset=${page * 10}`
		)

		dispatch(setPokemons({ pokemons: data.results }))
	}
}
