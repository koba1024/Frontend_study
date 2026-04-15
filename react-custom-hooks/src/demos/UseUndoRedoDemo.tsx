import { useState } from "react";
import { useUndoRedo } from "../hooks/useUndoRedo";

export default function UseUndoRedoDemo() {
	const [input, setInput] = useState("");
	const { value, canUndo, canRedo, setValue, undo, redo } = useUndoRedo(0);
	const handleConfirm = () => {
		const num = Number(input);
		if (Number.isNaN(num)) {
			return;
		}
		setValue(Number(num));
		setInput("");
	};

	return (
		<div>
			<label>数字を入力してください</label>
			<input
				type="number"
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			/>
			<button disabled={input === ""} onClick={handleConfirm}>
				確定
			</button>
			<div>
				<button disabled={!canUndo} onClick={undo}>
					Undo
				</button>
				<button disabled={!canRedo} onClick={redo}>
					Redo
				</button>
				<span>値: {value}</span>
			</div>
		</div>
	);
}
