import { useState } from 'react';
import Elements from './elements';
import "./element.css"
import "./index.css"
import { Container, Row, Col, Stack } from 'react-bootstrap'

const GameSuit = () => {

    const [versus, setVersus] = useState("")

    let linkBootstrap = document.createElement("link");
    linkBootstrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
    linkBootstrap.type = "text/css";
    linkBootstrap.rel = "stylesheet";
    linkBootstrap.integrity = "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC";
    linkBootstrap.crossOrigin = "anonymous";
    document.getElementsByTagName("head")[0].append(linkBootstrap);

    let scriptBootstrap = document.createElement("script");
    scriptBootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
    scriptBootstrap.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
    scriptBootstrap.crossOrigin = "anonymous";
    document.body.appendChild(scriptBootstrap);

    return (
        <>
            <div class="d-flex flex-row ">
                <div className=" p-2 justify-content-start ">  <span className=" less-than" >&lt;</span>  </div>
                <div className=" p-2 justify-content-start"> <img src="./gamesuit/assets/logo-traditional-suit.png" /> </div>
                <div className=" p-2 sub_title justify-content-start"> ROCK PAPER SCISSORS </div>
            </div>
            <div className="row">
                <div className="column margin">
                    <Elements
                    />
                </div>
                <div className="column margin vs-frame">
                    VS
                </div>
                <div className="column margin">
                    <Elements />
                </div>
            </div>
        </>

    )
}

export default GameSuit;