import { useState } from "react";
import type { Todo } from "../types";
import { useTodoStore } from "../store";
import TodoItem from "./CompletedTodoItem";
import AddTodoModal from "./AddTodoModal";
import EditTodoModal from "./EditTodoModal";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import BaseTodoItem from "./CompletedTodoItem";
import ActiveTodoItem from "./ActiveTodoItem";

export default function TodoList() {
	const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
	const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

	const todos = useTodoStore((state) => state.todos);
	const onDelete = useTodoStore((state) => state.deleteTodo);
	const onToggleCompleted = useTodoStore((state) => state.toggleCompleted);

	const activeTodos = todos.filter((todo) => !todo.completed);
	const completedTodos = todos.filter((todo) => todo.completed);

	return (
		<>
			<div>
				<p>未完了</p>
				<DndContext>
					<SortableContext items={activeTodos.map((todo) => todo.id)}>
						{activeTodos.map((todo) => (
							<ActiveTodoItem
								key={todo.id}
								todo={todo}
								onDelete={onDelete}
								onEdit={(todo) => setEditingTodo(todo)}
								onToggleCompleted={onToggleCompleted}
							/>
						))}
					</SortableContext>
				</DndContext>
			</div>
			<div>
				<p>完了</p>
				{completedTodos.map((todo) => (
					<BaseTodoItem
						key={todo.id}
						todo={todo}
						onToggleCompleted={onToggleCompleted}
					/>
				))}
			</div>
			<div>
				<button onClick={() => setIsAddModalOpen(true)}>+ 追加</button>
			</div>
			{isAddModalOpen && (
				<AddTodoModal
					isOpen={isAddModalOpen}
					onClose={() => setIsAddModalOpen(false)}
				/>
			)}
			{editingTodo && (
				<EditTodoModal
					todo={editingTodo}
					onClose={() => setEditingTodo(null)}
				/>
			)}
		</>
	);
}
