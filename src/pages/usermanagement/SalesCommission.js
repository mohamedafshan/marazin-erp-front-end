import React from "react";

function SalesCommission() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title">Sales Commission Agents</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">User Management</li>
                      <li className="breadcrumb-item active">
                        Sales Commission Agents
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {{-- table row --}} */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="page-header">
                    <div className="row align-items-center">
                      <div className="col-auto text-end float-end ms-auto download-grp">
                        {/* <!-- Button trigger modal --> */}
                        <button
                          type="button"
                          className="btn btn-outline-info "
                          data-bs-toggle="modal"
                          data-bs-target="#addAndEditModal"
                        >
                          <i className="fas fa-plus px-2"> </i>Add
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table
                      className="datatable table table-stripped"
                      style={{ width:"100%" }}
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact Number</th>
                          <th>Address</th>
                          <th>Sales Commission Percentage(%)</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {{-- Add modal row --}} */}
        <div className="row">
            <div className="modal fade" id="addAndEditModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add sales commission agent</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form id="addAndEditForm" method="POST" action="">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="mb-3">
                                            <div className="form-group local-forms">
                                                <label>Prefix <span className="login-danger"></span></label>
                                                <select className="form-control form-select select">
                                                    <option selected disabled>Mr / Mrs / Miss</option>
                                                    <option>Mr</option>
                                                    <option>Mrs</option>
                                                    <option>Ms</option>
                                                    <option>Miss</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="mb-3">
                                            <div className="form-group local-forms">
                                                <label>First Name <span className="login-danger">*</span></label>
                                                <input className="form-control" type="text" placeholder="First Name"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="mb-3">
                                            <div className="form-group local-forms">
                                                <label>Last Name <span className="login-danger"></span></label>
                                                <input className="form-control" type="text" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <div className="form-group local-forms">
                                                <label>Email <span className="login-danger"></span></label>
                                                <input className="form-control" type="text" placeholder="Email"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <div className="form-group local-forms">
                                                <label>Contact Number <span className="login-danger"></span></label>
                                                <input className="form-control" type="text" placeholder="Contact Number"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <div className="form-group local-forms">
                                                    <label>Sales Commission Percentage (%) <span className="login-danger"></span></label>
                                                    <input className="form-control" type="text" placeholder="Sales Commission Percentage (%)"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-group local-forms">
                                            <label>Description <span className="login-danger"></span></label>
                                            <textarea className="form-control" id="edit_description" name="description" type="text" placeholder="Enter Description"></textarea>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    {/* {{-- Edit modal row --}} */}

        </div>
      </div>
    </>
  );
}

export default SalesCommission;
