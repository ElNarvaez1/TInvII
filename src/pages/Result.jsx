import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../components/Cart";
import Form from "../components/Form";
import NotFound from "../components/NotFound";

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
    getDeals(idReduceGame, datos);
  };

  const getDeals = async (gamesIDS, datos) => {
    //Obtenemos los deals
    let URL_GAMES_AT_IDS = `https://www.cheapshark.com/api/1.0/games?ids=`;
    let finalDeals = [];

    if (gamesIDS.length > 25) {
      //Como es mayor a 25 hacemos la peticion a los primero 25
      let counter = 25;
      let first25idsOfGames = gamesIDS.slice(0, 24);
      //Buscamos los juegos por su ID
      let gamesDealsQuery = await fetch(URL_GAMES_AT_IDS + first25idsOfGames);
      let gamesDealsInformation = await gamesDealsQuery.json();

      //Juegos con las orfertas
      finalDeals = finalDeals.concat(
        Object.keys(gamesDealsInformation).map(
          (key) => gamesDealsInformation[key]
        )
      );

      for (; counter < gamesIDS.length; counter += 25) {
        const next25Game = gamesIDS.slice(counter, counter + 25);
        gamesDealsQuery = await fetch(URL_GAMES_AT_IDS + next25Game);
        gamesDealsInformation = await gamesDealsQuery.json();

        //Juegos con las orfertas.
        finalDeals = finalDeals.concat(
          Object.keys(gamesDealsInformation).map(
            (key) => gamesDealsInformation[key]
          )
        );
      }
      //Si esta expresion es verdadera, no ha llegado al final
      if (counter < gamesIDS.length) {
        const lastGames = gamesIDS.slice(counter, gamesIDS.length);
        gamesDealsQuery = await fetch(URL_GAMES_AT_IDS + lastGames);
        gamesDealsInformation = await gamesDealsQuery.json();

        //Juegos con las orfertas
        finalDeals = finalDeals.concat(
          Object.keys(gamesDealsInformation).map(
            (key) => gamesDealsInformation[key]
          )
        );
      }
    } else {
      let gamesDealsQuery = await fetch(URL_GAMES_AT_IDS + gamesIDS);
      let gamesDealsInformation = await gamesDealsQuery.json();

      //Juegos en ofertas
      finalDeals = finalDeals.concat(
        Object.keys(gamesDealsInformation).map(
          (key) => gamesDealsInformation[key]
        )
      );
    }
    finalDeals = filterGamesAtName(finalDeals);
    let finalDealsSorted = [];
    //console.log(finalDeals);

    //Extraemos los los nombres de los juegos
    datos = datos.map((e) => e.title);
    datos = datos.filter((game, pos) => datos.indexOf(game) == pos);

    //Re ordenamos lo juegos xd
    datos.forEach((game) => {
      finalDeals.forEach((gameDeal) => {
        if (game == gameDeal.info.title) {
          finalDealsSorted.push(gameDeal);
        }
      });
    });

    setGamesDeals(finalDealsSorted);
  };

  const filterGamesAtName = (gamesList) => {
    let palabrasProibidad = [
      "Madden Points",
      "FIFA POINTS",
      "Halo Credits",
      "Points Pack",
    ];

    return gamesList
      .filter((e) => {
        let valueTempBoolean = true;
        for (let i = 0; i < palabrasProibidad.length; i++) {
          valueTempBoolean =
            valueTempBoolean &&
            !e.info.title
              .toUpperCase()
              .includes(palabrasProibidad[i].toUpperCase());
        }
        if (valueTempBoolean) {
          return e;
        }
      })
      .map((e) => {
        e.deals.forEach((element, index) => {
          if (element.storeID == "3") {
            e.deals.splice(index, 1);
          }
        });
        return e;
      })
      .filter((e) => {
        if (e.deals.length > 0) {
          return e;
        }
      });
  };

  const loadStores = async () => {
    const URL_STORS = `https://www.cheapshark.com/api/1.0/stores`;
    let storsQuery = await fetch(URL_STORS);
    let storsJSON = await storsQuery.json();
    let storsArray = Object.keys(storsJSON).map((key) => storsJSON[key]);
    setStores(storsArray);
  };

  if (founded == null || founded) {
    return (
      <>
        <div className="d-flex justify-content-center py-5">
          <div className="col-8 py-2">
            <Form filter={filter} />
          </div>
        </div>
        <section className="container">
          <div className="row justify-content-center">
            {gamesDeals.map((game, index) => (
              <Cart game={game} key={index} stors={stores} />
            ))}
          </div>
        </section>
      </>
    );
  } else if(!founded){
    return (
      <>
        <div className="d-flex justify-content-center py-5">
          <div className="col-8 py-2">
            <Form filter={filter} />
          </div>
        </div>
        <NotFound nameGame={nameGame}/>
      </>
    );
  }
};
export default Result;
