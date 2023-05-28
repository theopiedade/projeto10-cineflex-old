import styled from "styled-components"
import HomePage from "./HomePage";


export default function Movies ({key, src, title, overview, releasedata}) {
    console.log(src);
    return (
        <MovieContainer>
        <img src={src} alt={overview}/>
        </MovieContainer>
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