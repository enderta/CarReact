import React from 'react';

const Home = () => {
    return (
        <div>
            <div>
                <video autoPlay loop muted>
                    <source
                        src={require('./pexels-anthony-shkraba-8064146.mp4')}
                        type="video/mp4"
                    />
                </video>
                <div className="container">
                    <button type="button" className='home_link1'  >
                        <a className='home_link1_a'  href="/cars" > <h1 className="link_text1" >Cars</h1></a>
                    </button>
                    <button type="button" className='home_link2'  >
                        <a className='home_link2_a' href="/owners" >  <h1 className="link_text2" >Owners</h1></a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;