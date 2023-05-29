import styled from "styled-components"
import { useParams, useNavigate, useLocation} from 'react-router-dom';

export default function SuccessPage() {

    const { smovie, sdate, shour, sids, sname, scpf} = useLocation().state;

    console.log(smovie);

    const params = useParams();
    console.log(params.name);

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{smovie}</p>
                <p>{sdate} - {shour}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                {sids.map(item => (
               <p>Assento {item}</p>
                 ))}

            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {sname}</p>
                <p>CPF: {scpf}</p>
            </TextContainer>

            <button>Voltar para Home</button>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        width: 225px;
        height: 42px;
        margin-top: 50px;
        background: #E8833A;
        border-radius: 3px;
        border-color: #E8833A;
        color: white;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        align-items: center;
        justify-content; center;
        text-align: center;
        letter-spacing: 0.04em;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 3px;
    }
    p {
        margin-top: 0px;
    }
`