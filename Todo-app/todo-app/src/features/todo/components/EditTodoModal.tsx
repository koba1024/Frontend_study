import { useState } from "react";
import { useTodoStore } from "../store";
import type { Priority, Todo } from "../types";

type EditTodoModalProps = {
	todo: Todo;
	onClose: () => void;
};

export default function EditTodoModal(props: EditTodoModalProps) {
	const todo = props.todo;
	const [title, setTitle] = useState(todo.title);
	const [priority, setPriority] = useState<Priority>(todo.priority);
	const [deadline, setDeadLine] = useState<string>(todo.deadline);
	const [tagInput, setTagInput] = useState(todo.tags.join(", "));
	const editTodo = useTodoStore((state) => state.editTodo);

	const handleEditTodo = () => {
		const parsedTags = tagInput
			.split(",")
			.map((tag) => tag.trim())
			.filter(Boolean);

		editTodo(props.todo.id, {
			title,
			priority,
			deadline,
			tags: parsedTags,
		});
		props.onClose();
	};

	return (
		<div>
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
						<button onClick={handleEditTodo}>保存</button>
					</div>
				</div>
			</div>
		</div>
	);
}
