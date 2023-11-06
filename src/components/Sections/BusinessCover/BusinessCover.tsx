import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import BusinessCoverForm from "./BusinessCoverForm";

const businessCover = [
  {
    leftBusinessCover: [
      {
        name: "Custodian Events Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "<span className=' leading-loose'>Hosting an event is a big investment; one that comes with many uncertainties no matter how well you plan the event. Custodian Events Insurance can help you secure this investment as it protects the policy holder from any unforeseen circumstances which could lead to public liability claims, accidental injuries to guests, loss or damage of event equipment, professional liability claims as well as employee liability claims.<br/> Furthermore, Custodian Events Insurance can be extended to cover event cancellation due to specified causes and also litigation cost incurred by the Insured with the consent of the Insurer.<span><h3 className='font-medium text-sm pt-5 pb-5 text-[#A42F33]'>Benefits of the Policy</h3><ul className='list-disc pl-6'><li>Gives peace of mind to all stakeholders i.e. Event planner, Principal, Guest and Venue Owners.</li><li>Provides compensation to guests and employees for medical expenses - bodily injuries and temporary disabilities occurring at the venue of the event.</li><li>Provides protection for the event planner in the event of public liability claims made in respect of death /bodily injuries to Third Party Persons as well as damage to properties during the event and at the venue.</li><li>Eases the financial losses associated with cancellation of events.</li><li>Provides the widest insurance coverage compared to others in the market.</li></ul></span><span><h3 className='font-medium text-sm pt-5 pb-5 text-[#A42F33]'>Features of the Policy</h3><p>The Event Insurance policy is specially designed to include features of the following classes of insurance:<br/></p><ul className='list-disc pl-6'><li><span className='font-bold'>Public Liability Insurance</span> which covers the Insured's legal liability to pay damages, claimant's costs and expenses which arise as a result of injuries to invited guests and third parties arising out of and in connection with the event.</li><li><span className='font-bold'>Professional Liability Insurance</span> which provides cover for the insured in respect of any loss or liability arising from any claim or claims for breach of professional duty by reason of any neglect, error or omission committed in the conduct of the insured's business in it's professional capacity or any person in the employment of the insured.</li><li><span className='font-bold'>Event Equipment Insurance -</span> provides cover for the loss of, or damage to the insured's equipment or equipment the insured is responsible for during and in association with the event.</li><li><span className='font-bold'>Employee Accident Benefit Insurance - </span>provides compensation to employees for death or bodily injury by accident or disease arising out of and in the course of the event / employment with the insured.</li><li><span className='font-bold'>Event Cancellation Insurance - </span>protects the expenses already incurred on an event against cancellation due to circumstances beyond the insured's control. These circumstances can include, but are not limited to severe/adverse weather; Riots, Strikes and labour disturbances; unavailability of the venue due to fires, floods etc</li></ul></span></span>",
        href: "https://custodianplc.com.ng/events-insurance",
      },
      {
        name: "Motor Vehicle Insurance",
        icon: <RiArrowRightSLine size={20} color={"#ffffff"} />,
        info: "....",
        href: "",
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
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    info: "",
    href: "",
  });
  return (
    <>
      <div
        className={`flex flex-col items-center md:flex-col md:items-center lg:flex-col lg:items-center`}>
        <div className=' w-[80%] md:w-[70%] lg:w-[85%] pt-4 pb-5'>
          <div className=' border-b-[1px] pb-1'>
            <span className='font-normal text-xl border-b-2 border-b-[#a50505] pb-[0.28rem] text-[#444444]'>
              Business Cover
            </span>
          </div>
        </div>
        <div className='flex flex-col w-[90%] md:w-[90%] md:flex md:flex-col lg:w-[85%] lg:flex lg:flex-row lg:justify-around'>
          <div className='w-[98%] md:w-[90%] lg:[45%] border-r-[1px] border-b-2 hover:shadow-2xl hover:shadow-gray-600/25'>
            {businessCover.map((busCover, index) => {
              return (
                <div key={index} className='pb-8 pl-5 md:pl-6 lg:pl-7 pt-14'>
                  {busCover.leftBusinessCover &&
                    busCover.leftBusinessCover.map((leftList, index) => {
                      return (
                        <ul
                          key={index}
                          onClick={() => {
                            setShowForm(!false);
                            setFormInfo({
                              ...formInfo,
                              name: leftList.name,
                              info: leftList.info,
                              href: leftList.href,
                            });
                          }}>
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
          <div className='w-[98%] mt-20 md:w-[90%] md:mt-20 lg:[45%] lg:mt-0 border-r-[1px] border-b-2 hover:shadow-2xl hover:shadow-gray-600/25'>
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
      {showForm === true ? (
        <>
          <BusinessCoverForm
            name={formInfo.name}
            info={formInfo.info}
            href={formInfo.href}
            closeForm={() => {
              setShowForm(!showForm);
            }}
          />
        </>
      ) : null}
    </>
  );
};

export default BusinessCover;
