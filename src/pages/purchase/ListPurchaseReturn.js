import React from "react";
import { Link } from "react-router-dom";

const ListPurchaseReturn = () => {
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
                                            <li className="breadcrumb-item active">List Purchases </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                                aria-expanded="false" aria-controls="collapseExample">
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
                                                    <label>Business Location <span className="login-danger"></span></label>
                                                    <select className="form-control select">
                                                        <option>All</option>
                                                        <option>Awesomeshop</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6">
                                                <div className="mb-3">
                                                    <div className="form-group local-forms">
                                                        <label>Date Range<span className="login-danger"></span></label>
                                                        <input className="form-control" type="text"
                                                            placeholder="01/01/2024 - 12/31/2024" />
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
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card card-table">
                                <div class="card-body">
                                    <div class="page-header">
                                        <div class="row align-items-center">
                                            <div class="col-auto text-end float-end ms-auto download-grp">
                                                {/* <!-- Button trigger modal --> */}
                                                <Link to="/add-purchase-return"><button type="button" class="btn btn-outline-info">
                                                    <i class="fas fa-plus px-2"> </i>Add
                                                </button></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="table-responsive">
                                        <table class="datatable table table-stripped" style={{ width:"100%" }} id="example1">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Reference No</th>
                                                    <th>Parent Purchase</th>
                                                    <th>Location</th>
                                                    <th>Supplier</th>
                                                    <th>Payment Status</th>
                                                    <th>Grand Total</th>
                                                    <th>Payment Due</th>
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

export default ListPurchaseReturn;