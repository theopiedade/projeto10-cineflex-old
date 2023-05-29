import styled from "styled-components"
import { useState, useEffect } from 'react';


export default function Seats({id, name, isAvailable, seatsSelected, setSeatsSelected, seatsNumSelected, setSeatsNumSelected}) {

  
    const [seatState, setSeatState] = useState(isAvailable);


    function color1(props) {
        if (props === true) return "#C3CFD9";
        if (props === false) return "#FBE192";
        if (props === 'selected') return "#1AAE9E";
    }

    function color2(props) {
        if (props === true) return "#808F9D";
        if (props === false) return "#F7C52B";
        if (props === 'selected') return "#0E7D71";
    }

    

    function clickSeat (numSel, idSel, seatStateSel) {
        if (seatStateSel === false) alert("Esse assento não está disponível");
        else if (seatState === true) {
          setSeatState('selected');
          seatsSelected.includes(idSel);
          const newArray = [...seatsSelected];
          newArray.push(idSel);
          setSeatsSelected(newArray);

          seatsNumSelected.includes(numSel);
          const newArray2 = [...seatsNumSelected];
          newArray2.push(numSel);
          console.log("Adicionado ao setSeatsNumSelected: "+numSel);
          setSeatsNumSelected(newArray2);

        }
        else if (seatState === 'selected') {
            setSeatState(true);
            const array = [...seatsSelected];
            const index = array.indexOf(idSel);
            if (index > -1) { // only splice array when item is found
                array.splice(index, 1); // 2nd parameter means remove one item only
             }
            setSeatsSelected(array);
            console.log("Removido do Selected: "+idSel);

            const array2 = [...seatsNumSelected];
            const index2 = array2.indexOf(numSel);
            if (index2 > -1) { // only splice array when item is found
                array.splice(index2, 1); // 2nd parameter means remove one item only
             }
            setSeatsNumSelected(array2);

        }
        console.log(seatsSelected);
    }

    return (
        <SeatItem c1={color1(seatState)} c2={color2(seatState)} onClick={() => clickSeat(name, id, seatState)} >{name}</SeatItem>
    );
}

const SeatItem = styled.div`
    background-color: ${(props) => props.c1};    // Essa cor deve mudar
    border: 1px solid black ${(props) => props.c2};         // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;    
`;