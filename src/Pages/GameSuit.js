import { useState, useEffect } from 'react';

import "../Styles/game.index.style.css"
import "../Styles/game.element.style.css"
import logoGame from '../components/GameSuitComponent/logoGame.png';
import { Button } from 'react-bootstrap'
import { Suitclass } from '../components/GameSuitComponent/suit';
import ElementBatu from '../components/GameSuitComponent/elementBatu';
import ElementGunting from '../components/GameSuitComponent/elementGunting';
import ElementKertas from '../components/GameSuitComponent/elementKertas';
import RefreshNotif from './RefreshNotificationGame';

const GameSuit = (props) => {
    let game = new Suitclass();

    const [hoverBatuCom, setHoverBatuCom] = useState(null);
    const [hoverGuntingCom, setHoverGuntingCom] = useState(null);
    const [hoverKertasCom, setHoverKertasCom] = useState(null);
    const [versus, SetVersus] = useState("vs")
    const [matchResult, setMatchResult] = useState([])
    const [stop, setStopped] = useState(false)
    const [show, setShow] = useState(false);
    

    // use useEffect multiple time/ line in code to based on different cases
    useEffect(() => {

    }, [])// run ONCE at first render

    useEffect(() => {
        console.log("stop: ", stop)
    }) // run every rendering DOM

    useEffect(() => {
        // alert(`${hoverBatuCom}, ${hoverGuntingCom}, ${hoverKertasCom}`)
        console.log(matchResult.length)
        if (matchResult.length === 3) {
            setStopped(true);
            handleShow()
            
        }
        setTimeout(() => {
            setHoverBatuCom(null)
            setHoverGuntingCom(null)
            setHoverKertasCom(null)
        }, 800)
        return (() => {
            console.log('clean up')
        })
    }, [matchResult]) // run every state at dependency variable change

    const setPopUp = () => {
        return true;
    }
    //    (matchResult.length < 3) &&
    const clickBatu = () => {
        let result = game.suit('batu');
        let comp = game.computer();
        if ((stop === false)) {


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
            let joined = matchResult.concat([result])
            setMatchResult(joined)
        }
    }
    const clickGunting = () => {
        let result = game.suit('gunting');
        let comp = game.computer();
        if ((stop === false)) {

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
            let joined = matchResult.concat([result])
            setMatchResult(joined)
        }
    }
    const clickKertas = () => {
        let result = game.suit('kertas');
        let comp = game.computer();
        if ((stop === false)) {
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

            let joined = matchResult.concat(result)
            setMatchResult(joined)
        }
    }
    const refreshButton = () => {
        SetVersus('vs');
        setMatchResult([])
        setStopped(false)

    }
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="bg-black">
                <div className="d-flex flex-row less_than ">
                    <div className=" p-2 justify-content-start mark-less ">  &lt;  </div>
                    <div className=" p-2 justify-content-start "> <img className="size-logo-game" src={logoGame} alt={"logoGame"} /> </div>
                    <div className=" p-2 sub_title justify-content-start"> ROCK PAPER SCISSORS </div>
                </div>
                <div className="d-flex flex-row justify-content-center">

                    <div className="column ">
                        <span className="tag-name-p1"> Player 1 </span>
                        <ElementBatu
                            onClick={() => clickBatu()}
                            className={"margin"} />
                        <ElementGunting
                            onClick={() => clickGunting()}
                            className={"margin"} />
                        <ElementKertas
                            onClick={() => clickKertas()}
                            className={"margin"} />
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
                                onClick={() => refreshButton()}>
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
                        <span className="tag-name" > Computer </span>
                        <ElementBatu
                            className={hoverBatuCom ? hoverBatuCom : "margin"} />
                        <ElementGunting
                            className={hoverGuntingCom ? hoverGuntingCom : "margin"} />
                        <ElementKertas
                            className={hoverKertasCom ? hoverKertasCom : "margin"} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default GameSuit;