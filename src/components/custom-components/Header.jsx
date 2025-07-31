import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="py-4 p-10 md:px-20 lg:px-32 flex justify-between items-center shadow-md">
      <Link to={"/"}>
        <h2 className="font-bold text-2xl">Resume_Builder</h2>
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-4">
          <Link to={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
