import React, { useEffect, useState } from "react";
import generalInsurance from "../assets/generalInsurance.jpg";
import { BiSolidCube } from "react-icons/bi";
import { MdNote } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { BsCarFront, BsJournalBookmarkFill } from "react-icons/bs";
import { GiLighthouse, GiExpense } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";

const ImageSection: React.FunctionComponent<{}> = () => {
  let [active, setActive] = useState<number>(1);

  useEffect(() => {});

  return (
    <div>
      <div className='bg-red-400 h-[30rem]'>
        <img src={generalInsurance} className='w-screen h-[30rem]' />
        <div className='flex justify-around'>
          <div className='mt-[-115px] pl-[4rem]'>
            <span className=' text-5xl text-[#e8e8e8]'>General Insurance</span>
          </div>
          {/* Image form */}
          <div className='mt-[-450px] bg-transparent h-[400px] shadow-lg shadow-gray-600/25 rounded-md overflow-hidden'>
            <div>
              <button
                className={`w-44 bg-${
                  active === 1 ? "white" : "#e8e8e8"
                } rounded-none`}
                onClick={() => {
                  setActive((active = 1));
                  console.log(active);
                }}>
                <p className='text-sm font-light text-[#706969d3] flex'>
                  {" "}
                  <BiSolidCube size={20} /> Quick Access
                </p>
              </button>
              <button
                className={`w-44 bg-${
                  active === 2 ? "white" : "#e8e8e8"
                } rounded-none`}
                onClick={() => {
                  setActive((active = 2));
                  console.log(active);
                }}>
                <p className='text-sm font-light text-[#706969d3] flex'>
                  {" "}
                  <MdNote size={20} /> Claims
                </p>
              </button>
              <button
                className={`w-44 text-center bg-${
                  active === 3 ? "white" : "#e8e8e8"
                } rounded-none`}
                onClick={() => {
                  setActive((active = 3));
                  console.log(active);
                }}>
                <p className='flex text-sm font-light text-[#706969d3]'>
                  <GrMail size={20} /> Contact
                </p>
              </button>
            </div>
            <ImageForm activeStatus={active} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;

const ImageForm = ({ activeStatus }: any) => {
  return (
    <>
      {(() => {
        switch (activeStatus) {
          case 1:
            return (
              <div className='flex-1 justify-center items-center'>
                <div className='grid grid-cols-3 mt-10 pt-6'>
                  <div className=''>
                    <a className='hover:cursor-pointer text-[#a50505] items-center flex flex-col hover:scale-105'>
                      <BsCarFront size={40} color={"#a50505"} />
                      <span className='text-[#706969d3]'>Salvage Portal</span>
                    </a>
                  </div>
                  <div className=''>
                    <a className='hover:cursor-pointer text-[#a50505] items-center flex flex-col hover:scale-105'>
                      <BsJournalBookmarkFill size={40} color={"#a50505"} />
                      <span className='text-[#706969d3]'>Trustees</span>
                    </a>
                  </div>
                  <div className=''>
                    <a className='hover:cursor-pointer text-[#a50505] items-center flex flex-col hover:scale-105'>
                      <FaHotel size={40} color={"#a50505"} />
                      <span className='text-[#706969d3]'>Festival Hotel</span>
                    </a>
                  </div>
                  <div className=' pt-16'>
                    <a className='hover:cursor-pointer text-[#a50505] items-center flex flex-col hover:scale-105'>
                      <GiLighthouse size={40} color={"#a50505"} />
                      <span className='text-[#706969d3]'>
                        UPDC Facility Mgr.
                      </span>
                    </a>
                  </div>
                  <div className='pt-16'>
                    <a className='hover:cursor-pointer text-[#a50505] items-center flex flex-col hover:scale-105'>
                      <GiExpense size={40} color={"#a50505"} />
                      <span className='text-[#706969d3]'>Pension Mgr.</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          case 2:
            return (
              <>
                <p>Claims</p>
              </>
            );
          case 3:
            return (
              <>
                <p>Contacts</p>
              </>
            );
          default:
            return null;
        }
      })()}
    </>
  );
};
