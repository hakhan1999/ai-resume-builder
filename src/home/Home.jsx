import Header from "@/components/custom-components/Header";
import { UserButton } from "@clerk/clerk-react";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <div className="py-4 p-10 md:px-20 lg:px-15">Landing Screen</div>
    </>
  );
};

export default Home;
