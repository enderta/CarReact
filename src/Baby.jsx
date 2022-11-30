import React from 'react';
import demo from './demo.json';
import './baby.css'

const Baby = () => {
    //sort the array by name in ascending order object
    const sortedByName = demo.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            return 0;
        }
    }
    );

    console.log(sortedByName);
    return (
        <div>
       <div>
           {
                sortedByName.map((a)=>{
                    return(
                        <div className="baby">
                            {a.sex==='f'? <h1 style={{color:'pink'}}>{a.name}</h1>:<h1 style={{color:'blue'}}>{a.name}</h1>}
                            </div>
                    )

                }
                )
           }
       </div>
        </div>
    );

};

export default Baby;