import Header from "@/components/header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

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
