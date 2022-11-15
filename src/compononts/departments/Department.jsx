import React from 'react';

const Department = () => {
    const [department, setDepartment] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [filteredDepartment, setFilteredDepartment] = React.useState([]);
    const [showStudent, setShowStudent] = React.useState(false);

    React.useEffect(() => {
        fetch("http://localhost:8080/api/v1/department")
            .then(response => response.json())
            .then(data => {
                setDepartment(data);
                setFilteredDepartment(data);
            }
            )
    }, []);
    const handleChange = (e) => {
        setSearch(e.target.value)
        setFilteredDepartment(department.filter((d) => d.name.toLowerCase().includes(e.target.value.toLowerCase())))


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
                                                                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover text-nowrap">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Student</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        filteredDepartment.map((d) => {
                                            return (
                                                <tr>
                                                    <td>{d.name}</td>
                                                    <td>{d.description}</td>
                                                    <td><button className="btn btn-primary" >
                                                        <a href='#' onClick={handleShowStudent}/>Students </button></td>
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