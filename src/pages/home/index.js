import React from "react";
import Card from "react-bootstrap/Card";
import Slider from "../../../component/home/Slider";
import MyCards from "../../../component/home/Card";

export default function index() {
  return (
    <div>
      <Slider />
      <MyCards />
    </div>
  );
}