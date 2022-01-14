import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Result = (props) => {
    /*------------------Estados y Hooks----------------------------------------------------------------*/
    const {nameGame,page} = useParams();
    const {games,setGames} = useState ([]);

    /*------------------Hooks de cargar del compoente----------------------------------------------------------------*/
    useEffect(()=>{

    },[nameGame]);

    return (
        <div>
            Resultado xd  {nameGame}
        </div>
    );
}
export default Result;
