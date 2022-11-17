import React from "react";

export default function Table() {
  return (
    <div>
      <div className="w-[1286px] h-[829px] relative overflow-hidden rounded-[20px] bg-white">
        <div className="w-[1107px] h-[33px] absolute left-[92px] top-20 overflow-hidden">
          <p className="absolute left-0 top-0 text-2xl font-medium text-left">
            <span className="text-2xl font-medium text-left text-gray-900">
              주간토픽
            </span>
            <span className="text-2xl font-medium text-left text-gray-600">
              - 컴퓨터통신
            </span>
          </p>
          <div className="flex justify-start items-start absolute left-[819px] top-px gap-2">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[248px] h-8 relative gap-2.5 pl-2 pr-4 py-2 rounded-[46px] bg-white border border-gray-300">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M7.33317 3.16666C5.03198 3.16666 3.1665 5.03214 3.1665 7.33332C3.1665 9.63451 5.03198 11.5 7.33317 11.5C9.63436 11.5 11.4998 9.63451 11.4998 7.33332C11.4998 5.03214 9.63436 3.16666 7.33317 3.16666Z"
                  stroke="#4B5563"
                  stroke-width="1.5"
                />
                <path
                  d="M12.8335 12.8333L10.3335 10.3333"
                  stroke="#4B5563"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-gray-700">
                Search table
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px] p-2 rounded-sm bg-blue-100">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M12.8332 3.16666H3.1665L6.20766 6.9681C6.3968 7.20452 6.49984 7.49827 6.49984 7.80103V12.1667C6.49984 12.5348 6.79831 12.8333 7.1665 12.8333H8.83317C9.20136 12.8333 9.49984 12.5348 9.49984 12.1667V7.80103C9.49984 7.49827 9.60288 7.20452 9.79201 6.9681L12.8332 3.16666Z"
                  stroke="#1E3A8A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[1177px] h-[60px] absolute left-10 top-[134px] overflow-hidden rounded-sm bg-blue-50">
          <p className="absolute left-4 top-[21px] text-sm text-left text-gray-900">
            3 rows selected. Clear All
          </p>
          <div className="flex justify-end items-start absolute left-[967px] top-3.5 gap-1">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-8 relative gap-[5px] px-4 py-2 rounded-sm bg-blue-600">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M3.1665 9.83334V10.8333C3.1665 11.9379 4.06193 12.8333 5.1665 12.8333H10.8332C11.9377 12.8333 12.8332 11.9379 12.8332 10.8333V9.83334"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 9.49999L8 3.16666"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.8335 7.16666L8.00016 9.49999L10.1668 7.16666"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
                Download
              </p>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-8 relative gap-2.5 px-4 py-2 rounded-sm bg-white border border-blue-600">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-blue-900">
                Share
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start w-[1177px] h-[414px] absolute left-10 top-[202px] overflow-hidden">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[53px] relative">
            <svg
              width={53}
              height={66}
              viewBox="0 0 53 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7590)">
                <rect width={53} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5"
                  x2={53}
                  y2="65.5"
                  stroke="#E7EAEE"
                />
                <rect
                  x={17}
                  y={24}
                  width={18}
                  height={18}
                  rx={1}
                  fill="white"
                />
                <rect
                  x={17}
                  y={24}
                  width={18}
                  height={18}
                  rx={1}
                  stroke="#D1D5DB"
                  stroke-width={2}
                />
              </g>
              <defs>
                <clippath id="clip0_101_7590">
                  <rect width={53} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
            <svg
              width={53}
              height={66}
              viewBox="0 0 53 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7591)">
                <rect width={53} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5"
                  x2={53}
                  y2="65.5"
                  stroke="#E7EAEE"
                />
                <rect
                  x={16}
                  y={23}
                  width={20}
                  height={20}
                  rx={2}
                  fill="#2563EB"
                />
                <path
                  d="M21.3335 33.6667L24.6668 37L30.6668 29"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7591">
                  <rect width={53} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
            <svg
              width={53}
              height={66}
              viewBox="0 0 53 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7592)">
                <rect width={53} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5"
                  x2={53}
                  y2="65.5"
                  stroke="#E7EAEE"
                />
                <rect
                  x={16}
                  y={23}
                  width={20}
                  height={20}
                  rx={2}
                  fill="#2563EB"
                />
                <path
                  d="M21.3335 33.6667L24.6668 37L30.6668 29"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7592">
                  <rect width={53} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
            <svg
              width={53}
              height={66}
              viewBox="0 0 53 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7593)">
                <rect width={53} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5001"
                  x2={53}
                  y2="65.5001"
                  stroke="#E7EAEE"
                />
                <rect
                  x={16}
                  y="23.0001"
                  width={20}
                  height={20}
                  rx={2}
                  fill="#2563EB"
                />
                <path
                  d="M21.3335 33.6667L24.6668 37.0001L30.6668 29.0001"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7593">
                  <rect width={53} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
            <svg
              width={53}
              height={66}
              viewBox="0 0 53 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7594)">
                <rect width={53} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5001"
                  x2={53}
                  y2="65.5001"
                  stroke="#E7EAEE"
                />
                <rect
                  x={17}
                  y="24.0001"
                  width={18}
                  height={18}
                  rx={1}
                  fill="white"
                />
                <rect
                  x={17}
                  y="24.0001"
                  width={18}
                  height={18}
                  rx={1}
                  stroke="#D1D5DB"
                  stroke-width={2}
                />
              </g>
              <defs>
                <clippath id="clip0_101_7594">
                  <rect width={53} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[183px] relative">
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[151px] absolute left-4 top-[25px] text-sm font-bold text-left text-gray-900">
                Name
              </p>
              <svg
                width={183}
                height={1}
                viewBox="0 0 183 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={183}
                  y2="0.500016"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <svg
                width={183}
                height={1}
                viewBox="0 0 183 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={183}
                  y2="0.500016"
                  stroke="#E7EAEE"
                />
              </svg>
              <div className="flex justify-start items-center w-[151px] absolute left-4 top-[21px] gap-2">
                <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-[1000px] bg-blue-600">
                  <img
                    src="image-2.png"
                    className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover"
                  />
                </div>
                <p className="flex-grow w-[119px] h-6 text-sm text-left text-gray-900">
                  Robert Fox
                </p>
              </div>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <svg
                width={183}
                height={1}
                viewBox="0 0 183 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={183}
                  y2="0.500016"
                  stroke="#E7EAEE"
                />
              </svg>
              <div className="flex justify-start items-center w-[151px] absolute left-4 top-[21px] gap-2">
                <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-[1000px] bg-blue-600">
                  <img
                    src="image.png"
                    className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover"
                  />
                </div>
                <p className="flex-grow w-[119px] h-6 text-sm text-left text-gray-900">
                  Devon Lane
                </p>
              </div>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <svg
                width={183}
                height={1}
                viewBox="0 0 183 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.500061"
                  x2={183}
                  y2="0.500077"
                  stroke="#E7EAEE"
                />
              </svg>
              <div className="flex justify-start items-center w-[151px] absolute left-4 top-[21px] gap-2">
                <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-[1000px] bg-blue-600">
                  <img
                    src="image-4.png"
                    className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover"
                  />
                </div>
                <p className="flex-grow w-[119px] h-6 text-sm text-left text-gray-900">
                  Jane Cooper
                </p>
              </div>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <svg
                width={183}
                height={1}
                viewBox="0 0 183 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.500061"
                  x2={183}
                  y2="0.500077"
                  stroke="#E7EAEE"
                />
              </svg>
              <div className="flex justify-start items-center w-[151px] absolute left-4 top-[21px] gap-2">
                <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-[1000px] bg-blue-600">
                  <img
                    src="image-3.png"
                    className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover"
                  />
                </div>
                <p className="flex-grow w-[119px] h-6 text-sm text-left text-gray-900">
                  Jacob Jones
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[232px] relative">
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[200px] absolute left-4 top-[25px] text-sm font-bold text-left text-gray-900">
                Location
              </p>
              <svg
                width={232}
                height={1}
                viewBox="0 0 232 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={232}
                  y2="0.50002"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <div className="flex flex-col justify-center items-start absolute left-4 top-4 gap-0.5">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] text-sm text-left text-gray-900">
                  1432 Willoughby Rd.
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] text-xs font-medium text-left text-gray-600">
                  Sydney
                </p>
              </div>
              <svg
                width={232}
                height={1}
                viewBox="0 0 232 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={232}
                  y2="0.50002"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <div className="flex flex-col justify-center items-start w-[200px] absolute left-4 top-4 gap-0.5">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] text-sm text-left text-gray-900">
                  56 Ashcroft Ln.
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] text-xs font-medium text-left text-gray-600">
                  Sydney
                </p>
              </div>
              <svg
                width={232}
                height={1}
                viewBox="0 0 232 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={232}
                  y2="0.50002"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <div className="flex flex-col justify-center items-start w-[200px] absolute left-4 top-4 gap-0.5">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] text-sm text-left text-gray-900">
                  211 Farnham Hollow
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] text-xs font-medium text-left text-gray-600">
                  Sydney
                </p>
              </div>
              <svg
                width={232}
                height={1}
                viewBox="0 0 232 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={232}
                  y2="0.50002"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <div className="flex flex-col justify-center items-start w-[200px] absolute left-4 top-4 gap-0.5">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] text-sm text-left text-gray-900">
                  9043 16th St.
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[200px] text-xs font-medium text-left text-gray-600">
                  Sydney
                </p>
              </div>
              <svg
                width={232}
                height={1}
                viewBox="0 0 232 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.500061"
                  x2={232}
                  y2="0.500081"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow relative">
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm font-bold text-left text-gray-900">
                Units to Date
              </p>
              <svg
                width={218}
                height={1}
                viewBox="0 0 218 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={218}
                  y2="0.500019"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm text-left text-gray-900">
                426
              </p>
              <svg
                width={218}
                height={1}
                viewBox="0 0 218 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={218}
                  y2="0.500019"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm text-left text-gray-900">
                447
              </p>
              <svg
                width={218}
                height={1}
                viewBox="0 0 218 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.5"
                  x2={218}
                  y2="0.500019"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm text-left text-gray-900">
                798
              </p>
              <svg
                width={218}
                height={1}
                viewBox="0 0 218 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.500061"
                  x2={218}
                  y2="0.50008"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm text-left text-gray-900">
                798
              </p>
              <svg
                width={218}
                height={1}
                viewBox="0 0 218 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="4.37114e-8"
                  y1="0.500061"
                  x2={218}
                  y2="0.50008"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow relative">
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm font-bold text-left text-gray-900">
                Mileage
              </p>
              <svg
                width={219}
                height={1}
                viewBox="0 0 219 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="0.666504"
                  y1="0.5"
                  x2="218.667"
                  y2="0.500019"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm text-left text-gray-900">
                426
              </p>
              <svg
                width={219}
                height={1}
                viewBox="0 0 219 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="0.666504"
                  y1="0.5"
                  x2="218.667"
                  y2="0.500019"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm text-left text-gray-900">
                447
              </p>
              <svg
                width={219}
                height={1}
                viewBox="0 0 219 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="0.666504"
                  y1="0.5"
                  x2="218.667"
                  y2="0.500019"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm text-left text-gray-900">
                798
              </p>
              <svg
                width={219}
                height={1}
                viewBox="0 0 219 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="0.666504"
                  y1="0.500061"
                  x2="218.667"
                  y2="0.50008"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm text-left text-gray-900">
                798
              </p>
              <svg
                width={219}
                height={1}
                viewBox="0 0 219 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="0.666504"
                  y1="0.500061"
                  x2="218.667"
                  y2="0.50008"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow relative">
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative overflow-hidden bg-white">
              <p className="w-[186px] absolute left-4 top-[25px] text-sm font-bold text-left text-gray-900">
                Rating
              </p>
              <svg
                width={218}
                height={1}
                viewBox="0 0 218 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-1px] top-[65px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <line
                  x1="0.333496"
                  y1="0.5"
                  x2="218.333"
                  y2="0.500019"
                  stroke="#E7EAEE"
                />
              </svg>
            </div>
            <svg
              width={218}
              height={66}
              viewBox="0 0 218 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7626)">
                <rect
                  width="217.667"
                  height={66}
                  transform="translate(0.333496)"
                  fill="white"
                />
                <line
                  x1="0.333496"
                  y1="65.5"
                  x2="218.333"
                  y2="65.5"
                  stroke="#E7EAEE"
                />
                <path
                  d="M26.3337 26.9583L27.792 31.5416H32.3753L28.6253 34.4583L29.8753 39.0416L26.3337 36.125L22.792 39.0416L24.042 34.4583L20.292 31.5416H24.8753L26.3337 26.9583Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.3337 26.9583L47.792 31.5416H52.3753L48.6253 34.4583L49.8753 39.0416L46.3337 36.125L42.792 39.0416L44.042 34.4583L40.292 31.5416H44.8753L46.3337 26.9583Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M66.3337 26.9583L67.792 31.5416H72.3753L68.6253 34.4583L69.8753 39.0416L66.3337 36.125L62.792 39.0416L64.042 34.4583L60.292 31.5416H64.8753L66.3337 26.9583Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M86.3337 26.9583L87.792 31.5416H92.3753L88.6253 34.4583L89.8753 39.0416L86.3337 36.125L82.792 39.0416L84.042 34.4583L80.292 31.5416H84.8753L86.3337 26.9583Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M106.334 26.9583L107.792 31.5416H112.375L108.625 34.4583L109.875 39.0416L106.334 36.125L102.792 39.0416L104.042 34.4583L100.292 31.5416H104.875L106.334 26.9583Z"
                  fill="#9CA3AF"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7626">
                  <rect
                    width="217.667"
                    height={66}
                    fill="white"
                    transform="translate(0.333496)"
                  />
                </clippath>
              </defs>
            </svg>
            <svg
              width={218}
              height={66}
              viewBox="0 0 218 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7627)">
                <rect
                  width="217.667"
                  height={66}
                  transform="translate(0.333496)"
                  fill="white"
                />
                <line
                  x1="0.333496"
                  y1="65.5"
                  x2="218.333"
                  y2="65.5"
                  stroke="#E7EAEE"
                />
                <path
                  d="M26.3337 26.9583L27.792 31.5416H32.3753L28.6253 34.4583L29.8753 39.0416L26.3337 36.125L22.792 39.0416L24.042 34.4583L20.292 31.5416H24.8753L26.3337 26.9583Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.3337 26.9583L47.792 31.5416H52.3753L48.6253 34.4583L49.8753 39.0416L46.3337 36.125L42.792 39.0416L44.042 34.4583L40.292 31.5416H44.8753L46.3337 26.9583Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M66.3337 26.9583L67.792 31.5416H72.3753L68.6253 34.4583L69.8753 39.0416L66.3337 36.125L62.792 39.0416L64.042 34.4583L60.292 31.5416H64.8753L66.3337 26.9583Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M86.3337 26.9583L87.792 31.5416H92.3753L88.6253 34.4583L89.8753 39.0416L86.3337 36.125L82.792 39.0416L84.042 34.4583L80.292 31.5416H84.8753L86.3337 26.9583Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M106.334 26.9583L107.792 31.5416H112.375L108.625 34.4583L109.875 39.0416L106.334 36.125L102.792 39.0416L104.042 34.4583L100.292 31.5416H104.875L106.334 26.9583Z"
                  fill="#9CA3AF"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7627">
                  <rect
                    width="217.667"
                    height={66}
                    fill="white"
                    transform="translate(0.333496)"
                  />
                </clippath>
              </defs>
            </svg>
            <svg
              width={218}
              height={66}
              viewBox="0 0 218 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7628)">
                <rect
                  width="217.667"
                  height={66}
                  transform="translate(0.333496 6.10352e-05)"
                  fill="white"
                />
                <line
                  x1="0.333496"
                  y1="65.5001"
                  x2="218.333"
                  y2="65.5001"
                  stroke="#E7EAEE"
                />
                <path
                  d="M26.3337 26.9584L27.792 31.5417H32.3753L28.6253 34.4584L29.8753 39.0417L26.3337 36.125L22.792 39.0417L24.042 34.4584L20.292 31.5417H24.8753L26.3337 26.9584Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.3337 26.9584L47.792 31.5417H52.3753L48.6253 34.4584L49.8753 39.0417L46.3337 36.125L42.792 39.0417L44.042 34.4584L40.292 31.5417H44.8753L46.3337 26.9584Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M66.3337 26.9584L67.792 31.5417H72.3753L68.6253 34.4584L69.8753 39.0417L66.3337 36.125L62.792 39.0417L64.042 34.4584L60.292 31.5417H64.8753L66.3337 26.9584Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M86.3337 26.9584L87.792 31.5417H92.3753L88.6253 34.4584L89.8753 39.0417L86.3337 36.125L82.792 39.0417L84.042 34.4584L80.292 31.5417H84.8753L86.3337 26.9584Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M106.334 26.9584L107.792 31.5417H112.375L108.625 34.4584L109.875 39.0417L106.334 36.125L102.792 39.0417L104.042 34.4584L100.292 31.5417H104.875L106.334 26.9584Z"
                  fill="#9CA3AF"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7628">
                  <rect
                    width="217.667"
                    height={66}
                    fill="white"
                    transform="translate(0.333496 6.10352e-05)"
                  />
                </clippath>
              </defs>
            </svg>
            <svg
              width={218}
              height={66}
              viewBox="0 0 218 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7629)">
                <rect
                  width="217.667"
                  height={66}
                  transform="translate(0.333496 6.10352e-05)"
                  fill="white"
                />
                <line
                  x1="0.333496"
                  y1="65.5001"
                  x2="218.333"
                  y2="65.5001"
                  stroke="#E7EAEE"
                />
                <path
                  d="M26.3337 26.9584L27.792 31.5417H32.3753L28.6253 34.4584L29.8753 39.0417L26.3337 36.125L22.792 39.0417L24.042 34.4584L20.292 31.5417H24.8753L26.3337 26.9584Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.3337 26.9584L47.792 31.5417H52.3753L48.6253 34.4584L49.8753 39.0417L46.3337 36.125L42.792 39.0417L44.042 34.4584L40.292 31.5417H44.8753L46.3337 26.9584Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M66.3337 26.9584L67.792 31.5417H72.3753L68.6253 34.4584L69.8753 39.0417L66.3337 36.125L62.792 39.0417L64.042 34.4584L60.292 31.5417H64.8753L66.3337 26.9584Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M86.3337 26.9584L87.792 31.5417H92.3753L88.6253 34.4584L89.8753 39.0417L86.3337 36.125L82.792 39.0417L84.042 34.4584L80.292 31.5417H84.8753L86.3337 26.9584Z"
                  fill="#EAB308"
                  stroke="#EAB308"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M106.334 26.9584L107.792 31.5417H112.375L108.625 34.4584L109.875 39.0417L106.334 36.125L102.792 39.0417L104.042 34.4584L100.292 31.5417H104.875L106.334 26.9584Z"
                  fill="#9CA3AF"
                  stroke="#9CA3AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7629">
                  <rect
                    width="217.667"
                    height={66}
                    fill="white"
                    transform="translate(0.333496 6.10352e-05)"
                  />
                </clippath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-14 relative">
            <svg
              width={56}
              height={66}
              viewBox="0 0 56 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7632)">
                <rect width={56} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5"
                  x2={56}
                  y2="65.5"
                  stroke="#E7EAEE"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7632">
                  <rect width={56} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
            <svg
              width={56}
              height={66}
              viewBox="0 0 56 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7633)">
                <rect width={56} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5"
                  x2={56}
                  y2="65.5"
                  stroke="#E7EAEE"
                />
                <path
                  d="M29 27C29 27.5523 28.5523 28 28 28C27.4477 28 27 27.5523 27 27C27 26.4477 27.4477 26 28 26C28.5523 26 29 26.4477 29 27Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
                <path
                  d="M29 33C29 33.5523 28.5523 34 28 34C27.4477 34 27 33.5523 27 33C27 32.4477 27.4477 32 28 32C28.5523 32 29 32.4477 29 33Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
                <path
                  d="M29 39C29 39.5523 28.5523 40 28 40C27.4477 40 27 39.5523 27 39C27 38.4477 27.4477 38 28 38C28.5523 38 29 38.4477 29 39Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7633">
                  <rect width={56} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
            <svg
              width={56}
              height={66}
              viewBox="0 0 56 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7634)">
                <rect width={56} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5"
                  x2={56}
                  y2="65.5"
                  stroke="#E7EAEE"
                />
                <path
                  d="M29 27C29 27.5523 28.5523 28 28 28C27.4477 28 27 27.5523 27 27C27 26.4477 27.4477 26 28 26C28.5523 26 29 26.4477 29 27Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
                <path
                  d="M29 33C29 33.5523 28.5523 34 28 34C27.4477 34 27 33.5523 27 33C27 32.4477 27.4477 32 28 32C28.5523 32 29 32.4477 29 33Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
                <path
                  d="M29 39C29 39.5523 28.5523 40 28 40C27.4477 40 27 39.5523 27 39C27 38.4477 27.4477 38 28 38C28.5523 38 29 38.4477 29 39Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7634">
                  <rect width={56} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
            <svg
              width={56}
              height={66}
              viewBox="0 0 56 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7635)">
                <rect width={56} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5001"
                  x2={56}
                  y2="65.5001"
                  stroke="#E7EAEE"
                />
                <path
                  d="M29 27.0001C29 27.5523 28.5523 28.0001 28 28.0001C27.4477 28.0001 27 27.5523 27 27.0001C27 26.4478 27.4477 26.0001 28 26.0001C28.5523 26.0001 29 26.4478 29 27.0001Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
                <path
                  d="M29 33.0001C29 33.5523 28.5523 34.0001 28 34.0001C27.4477 34.0001 27 33.5523 27 33.0001C27 32.4478 27.4477 32.0001 28 32.0001C28.5523 32.0001 29 32.4478 29 33.0001Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
                <path
                  d="M29 39.0001C29 39.5523 28.5523 40.0001 28 40.0001C27.4477 40.0001 27 39.5523 27 39.0001C27 38.4478 27.4477 38.0001 28 38.0001C28.5523 38.0001 29 38.4478 29 39.0001Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7635">
                  <rect width={56} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
            <svg
              width={56}
              height={66}
              viewBox="0 0 56 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[66px] relative"
              preserveAspectRatio="none"
            >
              <g clip-path="url(#clip0_101_7636)">
                <rect width={56} height={66} fill="white" />
                <line
                  x1="4.37114e-8"
                  y1="65.5001"
                  x2={56}
                  y2="65.5001"
                  stroke="#E7EAEE"
                />
                <path
                  d="M29 27.0001C29 27.5523 28.5523 28.0001 28 28.0001C27.4477 28.0001 27 27.5523 27 27.0001C27 26.4478 27.4477 26.0001 28 26.0001C28.5523 26.0001 29 26.4478 29 27.0001Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
                <path
                  d="M29 33.0001C29 33.5523 28.5523 34.0001 28 34.0001C27.4477 34.0001 27 33.5523 27 33.0001C27 32.4478 27.4477 32.0001 28 32.0001C28.5523 32.0001 29 32.4478 29 33.0001Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
                <path
                  d="M29 39.0001C29 39.5523 28.5523 40.0001 28 40.0001C27.4477 40.0001 27 39.5523 27 39.0001C27 38.4478 27.4477 38.0001 28 38.0001C28.5523 38.0001 29 38.4478 29 39.0001Z"
                  fill="#111827"
                  stroke="#111827"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clippath id="clip0_101_7636">
                  <rect width={56} height={66} fill="white" />
                </clippath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="w-[1177px] h-9 absolute left-10 top-[635px] overflow-hidden rounded-bl-sm rounded-br-sm bg-gray-100">
          <div className="flex justify-start items-center absolute left-[1041px] top-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-gray-700">
              Rows per page: 4
            </p>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M13.3332 7.5H6.6665L9.99984 12.5L13.3332 7.5Z"
                fill="#374151"
              />
            </svg>
          </div>
          <div className="flex justify-start items-center absolute left-4 top-2.5 gap-2">
            <svg
              width={8}
              height={9}
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={4} cy="4.5" r={4} fill="#16A34A" />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-gray-700">
              Last updated 3:05pm PST
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-gray-700">
              Refresh
            </p>
          </div>
          <div className="flex justify-center items-center absolute left-[529px] top-1.5 gap-4">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M13.25 8.75L9.75 12L13.25 15.25"
                stroke="#4B5563"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-gray-700">
              1 of 24
            </p>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="#4B5563"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
