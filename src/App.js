import './App.css';
import React, { useState } from 'react';
import { useFetch } from './useFetch';

function App() {
	const [count, setCount] = useState(0);
	const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);

	return (
		<div className='App'>
			<div>{!data ? 'loading...' : data}</div>
			<div>count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	);
}

export default App;
