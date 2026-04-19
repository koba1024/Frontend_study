export type Priority = "A" | "B" | "C";

export type Todo = {
    title: string;
    id: string;
    priority: Priority;
    deadline: string;
    completed: boolean;
    tags: string[];
}