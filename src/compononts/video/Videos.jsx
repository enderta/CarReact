import React from 'react';
import {Button, Card, Container, Form, Table,Row,Col} from "react-bootstrap";
import NewVideo from "./NewVideo.jsx";
import Rating from "./Rating.jsx";
import VideoCards from "./VideoCards.jsx";

const Videos = () => {
    const [videos, setVideos] = React.useState([]);
    const [filtered, setFiltered] = React.useState(videos);


    React.useEffect(() => {
        fetch('http://localhost:3001/videos')
            .then(res => res.json())
            .then(data => {
                setVideos(data.sort((a, b) => b.rating - a.rating));
                setFiltered(data.sort((a, b) => b.rating - a.rating));

            })
    }, []);

    const handleSearch = (e) => {
        if(e.target.value === ''){
            setFiltered(videos);
        }else{
            setFiltered(videos.filter((video) => video.title.toLowerCase().includes(e.target.value.toLowerCase())).sort((a, b) => b.rating - a.rating));
        }
    }



    return (
        <div style={{margin:"10px"}}>

            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign:"center"}}>Video List</h1>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Search" onChange={handleSearch}/>
                    </Col>
                    <Col>
                        <NewVideo/>
                    </Col>
                </Row>
            </Container>

                    {filtered.map((video, index) => (

                                <div>
                                   <VideoCards video={video}/>
                                </div>



                    ))}


            </div>




    );
};

export default Videos;