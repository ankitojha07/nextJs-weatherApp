import React from "react";
import FinalInputCard from "../components/inputCard/FinalInputCard";
import FinalOutput from "../components/outputCard/FinalOutput";

const page = () => {
  return (
    <div className="flex h-[100vh] w-full justify-center items-center flex-col bg-black p-8 gap-8">
      <FinalInputCard />
      <FinalOutput />
    </div>
  );
};

export default page;
