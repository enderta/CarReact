import React from 'react';
import './pic.css'
const PicSlide = () => {
    const images = [
        "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    ];
    const [pic, setPic] = React.useState(0);

    const nextPic = () => {
        if (pic < images.length - 1) {
            setPic(pic + 1);
        } else {
            setPic(0);
        }
    }
    const prevPic = () => {
        if (pic > 0) {
            setPic(pic - 1);
        } else {
            setPic(images.length - 1);
        }
    }

    return (
        <div>
            <h2>Project 1: Carousel</h2>
            <div className="slider">
                <div className="left-arrow" onClick={prevPic}>
                    ⬅
                </div>
                <div className="right-arrow" onClick={nextPic}>
                    ⮕
                </div>
                {images.map(
                    (image, index) =>
                        pic === index && (
                            <div key={image} className="slide">
                                <img src={image} alt="images" />
                            </div>
                        )
                )}
            </div>
        </div>

    );
};
export default PicSlide;