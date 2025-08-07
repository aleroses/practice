import { Box } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "primary.main",
      }}
    >
      <Box
        component="section"
        sx={{
          width: {
            xs: "80%",
            sm: "60%",
            md: "40%",
            lg: "30%",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="warning" />
      </Box>
    </Box>
  );
};
