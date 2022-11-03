import React from 'react';

const Users = () => {
    return (
        <div>
            <section id="users" data-load="users.html" className="spapp-created">
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <div className="portlet-title">
      <span style={{float: "right"}}>
        <a
            className="btn btn-lg btn-outline btn-primary btn-sm"
            href="tpl/add-user.html"
            data-target="#ajax"
            data-toggle="modal"
        >
          <i className="fa fa-plus" aria-hidden="true"/> Add User
        </a>
      </span>
                        <h3>User Management</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">User Group</label>
                                <select
                                    id="user_groups"
                                    className="form-control select2"
                                    onChange="Users.get_users();"
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
                                    onChange="Users.get_users();"
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
                                        >
                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                            <option value={15}>15</option>
                                            <option value={50}>50</option>
                                            <option value={100}>100</option>
                                            <option value={200}>200</option>
                                            <option value={500}>500</option>
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
                            <table
                                className="table table-striped table-bordered table-hover table-header-fixed dataTable no-footer"
                                id="tbl_users"
                                role="grid"
                                aria-describedby="tbl_users_info"
                                style={{width: 901}}
                            >
                                <thead>
                                <tr role="row">
                                    <th
                                        data-name="actions"
                                        className="sorting_disabled"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{width: 84}}
                                        aria-label="Actions"
                                    >
                                        Actions
                                    </th>
                                    <th
                                        data-name="id"
                                        className="sorting_desc"
                                        tabIndex={0}
                                        aria-controls="tbl_users"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{width: 65}}
                                        aria-sort="descending"
                                        aria-label="User ID: activate to sort column ascending"
                                    >
                                        User ID
                                    </th>
                                    <th
                                        data-name="full_name"
                                        className="sorting"
                                        tabIndex={0}
                                        aria-controls="tbl_users"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{width: 146}}
                                        aria-label="Full Name: activate to sort column ascending"
                                    >
                                        Full Name
                                    </th>
                                    <th
                                        data-name="email"
                                        className="sorting"
                                        tabIndex={0}
                                        aria-controls="tbl_users"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{width: 212}}
                                        aria-label="Email: activate to sort column ascending"
                                    >
                                        Email
                                    </th>
                                    <th
                                        data-name="group_name"
                                        className="sorting"
                                        tabIndex={0}
                                        aria-controls="tbl_users"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{width: 56}}
                                        aria-label="Group: activate to sort column ascending"
                                    >
                                        Group
                                    </th>
                                    <th
                                        data-name="status"
                                        className="sorting"
                                        tabIndex={0}
                                        aria-controls="tbl_users"
                                        rowSpan={1}
                                        colSpan={1}
                                        style={{width: 57}}
                                        aria-label="Status: activate to sort column ascending"
                                    >
                                        Status
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr role="row" className="odd">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7051)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7051</td>
                                    <td>Sima Gleichner</td>
                                    <td>nelia.volkman@hotmail.com</td>
                                    <td>Students</td>
                                    <td>ACTIVE</td>
                                </tr>
                                <tr role="row" className="even">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7050)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7050</td>
                                    <td>Lavonne Cole</td>
                                    <td>vernice.klein@hotmail.com</td>
                                    <td>Librarian</td>
                                    <td>ACTIVE</td>
                                </tr>
                                <tr role="row" className="odd">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7049)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7049</td>
                                    <td>Maris Leannon</td>
                                    <td>jefferey.ruecker@yahoo.com</td>
                                    <td>Students</td>
                                    <td>ACTIVE</td>
                                </tr>
                                <tr role="row" className="even">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7048)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7048</td>
                                    <td>Mrs. Tosha Cummings</td>
                                    <td>willian.gottlieb@yahoo.com</td>
                                    <td>Librarian</td>
                                    <td>ACTIVE</td>
                                </tr>
                                <tr role="row" className="odd">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7047)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7047</td>
                                    <td>Ariel Dooley</td>
                                    <td>leopoldo.johnston@yahoo.com</td>
                                    <td>Students</td>
                                    <td>ACTIVE</td>
                                </tr>
                                <tr role="row" className="even">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7046)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7046</td>
                                    <td>Chere Mayer</td>
                                    <td>roselyn.jerde@hotmail.com</td>
                                    <td>Librarian</td>
                                    <td>ACTIVE</td>
                                </tr>
                                <tr role="row" className="odd">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7045)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7045</td>
                                    <td>Xiao Bosco IV</td>
                                    <td>kristeen.cormier@gmail.com</td>
                                    <td>Students</td>
                                    <td>ACTIVE</td>
                                </tr>
                                <tr role="row" className="even">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7044)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7044</td>
                                    <td>Winnie Langworth</td>
                                    <td>donte.douglas@gmail.com</td>
                                    <td>Librarian</td>
                                    <td>ACTIVE</td>
                                </tr>
                                <tr role="row" className="odd">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7043)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7043</td>
                                    <td>Homer Littel</td>
                                    <td>nidia.schulist@hotmail.com</td>
                                    <td>Students</td>
                                    <td>ACTIVE</td>
                                </tr>
                                <tr role="row" className="even">
                                    <td>
                                        <a
                                            onClick="Users.edit_user(7042)"
                                            href="javascript:void(0)"
                                            className="btn btn-primary btn-sm"
                                            role="button"
                                        >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"/>{" "}
                                            Edit User
                                        </a>
                                    </td>
                                    <td>7042</td>
                                    <td>Miss Tanna Torphy</td>
                                    <td>angel.huels@gmail.com</td>
                                    <td>Librarian</td>
                                    <td>ACTIVE</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-md-5 col-sm-5">
                                <div
                                    className="dataTables_info"
                                    id="tbl_users_info"
                                    role="status"
                                    aria-live="polite"
                                >
                                    Showing 1 to 10 of 1,282 entries
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <div
                                    className="dataTables_paginate paging_bootstrap_full_number"
                                    id="tbl_users_paginate"
                                    style={{borderBottom: "unset", textAlign: "right"}}
                                >
                                    <ul className="pagination" style={{visibility: "visible"}}>
                                        <li className="page-item prev disabled">
                                            <a href="#" className="page-link" title="First">
                                                <i className="fa fa-angle-double-left" aria-hidden="true"/>
                                            </a>
                                        </li>
                                        <li className="page-item prev disabled">
                                            <a href="#" className="page-link" title="Prev">
                                                <i className="fa fa-angle-left" aria-hidden="true"/>
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li>
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li>
                                            <a className="page-link" href="#">
                                                4
                                            </a>
                                        </li>
                                        <li>
                                            <a className="page-link" href="#">
                                                5
                                            </a>
                                        </li>
                                        <li className="page-item next">
                                            <a href="#" className="page-link" title="Next">
                                                <i className="fa fa-angle-right" aria-hidden="true"/>
                                            </a>
                                        </li>
                                        <li className="page-item next">
                                            <a href="#" className="page-link" title="Last">
                                                <i className="fa fa-angle-double-right" aria-hidden="true"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        id="edit_user_btn"
                        href="tpl/edit-user.html"
                        data-target="#ajax"
                        data-toggle="modal"
                    />
                </div>
                <div className="modal fade" tabIndex={-1} id="ajax" role="basic">
                    <div className="modal-dialog modal-lg" role="dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <img
                                    src="./img/loading-spinner-grey.gif"
                                    alt=""
                                    className="loading"
                                />
                                <span> &nbsp;&nbsp;Loading... </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="modal fade hide"
                    id="mdl_manuel_add_user_card"
                    tabIndex={-1}
                    role="document"
                    aria-hidden="true"
                    data-keyboard="false"
                >
                    <form
                        id="manuel_add_user_card"
                        action="#"
                        className="form-horizontal"
                        noValidate="novalidate"
                    >
                        <div className="modal-dialog">
                            <div
                                className="modal-content"
                                style={{boxShadow: "0 5px 20px rgba(0, 0, 0, 0.88)"}}
                            >
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Card</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-body">
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="control-label">CSN</label>
                                                        <input
                                                            type="text"
                                                            name="csn"
                                                            className="form-control"
                                                            placeholder="CSN"
                                                            required=""
                                                            aria-required="true"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="control-label">Status</label>
                                                        <select
                                                            id="status"
                                                            name="status"
                                                            className="form-control"
                                                        >
                                                            <option value="ACTIVE">ACTIVE</option>
                                                            <option value="INACTIVE">INACTIVE</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="id" className="form-control"/>
                                </div>
                                <div className="modal-footer">
                                    <input
                                        type="button"
                                        data-dismiss="modal"
                                        className="btn dark btn-outline"
                                        defaultValue="Close"
                                    />
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        defaultValue="Save"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Users;