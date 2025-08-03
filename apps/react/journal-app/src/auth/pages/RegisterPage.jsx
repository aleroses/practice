import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Link,
} from "@mui/material";

const formData = {
  email: "aleghost@google.com",
  password: "123456",
  displayName: "Ale Ghost",
};

export const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    handleInputChange,
    formState,
  } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
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
        <Grid size={{ xs: 12 }}>
          <Button type="submit" variant="contained" fullWidth>
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
