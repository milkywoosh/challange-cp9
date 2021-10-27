import kertas from './kertas.png';
import "../../Styles/game.element.style.css";
import "../../Styles/game.index.style.css";

function ElementKertas(props) {

    return (
        <div className={props.className}>
                <div
                    // onMouseOver={props.onMouseOver}
                    // onMouseLeave={props.onMouseLeave}
                    // className={' ' + props.className} 
                    >
                    <img
                        className="kertas "
                        src={kertas}
                        alt="kertas"
                        id="idKertas"
                        onClick={props.onClick}
                    />
                </div>
        </div>
    )
}

export default ElementKertas;