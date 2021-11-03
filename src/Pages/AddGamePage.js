import { useState, React } from "react";
import firebase from "../Services/firebase";

const AddGamePage = () => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [description, setDesc] = useState("");

  const sub = (e) => {
    e.preventDefault();

    // Add data to the store
    firebase
      .firestore()
      .collection("games")
      .add({
        Title: title,
        Overview: overview,
        Description: description,
      })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className="mt-5 mb-5">
      <center>
        <form
          onSubmit={(event) => {
            sub(event);
          }}
        >
          <div style={{ color: "White" }}>Title</div>
          <input
            type="text"
            placeholder="input title name"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div style={{ color: "White" }}>Overview</div>
          <input
            type="text"
            placeholder="input overview"
            onChange={(e) => {
              setOverview(e.target.value);
            }}
          />
          <div style={{ color: "White" }}>Description</div>
          <input
            type="text"
            placeholder="input desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
};

export default AddGamePage;
