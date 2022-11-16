import React from "react";

export default function List() {
  return (
    <div className="flex flex-col justify-center items-end relative gap-5 px-[210px] py-10 rounded-xl bg-[#f7f9fc]">
      <div
        className="flex-grow-0 flex-shrink-0 w-[1020px] h-[740px] relative overflow-hidden rounded-lg bg-white"
        style={{
          boxShadow:
            "0px 0px 0px 1px rgba(152,161,178,0.1), 0px 1px 4px 0 rgba(69,75,87,0.12), 0px 0px 2px 0 rgba(0,0,0,0.08)",
        }}
      >
        <div className="w-[1020px] h-16 absolute left-0 top-[104px]">
          <p className="w-[100px] absolute left-[870px] top-3 text-sm text-right text-[#464f60]">
            $500.00
          </p>
          <p className="w-[100px] absolute left-[750px] top-3 text-sm text-right text-[#d12953]">
            -$270.00
          </p>
          <p className="w-[100px] absolute left-[630px] top-3 text-sm text-right text-[#464f60]">
            $70.00
          </p>
          <p className="w-[238px] absolute left-[282px] top-3 text-sm text-left text-[#464f60]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...
          </p>
          <p className="w-[150px] absolute left-[102px] top-3 text-sm font-medium text-left text-[#171c26]">
            Ann Culhane
          </p>
          <p className="absolute left-[46px] top-3 text-sm font-medium text-left text-[#171c26]">
            1
          </p>
          <div
            className="w-4 h-4 absolute left-2.5 top-3 overflow-hidden rounded bg-white"
            style={{
              boxShadow:
                "0px 1px 1px 0 rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(70,79,96,0.16), 0px 2px 5px 0 rgba(89,96,120,0.1)",
            }}
          />
          <div className="flex justify-center items-center absolute left-[540px] top-3 gap-1.5 px-2.5 py-px rounded-[10px] bg-[#f0f1fa]">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#4f5aed]">
              Open
            </p>
          </div>
        </div>

        <div className="w-[1020px] h-11 absolute left-[-1px] top-[1383px] bg-white" />
        <div className="w-[1020px] h-[104px] absolute left-[-1px] top-[-1px] bg-[#f4f7fc]/75" />
        <div className="flex justify-start items-center w-[1020px] absolute left-0 top-16 gap-5 pl-2.5 pr-[50px]">
          <div
            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative overflow-hidden rounded bg-white"
            style={{
              boxShadow:
                "0px 1px 1px 0 rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(70,79,96,0.16), 0px 2px 5px 0 rgba(89,96,120,0.1)",
            }}
          />
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-9 relative gap-0.5 py-3">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-semibold text-left uppercase text-[#171c26]">
              #
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-40 relative gap-0.5 py-3">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-semibold text-left uppercase text-[#464f60]">
              name
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow relative gap-0.5 py-3">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-semibold text-left uppercase text-[#464f60]">
              description
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[70px] relative gap-0.5 py-3">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-semibold text-left uppercase text-[#464f60]">
              Status
            </p>
            <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative" />
          </div>
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[100px] relative gap-0.5 py-3">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-semibold text-left uppercase text-[#464f60]">
              Rate
            </p>
          </div>
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[100px] relative gap-0.5 py-3">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-semibold text-left uppercase text-[#464f60]">
              Balance
            </p>
          </div>
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[100px] relative gap-0.5 py-3">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-semibold text-left uppercase text-[#464f60]">
              Deposit
            </p>
          </div>
        </div>
        <div
          className="flex justify-start items-center absolute left-[873px] top-4 overflow-hidden gap-2 px-3 py-1.5 rounded-md bg-[#2264e5]"
          style={{
            boxShadow:
              "0px 1px 1px 0 rgba(0,0,0,0.14), 0px 0px 0px 1px #2264e5, 0px 2px 5px 0 rgba(34,100,229,0.12)",
          }}
        >
          <button className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
            노트작성하기
          </button>
        </div>
        <div
          className="flex justify-start items-center absolute left-5 top-4 overflow-hidden gap-2 px-3 py-2 rounded-md bg-white"
          style={{
            boxShadow:
              "0px 1px 1px 0 rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(70,79,96,0.16), 0px 2px 5px 0 rgba(89,96,120,0.1)",
          }}
        ></div>
        <div
          className="flex justify-start items-center w-80 absolute left-[76px] top-4 overflow-hidden gap-2 px-3 py-1.5 rounded-md bg-white"
          style={{
            boxShadow:
              "0px 1px 2px 0 rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(104,113,130,0.16)",
          }}
        >
          <input
            type="text"
            placeholder="검색하세요..."
            name="search"
            className="flex-grow w-[272px] text-sm text-left text-[#a1a9b8]"
          />
        </div>
      </div>
    </div>
  );
}
