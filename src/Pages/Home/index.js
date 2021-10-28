import React,{ Component } from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import './index.css'



export default class LandPage extends Component{
    render() {
        return (
    <Container>
        <Row>
            <Col xs={6} md={4}>
                <Image src="/assets/rockpaper.jpg/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
            </Col>
            
        </Row>
        <br/><br/><br/>
        <Row>
            <Col xs={6} md={4}>
                <Image src="/assets/rockpaper.jpg/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
            </Col>
            
        </Row>
        <br/><br/><br/>
        <Row>
            <Col xs={6} md={4}>
                <Image src="/assets/rockpaper.jpg/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
            </Col>
            
        </Row>
    </Container>
        )
    }
}
