import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';

async function main() {
	// Create a simple model that adds two numbers
	const model = tf.sequential();
	model.add(tf.layers.dense({ units: 1, inputShape: [2] }));
	model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

	// Train the model on some dummy data
	const xs = tf.tensor2d([
		[1, 1],
		[2, 2],
		[3, 3],
		[4, 4],
	]);
	const ys = tf.tensor2d([[2], [4], [6], [8]]);
	await model.fit(xs, ys, { epochs: 10 });

	// Use the model to make predictions on new data
	const predictions = model.predict(
		tf.tensor2d([
			[5, 5],
			[6, 6],
		])
	);
	return predictions.print();
}

main();
console.log(
	'result',
	(async () => {
		await main();
	})()
);

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
