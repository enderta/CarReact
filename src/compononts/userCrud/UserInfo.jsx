import React from 'react';
import {useParams} from "react-router";

const UserInfo = () => {
    const [user, setUser] = React.useState([]);
    let usid=useParams()
    console.log(usid.id)
    React.useEffect(()=>{
        fetch(`http://localhost:3001/users/${usid.id}`)
            .then((response) => response.json())
            .then((data) => {
                    setUser(data);
                    console.log(data);
                }
            )
    },[])
    console.log(user)
    return (
        <div>
            <h1>UserInfo</h1>
            {
                user && (
                    <div>
                        <h1>{user.name}</h1>
                        <h1>{user.surname}</h1>
                        <h1>{user.title}</h1>
                    </div>
                )
            }


        </div>
    );
};

export default UserInfo;