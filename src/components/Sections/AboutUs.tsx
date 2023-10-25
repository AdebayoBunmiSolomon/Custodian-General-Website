import React from "react";

const AboutUs: React.FunctionComponent<{}> = () => {
  return (
    <>
      <div className=' flex flex-col items-center md:flex-col lg:flex-row lg:justify-around md:items-center'>
        <div className=' w-[80%] md:w-[70%] lg:w-[45%]'>
          <div className=' border-b-[1px] pb-1'>
            <span className='font-normal text-xl border-b-2 border-b-[#a50505] pb-[0.28rem] text-[#757575]'>
              ABOUT US
            </span>
          </div>
          <p className='font-normal text-justify text-[14.5px] mt-7 text-[#757575]'>
            Custodian & Allied Insurance is a wholly owned Nigerian Company.
            CAIL’s sole purpose is to develop, package and deliver innovative
            insurance products that best satisfy customer needs, whilst
            operating a highly profitable, efficient, resourceful and ethical
            organization that will survive well into the future and be a
            valuable asset to its shareholders. <br />
            <br />
            CAIL’s Board comprises individuals who have proven track records in
            their various fields of endeavor, thereby bringing several years of
            experience to bear upon the Board. <br />
            <br />
            CAIL is a registered member of the Nigerian Insurers Association
            (NIA) and is approved by other regulatory bodies in Nigeria to offer
            Insurance Services.
          </p>
        </div>
        <div className='w-[400px] h-[300px] md:w-[450px] md:h-[350px] lg:w-[529px] lg:h-[382px] bg-white justify-center items-center flex shadow-lg shadow-gray-600/25 rounded-lg mt-5 lg:mt-3 md:mt-4'>
          <iframe
            className='w-[380px] h-[280px] lg:w-[500px] lg:h-[361px] md:w-[430px] md:h-[330px]'
            src='https://www.youtube.com/embed/42w-3h75vww?si=BISWbjqoisEuXDXR'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen={false}></iframe>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
