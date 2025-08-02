import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, handleInputChange } = useForm({
    email: "aleghost@google.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(
    () => status === "checking",
    [status]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password });
    dispatch(checkingAuthentication());
  };

  const handleGoogleSignIn = () => {
    console.log("handleGoogleSignIn");

    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <Grid
        container
        component="form"
        spacing={2}
        onSubmit={handleSubmit}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            id="email"
            label="Email"
            type="email"
            placeholder="email@google.com"
            size="small"
            fullWidth
            name="email"
            value={email}
            onChange={handleInputChange}
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
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            disabled={isAuthenticating}
          >
            Login
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<Google />}
            onClick={handleGoogleSignIn}
            disabled={isAuthenticating}
          >
            Google
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="end" sx={{ mt: 2 }}>
        <Link
          component={RouterLink}
          color="inherit"
          to="/auth/register"
        >
          Create an account
        </Link>
      </Grid>
    </AuthLayout>
  );
};
