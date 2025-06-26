import {
  Box,
  Typography,
  TextField,
  Grid,
} from "@mui/material";

export const LoginPage = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "primary.main",
        // padding: 4,
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
          bgcolor: "white",
          padding: { xs: 2, sm: 3, md: 4 },
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2, textAlign: "center" }}
        >
          Login
        </Typography>
        <Grid container component="form" spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="email@google.com"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="password"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
