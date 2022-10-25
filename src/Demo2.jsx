import React, {createContext, useContext} from 'react';
import Demo from "./Demo";

const d=createContext();
const Demo2 = () => {

    const data= {
        name: 'John',
        age: 30,
        address: {
            city: 'New York',
        }};



    return (
        <div>
            <d.Provider value={data}>
           <Demo  />
            </d.Provider>
        </div>
    );
};

export default Demo2;