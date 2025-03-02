import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { LinkProps, useLocation, useNavigate } from "@tanstack/react-router";
import { FC } from "react";

// ---------------------------------------------------------------------------------

type THeaderProps = {
  padding: number;
};

type TMunuList = {
  id: number;
  name: string;
  path: LinkProps["to"];
};

// ---------------------------------------------------------------------------------

const MENU_LIST: Array<TMunuList> = [
  {
    id: 1,
    name: "Todo List",
    path: "/todo-list",
  },
  {
    id: 2,
    name: "Api Dummy",
    path: "/dummy",
  },
];

// ---------------------------------------------------------------------------------

const Header: FC<THeaderProps> = ({ padding }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const theme = useTheme();

  return (
    <>
      <Stack direction="row" justifyContent="space-between" p={padding}>
        <Box onClick={() => navigate({ to: "/" })}>
          <Typography
            variant="body1"
            sx={{ cursor: "pointer", textTransform: "uppercase" }}
          >
            test - 7solution
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          {MENU_LIST.map((item) => (
            <Box key={item.id} onClick={() => navigate({ to: item.path })}>
              <Typography
                key={item.id}
                variant="body1"
                sx={{
                  textDecorationLine: "underline",
                  cursor: "pointer",

                  ...(pathname === item.path && {
                    color: theme.palette.primary.dark,
                  }),

                  ":hover": {
                    color: theme.palette.primary.light,
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
