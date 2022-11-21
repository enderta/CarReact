import React from 'react';
import {Button, Card, Form, Modal, ModalBody} from "react-bootstrap";

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
        } else if (ayat > verse) {

            alert('Chappter is not more than ' + verse)
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
    console.log(originalText);
    console.log(eng);
    console.log(verse);


    return (
        <div>
            <div className="container"  >
                <Card className="text-center" style={{
                    border: "1px solid",
                    padding: '10px',
                    margin: "10px",
                    position: 'absolute',
                    top: '25%',
                    left: "25%",
                    right: "25%"}}>
                    <Card.Header><h3>Quran</h3></Card.Header>
                    <br/>
                    <Card.Body>

                        <Card.Title style={{}}><h4>Chapter</h4></Card.Title>

                        <Form.Control style={{width:"300px"}} type="number" placeholder="Enter Chappter"
                                      onChange={(e) => setChappter(e.target.value)}/>
                        <br/>
                        <Card.Title ><h4>Ayat</h4></Card.Title>
                        <Form.Control style={{width:"300px"}}  type="number" placeholder="Enter Ayat" onChange={(e) => setAyat(e.target.value)}/>
                        <br/>
                        <Button variant="primary" onClick={handleShowAyat}>
                            Show Ayat
                        </Button>
                        <Modal show={showAyat} onHide={handleCloseAyat}>
                            <Modal.Header closeButton>
                                <Modal.Title>{name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>{originalText}</p>
                                <p>{eng}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseAyat}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                </Card>
            </div>

        </div>

    );
};

export default Tefeul;