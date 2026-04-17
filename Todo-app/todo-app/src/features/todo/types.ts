export type Priority = "A" | "B" | "C";

export type Todo = {
    title: string;
    id: string;
    priority: Priority;
    deadline: string | null;
    completed: boolean;
    tags: string[];
}