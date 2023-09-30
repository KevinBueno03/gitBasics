import MultiActionAreaCard from './components/atoms/Ecosistems/cards/Card'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	decrement,
	increment,
	decrementByAmount,
} from './store/slices/counterSlice.js'

import { getPokemons } from './store/slices/pokemon/thunks.js'

import Posts from './components/atoms/pages/Posts.jsx'
import Clients from './components/atoms/pages/Clients.jsx'

function App() {
	const { number } = useSelector((state) => state.counter)
	const { pokemons } = useSelector((state) => state.pokemon)
	const dispatch = useDispatch()
	/*
	useEffect(() => {
		//dispatch(getPokemons())
	}, [])
*/

	function renderNumber() {
		return (
			<div>
				<div>
					<button
						aria-label="Increment value"
						onClick={() => dispatch(increment(), console.log(number))}
					>
						Increment
					</button>
					<span>{number}</span>

					<button
						aria-label="Decrement value"
						onClick={() => dispatch(decrement())}
					>
						Decrement
					</button>
				</div>
				<button
					aria-label="Decrement value by 4"
					onClick={() => dispatch(decrementByAmount(4))}
				>
					Decrement
				</button>
			</div>
		)
	}

	function renderPokemons() {
		return pokemons?.pokemons?.map((pokemon) => (
			<div key={pokemon.name}>
				<MultiActionAreaCard {...pokemon} />
			</div>
		))
	}

	function render() {
		//return <Posts />
		return <Clients />
	}

	function renderPost() {}
	return render()
}

export default App
