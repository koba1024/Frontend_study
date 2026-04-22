import { useState } from "react";
import type { Todo } from "../types";
import { useTodoStore } from "../store";
import AddTodoModal from "./AddTodoModal";
import EditTodoModal from "./EditTodoModal";
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import {
	SortableContext,
	verticalListSortingStrategy,
	arrayMove,
} from "@dnd-kit/sortable";
import ActiveTodoItem from "./ActiveTodoItem";
import CompletedTodoItem from "./CompletedTodoItem";

export default function TodoList() {
	const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
	const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

	const todos = useTodoStore((state) => state.todos);
	const onDelete = useTodoStore((state) => state.deleteTodo);
	const onToggleCompleted = useTodoStore((state) => state.toggleCompleted);

	const activeTodos = todos.filter((todo) => !todo.completed);
	const completedTodos = todos.filter((todo) => todo.completed);

	const reorderTodos = useTodoStore((state) => state.reorderTodos);

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (!over || active.id === over.id) return;

		const oldIndex = todos.findIndex((todo) => todo.id === active.id);
		const newIndex = todos.findIndex((todo) => todo.id === over.id);

		reorderTodos(arrayMove(todos, oldIndex, newIndex));
	};

	return (
		<>
			<div>
				<p>未完了</p>
				<DndContext
					collisionDetection={closestCenter}
					onDragEnd={handleDragEnd}
				>
					<SortableContext
						items={activeTodos.map((todo) => todo.id)}
						strategy={verticalListSortingStrategy}
					>
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
					<CompletedTodoItem
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
