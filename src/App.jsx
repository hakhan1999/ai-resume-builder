import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/custom-components/Header";

const App = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/sign-in"} />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
