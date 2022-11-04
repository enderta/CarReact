import React from 'react';
import {Button, Table} from "react-bootstrap";

const Users = () => {
    const [users, setUsers] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [filteredUsers, setFilteredUsers] = React.useState([]);
    const [userGroup, setUserGroup] = React.useState('all');
    const [status, setStatus] = React.useState('ACTIVE');
    const [count, setCount] = React.useState(5);

    const handleUserGroup = (e) => {
        setUserGroup(e.target.value);
        setFilteredUsers(
            users.filter((user) => {
                    if (e.target.value === "null") {
                        return user;
                    } else {
                        return user.user_group_id === e.target.value;
                    }

                }
            )
        );
    }
    console.log(users.length)
    React.useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://library2.cydeo.com/rest/v1/get_users?user_group=null&user_status=ACTIVE&draw=2&columns[0][data]=actions&columns[0][name]=actions&columns[0][searchable]=true&columns[0][orderable]=false&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=id&columns[1][name]=id&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=full_name&columns[2][name]=full_name&columns[2][searchable]=true&columns[2][orderable]=true&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=email&columns[3][name]=email&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=group_name&columns[4][name]=group_name&columns[4][searchable]=true&columns[4][orderable]=true&columns[4][search][value]=&columns[4][search][regex]=false&columns[5][data]=status&columns[5][name]=status&columns[5][searchable]=true&columns[5][orderable]=true&columns[5][search][value]=&columns[5][search][regex]=false&order[0][column]=1&order[0][dir]=desc&start=0&length=${count}&search[value]=&search[regex]=false&_=1667389886463`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setUsers(result.data);
                setFilteredUsers(result.data);
            })
            .catch(error => console.log('error', error));
    }, [count]);
    console.log(users);
    const handleSearch = (event) => {
        setSearch(event.target.value);
        setFilteredUsers(
            users.filter((user) => {
                return user.full_name.toLowerCase().includes(event.target.value.toLowerCase());
            })
        );
    }

    const handleStatus = (e) => {
        setStatus(e.target.value);
        setFilteredUsers(
            users.filter((user) => {
                    return user.status === e.target.value;
                }
            )
        );
    }
    const handleCount = (e) => {
        setCount(e.target.value);
        setFilteredUsers(
            users.filter((user) => {
                    return user;
                }
            )
        );

    }
    return (
        <div>
            <br/>
            <section className="container">
                <div className="row">
                    <div className="col-md-12">

      <span style={{float: "right"}}>
        <a
            className="btn btn-lg btn-outline btn-primary btn-sm"

        >
          <i className="fa fa-plus" aria-hidden="true"/> Add User
        </a>
      </span>
                        <h3>User Management</h3>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label">User Group</label>
                                    <select
                                        id="user_groups"
                                        className="form-control select2"
                                        value={userGroup}
                                        onChange={handleUserGroup}
                                    >
                                        <option value="null" selected="selected">
                                            ALL
                                        </option>
                                        <option value={2}>Librarian</option>
                                        <option value={3}>Students</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label">Status</label>
                                    <select
                                        id="user_status"
                                        className="form-control select2"
                                        value={status}
                                        onChange={handleStatus}
                                    >
                                        <option value="ACTIVE">ACTIVE</option>
                                        <option value="INACTIVE">INACTIVE</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div id="tbl_users_wrapper" className="dataTables_wrapper no-footer">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="dataTables_length" id="tbl_users_length">
                                        <label>
                                            Show{" "}
                                            <select
                                                name="tbl_users_length"
                                                aria-controls="tbl_users"
                                                className="form-control input-sm input-xsmall input-inline"
                                                value={count}
                                                onChange={handleCount}
                                            >
                                                <option value={5}>5</option>
                                                <option value={10}>10</option>
                                                <option value={15}>15</option>
                                                <option value={50}>50</option>
                                            </select>{" "}
                                            records
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div
                                        id="tbl_users_filter"
                                        className="dataTables_filter"
                                        style={{textAlign: "right"}}
                                    >
                                        <label>
                                            Search:
                                            <input
                                                type="search"
                                                className="form-control input-sm input-small input-inline"
                                                placeholder=""
                                                aria-controls="tbl_users"
                                                value={search}
                                                onChange={handleSearch}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div
                                    id="tbl_users_processing"
                                    className="dataTables_processing"
                                    style={{display: "none"}}
                                >
                                    <div className="loading-message loading-message-boxed">
                                        <img src="./img/loading-spinner-grey.gif" align=""/>
                                        <span>&nbsp;&nbsp;LOADING...</span>
                                    </div>
                                </div>
                            </div>
                            <div className="table-scrollable">
                               <Table className="table table-striped table-bordered table-hover table-checkable order-column dataTable no-footer">
                                    <thead>
                                    <tr role="row">
                                        <th>Action</th>
                                        <th>Full Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Group</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        filteredUsers.map((user, index) => {
                                            return (
                                                <tr role="row" className="odd">
                                                    <td>
                                                        <Button type={"button"}
                                                                className={"btn btn-sm btn-outline green"}>
                                                            <i className="fa fa-edit">
                                                                <span className="hidden-xs"> Edit</span>
                                                            </i>
                                                        </Button>
                                                    </td>
                                                    <td className="sorting_1">{user.id}</td>
                                                    <td>{user.full_name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.group_name}</td>
                                                    <td>{user.status}</td>
                                                </tr>
                                            )

                                        })

                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
);
};

export default Users;