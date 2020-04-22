import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const PlayerCard = (props) => {
    return (
        
            <div className='col-md-4 my-3'>
                <Card>
                    <Card.Img variant="top" src={props.item.image} />
                    <Card.Body>
                        <Card.Title>{props.item.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><b>Age:</b> {props.item.age}</ListGroup.Item>
                        <ListGroup.Item><b>Position:</b> {props.item.position}</ListGroup.Item>
                        <ListGroup.Item><b>Squad number:</b> {props.item.number}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" onClick={props.showInfo}>More info</Button>
                </Card>
            </div>
        
                       
    )
    
}

export default PlayerCard;


