import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: auto;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #333;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -1rem;
    right: 0;
    height: 100vh;
    width: 50%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;



const RightNav = ({ open }) => {

  return (
    <Ul open={open}>
      <Link to="/home"><Button title="Início"/></Link>
      <Link to="/services"><Button title="Serviços"/></Link>
      <Link to="/contact"><Button title="Contato"/></Link>
      <Link to="/login"><Button title="Acesso Restrito"/></Link>
     </Ul>
  )
}

export default RightNav
