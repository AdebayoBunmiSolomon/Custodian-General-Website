import React from "react";

const ourGoals = [
  {
    list: "To position ourselves strategically in the market and be perceived as a modern, dynamic and resourceful underwriter.",
  },
  {
    list: "To strike a fine balance between the businesses of sound underwriting, cost control and service on one hand and investment on the other.",
  },
  {
    list: "To assemble a seasoned team of professionals who would, with the aid of modern information processing techniques, deliver qualitative, fast and efficient service to our select clientele.",
  },
  {
    list: "To provide services that extend beyond national frontiers and ultimately establish and operate in the ECOWAS sub-region.",
  },
];

const Vision: React.FunctionComponent<{}> = () => {
  return (
    <>
      <div className='flex bg-[#F8F8F9] h-[900px] flex-col items-center md:h-[700px] lg:h-[371px] md:flex-col md:items-center lg:flex-row lg:justify-around pt-14'>
        <div className='w-[78%] md:w-[68%] lg:w-[38%]'>
          <div>
            <h2 className='mb-5 font-[350] text-[#444444] text-xl'>
              Our Vision
            </h2>
            <p className='text-[14.5px] text-[#757575]'>
              To be Africa's Insurer of Choice
            </p>
          </div>
          <br />
          <div>
            <h2 className='mb-5 font-[350] text-[#444444] text-xl'>
              Our Mission
            </h2>
            <p className=' text-justify text-[14.5px] text-[#757575]'>
              <span className='font-medium'>CAIL’S</span> mission is to develop,
              and deliver innovative insurance products <br />
              that best satisfy customer needs, whilst operating a highly
              profitable, efficient,
              <br /> resourceful and ethical organisation.
            </p>
          </div>
        </div>
        <div className='w-[87%] md:w-[77%] lg:w-[52%] mt-7 lg:mt-0 md:mt-6 '>
          <div>
            <h2 className='mb-5 font-[350] text-[#444444] text-xl'>
              Our Goals
            </h2>
            <div>
              <ul className='text-justify'>
                {ourGoals.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className=' text-[14.5px] text-[#757575] p-1 list-disc'>
                      {item.list}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
