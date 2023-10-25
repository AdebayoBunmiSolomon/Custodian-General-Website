import React from "react";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import AboutUs from "./components/Sections/AboutUs";
import Vision from "./components/Sections/Vision";
import BoardMgt from "./components/Sections/BoardMgt";

const MainPage: React.FunctionComponent<{}> = () => {
  return (
    <>
      {/* <p className=' font-medium text-[10px] md:text-[20px] lg:text-[30px]'>
        Main Page
      </p> */}
      <div className='mt-20'>
        <Header />
        <ImageSection />
      </div>
      <div className='mt-5'>
        <AboutUs />
      </div>
      <div className='mt-5'>
        <Vision />
      </div>
      <div className='mt-8'>
        <BoardMgt />
      </div>
    </>
  );
};

export default MainPage;
