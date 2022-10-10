import React from "react";
import LeftSection from "./LeftSection";
import "./styles/MainSection.scss";
import RightSection from "./RightSection/RightSection";
import DetailsLeftSection from "./DetailsLeftSection";

export default function MainSection() {
  return (
    <div className="mainSection">
      <div className="leftSection">
        <LeftSection />
        {/* <DetailsLeftSection /> */}
      </div>
      <div className="rightSection">
        <RightSection />
      </div>
    </div>
  );
}
