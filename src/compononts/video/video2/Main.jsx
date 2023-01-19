import React from 'react';
import data from './exampleresponse.json'
import VideoCard  from "./VideoCard.jsx";


const Main = () => {
    const [videos, setVideos] = React.useState(data);

    return (
        <div>
            {videos.map((video, index) => (
                <div>
                    <VideoCard video={video} data={setVideos} videos={videos}/>
                </div>
            ))}

        </div>
    );
};

export default Main;