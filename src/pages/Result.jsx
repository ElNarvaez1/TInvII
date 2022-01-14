import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Result = (props) => {
  /*------------------Estados y Hooks----------------------------------------------------------------*/
  const { nameGame, page, filter } = useParams();
  const [myState, setSateResult] = useState({
    gamesIDS: [],
    page: page,
    sortBy: filter,

    nameGame: nameGame,
    // endPagination: false,
  });

  const [stores, setStores] = useState([]);
  const [founded, setFounded] = useState(null);
  const [gamesDeals, setGamesDeals] = useState([]);

  /*------------------Hooks de cargar del compoente----------------------------------------------------------------*/
  //   useEffect(() => {
  //     getGames();
  //   }, []);

  useEffect(() => {
    loadStores();
    getGames();
  }, []);

  /* ------------------------------------Funciones extras-------------------------------------------------------------------------------- */
  const getGames = async () => {
    const URL = `https://www.cheapshark.com/api/1.0/deals?sortBy=${myState.sortBy}&pageNumber=${myState.page}&title=${myState.nameGame}`;
    let query = await fetch(URL);
    let datos = await query.json();
    let idGames = datos.map((game) => game.gameID);
    //Obtemos los IDS de los juegos, por separada
    let idReduceGame = idGames.filter(
      (game, pos) => idGames.indexOf(game) == pos
    );
    setSateResult({ ...myState, gamesIDS: idReduceGame });
    setFounded(idReduceGame.length > 0 || page > 1);
  };

  const getDeals = () => {
    //Obtenemos los deals
    let URL_GAMES_AT_IDS = `https://www.cheapshark.com/api/1.0/games?ids=`;
    let finalDeals = [];
  };

  const loadStores = async () => {
    const URL_STORS = `https://www.cheapshark.com/api/1.0/stores`;
    let storsQuery = await fetch(URL_STORS);
    let storsJSON = await storsQuery.json();
    let storsArray = Object.keys(storsJSON).map((key) => storsJSON[key]);
    setStores(storsArray);
  };

  return <div>Resultado xd {nameGame}</div>;
};
export default Result;
