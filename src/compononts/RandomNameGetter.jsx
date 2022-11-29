import React from 'react';
import {Button} from "react-bootstrap";

const RandomNameGetter = () => {
    const [name, setName] = React.useState('');
    const [lucky, setLucky] = React.useState([]);
    const [names, setNames] = React.useState([
        'John','josh',
        'joe','jim',
        'jane','jake',
        'jerry','jessica',
        'jennifer','jessie',
        'julie','judy',
        'julia','julian',
        'juliana','juliet',
        'juliette','julius',
        'june','justin',
        'justine','karen',
        'kane','kate',
        'kurt','kyle',
    ]);



   const getRandomNumber= () => {
        return Math.floor(Math.random() * names.length);

   }
   const getRandomName = () => {
        const randomIndex = getRandomNumber();
        if(!lucky.includes(names[randomIndex])){
            setLucky([...lucky,names[randomIndex]]);
            setName(names[randomIndex]);
            setNames(names.filter((name,index) => index !== randomIndex));

        }
        else{
            alert('no more names');
            setNames(lucky)
            setLucky([]);
        }

   }

       const reset=()=>{
           setLucky([]);
              setName('');
       }



    return (
        <div>
           <div style={{display:"grid",alignSelf:'center'}}>
               <Button className={'btn btn-primary'} onClick={getRandomName}>Lucky</Button>

               <h1>{name}</h1>

           </div>

        </div>
    );
};

export default RandomNameGetter;