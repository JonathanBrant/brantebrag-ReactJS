import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
`
const Img = styled.img`
width: auto;
height: 100%;
`


const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Img src="beb.png" alt="" draggable="false"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
