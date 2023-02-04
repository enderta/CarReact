import React from 'react';

const Masonry = () => {
    return (
        <div>
            <div className="container py-4">
                <div
                    className="row"
                    data-masonry='{"percentPosition": true }'
                    style={{ position: "relative", height: 690 }}
                >
                    <div
                        className="col-sm-6 col-lg-4 mb-4"
                        style={{ position: "absolute", left: "0%", top: 0 }}
                    >
                        <div className="card">
                            <svg
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height={200}
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: Image cap"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#868e96" />
                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                                    Image cap
                                </text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">
                                    This is a longer card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-sm-6 col-lg-4 mb-4"
                        style={{ position: "absolute", left: "33.3333%", top: 0 }}
                    >
                        <div className="card p-3">
                            <figure className="p-3 mb-0">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0 text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div
                        className="col-sm-6 col-lg-4 mb-4"
                        style={{ position: "absolute", left: "66.6667%", top: 0 }}
                    >
                        <div className="card">
                            <svg
                                className="bd-placeholder-img card-img-top"
                                width="100%"
                                height={200}
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: Image cap"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#868e96" />
                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                                    Image cap
                                </text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    This card has supporting text below as a natural lead-in to additional
                                    content.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-sm-6 col-lg-4 mb-4"
                        style={{ position: "absolute", left: "33.3333%", top: 171 }}
                    >
                        <div className="card bg-primary text-white text-center p-3">
                            <figure className="mb-0">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0 text-white">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div
                        className="col-sm-6 col-lg-4 mb-4"
                        style={{ position: "absolute", left: "33.3333%", top: 310 }}
                    >
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    This card has a regular title and short paragraph of text below it.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-sm-6 col-lg-4 mb-4"
                        style={{ position: "absolute", left: "0%", top: 362 }}
                    >
                        <div className="card">
                            <svg
                                className="bd-placeholder-img card-img"
                                width="100%"
                                height={260}
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: Card image"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#868e96" />
                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                                    Card image
                                </text>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="col-sm-6 col-lg-4 mb-4"
                        style={{ position: "absolute", left: "66.6667%", top: 378 }}
                    >
                        <div className="card p-3 text-end">
                            <figure className="mb-0">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0 text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div
                        className="col-sm-6 col-lg-4 mb-4"
                        style={{ position: "absolute", left: "33.3333%", top: 488 }}
                    >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    This is another card with title and supporting text below. This card
                                    has some additional content to make it slightly taller overall.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Masonry;