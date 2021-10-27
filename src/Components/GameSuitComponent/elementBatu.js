
import batu from './batu.png';

import "../../Styles/game.element.style.css";
import "../../Styles/game.index.style.css";

function ElementBatu(props) {


    return (
        <div className={props.className}>
            <div
            // onMouseOver={props.onMouseOver} 
            //  onMouseLeave={props.onMouseLeave} 
            //  className={props.className}
            >
                <img
                    className="batu"
                    id="batuElement"
                    src={batu}
                    alt="batu"
                    onClick={props.onClick} />
            </div>
        </div>

    )
}

export default ElementBatu;