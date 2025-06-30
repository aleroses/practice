import { StarOutline } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 110px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary.main",
        borderRadius: 5,
      }}
    >
      <Grid>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid>
        <Typography variant="h5" color="white">
          Select or create a note.
        </Typography>
      </Grid>
    </Box>
  );
};
