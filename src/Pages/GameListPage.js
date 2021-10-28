import React from "react";
import GameCard from "../Components/GameCard";
import db from "../Services/Firebase";
import { useState } from "react";

const GameListPage = () => {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("games")
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

  return (
    <div>
      {/* <GameCard title="ini title" description="ini description"></GameCard> */}
      {info.map((data) => (
        <GameCard title={data.Title} description={data.Description} />
      ))}
    </div>
  );
};

export default GameListPage;
