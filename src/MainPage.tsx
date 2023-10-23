import React from "react";
import Header from "./components/Header";
import ImageSection from "./components/ImageSection";

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
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur omnis
        vero magnam, quod, hic fuga nihil cupiditate iste architecto porro
        debitis, tenetur voluptates suscipit deserunt quia quaerat eaque ullam
        corrupti! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Pariatur omnis vero magnam, quod, hic fuga nihil cupiditate iste
        architecto porro debitis, tenetur voluptates suscipit deserunt quia
        quaerat eaque ullam corrupti!Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Pariatur omnis vero magnam, quod, hic fuga nihil
        cupiditate iste architecto porro debitis, tenetur voluptates suscipit
        deserunt quia quaerat eaque ullam corrupti!Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Pariatur omnis vero magnam, quod, hic
        fuga nihil cupiditate iste architecto porro debitis, tenetur voluptates
        suscipit deserunt quia quaerat eaque ullam corrupti!Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Pariatur omnis vero magnam,
        quod, hic fuga nihil cupiditate iste architecto porro debitis, tenetur
        voluptates suscipit deserunt quia quaerat eaque ullam corrupti!Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Pariatur omnis vero
        magnam, quod, hic fuga nihil cupiditate iste architecto porro debitis,
        tenetur voluptates suscipit deserunt quia quaerat eaque ullam corrupti!
      </div>
    </>
  );
};

export default MainPage;
