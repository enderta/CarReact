import React from 'react';

const Department = () => {
    const [department, setDepartment] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [showStudent, setShowStudent] = React.useState(false);

    React.useEffect(() => {
        fetch("http://localhost:8080/api/v1/department")
            .then(response => response.json())
            .then(data => setDepartment(data));
    }, []);
    const handleChange = (e) => {
        setSearch(e.target.value)
        setDepartment(department.filter((d) => d.name.toLowerCase().includes(search.toLowerCase())))
    }
    const handleShowStudent = (e) => {
        setShowStudent(true)
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Department</h3>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{width: 150}}>
                                        <input type="text" name="table_search" className="form-control float-right"
                                                  placeholder="Search" onChange={handleChange}/>
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-default"><i
                                                className="fas fa-search"></i></button>
                                                                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover text-nowrap">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Topic</th>
                                        <th>Student</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        department.map((d) => {
                                            return (
                                                <tr>
                                                    <td>{d.name}</td>
                                                    <td>{d.topic}</td>
                                                    <td><button className="btn btn-primary" onClick={handleShowStudent}>Show Students</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Department;