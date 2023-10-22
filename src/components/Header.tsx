import React, { useEffect, useState } from "react";
import Custodian_Logo from "../assets/custodian_logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const headerLink = [
  {
    link: "ABOUT US",
    children: [
      {
        link: "About us",
      },
      // {
      //   link: "Subsidiaries",
      //   icon: <MdOutlineKeyboardArrowRight size={20} />,
      //   children: [
      //     {
      //       link: "Custodian And Allied Insurance Ltd",
      //     },
      //     {
      //       link: "Custodian Life Assurance Ltd",
      //     },
      //     {
      //       link: "Custodian Trustees Ltd",
      //     },
      //     {
      //       link: "Custodian Sterling Pensions Ltd",
      //     },
      //     {
      //       link: "UPDC Plc",
      //     },
      //   ],
      // },
      {
        link: "Investor relations",
        icon: <MdOutlineKeyboardArrowRight size={20} />,
        children: [
          {
            link: "Financials",
          },
          {
            link: "Whistle Blowing Policy",
          },
          // {
          //   link: "Securities Trading Policy",
          // },
          {
            link: "Stakeholder Management and Communication Policy",
          },
          {
            link: "Complaints Management Policy",
          },
          {
            link: "Notice of AGM by Proxy",
          },
          // {
          //   link: "E-Dividend Mandate Card",
          // },
          {
            link: "Complaint Lodgement",
          },
          {
            link: "Nigeria Code of Corporate Governance",
          },
          {
            link: "AGM Live Streaming",
          },
          // {
          //   link: "Unclaimed Dividends List",
          // },
        ],
      },
      {
        link: "Resource center",
      },
    ],
  },
  {
    link: "PRODUCTS",
    children: [
      {
        link: "General Insurance Products",
        icon: <MdOutlineKeyboardArrowRight size={20} />,
        children: [
          {
            link: "Auto Insurance",
          },
          {
            link: "Travel Insurance",
          },
          {
            link: "Home Insurance",
          },
          {
            link: "Safety Plus",
          },
          {
            link: "Events Insurance",
          },
          {
            link: "Others",
          },
        ],
      },
      // {
      // link: "Life Insurance Products",
      // icon: <MdOutlineKeyboardArrowRight size={20} />,
      // children: [
      // {
      //   link: "Savings & Investment",
      //   icon: <MdOutlineKeyboardArrowRight size={20} />,
      //   children: [
      //     {
      //       link: "Capital Builder",
      //     },
      //     {
      //       link: "Esusu Shield",
      //     },
      //     {
      //       link: "Personal Provident Plan",
      //     },
      //     {
      //       link: "Investment Plus Plan",
      //     },
      //     {
      //       link: "Wealth Plus Plan",
      //     },
      //   ],
      // },
      // {
      //   link: "Endowment Policies",
      //   icon: <MdOutlineKeyboardArrowRight size={20} />,
      //   children: [
      //     {
      //       link: "Education Endowment",
      //     },
      //     {
      //       link: "Life Time Harvest",
      //     },
      //     {
      //       link: "Ordinary Endowment",
      //     },
      //   ],
      // },
      // {
      //   link: "Protection",
      //   icon: <MdOutlineKeyboardArrowRight size={20} />,
      //   children: [
      //     {
      //       link: "Term Assurance",
      //     },
      //     {
      //       link: "Whole Life Assurance",
      //     },
      //     {
      //       link: "Dignity Plan",
      //     },
      //     {
      //       link: "Tuition Protection",
      //     },
      //     {
      //       link: "Critical Illness Cover",
      //     },
      //   ],
      // },
      // {
      //   link: "Annuities",
      //   icon: <MdOutlineKeyboardArrowRight size={20} />,
      //   children: [
      //     {
      //       link: "Deferred Anuity",
      //     },
      //     {
      //       link: "Immediate Anuity",
      //     },
      //     {
      //       link: "Retiree Life Anuity",
      //     },
      //   ],
      // },
      // {
      //   link: "Corporate",
      //   icon: <MdOutlineKeyboardArrowRight size={20} />,
      //   children: [
      //     {
      //       link: "Group Credit Life",
      //     },
      //     {
      //       link: "Group Life",
      //     },
      //   ],
      // },
      // {
      //   link: "Others",
      // },
      // ],
      // },
      {
        link: "Trustees",
      },
      {
        link: "Pensions",
      },
      {
        link: "Real Estate",
      },
    ],
  },
  // {
  //   link: "KEY MOMENTS",
  // },
  {
    link: "CAREERS",
  },
  // {
  //   link: "CSR",
  // },
  {
    link: "CLAIM",
  },
  {
    link: "CONTACT",
    children: [
      {
        link: "Contact us",
      },
      {
        link: "Our Branches",
      },
    ],
  },
];

const Header: React.FunctionComponent<{}> = () => {
  let [link, setLink] = useState<any>();
  let [linkName, setLinkName] = useState<any>();
  let [subLink, setSubLink] = useState<any>();
  let [subLinkName, setSubLinkName] = useState<any>();
  let [subSubLink, setSubSubLink] = useState<any>();
  let [subSubLinkName, setSubSubLinkName] = useState<any>();
  let [isMobile, setIsMobile] = useState<boolean>(false);
  let [showDropDown, setShowDropDown] = useState<boolean>(false);
  let [showList, setShowList] = useState<boolean>(false);

  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
    };
  };
  const [screenSize, setScreenSize] = useState<any>(getCurrentDimension());

  // const handleResize = () => {
  //   if (window.innerWidth <= 768) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      {screenSize.width <= 768 ? (
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
                          <a className='flex justify-center text-white hover:cursor-pointer hover:text-amber-300 text-[12px] md:text-[12px] lg:text-[14px] duration-500 pb-3'>
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
                                        <a className='text-[#e8e8e8] hover:text-[#a50505] flex justify-center'>
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
                                                      <a className='text-[#e8e8e8] hover:text-[#a50505] flex justify-center'>
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
      ) : (
        // To show normal heading
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
                        // if (link === "" && linkName === "") {
                        //   setLink((link = hLink.children));
                        //   setLinkName((linkName = hLink.link));
                        // } else {
                        //   setLink("");
                        //   setLinkName("");
                        // }
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
                                      setSubLink(
                                        (subLink = childLink.children)
                                      );
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
      )}
    </>
  );
};

export default Header;
