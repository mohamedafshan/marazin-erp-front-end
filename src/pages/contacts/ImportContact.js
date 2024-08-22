import React from "react";

const ImportContact = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title">Import Products</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="students.html">Product</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Import Products
                      </li>
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
                                    {/* <form action="#" method=""> */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>File To Import</label>
                                                <div className="invoices-upload-btn">
                                                    <input type="file" accept="image/*" name="image" id="file" className="hide-input"/>
                                                    <label for="file" className="upload"><i className="far fa-folder-open"> &nbsp;</i> Browse..</label>
                                                </div>
                                                <button type="button" className="btn btn-primary mt-3">Submit</button>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3 mt-3">
                                                    <button type="button" className="btn btn-outline-success mt-2"><i
                                                            className="fas fa-download"></i> &nbsp; Download template file</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Add other elements if needed --> */}
                                    {/* </form> */}

                                </div>
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
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <h5>Instructions</h5>
                            <b>
                              Follow the instructions carefully before importing
                              the file.
                            </b>
                            <p>
                              The columns of the file should be in the following
                              order.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="table-responsive">
                            <table className="table table-borderless table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">Column Number</th>
                                  <th scope="col">Column Name</th>
                                  <th scope="col">Instruction</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Contact type (Required)</td>
                                  <td>
                                    Available Options:
                                    <b> 1 = Customer, 2 = Supplier 3 = Both</b>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>Prefix (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">3</th>
                                  <td>First Name (Required)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">4</th>
                                  <td>Middle name (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">5</th>
                                  <td>Last Name (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">6</th>
                                  <td>
                                    Business Name (Required if contact type is
                                    supplier or both)
                                  </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">7</th>
                                  <td>Contact ID (Optional)</td>
                                  <td>
                                    Leave blank to auto generate Contact ID
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">8</th>
                                  <td>Tax number (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">9</th>
                                  <td>Opening Balance (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">10</th>
                                  <td>
                                    Pay term (Required if contact type is
                                    supplier or both)
                                  </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">11</th>
                                  <td>
                                    {" "}
                                    Pay term period (Required if contact type is
                                    supplier or both)
                                  </td>
                                  <td>
                                    <b>Available Options: days and months</b>
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">12</th>
                                  <td>Credit Limit (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">13</th>
                                  <td>Email (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">14</th>
                                  <td>Mobile (Required)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">15</th>
                                  <td>Alternate contact number (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">16</th>
                                  <td>Landline (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">17</th>
                                  <td>City (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">18</th>
                                  <td> State (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">19</th>
                                  <td>Country (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">20</th>
                                  <td>Address line 1 (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">21</th>
                                  <td>Address line 2 (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">22</th>
                                  <td>Zip Code (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">23</th>
                                  <td>Date of birth (Optional)</td>
                                  <td>Format Y-m-d (2024-07-18)</td>
                                </tr>
                                <tr>
                                  <th scope="row">24</th>
                                  <td>Custom Field 1 (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">25</th>
                                  <td>Custom Field 2 (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">26</th>
                                  <td>Custom Field 3 (Optional)</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th scope="row">27</th>
                                  <td>Custom Field 4 (Optional)</td>
                                  <td></td>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImportContact;
