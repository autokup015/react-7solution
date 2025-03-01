import TodoListView from "@/sections/todolist/view/todo-list-view";

const metadata = { title: "Todo List" };

// ---------------------------------------------------------------------------------

const TodoListPage = () => {
  return (
    <>
      <title>{metadata.title}</title>

      <TodoListView />
    </>
  );
};

export default TodoListPage;
