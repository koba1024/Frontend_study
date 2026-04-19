import { useState } from "react";
import type { Todo } from "../types";
import { useTodoStore } from "../store";
import TodoItem from "./TodoItem";

export default function TodoList() {
	const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
	const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

	const todos = useTodoStore((state) => state.todos);
	const onDelete = useTodoStore((state) => state.deleteTodo);
	const onToggleCompleted = useTodoStore((state) => state.toggleCompleted);

	return (
		<>
			<div>
				{todos
					.filter((todo) => !todo.completed)
					.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							onDelete={onDelete}
							onEdit={(todo) => setEditingTodo(todo)}
							onToggleCompleted={onToggleCompleted}
						/>
					))}
			</div>
			<div>
				<button onClick={() => setIsAddModalOpen(true)}>+ 追加</button>
			</div>
		</>
	);
}
