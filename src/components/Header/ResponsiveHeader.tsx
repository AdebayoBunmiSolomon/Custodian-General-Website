import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Custodian_Logo from "../../assets/custodian_logo.png";
import { headerLink } from "./MenuItem";

const ResponsiveHeader: React.FunctionComponent<{}> = () => {
  let [link, setLink] = useState<any>();
  let [linkName, setLinkName] = useState<any>();
  let [subLink, setSubLink] = useState<any>();
  let [subLinkName, setSubLinkName] = useState<any>();
  let [subSubLink, setSubSubLink] = useState<any>();
  let [subSubLinkName, setSubSubLinkName] = useState<any>();
  let [showDropDown, setShowDropDown] = useState<boolean>(false);
  let [showList, setShowList] = useState<boolean>(false);

  return (
    <>
      <header
        className={`top-0 left-0 right-0 w-full fixed h-[90px] lg:h-[90px] md:h-[90px] bg-[#a50505]`}>
        <div className='flex flex-row justify-between pl-8 pr-8'>
          <div className='pt-5'>
            <img
              src={Custodian_Logo}
              className='w-[100px] lg:w-[150px] md:w-[130px]'
            />
          </div>
          <div className='pt-5'>
            <button
              className=' bg-red-700'
              onClick={() => {
                setShowDropDown((showDropDown = !showDropDown));
              }}>
              <FiMenu size={20} color={"white"} />
            </button>
          </div>
        </div>
        {showDropDown === true ? (
          <div className='bg-[#a50505] w-screen justify-center h-[300px] overflow-y-scroll flex'>
            <div className='flex flex-col'>
              <div>
                <ul className=''>
                  {headerLink.map((hLink, index) => {
                    return (
                      <li
                        className='pt-9 hover:border-b hover:border-amber-300'
                        onClick={() => {
                          setLink((link = hLink.children));
                          setLinkName((linkName = hLink.link));
                          // console.log(link, " ", linkName);
                        }}
                        key={index}>
                        <a
                          className='flex justify-center text-white hover:cursor-pointer hover:text-amber-300 text-[12px] md:text-[12px] lg:text-[14px] duration-500 pb-3'
                          href={hLink.href}>
                          {hLink.link}
                          {hLink.children && (
                            <MdOutlineKeyboardArrowDown size={20} />
                          )}
                        </a>
                        {/* Sub list */}
                        <ul className='w-[95vw] top-[5.65rem] bg-[#a50505]'>
                          {link && linkName === hLink.link
                            ? link.map((childLink: any, index: number) => {
                                return (
                                  <>
                                    <li
                                      onClick={() => {
                                        setSubLink(
                                          (subLink = childLink.children)
                                        );
                                        setSubLinkName(
                                          (subLinkName = childLink.link)
                                        );
                                        setShowList((showList = !showList));
                                        // console.log(subLinkName, " ", subLink);
                                      }}
                                      key={index}
                                      className='p-3 text-[12px] hover:cursor-pointer hover:bg-[#e8e8e8] duration-500'>
                                      <a
                                        className='text-[#e8e8e8] hover:text-[#a50505] flex justify-center'
                                        href={childLink.href}>
                                        {childLink.link}
                                        {childLink.icon}
                                      </a>
                                      {/* Sub link drop-down */}
                                      <ul className='w-[91.5vw] bg-[#a50505] top-0'>
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
                                                    className='p-3 text-[12px] hover:cursor-pointer hover:bg-[#e8e8e8] duration-500'>
                                                    <a
                                                      className='text-[#e8e8e8] hover:text-[#a50505] flex justify-center'
                                                      href={subChildLink.href}>
                                                      {subChildLink.link}
                                                      {subChildLink.icon}
                                                    </a>
                                                    <ul className='w-[13rem] bg-white shadow-lg shadow-gray-600/25 top-0'>
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
                                                                  <a className='text-[#a50505] hover:text-[#a50505] flex justify-between'>
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
              <div>
                <div className='flex flex-col space-y-5 items-center w-[91.5vw]'>
                  <div className='flex flex-col space-y-6 pt-9 items-center'>
                    <a className='pb-3 hover:cursor-pointer text-white hover:text-amber-500'>
                      <AiOutlineTwitter size={20} />
                    </a>
                    <a className=' pb-3 hover:cursor-pointer text-white hover:text-amber-500 '>
                      <BiLogoFacebook size={20} />
                    </a>
                    <a className=' pb-3 hover:cursor-pointer text-white hover:text-amber-500 '>
                      <AiOutlineInstagram size={20} />
                    </a>
                  </div>
                  <div className='pt-6 pb-3'>
                    <button
                      className='bg-[#a50505] focus:outline-none 
              focus:ring duration-500 hover:cursor-pointer 
            hover:bg-[white] hover:text-[#a50505] text-white rounded-md border-[1px] border-white'>
                      Chat Max
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default ResponsiveHeader;
