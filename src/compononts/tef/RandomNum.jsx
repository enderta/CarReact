import React from 'react';

const RandomNum = () => {
    const [num, setNum] = React.useState(0);
    const [num2, setNum2] = React.useState(0);

    const generateRandomNum = () => {
        setNum(Math.floor(Math.random() * 100));
        setNum2(Math.floor(Math.random() * 100));
    }

    return (
        <div>
    <h1>{num}</h1>
    <h1>{num2}</h1>
    <button onClick={generateRandomNum}>Generate Random Number</button>

        </div>
    );
};

export default RandomNum;