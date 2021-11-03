import React from "react";
import GameCard from "../Components/GameCard";
import firebase from "../Services/firebase";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const GameListPage = () => {
  const [info, setInfo] = useState([]);
  const history = useHistory();

  // fetch operation as soon as
  useEffect(() => {
    Fetchdata();
  }, []);

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    firebase
      .firestore()
      .collection("games")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  // const onGameDetailPage = (params) => {
  //   localStorage.setItem("GameInfo", JSON.stringify(params));
  //   history.push("/gamedetail");
  // };

  return (
    <div>
      <Container>
        <div className="card-wrapper">
          {info.map((data) => (
            <GameCard
              title={data.Title}
              description={data.Overview}
              onClick={() => {
                localStorage.setItem("GameInfo", JSON.stringify(data));
                history.push("/gamedetail");
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GameListPage;
