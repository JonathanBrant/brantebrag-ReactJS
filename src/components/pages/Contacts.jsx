import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.h1`
  height: 7rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: rgb(194,194,194);
    background: linear-gradient(90deg, rgba(194,194,194,1) 0%, rgba(204,205,209,1) 100%, rgba(0,212,255,1) 100%);
`

const ClickWpp = styled.img`
    width: 20rem;
    height: auto;
`


const Contact = () => {
  return (
    <>
      <Div></Div>
      <Container>
      <div>
        <img src="contato.png" alt="Entre em contato" />
      </div>
      <h1>Telefone / Whatsapp</h1>
      <h2>
        (24) 99992-4922 <br />
        (24) 99926-8775
      </h2>
      <a
        href="https://api.whatsapp.com/send?phone=5524999924922&text=Ol%C3%A1%2C%20Brant%26Braga%20Constru%C3%A7%C3%B5es!%20Gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AAs."
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <ClickWpp src="whatsapp.svg" alt="" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5524998268775&text=Ol%C3%A1%2C%20Brant%26Braga%20Constru%C3%A7%C3%B5es!%20Gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AAs."
        target="_blank"
        rel="noopener noreferrer"
      >
         <ClickWpp src="whatsapp.svg" alt="" />
      </a>
      <div>
        <img src="E-mail.png" alt="Email" height="100px" />
      </div>
      <h1 class="email">E-mail</h1>
      <p class="oemail">brantbragaconst@gmail.com</p>
      <Link to="mailto:brantbragaconst@gmail.com" target="_blank">
        Entre em contato via E-mail
      </Link>
      </Container>
    </>
  );
};

export default Contact;
