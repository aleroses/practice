import { Route, Routes } from "react-router";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useSelector } from "react-redux";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const status = useCheckAuth();
  
  // const { status } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(FirebaseAuth, async (user) => {
  //     if (!user) return dispatch(logout());

  //     const { uid, email, displayName, photoURL } = user;

  //     dispatch(
  //       login({
  //         uid,
  //         email,
  //         displayName,
  //         photoURL,
  //       })
  //     );
  //   });
  // }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="auth/*" element={<AuthRoutes />} />
      )}

      <Route
        path="/*"
        element={<Navigate to="/auth/login" />}
      />
    </Routes>
  );
};
