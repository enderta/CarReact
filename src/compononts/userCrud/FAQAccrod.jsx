import React from 'react';
import {Accordion} from "react-bootstrap";
import {Card} from "reactstrap";

const FaqAccrod = () => {
    const questions = [
        {
            id: 1,
            title: "Is this a good product?",
            info:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
            id: 2,
            title: "How much does it cost?",
            info:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
            id: 3,
            title: "When can I get it?",
            info:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
            id: 4,
            title: "How do I use it?",
            info:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
            id: 5,
            title: "What is the warranty?",
            info:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
            id: 6,
            title: "How long warranty does it have?",
            info:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        }
    ];
    return (
        <div>
            <h1>FAQ</h1>
            <div className="container">
                {
                    questions.map((question) => {
                       return (
                            <div className="row">
                                <div className="col-12">
                                    <Card className={"card"}>
                                        <Accordion>
                                            <Accordion.Item eventKey={question.id}>
                                                <Accordion.Header>{question.title}</Accordion.Header>
                                                <Accordion.Body>{question.info}</Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                    </Card>
                                </div>
                            </div>
                            );


                    })

                }
            </div>

        </div>
    );
};

export default FaqAccrod;