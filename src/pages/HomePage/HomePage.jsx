import styled from "styled-components"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./Movies";

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    // executa esse código apenas uma vez! Quando eu abrir a pagina
    useEffect(() => {
      const URL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies';
  
      const promise = axios.get(URL);
  
      promise.then((answer) => {
        //console.log(answer.data);
        setMovies(answer.data);
      }); // se der certo e os dados chegarem
  
      promise.catch((erro) => {
        console.log(erro.response.data);
      }); // se der erro
  
    }, []);
  
    if (movies.length === 0) {
      return (<div> Carregando filmes..... </div>);
    }
  
    return (
        <PageContainer>
        Selecione o filme

        <ListContainer>
            {movies.map(movie=> (
               <Movies id={movie.id} src={movie.posterURL} title={movie.title} overview={movie.overview} releasedata={movie.releasedata} />
            ))}
        </ListContainer>

        </PageContainer>
    );
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
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
