import React from "react";
import { useState } from "react";
import BtnVerPdt from "./BtnVerPdt";

const VerPdt = () => {
  const [size, setSize] = useState(null);
  const handleOpen = (value: any) => {
    setSize(value);
  };

  return (
    <>
      <BtnVerPdt size={size} setSize={setSize} handleOpen={handleOpen} />

      <div
        title="Resolver"
        onClick={() => handleOpen("lg")}
        className="flex flex-col"
      >
        <div className="p-2 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="flex items-start rounded-xl bg-white p-4 shadow-2xl cursor-pointer   border border-red-600 hover:scale-95">
            <div className="ml-4">
              <h2>Este es el PDT1</h2>
            </div>
          </div>
          <div className="flex items-start rounded-xl bg-white p-4 shadow-2xl cursor-pointer  border border-red-600 hover:scale-95">
            <div className="ml-4">
              <h2>Este es el PDT2</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerPdt;
