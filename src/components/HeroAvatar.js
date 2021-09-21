import React from "react";

export default function HeroAvatar({
  factionImgLink,
  factionAltText,
  factionImgWidth,
  factionImgHeight,
  heroName,
  heroImgLink,
  heroAltText,
  heroImgWidth,
  heroImgHeight,
}) {
  return (
    <>
      <h1>
        <span>
          <img
            src={factionImgLink}
            alt={factionAltText}
            width={factionImgWidth}
            height={factionImgHeight}
            loading="lazy"
          ></img>
        </span>
        {heroName}
      </h1>
      <img
        src={heroImgLink}
        alt={heroAltText}
        width={heroImgWidth}
        height={heroImgHeight}
        loading="lazy"
      ></img>
    </>
  );
}
