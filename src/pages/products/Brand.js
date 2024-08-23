import React from "react";
import { Link } from "react-router-dom";
const Brand = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col-sm-12">
                                    <div className="page-sub-header">
                                        <h3 className="page-title">Brands </h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">Products</li>
                                            <li className="breadcrumb-item active">Brands</li>
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

                                                <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    New  <i className="fas fa-plus px-2"> </i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table-responsive">
                                        <table id="brand" className="datatable table table-stripped" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>ID </th>
                                                    <th>Brands </th>
                                                    <th>Note</th>
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


                    {/* {{-- Add/Edit modal row --}} */}
                    <div className="row">
                        <div id="exampleModal" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="text-center mt-2 mb-4">
                                            <h5>Add Brand</h5>
                                        </div>
                                        <form id="addAndUpdateForm">

                                            <input type="hidden" name="edit_id" id="edit_id"/>

                                                <div className="mb-3">
                                                    <div className="form-group local-forms">
                                                        <label>Brand Name <span className="login-danger">*</span></label>
                                                        <input className="form-control" id="edit_name" name="name" type="text" placeholder="Brand Name"/>
                                                            <span className="text-danger" id="name_error"></span>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <div className="form-group local-forms">
                                                        <label>Description <span className="login-danger"></span></label>
                                                        <textarea className="form-control" id="edit_description" name="description" placeholder="Enter Description"></textarea>
                                                        <span className="text-danger" id="description_error"></span>
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



                    {/* {{-- Delete modal --}} */}
                    <div id="deleteModal" className="modal custom-modal fade" role="dialog">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="form-header">
                                        <h3 id="deleteName">Delete Brand</h3>
                                        <p>Are you sure want to delete?</p>
                                    </div>
                                    <div className="modal-btn delete-action">
                                        <div className="row">
                                            <input type="hidden" id="deleting_id" />
                                            <div className="row">
                                                <div className="col-6">
                                                    <button type="submit" className="confirm_delete_btn btn btn-primary paid-continue-btn" style={{ width: "100%;" }}>Delete</button>
                                                </div>
                                                <div className="col-6">
                                                    <Link data-bs-dismiss="modal" className="btn btn-primary paid-cancel-btn">Cancel
                                                    </Link>
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
}
export default Brand;