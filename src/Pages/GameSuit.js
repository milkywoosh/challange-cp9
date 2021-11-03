import { useState, useEffect } from "react";
import "../Styles/game.index.style.css";
import "../Styles/game.element.style.css";
import logoGame from "../Components/GameSuitComponent/logoGame.png";
import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Suitclass } from "../Components/GameSuitComponent/suit";
import ElementBatu from "../Components/GameSuitComponent/elementBatu";
import ElementGunting from "../Components/GameSuitComponent/elementGunting";
import ElementKertas from "../Components/GameSuitComponent/elementKertas";
import RefreshNotif from "./RefreshNotificationGame";
import CurrTime from "../Components/GetDate";
import firebase from "firebase";
import { IoIosArrowBack } from "react-icons/io";

const GameSuit = (props) => {
  let game = new Suitclass();
  let dataToDB = {
    match: [],
    time: CurrTime,
    result: "",
  };

  const [hoverBatuCom, setHoverBatuCom] = useState(null);
  const [hoverGuntingCom, setHoverGuntingCom] = useState(null);
  const [hoverKertasCom, setHoverKertasCom] = useState(null);
  const [versus, SetVersus] = useState("vs");
  const [matchResult, setMatchResult] = useState([]);
  const [stop, setStopped] = useState(false);
  const [show, setShow] = useState(false);
  const [intoDB, setIntoDB] = useState(dataToDB);
  let counts = {};

  const addData = (obj) => {
    if (matchResult.length === 3) {
      firebase
        .database()
        .ref()
        .child("data_match")
        .push(obj, (err) => {
          if (err) console.log(err);
        });
    }
  };
  // use useEffect multiple time/ line in code to based on different cases
  useEffect(() => {}, []); // run ONCE at first render

  useEffect(() => {}); // run every rendering DOM

  useEffect(() => {
    if (matchResult.length === 3) {
      setStopped(true);
      handleShow();
      dataToDB.match.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
      });

      if (counts["menang"] > counts["kalah"]) {
        dataToDB.result = "menang";
      } else if (counts["menang"] < counts["kalah"]) {
        dataToDB.result = "kalah";
      } else if (
        counts["seri"] > counts["menang"] ||
        counts["seri"] > counts["kalah"]
      ) {
        dataToDB.result = "seri";
      }

      dataToDB.match.push(...matchResult);
      console.log({ ...counts });
      console.log(dataToDB.match);
      console.log(dataToDB.time);

      addData(dataToDB); // add data to database
    }
    setTimeout(() => {
      setHoverBatuCom(null);
      setHoverGuntingCom(null);
      setHoverKertasCom(null);
    }, 1000);
    return () => {};
  }, [matchResult]); // run every state at dependency variable change

  //    (matchResult.length < 3) &&
  const clickBatu = () => {
    let result = game.suit("batu");
    let comp = game.computer();
    if (stop === false) {
      if (comp === "batu") {
        setHoverBatuCom("margin-grey");
        SetVersus("Draw");
      } else if (comp === "gunting") {
        setHoverGuntingCom("margin-grey");
        SetVersus("Player 1 Win");
      } else if (comp === "kertas") {
        setHoverKertasCom("margin-grey");
        SetVersus("Computer Win");
      }
      let joined = matchResult.concat([result]);
      setMatchResult(joined);
    }
  };
  const clickGunting = () => {
    let result = game.suit("gunting");
    let comp = game.computer();
    if (stop === false) {
      if (comp === "batu") {
        setHoverBatuCom("margin-grey");
        SetVersus("Computer Win");
      } else if (comp === "gunting") {
        setHoverGuntingCom("margin-grey");
        SetVersus("Draw");
      } else if (comp === "kertas") {
        setHoverKertasCom("margin-grey");
        SetVersus("Player 1 Win");
      }
      let joined = matchResult.concat([result]);
      setMatchResult(joined);
    }
  };
  const clickKertas = () => {
    let result = game.suit("kertas");
    let comp = game.computer();
    if (stop === false) {
      if (comp === "batu") {
        setHoverBatuCom("margin-grey");
        SetVersus(`Player 1 Win`);
      } else if (comp === "gunting") {
        setHoverGuntingCom("margin-grey");
        SetVersus("Computer Win");
      } else if (comp === "kertas") {
        setHoverKertasCom("margin-grey");
        SetVersus("Draw");
      }

      let joined = matchResult.concat(result);
      setMatchResult(joined);
    }
  };
  const refreshButton = () => {
    SetVersus("vs");
    setMatchResult([]);
    setStopped(false);
    window.location.reload();
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        {/* <div className="d-flex flex-row less_than ">
          <div>
            {" "}
            <a className=" p-2 justify-content-start mark-less " href="/">
              {" "}
              &lt;{" "}
            </a>{" "}
            Home{" "}
          </div>
          <div className=" p-2 justify-content-start ">
            {" "}
            <img
              className="size-logo-game"
              src={logoGame}
              alt={"logoGame"}
            />{" "}
          </div>
          <div className=" p-2  justify-content-start">
            {" "}
            ROCK PAPER SCISSORS{" "}
          </div>
        </div> */}
        <div className="menu">
          <Stack direction="horizontal" gap={2}>
            <Link to="/games" className="menu-link">
              <IoIosArrowBack
                style={{
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                  color: "white",
                }}
              ></IoIosArrowBack>
            </Link>
            <div style={{ color: "white", fontSize: "16px" }}>
              ROCK, PAPER, SCISSORS
            </div>
          </Stack>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="column ">
            <span className="tag-name-p1"> Player 1 </span>
            <ElementBatu onClick={() => clickBatu()} className={"margin"} />
            <ElementGunting
              onClick={() => clickGunting()}
              className={"margin"}
            />
            <ElementKertas onClick={() => clickKertas()} className={"margin"} />
          </div>

          <div className="center-versus ">
            <div>
              <span className={versus === "vs" ? "vs-board" : "result-board"}>
                {versus}
              </span>
            </div>
            <div className="margin-vs-refresh">
              <Button
                className="button-refresh "
                onClick={() => refreshButton()}
              >
                Refresh
              </Button>
            </div>
            <div>
              <RefreshNotif
                show={show}
                onHide={handleClose}
                onClick={handleClose}
              />
            </div>
          </div>

          <div className="column">
            <span className="tag-name"> Computer </span>
            <ElementBatu className={hoverBatuCom ? hoverBatuCom : "margin"} />
            <ElementGunting
              className={hoverGuntingCom ? hoverGuntingCom : "margin"}
            />
            <ElementKertas
              className={hoverKertasCom ? hoverKertasCom : "margin"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameSuit;
