import React from "react";
import ActiveLink from "./ActiveLink";
export default function SiteHeader() {
  return (
    <div>
      <div
        backgroundImage="https://res.cloudinary.com/dofpdamyl/image/upload/v1632423017/image_1_60c3bf94ac.jpg"
        h="250px"
        backgroundSize="cover"
        backgroundPosition="center"
      ></div>
      <div background="#151515" fontWeight="700" fontSize="18px" color="white">
        <div>
          <ActiveLink to="/" activeOnlyWhenExact={true} label="Home" />
          <ActiveLink to="/heroes" activeOnlyWhenExact={true} label="Heroes"/>
          <ActiveLink to="/items" activeOnlyWhenExact={true} label="Items"/>
          <ActiveLink to="/buildings" activeOnlyWhenExact={true} label="Buildings"/>
          <ActiveLink to="/activities" activeOnlyWhenExact={true} label="Activities"/>
          <ActiveLink to="/beginner-tips" activeOnlyWhenExact={true} label="Beginner Tips"/>
        </div>
      </div>
    </div>
  );
}
