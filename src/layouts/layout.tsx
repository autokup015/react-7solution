import Header from "@/components/header";
import { Box } from "@mui/material";
import { Outlet } from "@tanstack/react-router";

const PADDING = 3;

// ---------------------------------------------------------------------------------

const Layout = () => {
  return (
    <>
      <Header padding={PADDING} />
      
      <Box p={PADDING}>
        <Outlet />
      </Box>

      {/* Other layout */}
    </>
  );
};

export default Layout;
