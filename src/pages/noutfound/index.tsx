import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

const metadata = { title: "404 - notfound" };

// ---------------------------------------------------------------------------------

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBackHomepage = () => navigate({ to: "/" });

  return (
    <>
      <title>{metadata.title}</title>

      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        height="100vh"
      >
        <Stack m="auto" alignItems="center" spacing={2}>
          <Typography variant="h4" fontWeight={700}>
            404 - Not Found page!
          </Typography>

          <Button
            variant="text"
            onClick={goBackHomepage}
            sx={{ width: "max-content", m: "auto" }}
          >
            Back to home page
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default NotFoundPage;
