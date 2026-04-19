import { useState } from "react";
import type { Priority } from "../types";
import { useTodoStore } from "../store";

type AddTodoModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default function AddTodoModal(props: AddTodoModalProps) {
	const [title, setTitle] = useState("");
	const [priority, setPriority] = useState<Priority>("B");
	const [deadline, setDeadLine] = useState<string>("");
	const [tagInput, setTagInput] = useState("");
	const addTodo = useTodoStore((state) => state.addTodo);

	const handleAddTodo = () => {
		const parsetTags = tagInput
			.split(",")
			.map((tag) => tag.trim())
			.filter((tag) => tag !== "");

		addTodo({
			title,
			priority,
			deadline,
			tags: parsetTags,
		});

		setTitle("");
		setPriority("B");
		setDeadLine("");
		setTagInput("");
		props.onClose();
	};

	return (
		<div>
			{props.isOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/50">
					<div
						onClick={(e) => e.stopPropagation()}
						className="w-80 rounded-lg bg-white p-6 shadow-lg"
					>
						<h2 className="mb-4 text-lg font-bold">入力</h2>
						<section>
							<label htmlFor="title">タイトル : </label>
							<input
								id="title"
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</section>
						<section>
							<label htmlFor="priority">優先度</label>
							<select
								onChange={(e) =>
									setPriority(e.target.value as Priority)
								}
								id="priority"
								name="priority"
								value={priority}
							>
								<option value="A">A</option>
								<option value="B">B</option>
								<option value="C">C</option>
							</select>
						</section>
						<section>
							<label htmlFor="deadline">期限 : </label>
							<input
								id="deadline"
								type="date"
								value={deadline}
								onChange={(e) => setDeadLine(e.target.value)}
							/>
						</section>
						<section>
							<label>tag : </label>
							<input
								type="text"
								value={tagInput}
								onChange={(e) => setTagInput(e.target.value)}
								placeholder="数学, 復習"
							/>
						</section>
						<div>
							<button onClick={handleAddTodo}>追加</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
