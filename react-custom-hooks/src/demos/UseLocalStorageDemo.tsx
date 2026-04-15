// import { useLocalStorage } from "../hooks/useLocalStorage";

import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function UseLocalStorageDemo() {
	// keyはtest固定とする
	const [inputValue, setInputValue] = useState("");
	const [value, setValue] = useLocalStorage("test", 0);

	const handleSubmit = () => {
		setValue(Number(inputValue));
	};

	return (
		<div>
			<label>保存したい値を入力してください</label>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={handleSubmit}>保存</button>
			<p>保存した値:{value}</p>
		</div>
	);
}
