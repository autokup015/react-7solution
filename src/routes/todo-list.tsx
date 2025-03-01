import TodoListPage from "@/pages/todolist";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/todo-list")({
  component: TodoListPage,
});
