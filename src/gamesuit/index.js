import { useEffect, useState } from 'react';

import "./element.css"
import "./index.css"
import logoGame from './assets/logoGame.png'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap'
import { Suitclass } from './suit';
import { propTypes } from 'react-bootstrap/esm/Image';
import ElementBatu from './elementBatu';
import ElementGunting from './elementGunting';
import ElementKertas from './elementKertas';

const GameSuit = (props) => {
    let game = new Suitclass();

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
    document.getElementsByTagName("head")[0].append(scriptBootstrap);

    const [hoverBatu, setHoverBatu] = useState(null);
    const [hoverGunting, setHoverGunting] = useState(null);
    const [hoverKertas, setHoverKertas] = useState(null);
    const [hoverBatuCom, setHoverBatuCom] = useState(null);
    const [hoverGuntingCom, setHoverGuntingCom] = useState(null);
    const [hoverKertasCom, setHoverKertasCom] = useState(null);
    const [winner, setWinner] = useState(null)
    const [compTurn, setCompTurn] = useState(null);
    const [versus, SetVersus] = useState("vs")


    const clickBatu = () => {
        let result = game.suit('batu');
        let comp = game.computer();
        if (result) {

            if (comp === 'batu') {
                setHoverBatuCom("margin-grey")
                SetVersus('Draw')
            }
            else if (comp === 'gunting') {
                setHoverGuntingCom("margin-grey")
                SetVersus('Player 1 Win')
            }
            else if (comp === 'kertas') {
                setHoverKertasCom("margin-grey")
                SetVersus('Computer Win')
            }
        }
        setTimeout(() => {
            setHoverBatuCom(null)
            setHoverGuntingCom(null)
            setHoverKertasCom(null)
        }, 800)

    }

    const clickGunting = () => {
        let result = game.suit('gunting');
        let comp = game.computer();
        if (result) {

            if (comp === 'batu') {
                setHoverBatuCom("margin-grey")
                SetVersus('Computer Win')
            }
            else if (comp === 'gunting') {
                setHoverGuntingCom("margin-grey")
                SetVersus('Draw')
            }
            else if (comp === 'kertas') {
                setHoverKertasCom("margin-grey")
                SetVersus('Player 1 Win')
            }
        }
        setTimeout(() => {
            setHoverBatuCom(null)
            setHoverGuntingCom(null)
            setHoverKertasCom(null)
        }, 800)

    }
    const clickKertas = () => {
        let result = game.suit('kertas');
        let comp = game.computer();
        if (result) {

            if (comp === 'batu') {
                setHoverBatuCom("margin-grey")
                SetVersus(`Player 1 Win`)
            }
            else if (comp === 'gunting') {
                setHoverGuntingCom("margin-grey")
                SetVersus('Computer Win')
            }
            else if (comp === 'kertas') {
                setHoverKertasCom("margin-grey")
                SetVersus('Draw')
            }
        }
        setTimeout(() => {
            setHoverBatuCom(null)
            setHoverGuntingCom(null)
            setHoverKertasCom(null)
        }, 800)

    }
    const clickButton = () => {
        SetVersus('vs');
    }

    return (
        <>
            <div className="bg-black">
                <div className="d-flex flex-row less_than ">
                    <div className=" p-2 justify-content-start mark-less ">  &lt;  </div>
                    <div className=" p-2 justify-content-start "> <img className="size-logo-game" src={logoGame} /> </div>
                    <div className=" p-2 sub_title justify-content-start"> ROCK PAPER SCISSORS </div>
                </div>
                <div className="d-flex flex-row justify-content-center">

                    <div className="column">
                        <span className="tag-name-p1"> Player 1 </span>
                        <ElementBatu
                            onClick={() => clickBatu()}
                            // onMouseOver={mouseOverBatu}// berat
                            // onMouseLeave={mouseLeave}
                            className={"margin"} />
                        <ElementGunting
                            onClick={() => clickGunting()}
                            // onMouseOver={mouseOverGunting}
                            // onMouseLeave={mouseLeave}
                            className={"margin"} />
                        <ElementKertas
                            onClick={() => clickKertas()}
                            // onMouseOver={mouseOverKertas}
                            // onMouseLeave={mouseLeave}
                            className={"margin"}/>
                    </div>

                    <div>

                        <div className={versus === "vs" ? "vs-board" : "result-board" }>
                        
                            <span  >
                                {versus}
                            </span>
                        </div>
                        <div className="  button-board">
                            <Button 
                                className="button-refresh"
                                onClick={() => clickButton()}>
                                Refresh
                            </Button>
                        </div>

                    </div>

                    <div className="column">
                        <span className="tag-name" > Computer </span>
                        <ElementBatu
                            
                            className={ hoverBatuCom ? hoverBatuCom : "margin"} />
                            
                        <ElementGunting
                            className={hoverGuntingCom ? hoverGuntingCom : "margin"} />
                        <ElementKertas
                            className={hoverKertasCom ? hoverKertasCom : "margin"}  />
                    </div>
                </div>
            </div>
        </>

    )
}

export default GameSuit;