import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import pokemonSlice from './slices/pokemon/pokemonSlice'
import { toDoSlice } from '../API/todosAPI'
export const store = configureStore({
	reducer: {
		counter: counterSlice,
		pokemon: pokemonSlice,
		[toDoSlice.reducerPath]: toDoSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(toDoSlice.middleware),
})
