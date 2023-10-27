import React, { useState } from "react";
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
        info: "Kola holds a Bachelor degree in Philosophy & Political Science and a Masters Degree in Managerial Psychology (MMP) both from the University of Ibadan. His professional experience of over two decades cuts across various functions such as Technical, Marketing and Branch Operations. He has at various times worked in UNIC Insurance Plc, Trust & Guarantee Insurance Limited as well as Crusader General Insurance Limited which merged with Custodian and Allied Insurance Limited in 2013. He is an Associate Member of the Chartered Insurance Institute of Nigeria (ACIIN) and an alumnus of Lagos Business School (SMP59). Kola has attended many Insurance, Marketing and Management courses and seminars both locally and abroad.",
      },
      {
        name: "Mr. Ravi Sharma",
        position: "",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Ravi is a Partner with Aureos Nigeria Advisers Limited with over 10 years’ experience obtained in the fields of private banking, investment banking and private equity. He joined Aureos in 2001 as a consultant and was a key member of the local team that participated in the establishment of the Aureos West Africa Fund LLC (AWAF) in 2003; which included opening a new office for Aureos in Nigeria and subsequently the Aureos Africa Fund LLC (AAF) in 2008. Prior to joining Aureos Nigeria Advisers, Ravi worked for Aureos Ghana Advisers, where he was involved in 11 exits from Ghana Venture Capital Funds (GVCF) portfolio companies. Since relocating to Nigeria, Ravi has been responsible for sourcing, structuring, monitoring and exiting investments across various sectors. He has been instrumental in the investment of over US$65 million of Aureos Funds in Nigeria. He was also responsible for the partial divestment from two of the AWAF portfolio companies in Nigeria. Ravi sits on the board of nine (9) Aureos portfolio companies. His previous experience was gained in private and investment banking with Barclays Private Bank (London) and TAIB Bank (London). Ravi holds an MBA from the University of Wales and has a B.Sc. in Economics & Accounting from the City University, London.",
      },
      {
        name: "Mr. Ademola Ajuwon",
        position: "",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "‘Demola is an accomplished executive with domestic and international experience in Financial Control, ERP Systems Integration, Project Management, Capital Sourcing, Treasury Management and Investment Appraisal. A 1984 graduate of Accounting from the University of Benin and winner of the prestigious CJ Buck’s prize for excellent score in Management Accounting at the final examination of the Institute of Chartered Accountants of Nigeria (May, 1986), ‘Demola started his career with the firm of Akintola Williams & Co and qualified as a chartered accountant with Arthur Andersen & Co. (now KPMG Professional Services) before working, at various times, as Head, Money Markets / Discountable Instruments Unit at Ecobank Nigeria PLC and pioneer Treasury Manager at Zenith International Bank PLC. He has provided leading-edge consulting services on financial applications analysis and value added technology deployment to world class organizations including the City of Atlanta, Yale University, the George Washington University, City of Detroit, AT&T, Dell Corporation, Lexmark Corporation, Severstal Steel and the American Red Cross. He has attended several management and professional development courses at home and abroad. A fellow of the Institute of Chartered Accountants of Nigeria and member of the American Institute of Certified Public Accountants, ‘Demola is certified as a financial applications consultant by both Oracle Corporation and SAGE Corporation.",
      },
      {
        name: "Mr. Kofo Majekodunmi",
        position: "",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Kofo Majekodunmi is a Director on the Board of Custodian Life Assurance Limited. He is a Legal Practitioner and accomplished Investment/Corporate Banker and Capital Market Expert who brings to the Board over three decades’ experience in deal origination and structuring and vastly experienced in treasury, corporate banking, corporate finance and syndication, operations and information technology as well as privatization advisory structures having been involved in a couple of landmark transactions in the financial services sector of the Nigerian economy. Kofo is an alumnus of the Lagos Business School, Nigerian Law School, London School of Economics and Political Science, where he bagged his MBA, BL. and LL. B degrees respectively. He is a member of the Nigerian Economic Summit (active participation in the Committee for the improvement of the Nigerian Ports) and Institute of Directors (IoD). He currently sits on the Boards of Leadway Pensure, St. Nicholas Hospitals, MBC Securities and he is the Group Managing Director of MBC Capital Limited.",
      },
      {
        name: "Mrs. Mimi Ade-Odiachi",
        position: "",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Mrs. Mimi Ade-Odiachi is a seasoned professional and entrepreneur with over three decades experience in Non-Bank Financial Services (Insurance), Hospitality Management and Landscape Architecture. She holds a Bachelor’s Degree in Insurance from the University of Lagos. She is also a chartered Insurer. She is an Executive Director at Whispering Palms Hotels & Resort. She is also the Founder and Chief Executive Officer of Omar Gardens Floral Company. She is currently serving as the Chairman of Custodian Social Responsibility Foundation.",
      },
    ],
    management: [
      {
        name: "Mr Edeki Isujeh",
        position: "Managing Director",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Mr. Isujeh has over thirty years’ experience in the Insurance Industry, having worked in different insurance companies in Insurance Operations, Sales/Business Development and General Management. At Custodian, he has at various times coordinated the Marketing and Technical Operations of the company. As a result of his commitment and hard work, he was appointed Executive Director of the company in 2016.{'\n'}He holds a Bachelor of Science degree in Insurance from the University of Lagos and is a member of the Chartered Insurance Institute, London. Aside from various Technical courses attended in and outside Nigeria, he has over the years attended management courses preparing him for leadership role. He is an Alumnus of the Lagos Business School as well as the prestigious Wharton Business School, USA where he attended Executive programmes.",
      },
      {
        name: "Mr Kolawale Lamidi",
        position: "Executive Director",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Kola holds a Bachelor degree in Philosophy & Political Science and a Masters Degree in Managerial Psychology (MMP) both from the University of Ibadan. His professional experience of over two decades cuts across various functions such as Technical, Marketing and Branch Operations. He has at various times worked in UNIC Insurance Plc, Trust & Guarantee Insurance Limited as well as Crusader General Insurance Limited which merged with Custodian and Allied Insurance Limited in 2013. He is an Associate Member of the Chartered Insurance Institute of Nigeria (ACIIN) and an alumnus of Lagos Business School (SMP59). Kola has attended many Insurance, Marketing and Management courses and seminars both locally and abroad.",
      },
      {
        name: "Mr Abayomi Agiri",
        position: "Head of Directorate - Human Resources",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Yomi is a graduate of the University of Lagos and IESE Business School, Spain where he obtained a first degree in Biology and an MBA respectively. His career which spans about three decades has seen him work as a Human Resource (HR) consultant and HR practitioner in Nigeria, South Africa and Ghana. He commenced his career with SCG Consulting, a firm of professional advisers specialising in Organisation Planning/ Development and HR Management Systems consulting. He joined Societe Generale Bank Nigeria where he worked in the Manpower/Career Management and Training functions and later joined Gulf Bank of Nigeria Plc as Head of HR & Training. Yomi moved to Trojan Estates as Head of Corporate Services and thereafter joined Unilever South Africa (Pty) Limited as HR Project Manager with specific responsibility for Change Management & People on a major supply chain project. He joined Globacom as HR Manager, Performance Management before being transferred to Glo Mobile Ghana as Head, HR & Administration. Yomi is a Member of the Chartered Institute of Personnel Management, Institute of Training & Development, Cranfield Management Association and is also an alumnus of the Lagos Business School (EMBA 5). He is a past Chairman of the Human Capital Management Committee of the Nigerian Insurance Association.",
      },
      {
        name: "Mr Friday Nwachukwu",
        position: "Chief Financial Officer",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Friday has over a decade and a half years’ experience in assurance, accounting and advisory and has spent most of his career in consulting. He trained and worked with Ahmed Zakari & Co. (Chartered Accountants); Robert Ade-Odiachi & Co. (Chartered Accountants), now SIAO Partners; and KPMG Professional Services, respectively. At KPMG he was an experienced manager in Audit and Business Advisory. Prior to joining Custodian he was the Group Head of Business Risk and Internal Audit in a pioneer broadband connectivity group of companies in Nigeria. Friday has a first degree in Accounting from Abia State University and an MBA in Management from Imo State University. He is a Fellow of The Institute of Chartered Accountants of Nigeria, a Certified Information Systems Auditor, Certified in Risk and Information Systems Control, and a Certified Internal Control Auditor.",
      },
      {
        name: "Mr Moses Ariyibi",
        position: "Head, Engineering",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Moses’ insurance career started with ACEN Insurance Plc, a specialist company in Construction/Engineering and Special Risks insurance underwriting where he served meritoriously in the underwriting department. He joined Custodian & Allied Insurance in 1999 as Head, Fire/Accident & Special Risks Department and was later appointed as the Team Leader, Construction/Engineering, Oil & Energy Group and also served as Head of Marketing before assuming his present role. Moses has two decades of experience in the insurance industry and has attended several Management and Technical courses in Advanced Construction / Engineering Underwriting and claims organized by MUNICH RE, one of the largest reinsurance companies in the world. He holds a Higher National Diploma in Insurance from The Polytechnic, Ibadan and a Master of Business Administration (MBA) degree from Obafemi Awolowo University (OAU) Ile Ife. He is an Associate Member of the Chartered Insurance Institute of Nigeria and also a graduate of the Senior Management Programme of the prestigious Lagos Business School.",
      },
      {
        name: "Mr Olumide Awe",
        position: "Head, Investment",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Olumide joined Custodian and Allied Insurance Limited from Investment One Financial Service limited (formerly GTB Asset Management) where he led the firm’s Investment Steering Committee through investment process of macroeconomic review, fundamental analysis, valuation and portfolio construction and management. As part of his task, he took responsibilities of setting up the firm’s research structure; and the creation and publication of Economic; Equity & Fixed Income research products. He started his career as an investment analyst with Icon Stockbrokers Limited in 2006 where he provided equity views to international portfolio managers. Prior to joining Icon, he had exposure to business consulting and financial advisory services as an MBA intern at Alliance Consulting (2004). He left Icon Stockbrokers Limited in 2007 to join CSL Stockbrokers limited, a subsidiary of FCMB. While at CSL, he took up responsibilities both as an analyst and equity sales trader. His equity research coverage includes the Nigerian Banking space, FMCG, Breweries, Flour milling and the Conglomerate sectors of the Nigerian Stock Exchange (NSE). In 2011, he left CSL to take up the role as Head of Research at Phoenix Global Capital Market Limited where he provided research support to the asset management, project and corporate finance teams. He holds a B.Sc. degree in Building from Obafemi Awolowo University and an MBA from the Lagos Business School of Pan African University. He is also a level 2 candidate of the CFA Institute chartered Programme.",
      },
      {
        name: "Mrs Kate Ojih",
        position: "Head, Northern Region",
        icon: <RiArrowRightSLine size={20} color={"#444444"} />,
        info: "Kate has over twenty - three years' experience in the insurance industry, which cuts across Marketing and Branch Operations. She started her career with Custodian and Allied Insurance Limited in Lagos in the Marketing department and her stellar performance led to her being seconded to start the Abuja branch of the organization. As a result of her continued commitment and hard work, she was appointed as the Head, Northern Operations, to oversee Abuja and all the branches in the North in 2016. She holds a bachelor's degree in History from the University of Uyo, Nigeria. She is an alumnus of Lagos Business School (SMP65) and has attended many Insurance, Marketing & Management courses and seminars both locally and abroad.",
      },
    ],
  },
];

// flex-col items-center md:flex-col md:items-center

const BoardMgt: React.FunctionComponent<{}> = () => {
  const [showDir, setShowDir] = useState<boolean>(false);
  const [dirName, setDirName] = useState<string>("");
  const [showMgt, setShowMgt] = useState<boolean>(false);
  const [mgtName, setMgtName] = useState<string>("");

  return (
    <>
      <div className='flex flex-col gap-10 lg:flex-row lg:justify-around md:flex-col md:gap-10'>
        <div className='flex flex-col pl-5 md:pl-5 lg:pl-0 w-[80%] md:w-[70%] lg:w-[42%]'>
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
                      <div>
                        <ul>
                          <li
                            onClick={() => {
                              setShowDir(!showDir);
                              setDirName(dirList.name);
                            }}
                            key={index}
                            className='flex pt-4 border-b pb-3 text-sm text-[#444444] hover:cursor-pointer'>
                            {dirList.icon}
                            <span className='font-[350]'>
                              {dirList.name}&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span className='font-medium text-[#A42F33]'>
                              {dirList.position}
                            </span>
                          </li>
                        </ul>
                        {showDir === true && dirName === dirList.name ? (
                          <div className=''>
                            <p className='text-justify text-sm font-light text-[#444444] p-5'>
                              {dirList.info}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
        {/* <div className='lg:block md:hidden'>
          <div className='bg-[#bdbbbb63] w-[1.25px]'></div>
        </div> */}
        <div className='flex flex-col pl-5 md:pl-5 lg:pl-0 w-[80%] md:w-[70%] lg:w-[42%]'>
          <div className='border-b-[1px] pb-1'>
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
                      <div>
                        <ul>
                          <li
                            onClick={() => {
                              setShowMgt(!showMgt);
                              setMgtName(mgtList.name);
                            }}
                            key={index}
                            className='flex pt-4 border-b pb-3 text-sm text-[#444444] hover:cursor-pointer'>
                            {mgtList.icon}
                            <span className='font-[350]'>
                              {mgtList.name}&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span className='font-medium text-[#A42F33]'>
                              {mgtList.position}
                            </span>
                          </li>
                        </ul>
                        {showMgt === true && mgtName === mgtList.name ? (
                          <div className=''>
                            <p className='text-justify text-sm font-light text-[#444444] p-5'>
                              {mgtList.info}
                            </p>
                          </div>
                        ) : null}
                      </div>
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
