import styled from "styled-components";

const Div = styled.div`
  height: 7rem;
`;

const ContactImage = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column

`

const ClickWpp = styled.img`
  width: 20rem;
  height: auto;


  :hover {
    transition: 0.5s;
    opacity: 0.7;
  }

  @media (max-width: 426px){
    width: 17rem;
  }
`;

const H1 = styled.h1`
  {
  padding: 1rem;
  font-size: 2rem
  }

  @media (max-width: 426px) {
    font-size: 1.5rem;
  }
`;

const H2 = styled.h2`
  {
  padding-bottom: 1rem;
  font-size: 1.5rem;
  }

  @media (max-width: 321px) {
      font-size: 1.3rem;
    }
  }
  
`;


const Contact = () => {
  return (
    <>
      <Div></Div>
      <Container>
        <div>
          <ContactImage src="contato.png" alt="Entre em contato" />
        </div>
        <H1>Telefone / Whatsapp</H1>
        <H2>
          (24) 99992-4922 
        </H2>
        <H2>
          (24) 99926-8775
        </H2>
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
        <H1>E-mail</H1>
        <H2>brantbragaconst@gmail.com</H2>
        <a
          href="mailto:brantbragaconst@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="E-mail.png" alt="Email" height="100px" />
        </a>
      </Container>
    </>
  );
};

export default Contact;
