import React from 'react';

const Performance = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
            fetch('http://localhost:3001/performance', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV0MkBnbWFpbC5jb20iLCJpYXQiOjE2NzI4NDk1MzZ9.ZthZ5qeqNX6IBVaq4EfIldNqVtda7skelkk-Hhf3Fj4'
                },
            }).then(res => res.json())
                .then(data => {
                        setData(data);
                    }
                )
                .catch(err => console.log(err))
        }
        , []);
    console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default Performance;