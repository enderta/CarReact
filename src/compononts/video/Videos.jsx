import React from 'react';
import {Container, Form, Row, Col} from "react-bootstrap";
import NewVideo from "./NewVideo.jsx";
import VideoCards from "./VideoCards.jsx";

const Videos = () => {
    const [videos, setVideos] = React.useState([]);
    const [filtered, setFiltered] = React.useState(videos);
    const handleSort = (e) => {
        e.preventDefault();
        fetch('https://server-rpsh.onrender.com//videos/sort')
            .then(res => res.json())
            .then(data => {
                    setVideos(data);
                    setFiltered(data);
                }
            );
    }
    React.useEffect(() => {
        fetch('https://server-rpsh.onrender.com/videos')
            .then(res => res.json())
            .then(data => {
                setVideos(data.sort((a, b) => b.rating - a.rating));
                setFiltered(data.sort((a, b) => b.rating - a.rating));

            })
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            setFiltered(videos);
        } else {
            setFiltered(videos.filter((video) => video.title.toLowerCase().includes(e.target.value.toLowerCase())).sort((a, b) => b.rating - a.rating));
        }
    }

    return (
        <div style={{margin: "10px"}}>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign: "center", color: "darkgreen"}}>Video List</h1>
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