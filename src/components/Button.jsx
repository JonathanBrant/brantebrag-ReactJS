import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 9rem;
  height: 3.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  margin: 2rem;
  margin-top: 0;
  text-transform: uppercase;
  color: white;
  border-radius: 0.5rem;
  transition: 0.5s;

  :hover {
    opacity: 0.9;
    background: #7c9d7e;   
  


  }


`;

const Button = (props) => {
  return <StyledButton>{props.title}</StyledButton>;
};

export default Button;
