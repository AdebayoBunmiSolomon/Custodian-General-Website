import React, { useEffect, useState } from "react";
import ResponsiveHeader from "./Header/ResponsiveHeader";
import MainHeader from "./Header/MainHeader";

const Header: React.FunctionComponent<{}> = () => {
  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
    };
  };
  const [screenSize, setScreenSize] = useState<any>(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return <>{screenSize.width <= 768 ? <ResponsiveHeader /> : <MainHeader />}</>;
};

export default Header;
