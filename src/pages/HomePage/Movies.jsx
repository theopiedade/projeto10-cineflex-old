import styled from "styled-components"
import { Link } from "react-router-dom";
import SessionsPage from "../SessionsPage/SessionsPage";


export default function Movies ({id, src, title, overview, releasedata}) {

    return (
        <Link to={`/sessoes/${id}`}>
            <MovieContainer>
            <img data-test="movie" src={src} alt={overview}/>
            </MovieContainer>
        </Link>
    );
}

const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`