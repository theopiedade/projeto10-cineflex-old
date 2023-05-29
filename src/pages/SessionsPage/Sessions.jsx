import styled from "styled-components"
import { Link } from "react-router-dom";



export default function Sessions ({id, weekday, date, showtimes}) {
    return (
        <SessionContainer>
            {weekday} - {date}
            <ButtonsContainer>
                {
                showtimes.map(item => (
                    <Link to={`/assentos/${item.id}`}>
                    <button>{item.name}</button>
                    </Link>
                ))

                }
            </ButtonsContainer>
        </SessionContainer>
        );

}


const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-color: #E8833A;
        margin-right: 20px;
        border-radius: 3px;
        color: #FFFFFF
    }
    a {
        text-decoration: none;
    }
`