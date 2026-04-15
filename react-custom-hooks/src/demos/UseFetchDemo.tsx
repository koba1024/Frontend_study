import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function UseFetchDemo() {
	const [input, setInput] = useState(
		"https://jsonplaceholder.typicode.com/todos/1",
	);
	const [url, setUrl] = useState(
		"https://jsonplaceholder.typicode.com/todos/1",
	);

	const { data, loading, error } = useFetch<Record<string, unknown>>(url);

	const handleSubmit = () => {
		setUrl(input);
	};

	return (
		<div>
			<label>urlを入力</label>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleSubmit}>取得</button>
			{loading && <p>Loading...</p>}
			{error && <p style={{ color: "red" }}>{error}</p>}
			{data && <pre>{JSON.stringify(data, null, 2)}</pre>}
		</div>
	);
}
