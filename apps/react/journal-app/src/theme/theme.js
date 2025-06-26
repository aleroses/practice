import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#090b10",
    },
    secondary: {
      main: "#0f111a",
    },
    error: {
      main: red.A400,
    },
  },
});
