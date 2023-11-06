import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Parser from "html-react-parser";

interface businessCoverForm {
  name: string;
  info: string;
  href: string;
  closeForm: any;
}

const BusinessCoverForm: React.FunctionComponent<businessCoverForm> = ({
  name,
  info,
  href,
  closeForm,
}) => {
  return (
    <div className='flex justify-center items-center w-full h-full top-0 left-0 right-0 fixed bg-[#000000b0] z-10 overflow-y-scroll pb-10'>
      <div className='flex flex-col bg-[#FFFFFF] w-[70%] rounded-md overflow-hidden mt-[120rem] md:mt-[65rem] lg:mt-[35rem]'>
        <div className='flex flex-row bg-[#f9f9f9] border-b-[1px] justify-between pl-4 pr-4 items-center pt-3 pb-3'>
          <div>
            <h3 className='font-medium text-[#444444]'>{name}</h3>
          </div>
          <div>
            <button
              onClick={() => {
                closeForm();
              }}>
              <AiOutlineCloseCircle size={20} color={"#444444"} />
            </button>
          </div>
        </div>
        <div className='pb-10'>
          <div className='text-justify font-[370] text-[13.5px] mt-7 text-[#444444] pl-10 pr-10'>
            {Parser(info)}
          </div>
        </div>
        <div className='pb-10'>
          {href && (
            <div className='flex flex-row justify-center'>
              <a href={href}>
                <button
                  className='bg-[#a50505] focus:outline-none 
              focus:ring duration-500 hover:cursor-pointer w-[170px]
            hover:bg-[white] hover:text-[#a50505] text-white rounded-md border-[1px] border-white'>
                  GET A QUOTE
                </button>
              </a>
            </div>
          )}
        </div>
        <div className='flex flex-row bg-[#f9f9f9] border-t-[1px] justify-end pr-4 items-center pt-3 pb-3'>
          <button
            onClick={() => {
              closeForm();
            }}
            className='bg-[#e9e8e8] focus:outline-none 
              focus:ring duration-500 hover:cursor-pointer
            hover:bg-[white] hover:text-[#a50505] text-[#757575] rounded-md border-[1px] border-white'>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCoverForm;
