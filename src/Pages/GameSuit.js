import { useState } from 'react';

import "../Styles/game.index.style.css"
import "../Styles/game.element.style.css"
import logoGame from '../Components/GameSuitComponent/logoGame.png';
import { Button } from 'react-bootstrap'
import { Suitclass } from '../Components/GameSuitComponent/suit';
import ElementBatu from '../Components/GameSuitComponent/elementBatu';
import ElementGunting from '../Components/GameSuitComponent/elementGunting';
import ElementKertas from '../Components/GameSuitComponent/elementKertas';

const GameSuit = (props) => {
    let game = new Suitclass();
    

    const [hoverBatuCom, setHoverBatuCom] = useState(null);
    const [hoverGuntingCom, setHoverGuntingCom] = useState(null);
    const [hoverKertasCom, setHoverKertasCom] = useState(null);
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
                    <div className=" p-2 justify-content-start "> <img className="size-logo-game" src={logoGame} alt={"logoGame"} /> </div>
                    <div className=" p-2 sub_title justify-content-start"> ROCK PAPER SCISSORS </div>
                </div>
                <div className="d-flex flex-row justify-content-center">

                    <div className="column ">
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
                                onClick={() => clickButton()}>
                                Refresh
                            </Button>
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