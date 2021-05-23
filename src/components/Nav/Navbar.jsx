import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  border-bottom: 4px solid #7c9d7e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  position: fixed;
`;
const Img = styled.img`
  padding: 1rem;
  width: auto;
  height: 6.5rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Img src="beb.png" alt="" draggable="false" />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
