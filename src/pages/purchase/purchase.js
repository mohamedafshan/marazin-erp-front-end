import React from "react";
import { Link } from "react-router-dom";

const Purchase = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title">Purchases</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">Purchases</li>
                      <li className="breadcrumb-item active">List Purchases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p>
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Filters
              </button>
            </p>
            <div>
              <div className="collapse" id="collapseExample">
                <div className="card card-body mb-4">
                  <div className="student-group-form">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Business Location
                            <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option>All</option>
                            <option>Awesomeshop</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Supplier <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option>All</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Purchase Status
                            <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option>All</option>
                            <option>Received</option>
                            <option>Pending</option>
                            <option>Ordered</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Payment Status
                            <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option>All</option>
                            <option>Paid</option>
                            <option>Due</option>
                            <option>Partial</option>
                            <option>Overdue</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-6">
                        <div className="mb-3">
                          <div className="form-group local-forms">
                            <label>
                              Date Range<span className="login-danger"></span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="01/01/2024 - 12/31/2024"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
                        <Link to="/add-purchase">
                          <button
                            type="button"
                            className="btn btn-outline-info"
                          >
                            <i className="fas fa-plus px-2"> </i>Add
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table
                      className="datatable table table-stripped"
                      style={{ width: "100%" }}
                      id="example1"
                    >
                      <thead>
                        <tr>
                          <th>Action</th>
                          <th>Date</th>
                          <th>Reference No</th>
                          <th>Location</th>
                          <th>Supplier</th>
                          <th>Purchase Status</th>
                          <th>Payment Status</th>
                          <th>Grand Total</th>
                          <th>Payment Due</th>
                          <th>Added By</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {/* {{-- <button type="button" className="btn btn-outline-info">Actions &nbsp;<i className="fas fa-sort-down"></i></button> --}} */}
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-info"
                                >
                                  Actions &nbsp;
                                  <i className="fas fa-sort-down"></i>
                                </button>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  href="edit-invoice.html"
                                >
                                  <i className="fas fa-eye"></i>&nbsp;&nbsp;View
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="edit-invoice.html"
                                >
                                  <i className="fas fa-print"></i>
                                  &nbsp;&nbsp;Print
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="edit-invoice.html"
                                >
                                  <i className="far fa-edit me-2"></i>
                                  &nbsp;&nbsp;Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="edit-invoice.html"
                                >
                                  <i className="fas fa-trash"></i>
                                  &nbsp;&nbsp;Delete
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="edit-invoice.html"
                                >
                                  <i className="fas fa-barcode"></i>&nbsp;Labels
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="edit-invoice.html"
                                >
                                  <i className="fas fa-money-bill-alt"></i>
                                  &nbsp;&nbsp;View payments
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="edit-invoice.html"
                                >
                                  <i className="fas fa-undo-alt"></i>
                                  &nbsp;&nbsp;Purchase Return
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="edit-invoice.html"
                                >
                                  <i className="far fa-edit me-2"></i>
                                  &nbsp;&nbsp;Update Status
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="edit-invoice.html"
                                >
                                  <i className="fas fa-envelope"></i>
                                  &nbsp;&nbsp;Item Received Notification
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>
                            <img
                              src="https://via.placeholder.com/50"
                              alt="Product 1"
                            />
                          </td>
                          <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                          <td>Product 1</td>
                          <td>Location 1</td>
                          <td>$10.00</td>
                          <td>100</td>
                          <td>Type 1</td>
                          <td>Category 1</td>
                          <td>Brand 1</td>
                        </tr>
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
};
export default Purchase;
