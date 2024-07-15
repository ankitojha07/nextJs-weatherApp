import React from "react";

const FinalOutput = () => {
  return (
    <div className="md:h-[300px] md:w-[500px] w-full bg-white p-8 flex-col justify-center items-center rounded-3xl md:gap-8 gap-4 hidden">
      <div id="outputCard" className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center">
          <p id="city-name" className="font-bold">
            New Delhi
          </p>
          <p id="countryName" className="bg-orange-400 px-4 py-1 rounded-3xl">
            India
          </p>
        </div>
        <div className="flex flex-row text-5xl font-bold">23 • C</div>
        <div id="loc-time" className="italic">
          22-08-2024 23:00
        </div>
      </div>
    </div>
  );
};

export default FinalOutput;
