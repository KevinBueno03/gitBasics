import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState: {
		page: 0,
		pokemons: [],
	},
	reducers: {
		setPokemons(state, action) {
			state.pokemons = action.payload.pokemons
		},
	},
})

// Action creators are generated for each case reducer function
export const { setPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer
