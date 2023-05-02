import React,{ Component } from 'react'
import { Card, CardColumns, Col, Row } from 'react-bootstrap';
import Header from '../header';
import './home.css';

class Home extends Component {

    render(){ 
        return(
            <>
            <Header/>
            <div className="home_body">    
            <div className="container">     
                <Col>
                <Row>
                <Card className="home_card">
                    <Card.Header>Energy Used</Card.Header>
                    <Card.Body>20 Units</Card.Body>
                </Card>
                </Row>
                <Row>
                <Card>
                    <Card.Header>Energy Left</Card.Header>
                    <Card.Body>5 Units</Card.Body>
                </Card>
                </Row>
                <Row>
                <Card>
                    <Card.Header>Predicted Energy Needed</Card.Header>
                    <Card.Body>7 Units</Card.Body>
                </Card>
                </Row>
                <Row>
                <Card>
                    <Card.Header>Nearest Neighbour in Surplus</Card.Header>
                    <Card.Body>Shivam S331</Card.Body>
                </Card>
                </Row>
                <Row>
                <Card>
                    <Card.Header>Best Price Available</Card.Header>
                    <Card.Body>Rs 700 per Unit</Card.Body>
                </Card>
                </Row>
                <Row>
                <Card>
                    <Card.Header>Total Cost</Card.Header>
                    <Card.Body>Rs 4900</Card.Body>
                </Card>
                </Row>
                </Col>
            </div>           
            </div>           
            </>
        )
    }

}


export default Home;