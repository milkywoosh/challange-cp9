import { useState } from 'react';
import batu from './assets/batu.png';
import gunting from './assets/gunting.png';
import kertas from './assets/kertas.png';
import "./element.css"
import { Container, Row, Col, Stack, Alert } from 'react-bootstrap';



const Elements = (props) => {

    const [classes, setClasses] = useState(null)

    const mouseOver = () => {
        setClasses(true);
        return classes
        
    }
    const mouseLeave = () => {
    
        // return classes;
        console.log('on Hover...')
    }

    return (

        <Container>

            <div  >
                <div className="d-flex flex-column">
                    <div  onMouseOver={mouseOver } onMouseLeave={mouseLeave} >
                        <img className="batu margin" src={batu} alt="batu" 
                        />
                    </div>
                    <div >
                        <img className="gunting margin" src={gunting} alt="gunting" />
                    </div>
                    <div >
                        <img className="kertas margin" src={kertas} alt="kertas" />
                    </div>
                </div>

            </div>

        </Container >


    )
}

export default Elements;