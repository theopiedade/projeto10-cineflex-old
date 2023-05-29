import styled from "styled-components"
import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Seats from "./Seats";



export default function SeatsPage() {

    const params = useParams();
    console.log(params);

    const [json, setJson] = useState([]);
    const [seatsSelected, setSeatsSelected] = useState([]);

    const [name, setName] = useState("");
	const [cpf, setCPF] = useState("");
	const navigate = useNavigate();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSession}/seats`;
        //console.log(URL);
    
        const promise = axios.get(URL);
    
        promise.then((answer) => {
          console.log(answer.data);
          setJson(answer.data);
        }); // se der certo e os dados chegare
    
        promise.catch((error) => {
          console.log(error.response.data);
        }); // se der erro
    
      }, []);
      
      function sendRequest(event) {

        event.preventDefault();

        console.log(seatsSelected);

        console.log("Entrou no Send Request");

        const data = {
        	ids: seatsSelected,
            name: name,
            cpf: cpf
        };
        console.log("Data:"+data);

        const query = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', data);

        query.then(() => navigate("/sucesso")) 
      }

    
      if (json.length === 0) {
        return (<div> Carregando assentos..... </div>);
      }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
            {json.seats.map(item => (
               <Seats id={item.id} name={item.name} isAvailable={item.isAvailable} seatsSelected={seatsSelected} setSeatsSelected={setSeatsSelected} />

            ))}
         
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle color1={"#1AAE9E"} color2={"#0E7D71"}/>
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle color1={"#C3CFD9"} color2={"#7B8B99"}/>
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle color1={"#FBE192"} color2={"#F7C52B"}/>
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                <form onSubmit={sendRequest}>
                Nome do Comprador:
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input value={cpf} onChange={e => setCPF(e.target.value)} placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
                </form>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={json.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{json.movie.title}</p>
                    <p>{json.day.weekday} - {json.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    background-color: ${(props) => props.color1};   // Essa cor deve mudar
    border: 1px solid ${(props) => props.color2};         // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`