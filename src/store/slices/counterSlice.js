import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		number: 0,
		persons: 0,
	},
	reducers: {
		increment: (state) => {
			state.number += 1
		},
		decrement: (state) => {
			state.number -= 1
		},
		incrementByAmount: (state, action) => {
			state.number += action.payload
		},
		decrementByAmount: (state, action) => {
			state.number -= action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
	counterSlice.actions

export default counterSlice.reducer
