import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Custodian_Logo from "../../assets/custodian_logo.png";
import { headerLink } from "./MenuItem";

const MainHeader: React.FunctionComponent<{}> = () => {
  let [link, setLink] = useState<any>();
  let [linkName, setLinkName] = useState<any>();
  let [subLink, setSubLink] = useState<any>();
  let [subLinkName, setSubLinkName] = useState<any>();
  let [subSubLink, setSubSubLink] = useState<any>();
  let [subSubLinkName, setSubSubLinkName] = useState<any>();
  let [showList, setShowList] = useState<boolean>(false);
  return (
    <>
      <header
        className={`top-0 left-0 right-0 w-full fixed h-[90px] lg:h-[90px] md:h-[90px] bg-[#a50505]`}>
        <div className='flex flex-row justify-around'>
          {/* nav links */}
          <div className='pt-3'>
            <img
              src={Custodian_Logo}
              className='w-[100px] lg:w-[150px] md:w-[130px]'
            />
          </div>
          <div>
            <ul className=''>
              {headerLink.map((hLink, index) => {
                return (
                  <li
                    className='inline-block pl-3 md:pl-4 lg;pl-5 pt-9 relative'
                    onClick={() => {
                      setLink((link = hLink.children));
                      setLinkName((linkName = hLink.link));
                    }}
                    key={index}>
                    <a className='flex text-white hover:cursor-pointer hover:text-amber-300 text-[10px] md:text-[12px] lg:text-[14px] duration-500'>
                      {hLink.link}
                      {hLink.children && (
                        <MdOutlineKeyboardArrowDown size={20} />
                      )}
                    </a>
                    {/* Sub list */}
                    <ul className='absolute w-52 top-[5.65rem] bg-white shadow-lg shadow-gray-600/25'>
                      {link && linkName === hLink.link
                        ? link.map((childLink: any, index: number) => {
                            return (
                              <>
                                <li
                                  onClick={() => {
                                    setSubLink((subLink = childLink.children));
                                    setSubLinkName(
                                      (subLinkName = childLink.link)
                                    );
                                    setShowList((showList = !showList));
                                  }}
                                  key={index}
                                  className='p-3 text-[12px] border-b border-[#e8e8e8] hover:cursor-pointer hover:bg-[#e8e8e8] duration-500 relative'>
                                  <a className='text-[#a50505] hover:text-[#a50505] flex justify-between'>
                                    {childLink.link}
                                    {childLink.icon}
                                  </a>
                                  {/* Sub link drop-down */}
                                  <ul className='absolute left-[13.05rem] w-[23rem] bg-white shadow-lg shadow-gray-600/25 top-0'>
                                    {subLink &&
                                    subLinkName === childLink.link &&
                                    showList === true
                                      ? subLink.map(
                                          (
                                            subChildLink: any,
                                            index: number
                                          ) => {
                                            return (
                                              <li
                                                onClick={() => {
                                                  setSubSubLink(
                                                    (subSubLink =
                                                      subChildLink.children)
                                                  );
                                                  setSubSubLinkName(
                                                    (subSubLinkName =
                                                      subChildLink.link)
                                                  );
                                                  console.log(
                                                    subSubLinkName,
                                                    " ",
                                                    subSubLink
                                                  );
                                                }}
                                                key={index}
                                                className='p-3 text-[12px] border-b border-[#e8e8e8] hover:cursor-pointer hover:bg-[#e8e8e8] duration-500  relative'>
                                                <a className='text-[#a50505] hover:text-[#a50505] flex justify-between'>
                                                  {subChildLink.link}
                                                  {subChildLink.icon}
                                                </a>
                                                <ul className='absolute left-[23.1rem] w-[13rem] bg-white shadow-lg shadow-gray-600/25 top-0'>
                                                  {subSubLink &&
                                                  subSubLinkName ===
                                                    subChildLink.link
                                                    ? subSubLink.map(
                                                        (
                                                          subSubChildLink: any,
                                                          index: number
                                                        ) => {
                                                          return (
                                                            <li
                                                              key={index}
                                                              className='p-3 text-[12px] border-b border-[#e8e8e8] hover:cursor-pointer hover:bg-[#e8e8e8] duration-500'>
                                                              <a className='text-[#a50505] hover:text-[#a50505] flex justify-between relative'>
                                                                {
                                                                  subSubChildLink.link
                                                                }
                                                              </a>
                                                            </li>
                                                          );
                                                        }
                                                      )
                                                    : null}
                                                </ul>
                                              </li>
                                            );
                                          }
                                        )
                                      : null}
                                  </ul>
                                </li>
                              </>
                            );
                          })
                        : null}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Social media and max */}
          <div className='flex space-x-5'>
            <div className='flex space-x-6 pt-9'>
              <a className='hover:cursor-pointer text-white hover:text-amber-500'>
                <AiOutlineTwitter size={20} />
              </a>
              <a className='hover:cursor-pointer text-white hover:text-amber-500'>
                <BiLogoFacebook size={20} />
              </a>
              <a className='hover:cursor-pointer text-white hover:text-amber-500'>
                <AiOutlineInstagram size={20} />
              </a>
            </div>
            <div className='pt-6'>
              <button
                className='bg-[#a50505] focus:outline-none 
              focus:ring duration-500 hover:cursor-pointer 
            hover:bg-[white] hover:text-[#a50505] text-white rounded-md border-[1px] border-white'>
                Chat Max
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
