import React from "react";
import { SportContainerDiv } from "./SportsContainer.style";
import Card from "../Card/Card";

const dummyData = [
  { name: "name", item: "item" },
  { name: "name", item: "item" },
  { name: "name", item: "item" },
  { name: "name", item: "item" },
  { name: "name", item: "item" },
  { name: "name", item: "item" },
  { name: "name", item: "item" },
];
function SportsContainer() {
  return (
    <SportContainerDiv>
      <div className="cont">
        <h1>All Competition</h1>
        <div className="sports-container">
          {/* <h1>All Competition</h1> */}
          {dummyData.map((item, index) => (
            <Card key={index} name={item.name} item={item.item} />
          ))}
          {/* <div > */}
          {/* <Card /> */}
          {/* </div> */}
        </div>
      </div>
    </SportContainerDiv>
  );
}

export default SportsContainer;
