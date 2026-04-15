import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function UseDebounceDemo() {
	const [input, setInput] = useState("");
	const debounceValue = useDebounce(input, 2000);

	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<h4>Normal Input</h4>
			<p>{input}</p>
			<h4>Debounce Input</h4>
			<p>{debounceValue}</p>
		</div>
	);
}
