// itemが受け取るprops
// todo, 削除fn, 編集fn, toggleCompleted,

import type { Todo } from "../types";

type TodoItemProps = {
	todo: Todo;
	onToggleCompleted: (id: string) => void;
	onDelete: (id: string) => void;
	onEdit: (todo: Todo) => void;
};

export default function TodoItem(props: TodoItemProps) {
	const todo = props.todo;
	return (
		<div>
			<div>
				<div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/70 transition-colors group">
					<button
						onClick={() => props.onToggleCompleted(todo.id)}
						className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400 transition-colors hover:border-blue-500"
					>
						{todo.completed && (
							<span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
						)}
					</button>
					<div className="flex flex-col">
						<span className="flex-1 text-gray-900">
							{props.todo.title}
						</span>
						<span className="flex-1 text-gray-900">
							{todo.deadline && <span>📅 {todo.deadline}</span>}
							{todo.priority}
							{todo.tags.map((tag) => (
								<div key={tag}>🏷{tag}</div>
							))}
						</span>
					</div>
					<button onClick={() => props.onDelete(todo.id)}>
						削除
					</button>
					<button onClick={() => props.onEdit(todo)}>編集</button>
				</div>
			</div>
		</div>
	);
}
