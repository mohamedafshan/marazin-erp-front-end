import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-sm-12">
                  <div className="page-sub-header">
                    <h3 className="page-title">All Products</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="students.html">Products</Link>
                      </li>
                      <li className="breadcrumb-item active">List Products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-body mb-4">
                <div className="student-group-form">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i className="fas fa-filter"></i> &nbsp; Filters
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="collapse" id="collapseExample">
                <div className="card card-body mb-4">
                  <div className="student-group-form">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Product Type <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option disabled>All</option>
                            <option>Single</option>
                            <option>Variation</option>
                            <option>Combo</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Category <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option disabled>All</option>
                            <option>Accessories</option>
                            <option>Book</option>
                            <option>Electronics</option>
                            <option>Foot & Grocey</option>
                            <option>Men's</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Unit <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option disabled>All</option>
                            <option>Pieces (Pc(s))</option>
                            <option>packets (packets)</option>
                            <option>Grams (g)</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Tax <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option disabled>All</option>
                            <option>VAT@10%</option>
                            <option>CGST@10%</option>
                            <option>SGST@8%</option>
                            <option>GST@10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Brand <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option disabled>All</option>
                            <option>Acer</option>
                            <option>Adidas</option>
                            <option>Apple</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <label>
                            Business Location{" "}
                            <span className="login-danger"></span>
                          </label>
                          <select className="form-control select">
                            <option disabled>All</option>
                            <option>None</option>
                            <option>Awesome Shop</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group local-forms">
                          <select className="form-control select">
                            <option disabled>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="Woocommerceenabled"
                            />
                            <label className="form-check-label" for="Woocommerceenabled">
                                Woocommerce enabled
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="isActive" />
                            <label className="form-check-label" for="isActive">
                                 Not for selling
                            </label>
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
                <div className="col-md-12">
                    <div className="card card-table">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="nav nav-tabs nav-tabs-solid">
                                    <li className="nav-item"><Link className="nav-link active" to="#solid-justified-tab1"
                                            data-bs-toggle="tab"><i className="fas fa-boxes"></i> &nbsp;All Products</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#solid-justified-tab2"
                                            data-bs-toggle="tab"><i className="fas fa-hourglass-half"></i>&nbsp;Stock Report</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="solid-justified-tab1">
                                        <div className="card-body">
                                            <div className="page-header">
                                                <div className="row align-items-center">
                                                    <div className="col-auto text-end float-end ms-auto download-grp">
                                                        {/* <!-- Button trigger modal --> */}
                                                        <Link to="#"><button type="button"
                                                                className="btn btn-outline-info">
                                                                <i className="fas fa-plus px-2"> </i>Add
                                                            </button></Link>

                                                        <button type="button" className="btn btn-outline-info "
                                                            data-bs-toggle="modal" data-bs-target="#addModal">
                                                            <i className="fas fa-download"></i>&nbsp;&nbsp;Download
                                                        </button>


                                                    </div>
                                                </div>
                                            </div>

                                            <div className="table-responsive">
                                                <table className="datatable table table-stripped" style={{ width:"100%" }} id="example1">
                                                    <thead>
                                                        <tr>
                                                            <th><input type="checkbox" name="" value=""
                                                                    id="allchecked"
                                                                    onclick="toggleLoginFields(id,'.checked')" /></th>
                                                            <th>Product Image</th>
                                                            <th>Action</th>
                                                            <th>Product</th>
                                                            <th>Business Location</th>
                                                            <th>Selling Price</th>
                                                            <th>Current Stock</th>
                                                            <th>Product Type</th>
                                                            <th>Catergory</th>
                                                            <th>Brand</th>
                                                            <th>Tax</th>
                                                            <th>SKU</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="checkbox" name="" value=""
                                                                    className="checked" /></td>
                                                            <td><img src="https://via.placeholder.com/50" alt="Product 1" />
                                                            </td>
                                                            <td>
                                                                <div className="dropdown dropdown-action">
                                                                    <Link to="#" className="action-icon dropdown-toggle"
                                                                        data-bs-toggle="dropdown" aria-expanded="false"><button type="button" className="btn btn-outline-info">Actions &nbsp;<i className="fas fa-sort-down"></i></button></Link>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-barcode"></i>&nbsp;Labels</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-eye"></i>&nbsp;&nbsp;View</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="far fa-edit me-2"></i>&nbsp;&nbsp;Edit</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-trash"></i>&nbsp;&nbsp;Delete</Link>

                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-database"></i>&nbsp;&nbsp;Add or edit opening stock</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-history"></i>&nbsp;&nbsp;Product stock history</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="far fa-copy"></i>&nbsp;&nbsp;Duplicate Product</Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Product 1</td>
                                                            <td>Location 1</td>
                                                            <td>$10.00</td>
                                                            <td>100</td>
                                                            <td>Type 1</td>
                                                            <td>Category 1</td>
                                                            <td>Brand 1</td>
                                                            <td>5%</td>
                                                            <td>SKU001</td>
                                                        </tr>

                                                        <tr>
                                                            <td><input type="checkbox" name="" value=""
                                                                    className="checked" /></td>
                                                            <td><img src="https://via.placeholder.com/50" alt="Product 2" />
                                                            </td>
                                                            <td>
                                                                <div className="dropdown dropdown-action">
                                                                    <Link to="#" className="action-icon dropdown-toggle"
                                                                        data-bs-toggle="dropdown" aria-expanded="false"><button type="button" className="btn btn-outline-info">Actions &nbsp;<i className="fas fa-sort-down"></i></button></Link>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-barcode"></i>&nbsp;Labels</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-eye"></i>&nbsp;&nbsp;View</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="far fa-edit me-2"></i>&nbsp;&nbsp;Edit</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-trash"></i>&nbsp;&nbsp;Delete</Link>

                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-database"></i>&nbsp;&nbsp;Add or edit opening stock</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="fas fa-history"></i>&nbsp;&nbsp;Product stock history</Link>
                                                                        <Link className="dropdown-item" to="edit-invoice.html"><i className="far fa-copy"></i>&nbsp;&nbsp;Duplicate Product</Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Product 2</td>
                                                            <td>Location 2</td>
                                                            <td>$20.00</td>
                                                            <td>200</td>
                                                            <td>Type 2</td>
                                                            <td>Category 2</td>
                                                            <td>Brand 2</td>
                                                            <td>10%</td>
                                                            <td>SKU002</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="solid-justified-tab2">
                                        <div className="table-responsive">
                                            <table className="datatable table table-stripped" style={{ width:"100%" }} id="example1">
                                                <thead>
                                                    <tr>
                                                        <th>Action</th>
                                                        <th>SKU</th>
                                                        <th>Product</th>
                                                        <th>Variation</th>
                                                        <th>Category</th>
                                                        <th>Location</th>
                                                        <th>Unit Selling Price</th>
                                                        <th>Current Stock</th>
                                                        <th>Current Stock Value (By Purchase Price)</th>
                                                        <th>Current Stock Value (By Sale Price)</th>
                                                        <th>Potential Profit</th>
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
            </div>    




        </div>
      </div>
    </>
  );
};
export default Products;
