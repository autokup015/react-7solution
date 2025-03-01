import Header from "@/components/header";
import { Box } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header padding={3} />

      <Box
        p={3}
        sx={{
          overflowY: "scroll",
        }}
      >
        <Outlet />
      </Box>

      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
