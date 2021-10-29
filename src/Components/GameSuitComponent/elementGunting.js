
import gunting from './gunting.png';

import "../../Styles/game.element.style.css";
import "../../Styles/game.index.style.css";
function ElementGunting(props) {

    return (
        <div className={props.className}>
                <div 
                    // onMouseOver={props.onMouseOver}
                    // onMouseLeave={props.onMouseLeave}
                    // className={props.className} 
                    >
                    <img
                        className="gunting"
                        src={gunting}
                        alt="gunting"
                        id="idGunting"
                        onClick={props.onClick} />
                </div>
        </div>

    )
}

export default ElementGunting;