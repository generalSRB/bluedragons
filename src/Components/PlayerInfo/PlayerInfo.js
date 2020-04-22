import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';


const PlayerInfo = (props) => {
    return (
        <div>
            <div>
                <Jumbotron>
                    <CardGroup className='d-flex'>
                        <Card>
                            <Card.Img variant="top" src={props.item.image} />
                            <Card.Body>
                                <Card.Title>{props.item.name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><b>Age:</b> {props.item.age}</ListGroup.Item>
                                <ListGroup.Item><b>Position:</b> {props.item.position}</ListGroup.Item>
                                <ListGroup.Item><b>Squad number:</b> {props.item.number}</ListGroup.Item>
                                <ListGroup.Item>{props.item.information}</ListGroup.Item>
                            </ListGroup>
                            {/* <Button variant="primary" onClick={props.showInfo}>Show less</Button> */}
                        </Card>
                    </CardGroup>
                </Jumbotron>
            </div>
        </div>
            
    )
    
}

export default PlayerInfo;