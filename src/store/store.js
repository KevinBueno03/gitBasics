import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import pokemonSlice from './slices/pokemon/pokemonSlice'
import { toDoSlice } from '../API/todosAPI'
import { moneyMovementSlice } from '../API/moneyMovementAPI'
export const store = configureStore({
	reducer: {
		counter: counterSlice,
		pokemon: pokemonSlice,
		[toDoSlice.reducerPath]: toDoSlice.reducer,
		[moneyMovementSlice.reducerPath]: moneyMovementSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			toDoSlice.middleware,
			moneyMovementSlice.middleware
		),
})
