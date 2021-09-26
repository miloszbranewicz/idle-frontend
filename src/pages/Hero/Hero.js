import React from "react";
import { useParams } from "react-router";
export default function Hero() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Simple hero page {id}</h1>
    </div>
  );
}
