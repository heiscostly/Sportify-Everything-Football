import React from "react";
import { CardContainer } from "./CardStyle";
import Mobile from "./../../assets/img/mobile.png";
function Card() {
  return (
    <CardContainer>
      <div className="image__cont">
        <img src={Mobile} alt="" srcset="" />
      </div>
      <div className="content__cont">
        <h4>User Interface & User Experience</h4>
        <p>England</p>
      </div>
    </CardContainer>
  );
}

export default Card;
