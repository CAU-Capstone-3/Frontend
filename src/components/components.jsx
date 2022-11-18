import React from "react";

export default function components() {
  return (
    <div>
      <div className="w-[1728px] h-20 absolute left-0 top-0 overflow-hidden bg-[#eef3ff]">
        <div
          className="flex justify-center items-center w-[200px] h-9 absolute left-[318px] top-[22px] overflow-hidden gap-2 px-3.5 py-2.5 rounded-md border border-[#bbc3cf]"
          style={{ filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.05))" }}
        >
          <div className="flex justify-start items-center flex-grow relative gap-1">
            <input className="flex-grow w-[152px] text-sm font-medium text-left text-[#bbc3cf]">
              Search
            </input>
          </div>
        </div>
      </div>
      <h3 className="absolute left-[340px] top-[117px] text-[40px] font-bold text-left text-black">
        2-3 패킷 스위칭
      </h3>
      <div className="w-[1359px] h-[336px] absolute left-[340px] top-[182px] rounded-lg bg-white">
        <p className="absolute left-[21px] top-[63px] text-sm font-semibold text-left text-[#959595]">
          문장
        </p>
        <p className="absolute left-[21px] top-[164px] text-sm font-semibold text-left text-[#959595]">
          분석 결과
        </p>
        <p className="w-[51px] absolute left-[25px] top-[18px] text-sm font-semibold text-left text-[#11171c]">
          장훈석
        </p>
        <p className="w-[51px] absolute left-[710px] top-[18px] text-sm font-semibold text-left text-[#11171c]">
          김형기
        </p>
        <div className="w-[314px] h-[60px] absolute left-5 top-[90px] rounded-lg bg-[#f8f8f8]" />
        <div className="w-[314px] h-[55px] absolute left-[662px] top-[90px] rounded-lg bg-[#f8f8f8]" />
        <div className="w-[1361px] h-[77px] absolute left-[-3px] top-[258px] rounded-[20px] bg-[#accdff]" />
        <span className="w-[1220.8px] h-[62.27px] absolute left-[35px] top-[95px] text-sm font-light text-left text-black">
          <span className="w-[1220.8px] h-[62.27px] text-sm font-light text-left text-black">
            패킷 네트워크 상에서 데이터를 끝없이 보낼 수 없음
          </span>
          <br />
        </span>
        <span className="w-[1220.8px] h-[62.27px] absolute left-[34px] top-[182px] text-sm font-light text-left text-black">
          서로 상반되는 말을 적어주셨어요
        </span>
        <div className="w-[1348px] h-0.5 absolute left-[-1px] top-12 bg-[#fcddec] border border-[#909090]" />
        <svg
          width={30}
          height={23}
          viewBox="0 0 30 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[22.68px] h-[30px] absolute left-[1331px] top-[285px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M23.7502 11.3418L15.0002 17.9578L6.25024 11.3418"
            stroke="black"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="w-[585px] h-[29.84px] absolute left-[701px] top-[97.6px] text-sm font-light text-left text-black">
          <span className="w-[585px] h-[29.84px] text-sm font-light text-left text-black">
            패킷 네트워크 상에서 데이터를 끝없이 보낼 수 있다
          </span>
          <br />
        </p>
        <span className="absolute left-[123px] top-72 text-sm font-semibold text-left text-black">
          패킷 네트워크는 비연결 방식이라서 데이터를 잘라서 보내야 하지 않나요?
        </span>
        <p className="absolute left-[35px] top-72 text-sm font-semibold text-left text-black">
          김유진
        </p>
      </div>
    </div>
  );
}
