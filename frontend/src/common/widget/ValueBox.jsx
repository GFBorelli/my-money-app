import React from 'react'

import { Card, Row, Col } from 'react-bootstrap'

export default props => (
    <Card className={props.classname} bg={props.bg} text='white'>
        <Card.Header>{props.text}</Card.Header>
        <Card.Body>
            <Row>
                <Col xs={'10'} className='mt-2'>
                    <Card.Text as='h1'  >{props.value}</Card.Text>
                </Col>
                <Card.Text>{props.icon}</Card.Text>
            </Row>
        </Card.Body>
    </Card>
)