import type { FC } from "react";

import { TMockTodo } from "@/constants/mock-data-todo";
import { Box, Typography } from "@mui/material";

type TItemListProps = {
  id: string;
  data: Array<TMockTodo>;
  onClick: (data: TMockTodo) => void;
};

// ---------------------------------------------------------------------------------

const TodoListItem: FC<TItemListProps> = ({ id, data, onClick }) => {
  return (
    <>
      {data.map((item, index) => (
        <Box
          data-testid={`item-${item.type}-${item.name}`}
          key={`${id}-${item.name}-${index}`}
          component="div"
          onClick={() => onClick(item)}
          p={2}
          sx={{
            border: `1px solid grey`,
            cursor: "pointer",
          }}
        >
          <Typography variant="body1">{item.name}</Typography>
        </Box>
      ))}
    </>
  );
};

export default TodoListItem;
