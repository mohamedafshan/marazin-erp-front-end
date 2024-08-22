import React from "react";

const CustomerGroup = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title">Customer Groups</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="students.html">Customer Groups</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Customer Groups
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                          className="btn btn-outline-info"
                          data-bs-toggle="modal"
                          data-bs-target="#addModal"
                          id="addCustomerGroupButton"
                        >
                          New <i className="fas fa-plus px-2"> </i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table
                      id="customerGroup"
                      className="datatable table table-stripped"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Customer Name</th>
                          <th>Price Calculation Type</th>
                          <th>Selling Price Group</th>
                          <th>Calculation Percentage (%)</th>
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

    {/* {{-- Add/Edit modal row --}} */}
    <div className="row">
        <div id="addModal" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="text-center mt-2 mb-4">
                            {/* <h5 id="modalTitle"></h5> */}
                        </div>
                        <form id="addAndUpdateForm">

                            <input type="hidden" name="edit_id" id="edit_id"/>

                            <div className="col-md-12">
                                <div className="mb-3">
                                    <div className="form-group local-forms">
                                        <label for="customerGroupName">Customer Group Name<span
                                                className="login-danger">*</span></label>
                                        <input id="edit_customerGroupName" name="customerGroupName" className="form-control"
                                            type="text" placeholder="Customer Group Name"/>
                                        <span className="text-danger" id="customerGroupName_error"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group local-forms">
                                    <label for="priceCalculationType">Price calculation type<span
                                            className="login-danger">*</span></label>
                                    <select className="form-control" id="edit_priceCalculationType" name="priceCalculationType">
                                        <option selected disabled>Price calculation type</option>
                                        <option value="Percentage">Percentage</option>
                                        <option value="Selling Price Group">Selling Price Group</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12" style={{ display: "none;" }}>
                                <div className="form-group local-forms">
                                    <label for="selling_price_group_id">Selling Price Group<span
                                            className="login-danger"></span></label>
                                    <select className="form-control" id="edit_selling_price_group_id"
                                        name="selling_price_group_id">
                                        <option selected disabled>Selling Price Group</option>
                                        {/* @foreach ($SellingPriceGroups as $SellingPriceGroup) */}
                                            <option value="{{ $SellingPriceGroup->id }}"> $SellingPriceGroup arrow name 
                                            </option>
                                        {/* @endforeach */}
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mb-3">
                                    <div className="form-group local-forms">
                                        <label for="calculationPercentage">Calculation Percentage (%)<span
                                                className="login-danger"></span></label>
                                        <input className="form-control" id="edit_calculationPercentage"
                                            name="calculationPercentage" type="number"
                                            placeholder="Calculation Percentage (%)"/>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="submit" id="modalButton" className="btn btn-outline-primary">Save</button>
                                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                            </div>

                        </form>
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
export default CustomerGroup;
