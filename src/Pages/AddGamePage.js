import { useState, React } from "react";
// import db from "../Services/Firebase";

const AddGamePage = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDesc] = useState("");
  // const sub = (e) => {
  //   e.preventDefault();

  //   // Add data to the store
  //   db.collection("games")
  //     .add({
  //       Title: title,
  //       Description: description,
  //     })
  //     .then((docRef) => {
  //       alert("Data Successfully Submitted");
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // };

  return (
    <div className="profile-page">
      {/* <center>
        <form
          onSubmit={(event) => {
            sub(event);
          }}
        >
          <div>Title</div>
          <input
            type="text"
            placeholder="input title name"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <div>Description</div>
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
      </center> */}
    </div>
  );
};

export default AddGamePage;
