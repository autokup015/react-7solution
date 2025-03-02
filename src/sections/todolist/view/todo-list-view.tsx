import type { FC } from "react";

import { Divider, Stack, styled, Typography } from "@mui/material";
import TodoListItem from "../todo-list-item";
import { useTodoList } from "../hook/use-todo-list";

// ---------------------------------------------------------------------------------

const StackItem = styled(Stack)({
  width: "100%",
  height: "100%",
});

// ---------------------------------------------------------------------------------

const TodoListView: FC = () => {
  const {
    dataList,
    fruitList,
    vegetableList,
    timeFruit,
timeVegetable,
    handleSelectItem,
    handleDelToDataList,
  } = useTodoList();

  return (
    <Stack spacing={2} height="100%">
      <Typography variant="h6">TodoList</Typography>

      <Stack direction="row" spacing={3} height="100%">
        <StackItem spacing={2}>
          <Typography variant="h6" textAlign="center">
            All
          </Typography>

          <TodoListItem
            id="default"
            data={dataList}
            onClick={(item) => handleSelectItem(item)}
          />
        </StackItem>

        <StackItem spacing={2}>
          <Typography variant="h6" textAlign="center">
            Fruit {timeFruit.toFixed(0)}
          </Typography>

          <Divider />

          <TodoListItem
            id="fruit"
            data={fruitList}
            onClick={(item) => handleDelToDataList(item)}
          />
        </StackItem>

        <StackItem spacing={2}>
          <Typography variant="h6" textAlign="center">
            Vegetable {timeVegetable.toFixed(0)}
          </Typography>

          <Divider />

          <TodoListItem
            id="vegetable"
            data={vegetableList}
            onClick={(item) => handleDelToDataList(item)}
          />
        </StackItem>
      </Stack>
    </Stack>
  );
};

export default TodoListView;
