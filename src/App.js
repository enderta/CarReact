import React from 'react';

const App = () => {
    const [users, setUsers] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [filteredUsers, setFilteredUsers] = React.useState([]);

    React.useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://library2.cydeo.com/rest/v1/get_users?user_group=null&user_status=ACTIVE&draw=2&columns[0][data]=actions&columns[0][name]=actions&columns[0][searchable]=true&columns[0][orderable]=false&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=id&columns[1][name]=id&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=full_name&columns[2][name]=full_name&columns[2][searchable]=true&columns[2][orderable]=true&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=email&columns[3][name]=email&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=group_name&columns[4][name]=group_name&columns[4][searchable]=true&columns[4][orderable]=true&columns[4][search][value]=&columns[4][search][regex]=false&columns[5][data]=status&columns[5][name]=status&columns[5][searchable]=true&columns[5][orderable]=true&columns[5][search][value]=&columns[5][search][regex]=false&order[0][column]=1&order[0][dir]=desc&start=0&length=500&search[value]=&search[regex]=false&_=1667389886463", requestOptions)
            .then(response => response.json())
            .then(result => {
                setUsers(result.data);
                setFilteredUsers(result.data);
            })
            .catch(error => console.log('error', error));
    }, []);
    console.log(users);
    return (
        <div>
            <h1>Users</h1>
            <input type="text" placeholder="Search" onChange={e => {
                setSearch(e.target.value);
                setFilteredUsers(users.filter(user => user.full_name.toLowerCase().includes(e.target.value.toLowerCase())));
            }
            }/>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Group</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.full_name}</td>
                        <td>{user.email}</td>
                        <td>{user.group_name}</td>
                        <td>{user.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            
        </div>
    );
};

export default App;