import {Card, Row, Container, Col}from 'react-bootstrap';
import Pagination from './Pagination';
import React from 'react'
import { useState, useEffect} from 'react';
import '../style/event.css'
// import axios from 'axios';
import Modals from './Modals';
import { getEventList } from '../api';

const Event=()=>{
    const [event, setEvent] = useState([])

    const [userSelect, setUserSelect] = useState()

    const [isShow, setIsShow] = useState(false);

    const [currentPage, setCurrentPage] =useState(1)
    const [eventPerPage] = useState(3)

    const postPerPage = 1
    const [isLoading, setIsLoading] = useState(true)
    
    const handleClose = () => setIsShow(false);
    const handleShow = (i) => {
        setIsShow(true);
        setUserSelect(currentevents.at(i))
        
    }
    const lastevents = currentPage * eventPerPage
    const firstevents = lastevents - eventPerPage
    const currentevents = event.slice(firstevents, lastevents)

    useEffect(()=>{
        getEventList()
        .then( (response) =>{
          setEvent(response.data.docs);
          if(response?.data?.docs?.length === postPerPage) setIsShow(true)
          setIsLoading(false)
        })
        .catch( (error) =>{
            console.log(error);
        });
      }, [isShow])

    const EventsCard = () => {
        return currentevents.map((event, i)=>{
            return(
                <Col key={i} md="4" className=''>
                <Card className='event-card mt-3 mb-3'>
                <Card.Img variant="top" src={event.image} className="event-image mx-auto img-thumbnail"/>
                <Card.Body className='p-4'>
                    <Card.Text onClick={() => handleShow(i)}>
                        {event.category}
                    </Card.Text>
                    <Card.Title className='eventName' onClick={() => handleShow(i)}>{event.name}</Card.Title>
                </Card.Body>
            </Card>
                </Col>
            
            );   
        })
    }
    return(
        <div className="event-wrapper">
        <Container className=''>
            <h2 className='text-center p-4 event-title'>Event</h2>
            {isLoading? <div className="spinner"></div>:
            
            <Row className=''>
                <EventsCard/>
            </Row>
}
            <div className="pagination-button text-center">
                <Pagination eventLength={event.length} eventPerPage={eventPerPage} setCurrentPage={setCurrentPage}/>
            </div>
            {isShow ? 
                <Modals isShow={isShow} handleClose={handleClose} data={userSelect}/>
                :
                <Modals isShow={isShow} handleClose={handleClose} data=""/>
        }
        </Container>
        </div>
        
           
    );
    
}

export default Event;