import React from "react";
import { HeaderContainer } from "./HeaderStyle";
import Sport from "./../../assets/img/sport.png";

function Header() {
  return (
    <HeaderContainer>
      <div className="header-bg">
        <img src={Sport} alt="" />
      </div>
    </HeaderContainer>
  );
}

export default Header;
