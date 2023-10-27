import React from "react";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";
import AboutUs from "./components/Sections/AboutUs";
import Vision from "./components/Sections/Vision";
import BoardMgt from "./components/Sections/BoardMgt";
import OurStyle from "./components/Sections/OurStyle";
import BusinessCover from "./components/Sections/BusinessCover";

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
      <div className='mt-20'>
        <OurStyle />
      </div>
      <div>
        <BusinessCover />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad id
          iure a, dolores repellat sequi nihil nostrum commodi et tenetur
          laboriosam, officiis libero optio. Quidem enim sunt blanditiis unde!
        </p>
      </div>
    </>
  );
};

export default MainPage;
