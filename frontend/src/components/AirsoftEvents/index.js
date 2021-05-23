import React from "react";
import {Card, Button} from 'react-bootstrap';
import {useState, useEffect, post} from "react";

 

import "./style.css";




const AirsoftEvents = () => {

  const [ airsoft, setEvents ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/airsoft');
        const jsonData = await res.json();
        console.log(jsonData);
        setEvents(jsonData);
      } catch(err){
        console.log(err);
      }
    }
    fetchData();
  
  }, [])


  return (
    <div className="some-page-wrapper">
      <h1 className="eventPage">Airsoft Events</h1>
      {
        airsoft.map(airsoft => {
          return(
<Card className=" top text-center" style={{borderRadius:"40px", backgroundColor:"rgb(245,245,245)"}} data-id={airsoft.id}>
  <Card.Header className="head" style={{borderRadius:"40px", backgroundColor:"lightgray"}}>{airsoft.eventTitle}</Card.Header>
  <center>
  <Card.Body >
    <Card.Title className="tile">{airsoft.location}</Card.Title>
    <hr></hr>
    <Card.Text>
    {airsoft.phoneNumber}
    </Card.Text>
    <Card.Text>
    {airsoft.date}
    </Card.Text>
    <Card.Title> Rules: </Card.Title>
    <Card.Title> {airsoft.rule1}</Card.Title>
    <Card.Title> {airsoft.rule2}</Card.Title>
   
    <Button className="button">Reserve</Button>

  </Card.Body>
 </center>
</Card>
          )
        })
      }
</div>
  )
    };

export default AirsoftEvents;