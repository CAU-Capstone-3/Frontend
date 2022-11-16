import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-[1440px] h-[583px] relative overflow-hidden bg-[#3056d3]">
      <div className="w-[1440px] h-[583px]">
        <div className="w-[460px] h-[583px] absolute left-[979.5px] top-[-0.5px] bg-gradient-to-b from-white/[0.08] to-[#c4c4c4]/0" />
        <div className="w-[460px] h-[583px] absolute left-[459.5px] top-[582.5px] bg-gradient-to-b from-white/[0.08] to-[#c4c4c4]/0" />
        <div className="w-[200px] h-[583px] absolute left-[919.5px] top-[582.5px] bg-gradient-to-b from-white/[0.08] to-[#c4c4c4]/0" />
        <div className="w-[200px] h-[583px] absolute left-[519.5px] top-[-0.5px] bg-gradient-to-b from-white/[0.08] to-[#c4c4c4]/0" />
      </div>
      <div className="w-[391px] h-[283px]">
        <p className="absolute left-[605px] top-[150px] text-[100px] font-bold text-left text-white">
          404
        </p>
        <p className="absolute left-[555px] top-72 text-[22px] font-semibold text-left text-white">
          Oops! That page can’t be found
        </p>
        <p className="absolute left-[526px] top-[324px] text-lg text-left text-white">
          The page you are looking for it maybe deleted
        </p>
        <div className="w-40 h-[50px]">
          <div className="w-40 h-[50px] absolute left-[627.5px] top-[382.5px] rounded-[7px] border border-white" />
          <button
            onClick={() => navigate("/")}
            className="absolute left-[661px] top-[396px] text-base font-semibold text-left text-white"
          >
            Go To Home
          </button>
        </div>
      </div>
    </div>
  );
}
