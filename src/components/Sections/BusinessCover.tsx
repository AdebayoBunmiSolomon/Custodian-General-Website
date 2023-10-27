import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const businessCover = [
  {
    leftBusinessCover: [
      {
        name: "Custodian Events Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Motor Vehicle Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Fire/Special Perils Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "Business Interruption Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Burglary/Housebreaking Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "Electronic Equipment Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Money Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "All Risks Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Business Owners Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Machinery Breakdown Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "Boiler and Pressure Plant Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Goods In Transit Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
    ],
    rightBusinessCover: [
      {
        name: "Contractors' All Risks Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "Group Personal Accident Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "Professional Indemnity Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Public Liability Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "Marine Cargo Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Marine Hull Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "Plants All Risks Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Builders LIability Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "Occupiers Liability Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Health Care Professional Indemnity Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
      {
        name: "Custodian SME Insurance Policy",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
      },
    ],
  },
];

const BusinessCover: React.FunctionComponent<{}> = () => {
  return (
    <>
      <div className='flex flex-col items-center md:flex-col md:items-center lg:flex-col lg:items-center'>
        <div className=' w-[80%] md:w-[70%] lg:w-[85%] pt-4 pb-5'>
          <div className=' border-b-[1px] pb-1'>
            <span className='font-normal text-xl border-b-2 border-b-[#a50505] pb-[0.28rem] text-[#444444]'>
              Business Cover
            </span>
          </div>
        </div>
        <div className='flex flex-col space-y-10 w-[90%] md:w-[90%] lg:w-[85%] md:flex-col md:items-center md:space-y-10 lg:flex-row lg:justify-around lg:space-x-10'>
          <div className='w-[98%] md:w-[90%] lg:[45%] border-r-[1px] border-b-2 hover:shadow-2xl hover:shadow-gray-600/25'>
            {businessCover.map((busCover, index) => {
              return (
                <div key={index} className='pb-8 pl-5 md:pl-6 lg:pl-7 pt-14'>
                  {busCover.leftBusinessCover &&
                    busCover.leftBusinessCover.map((leftList, index) => {
                      return (
                        <ul key={index}>
                          <li className='flex w-[93%] bg-[#a50505] pt-3 pb-3 mb-1 rounded-[5px] justify-between pl-3 text-[#FFFFFF] text-sm hover:cursor-pointer'>
                            <span>{leftList.name}</span>
                            <span>{leftList.icon}</span>
                          </li>
                        </ul>
                      );
                    })}
                </div>
              );
            })}
          </div>
          <div className='w-[98%] md:w-[90%] lg:[45%] border-r-[1px] border-b-2 hover:shadow-2xl hover:shadow-gray-600/25'>
            {businessCover.map((busCover, index) => {
              return (
                <div key={index} className='pb-5 pl-5 md:pl-6 lg:pl-7 pt-14'>
                  {busCover.rightBusinessCover &&
                    busCover.rightBusinessCover.map((rightList, index) => {
                      return (
                        <ul key={index}>
                          <li className='flex w-[93%] bg-[#a50505] pt-3 pb-3 mb-1 rounded-[5px] justify-between pl-3 text-[#FFFFFF] text-sm hover:cursor-pointer'>
                            {rightList.name}
                            {rightList.icon}
                          </li>
                        </ul>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCover;
