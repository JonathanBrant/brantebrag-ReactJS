import styled from "styled-components";

const Div = styled.div`
  height: 7rem;
`;

const Container = styled.div`
  top: 7rem;
`;

const LoginContainer = styled.div`
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  z-index: -1000;

  width: 25rem;
  height: 25rem;
  border-radius: 0.5rem;
  
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 426px) {
      width: 22rem;
  }

  @media (max-width: 376px) {
    width: 20rem;
}

@media (max-width: 321px) {
    width: 18rem;
}
  `;

const H2 = styled.h2`
    padding: 3rem;

    span {
        color: #7c9d7e;
    }
`

const Input = styled.input`
width: 19.5rem;
height: 2.75rem;
font-weight: 400;
font-size: 0.75;
border-radius: 0.25rem;
border: solid 1px rgba(0, 0, 0, 0.2);
padding-left: 0.75rem;
margin-bottom: 1.5rem;

@media (max-width: 376px) {
    width: 18rem;
}

@media (max-width: 320px) {
    width: 15rem;
}

`

const Button = styled.button`
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
background: #7c9d7e;

:hover {
  opacity: 0.9;
 
`

const Login = () => {
  return (
    <>
      <Div></Div>
      <Container>
        <LoginContainer>
          <H2>
            Bem Vindo ao <span>painel</span>
          </H2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Button>Acessar</Button>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Login;
