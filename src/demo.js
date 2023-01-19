import React from 'react';

const Demo = () => {
    const data=[
        {id:1, name:'John', age:20},
        {id:2, name:'Smith', age:30},
        {id:3, name:'Peter', age:40}
    ]
    const [users, setUsers] = React.useState(data);
    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }
    return (
        <div>

        </div>
    );
};

export default Demo;