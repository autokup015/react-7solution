import { Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";

// ---------------------------------------------------------------------------------

type HeaderProps = {
  padding: number;
};

// ---------------------------------------------------------------------------------

const MENU_LIST = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Api",
  },
];

// ---------------------------------------------------------------------------------

const Header: FC<HeaderProps> = ({ padding }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" p={padding}>
        <Typography variant="body1">test-7solution</Typography>

        <Stack direction="row" spacing={1}>
          {MENU_LIST.map((item) => (
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
          ))}
        </Stack>
      </Stack>

      <Divider />
    </>
  );
};

export default Header;
