import { Box, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { FC } from "react";

// ---------------------------------------------------------------------------------

type HeaderProps = {
  padding: number;
};

// ---------------------------------------------------------------------------------

const MENU_LIST = [
  {
    id: 1,
    name: "Todo List",
    link: "/todo-list",
  },
  {
    id: 2,
    name: "Api Dummy",
    link: "/dummy",
  },
];

// ---------------------------------------------------------------------------------

const Header: FC<HeaderProps> = ({ padding }) => {
  const navigate = useNavigate();

  // --------------------------- Function ---------------------------

  const handleRouter = (path: string) => {
    console.log("path :>> ", path);
    navigate({ to: "/" });
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" p={padding}>
        <Box onClick={() => handleRouter("/")}>
          <Typography
            variant="body1"
            sx={{ cursor: "pointer", textTransform: "uppercase" }}
          >
            test - 7solution
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          {MENU_LIST.map((item) => (
            <Box key={item.id} onClick={() => handleRouter(item.link)}>
              <Typography
                key={item.id}
                variant="body1"
                sx={{
                  textDecorationLine: "underline",
                  cursor: "pointer",

                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>

      <Divider />
    </>
  );
};

export default Header;
