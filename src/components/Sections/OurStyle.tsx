import React from "react";

const OurStyle: React.FunctionComponent<{}> = () => {
  return (
    <>
      <div className=' flex flex-row justify-center border-t-[1px] border-b-[1px]'>
        <div className=' w-[80%] md:w-[70%] lg:w-[85%] pt-4 pb-5'>
          <div className=' border-b-[1px] pb-1'>
            <span className='font-normal text-xl border-b-2 border-b-[#a50505] pb-[0.28rem] text-[#444444]'>
              Our Style
            </span>
          </div>
          <p className='font-normal text-justify text-[14.5px] mt-7 text-[#757575]'>
            Insurance Companies, like most financial institutions, operate in an
            increasingly competitive environment.
            <br />
            <br />
            At CAI however, the uniqueness of our service delivery is in our
            ability to provide fast, efficient and highly professional service
            to the market in which we operate. This we are able to achieve
            through the automation of our various lines of operation, thereby
            reducing processing time and ultimately acquiring the much desired
            competitive edge.
            <br />
            <br />
            In addition, our products and operations are essentially
            market-driven with emphasis on providing a wide menu of option on
            policies, having paid due regard to production processes employed in
            various industries.
            <br />
            <br />
            Our total commitment and focus is to strike a fine balance between
            sound underwriting, cost control, service and investment of our
            various clients.
            <br />
            <br />
            The Company is an efficient and fully automated company with a sharp
            focus on the wholesale corporate client market.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurStyle;
