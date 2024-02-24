import React from "react";
import Slider from "../../../component/home/Slider";
import MyCards from "../../../component/home/Card";
import MyPhoto from "../../../component/photos/Card";

export default function index() {
  return (
    <div>
      <Slider />
      <MyCards />
      <MyPhoto />
    </div>
  );
}
