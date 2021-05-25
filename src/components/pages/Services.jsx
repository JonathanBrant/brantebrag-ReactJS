import styled from "styled-components";

const Div = styled.div`
  height: 7rem;
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `

const Img = styled.img`
    width: 50rem;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
        width: 40rem;
    }

    @media (max-width: 426px) {
        width: 20rem;
    }

    @media (max-width: 321px) {
        width: 18rem;
    }
`

const H2 = styled.h2`
    padding: 2rem;
`

const Services = () => {
    return (
        <>
        <Div></Div>
        <Container>
        <Flex>
            <Img src="f1.png" alt="" />
            <H2>Alvenaria</H2>
            <Img src="f2.png" alt="" />
            <H2>Revestimentos cerâmicos</H2>
            <Img src="f3.png" alt="" />
            <H2>Acabamento em geral</H2>
            <Img src="f4.png" alt="" />
            <H2>Elétrica</H2>
            <Img src="f5.png" alt="" />
            <H2>Hidráulica</H2>
        </Flex>
        </Container>  
        </>     
    )
}

export default Services;