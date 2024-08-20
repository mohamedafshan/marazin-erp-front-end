import React from "react";
import { Link } from "react-router-dom";
function Roles() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title">Roles</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">User Management</li>
                      <li className="breadcrumb-item active">Role</li>
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
                        <Link to="/add-role" className="btn btn-outline-info">
                          <i className="fas fa-plus px-2"></i>Add
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="datatable table table-stripped" style={{ width:"100%" }}>
                      <thead>
                        <tr>
                          <th>Roles</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roles;
