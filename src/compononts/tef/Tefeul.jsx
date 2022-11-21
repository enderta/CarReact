import React from 'react';
import {Button, Card, Col, Form, Modal, ModalBody, Row} from "react-bootstrap";

const Tefeul = () => {
    const [chappter, setChappter] = React.useState(1);
    const [ayat, setAyat] = React.useState(1);
    const [verse, setVerse] = React.useState(1);
    const [originalText, SetOriginalText] = React.useState('');
    const [eng, SetEng] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [showAyat, setShowAyat] = React.useState(false);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [randomChapter, setRandomChapter] = React.useState(0);
    const [randomAyat, setRandomAyat] = React.useState(0);





    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseAyat = () => setShowAyat(false);
    const handleShowAyat = () => setShowAyat(true);


    React.useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '07475edaadmsh706c2d5e735b7aep1e4912jsnbb5010132758',
                'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
            }
        };
        fetch(`https://al-quran1.p.rapidapi.com/${chappter}`, options)
            .then(response => response.json())
            .then(data => {
                    setVerse(data.total_verses);
                    setName(data.surah_name);


                }
            )
            .catch(err => {
                    console.error(err);
                }
            );
        if (chappter > 114) {
            alert('Ayat is not more than 114')
            setChappter(1)
        } else if (ayat > verse) {

            alert('Chappter is not more than ' + verse)
            setAyat(1)
        } else {
            fetch(`https://al-quran1.p.rapidapi.com/${chappter}/${ayat}`, options)
                .then(response => response.json())
                .then(data => {
                        SetOriginalText(data.content);
                        SetEng(data.translation_eng);
                    }
                )
                .catch(err => {
                        console.error(err);
                    }
                );
        }

    }, [ayat, chappter])


    const handleRandom = () => {

            setChappter(Math.floor(Math.random() * 114) + 1);

        //create random number for ayat between 1 and verse

            setAyat(Math.floor(Math.random() * verse) + 1);

    }
    console.log(ayat);
    console.log(chappter);
    console.log(verse);

    return (
        <div>
        <Button variant={'primary'} onClick={handleRandom} >Get A Random Ayat</Button>
           <p>
                <h1>{name}</h1>
           </p>
            <p>
                <h1>{originalText}</h1>
            </p>
            <p>
                <h1>{eng}</h1>
            </p>


           {/* <div className="card" style={{
                border: "1px solid",
                padding: '10px',
                margin: "10px",
                position: 'absolute',
                top: '25%',
                left: "25%",
                right: "25%"
            }}>
            <Card >
                <Card.Header>
                    <h1>Al-Quran</h1>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row className="align-items-center">
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput" >
                                    <h3>Chapter</h3>
                                </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    id="inlineFormInput"
                                    placeholder="Chapter"
                                    value={chappter}
                                    onChange={(e) => setChappter(e.target.value)}
                                />
                            </Col>
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInputGroup" >
                                    <h3>Ayat</h3>
                                </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    id="inlineFormInputGroup"
                                    placeholder="Ayat"
                                    value={ayat}
                                    onChange={(e) => setAyat(e.target.value)}
                                />
                            </Col>

                                <Button style={{margin:"5px",width:"500px"}} onClick={handleShowAyat} >
                                   <h3>Show</h3>
                                </Button>

                        </Row>

                    </Form>
                </Card.Body>
            </Card>
            <Modal show={showAyat} onHide={handleCloseAyat}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>{originalText}</h3>
                    <h3>{eng}</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAyat}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>*/}
        </div>
    );
};

export default Tefeul;