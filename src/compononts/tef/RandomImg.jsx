import React from 'react';
import {Image} from "react-bootstrap";

const RandomImg = () => {
    const numImagesAvailable = 982  //how many photos are total in the collection
    const numItemsToGenerate = 1; //how many photos you want to display
    const collectionID = 928423   //the collection ID from the original url
    const [img, setImg] = React.useState("");

    const generateRandomImg = () => {
        const randomNum = Math.floor(Math.random() * numImagesAvailable);
        const url = `https://source.unsplash.com/collection/${collectionID}/${randomNum}`;
        setImg(url);
      //  window.location.reload();
    }

    console.log(img);
    return (
        <div>
            <h1>Random Image</h1>
            <Image src={img} style={{opacity:"0.3"}}/>
            <button onClick={generateRandomImg}>Generate Random Image</button>




        </div>
    );
};

export default RandomImg;