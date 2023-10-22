import React from "react";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";

const MainPage: React.FunctionComponent<{}> = () => {
  return (
    <div>
      {/* <p className=' font-medium text-[10px] md:text-[20px] lg:text-[30px]'>
        Main Page
      </p> */}
      <Header />
      <ImageSection />
    </div>
  );
};

export default MainPage;
