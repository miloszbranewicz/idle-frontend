import React from "react";

export default function HeroAvatar({
  src,
  factionAltText,
  factionImgWidth,
  factionImgHeight,
}) {
  return (
    <img
      src={src}
      alt={factionAltText}
      width={factionImgWidth}
      height={factionImgHeight}
      loading="lazy"
    ></img>
  );
}
