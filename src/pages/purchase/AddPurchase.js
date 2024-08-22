import React from "react";
// import { Link } from "react-router-dom";

const AddPurchase = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title">Add Purchase </h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="students.html">Product</a>
                      </li>
                      <li className="breadcrumb-item active">Add Purchase </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {{-- table row --}} */}
          <div className="row">
            <div className="col-md-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="page-header">
                    <div className="row align-items-center">
                      <form className="px-3" action="#">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="mb-3">
                              <div className="input-group local-forms">
                                <span
                                  className="input-group-text"
                                  id="basic-addon1"
                                >
                                  <i className="fas fa-user"></i>
                                </span>
                                <select
                                  className="form-control form-select"
                                  aria-label="Example text with button addon"
                                  aria-describedby="button-addon1"
                                >
                                  <option selected disabled>
                                    Supplier
                                  </option>
                                  <option>Michael</option>
                                </select>
                                <button
                                  className="btn btn-outline-primary"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#addModal"
                                  id="button-addon1"
                                >
                                  <i className="fas fa-plus-circle"></i>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-3 ">
                            <div className="mb-3">
                              <div className="form-group local-forms">
                                <label>
                                  Reference No
                                  <span className="login-danger"></span>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Reference No"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-3">
                            <div className="form-group local-forms calendar-icon">
                              <label>
                                Purchase Date
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                className="form-control datetimepicker"
                                type="text"
                                placeholder="DD-MM-YYYY"
                              />
                            </div>
                          </div>

                          <div className="col-md-3">
                            <div className="mb-3">
                              <div className="form-group local-forms days">
                                <label>
                                  Purchase Status
                                  <span className="login-danger">*</span>
                                </label>
                                <select className="form-control form-select select">
                                  <option selected disabled>
                                    Please Select{" "}
                                  </option>
                                  <option>Recieved</option>
                                  <option>Pending</option>
                                  <option>Ordered</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-3">
                            <p>Address:</p>
                          </div>

                          <div className="col-md-3">
                            <div className="mb-3">
                              <div className="form-group local-forms days">
                                <label>
                                  Business Location
                                  <span className="login-danger">*</span>
                                </label>
                                <select className="form-control form-select select">
                                  <option selected disabled>
                                    Please Select{" "}
                                  </option>
                                  <option>Awesome Shop</option>
                                  <option>Test</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-5">
                            <div className="row g-0 text-center">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <div className="form-group local-forms">
                                    <label>
                                      Basic salary
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Basic salary"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <div className="form-group local-forms days">
                                    <label>
                                      Department
                                      <span className="login-danger"></span>
                                    </label>
                                    <select className="form-control form-select select">
                                      <option selected disabled>
                                        Please Select
                                      </option>
                                      <option>Per Month</option>
                                      <option>Per Week</option>
                                      <option>Per Day</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <label>Product image</label>
                            <div className="invoices-upload-btn">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                className="hide-input"
                              />
                              <label for="file" className="upload">
                                <i className="far fa-folder-open">&nbsp;</i>{" "}
                                Browse..
                              </label>
                            </div>
                            <span>
                              Max File size: 5MB Allowed File: .pdf, .csv, .zip,
                              .doc, .docx, .jpeg, .jpg, .png
                            </span>
                          </div>
                        </div>
                      </form>
                      {/* <!-- Add other elements if needed --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="page-header">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-3">
                        <div className="mb-3">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#ImportProduct"
                          >
                            Import Products
                          </button>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="mb-3">
                          <div className="input-group">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <i className="fas fa-search"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Product Name / SKU / Scan bar code"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#new_product"
                        >
                          Add New Product
                        </button>
                      </div>

                      {/* <!-- Add other elements if needed --> */}
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
                          <th>#</th>
                          <th>Product Name</th>
                          <th>Purchase Quantity</th>
                          <th>Unit Cost (Before Discount)</th>
                          <th>Discount Percent</th>
                          <th>Unit Cost (Befor Tax)</th>
                          <th>Sub totoal(Befor Tax)</th>
                          <th>Product Tax</th>
                          <th>Net Cost</th>
                          <th>Line Total</th>
                          <th>Profit Margin%</th>
                          <th>Unit Selling Price (Inc.tax)</th>
                          <th>
                            <i className="fas fa-trash"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="page-header">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="mb-3">
                          <div className="form-group local-forms days">
                            <label>
                              Discount Type
                              <span className="login-danger">*</span>
                            </label>
                            <select className="form-control form-select select">
                              <option selected disabled>
                                None
                              </option>
                              <option>Fixed</option>
                              <option>Percentage</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <div className="form-group local-forms">
                            <label>
                              Discount Amount
                              <span className="login-danger"></span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <b>Discount:</b>
                          <p>(-) $ 0.00</p>
                        </div>
                      </div>
                      {/* <!-- Add other elements if needed --> */}
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-md-3">
                        <div className="mt-3">
                          <div className="form-group local-forms days">
                            <label>
                              Purchase Tax<span className="login-danger"></span>
                            </label>
                            <select className="form-control form-select select">
                              <option selected disabled>
                                None
                              </option>
                              <option>VAT@10%</option>
                              <option>CGST@10%</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mt-3">
                          <b>Purchase Tax:</b>
                          <p>(+) $ 0.00</p>
                        </div>
                      </div>
                      {/* <!-- Add other elements if needed --> */}
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mt-3">
                          <div className="form-group local-forms">
                            <label>
                              Additional Notes{" "}
                              <span className="login-danger"></span>
                            </label>
                            <textarea
                              className="form-control"
                              id="edit_description"
                              name="description"
                              type="text"
                              placeholder="Additional Notes"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Add other elements if needed --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
                <div className="col-md-12">
                    <div className="card card-table">
                        <div className="card-body">
                            <div className="page-header">
                                <h5>Add Payment</h5>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><i
                                                    className="fas fa-money-bill-alt"></i></span>
                                            <input type="text" className="form-control" placeholder="Advance Balance"
                                                aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group local-forms calendar-icon">
                                            <label>Purchase Date<span className="login-danger">*</span></label>
                                            <input className="form-control datetimepicker" type="text"
                                                placeholder="DD-MM-YYYY"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <div className="input-group local-forms">
                                                <span className="input-group-text" id="basic-addon1"><i
                                                        className="fas fa-user"></i></span>
                                                <select className="form-control form-select"
                                                    aria-label="Example text with button addon" aria-describedby="button-addon1">
                                                    <option selected disabled>Payment Method</option>
                                                    <option>Cash</option>
                                                    <option>Advance</option>
                                                    <option>Cheque</option>
                                                    <option>Bank Transfer</option>
                                                    <option>Other</option>
                                                    <option>Custom Payment 1</option>
                                                    <option>Custome Payment 2</option>
                                                    <option>Custome Payment 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="input-group local-forms">
                                            <span className="input-group-text" id="basic-addon1"><i
                                                    className="fas fa-user"></i></span>
                                            <select className="form-control form-select"
                                                aria-label="Example text with button addon" aria-describedby="button-addon1">
                                                <option selected disabled>Payment Account</option>
                                                <option>None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mt-4">
                                            <div className="form-group local-forms">
                                                <label>Payment note<span className="login-danger"></span></label>
                                                <textarea className="form-control" id="edit_description" name="description" type="text" placeholder="Payment note"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="col-4">
                                        <b>Payment due:</b>
                                        <p>0.00</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <button className="btn btn-primary btn-lg" type="button">Save</button>
                                    </div>
                                </div>
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
export default AddPurchase;
