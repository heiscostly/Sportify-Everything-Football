import React from "react";
import { CardContainer } from "./CardStyle";
function Card({ item, setNextdata, setShow, show }) {
  const handleClick = () => {
    setNextdata(item.id);
    setShow(!show);
  };
  return (
    <CardContainer onClick={handleClick}>
      <div className="image__cont">
        <img src={item.emblemUrl} alt="" />
      </div>
      <div className="content__cont">
        <h4>{item.name}</h4>
        <p>{item.area.name}</p>
      </div>
    </CardContainer>
  );
}

export default Card;
