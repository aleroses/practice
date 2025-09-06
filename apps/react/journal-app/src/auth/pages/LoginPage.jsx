import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router";
import {
  TextField,
  Grid,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const { email, password, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(
    () => status === "checking",
    [status]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password });
    // dispatch(checkingAuthentication());
    dispatch(
      startLoginWithEmailPassword({ email, password })
    );
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
        <Grid
          size={{ xs: 12 }}
          display={!!errorMessage ? "" : "none"}
          sx={{
            mt: 1,
          }}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Grid>
        <Grid
          container
          spacing={2}
          // xs={{ mt: 2 }}
          size={{
            xs: {
              mt: 2,
            },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Button
              disabled={isAuthenticating}
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Button
              disabled={isAuthenticating}
              variant="contained"
              fullWidth
              startIcon={<Google />}
              onClick={handleGoogleSignIn}
            >
              Google
            </Button>
          </Grid>
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
