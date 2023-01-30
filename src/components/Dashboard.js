import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
        //handleSerach(props);
    },[])

    const handleSerach = async (event) => {
        let key = event.target.value;
        if(key)
        {
            let result = await fetch(`http://localhost:2002/search/${key}`);
            result = await result.json();

            if(result)
            {
                setVideos(result);
            }
        }
        else
        {
            getVideos();
        }
    }

    const getVideos = async () => {
        let result = await fetch("http://localhost:2002/videos")
        .then((response) => response.json())
        .then(videoList => {
            // this.state.videos = videoList;
            setVideos(videoList);
            // console.log("REsponse", this.state.videos);
        });        
    }

    return(
            <>
            <Container>
            <input type="text" placeholder="Search Video..." onChange={handleSerach}/>
            <Row>
                {
                    videos.length > 0 ? videos.map((item, index) => 
                        <Col md="3">
                            <Card className='cardcls'>
                                <Card.Img variant="top" src={item.vdo_thumb} />
                                <Card.Body>
                                    <Card.Title>{ item.vdo_title }</Card.Title>
                                    <Card.Text>
                                    <p>{ item.vdo_desc }</p>
                                    <p>Author - { item.vdo_author }</p>
                                    </Card.Text>
                                    <Button variant="primary" target='_blank' href={item.vdo_url}>Watch Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) : <h2>No Video Found</h2>
                }
            </Row>
            </Container>
            </>
    );
}

export default Dashboard;