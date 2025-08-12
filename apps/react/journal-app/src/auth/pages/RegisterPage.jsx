import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

const formData = {
  email: "aleghost@google.com",
  password: "123456",
  displayName: "Ale Ghost",
};

const formValidations = {
  email: [
    (value) => value.includes("@"),
    "The mail must have an @.",
  ],
  password: [
    (value) => value.length >= 6,
    "The password must be longer than 6 letters.",
  ],
  displayName: [
    (value) => value.length >= 1,
    "The name is mandatory.",
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector(
    (state) => state.auth
  );

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    email,
    password,
    displayName,
    handleInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
    formState,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      <Grid
        container
        component="form"
        spacing={2}
        onSubmit={onSubmit}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            id="fullname"
            label="Full name"
            type="text"
            placeholder="Your full name"
            size="small"
            fullWidth
            name="displayName"
            value={displayName}
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
            onChange={handleInputChange}
          />
        </Grid>
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
            error={!!emailValid && formSubmitted}
            helperText={emailValid}
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
            error={!!passwordValid && formSubmitted}
            helperText={passwordValid}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid
          size={{ xs: 12 }}
          display={!!errorMessage ? "" : "none"}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isCheckingAuthentication}
          >
            Create account
          </Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="end" sx={{ mt: 2 }}>
        <Typography sx={{ mr: 1 }}>
          Already have an account?
        </Typography>
        <Link
          component={RouterLink}
          color="inherit"
          to="/auth/login"
        >
          Login
        </Link>
      </Grid>
    </AuthLayout>
  );
};
