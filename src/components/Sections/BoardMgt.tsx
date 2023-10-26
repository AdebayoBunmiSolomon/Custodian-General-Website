import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const boardMgt = [
  {
    directors: [
      {
        name: "Mr. Edeki Isujeh",
        position: "Managing Director",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Mr. Isujeh has over thirty years’ experience in the Insurance Industry, having worked in different insurance companies in Insurance Operations, Sales/Business Development and General Management. At Custodian, he has at various times coordinated the Marketing and Technical Operations of the company. As a result of his commitment and hard work, he was appointed Executive Director of the company in 2016.{'\n'}He holds a Bachelor of Science degree in Insurance from the University of Lagos and is a member of the Chartered Insurance Institute, London. Aside from various Technical courses attended in and outside Nigeria, he has over the years attended management courses preparing him for leadership role. He is an Alumnus of the Lagos Business School as well as the prestigious Wharton Business School, USA where he attended Executive programmes.",
      },
      {
        name: "Mr. Kolawale Lamidi",
        position: "Managing Director",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mr. Ravi Sharma",
        position: "",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mr. Ademola Ajuwon",
        position: "",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mr. Kofo Majekodunmi",
        position: "",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mrs. Mimi Ade-Odiachi",
        position: "",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
    ],
    management: [
      {
        name: "Mr Edeki Isujeh",
        position: "Managing Director",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mr Kolawale Lamidi",
        position: "Executive Director",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mr Abayomi Agiri",
        position: "Head of Directorate - Human Resources",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mr Friday Nwachukwu",
        position: "Chief Financial Officer",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mr Moses Ariyibi",
        position: "Head, Engineering",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mr Olumide Awe",
        position: "Head, Investment",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
      {
        name: "Mrs Kate Ojih",
        position: "Head, Northern Region",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
      },
    ],
  },
];

const BoardMgt: React.FunctionComponent<{}> = () => {
  return (
    <>
      <div className='flex justify-around'>
        <div className=' w-[80%] md:w-[70%] lg:w-[42%]'>
          <div className=' border-b-[1px] pb-1'>
            <span className='font-normal text-xl border-b-2 border-b-[#a50505] pb-[0.28rem] text-[#757575]'>
              Board Of Directors
            </span>
          </div>
          {boardMgt.map((items, index) => {
            return (
              <div key={index}>
                {items.directors &&
                  items.directors.map((dirList, index) => {
                    return (
                      <ul>
                        <li
                          key={index}
                          className='relative flex pt-4 border-b pb-3 text-sm text-[#444444] hover:cursor-pointer'>
                          {dirList.icon}
                          <span className='font-[350]'>
                            {dirList.name}&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span className='font-medium text-[#A42F33]'>
                            {dirList.position}
                          </span>
                          {/* <ul className='absolute'>
                            <li className='text-justify relative top-9'>
                              {dirList.info}
                            </li>
                          </ul> */}
                        </li>
                      </ul>
                    );
                  })}
              </div>
            );
          })}
        </div>
        <div className='bg-[#bdbbbb63] w-[1.25px]'></div>
        <div className=' w-[80%] md:w-[70%] lg:w-[42%]'>
          <div className=' border-b-[1px] pb-1'>
            <span className='font-normal text-xl border-b-2 border-b-[#a50505] pb-[0.28rem] text-[#757575]'>
              Management Team
            </span>
          </div>
          {boardMgt.map((items, index) => {
            return (
              <div key={index}>
                {items.management &&
                  items.management.map((mgtList, index) => {
                    return (
                      <ul>
                        <li
                          key={index}
                          className='relative flex pt-4 border-b pb-3 text-sm text-[#444444] hover:cursor-pointer'>
                          {mgtList.icon}
                          <span className='font-[350]'>
                            {mgtList.name}&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                          <span className='font-medium text-[#A42F33]'>
                            {mgtList.position}
                          </span>
                        </li>
                      </ul>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BoardMgt;
