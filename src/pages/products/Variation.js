import React, { useEffect } from "react";
import $ from 'jquery'; // Import jQuery

const Variation = () => {
    
    useEffect(() => {
        // jQuery code to handle adding and removing input fields
        const handleAddLinksClick = () => {
            var experiencecontent =
                '<div class="row form-row links-cont">' +
                '<div class="form-group d-flex">' +
                '<input type="text" class="form-control" />' +
                '<div><a href="#" class="btn trash"><i class="feather-trash-2"></i></a></div>' +
                "</div>" +
                "</div>";
            $(".settings-form").append(experiencecontent);
            return false;
        };

        const handleTrashClick = (event) => {
            $(event.target).closest(".links-cont").remove();
            return false;
        };

        $(document).on("click", ".add-links", handleAddLinksClick);
        $(".settings-form").on("click", ".trash", handleTrashClick);

        // Cleanup event handlers on component unmount
        return () => {
            $(document).off("click", ".add-links", handleAddLinksClick);
            $(".settings-form").off("click", ".trash", handleTrashClick);
        };
    }, []);

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col-sm-12">
                                    <div className="page-sub-header">
                                        <h3 className="page-title">Variations</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">Products</li>
                                            <li className="breadcrumb-item active">Variations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table Row */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="page-header">
                                        <div className="row align-items-center">
                                            <div className="col-auto text-end float-end ms-auto download-grp">
                                                <button type="button" className="btn btn-outline-info" data-bs-toggle="modal"
                                                    data-bs-target="#addModal">
                                                    <i className="fas fa-plus px-2"></i>Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="datatable table table-stripped" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>Variations</th>
                                                    <th>Values</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Table content dynamically populated */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add Modal Row */}
                    <div className="row">
                        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Variation</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row mt-4">
                                            <div className="col col-md-12">
                                                <div className="mb-4">
                                                    <div className="form-group local-forms">
                                                        <label>Variation Name <span className="login-danger">*</span></label>
                                                        <input className="form-control" type="text" name="variation_name"
                                                            placeholder="Variation Name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="settings-form">
                                                    <div className="links-info">
                                                        <div className="row">
                                                            <div className="col-8 col-md-8">
                                                                <div className="form-group local-forms">
                                                                    <label>Variation Value <span className="login-danger">*</span></label>
                                                                    <input className="form-control" type="text" name="variation_value"
                                                                        placeholder="Variation Value" />
                                                                </div>
                                                            </div>
                                                            <div className="col col-md-2">
                                                                <button type="button" className="btn add-links"><i
                                                                    className="fas fa-plus px-2"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-primary">Save changes</button>
                                                <button type="reset" className="btn btn-secondary" id="close"
                                                    data-bs-dismiss="modal">Close</button>
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

export default Variation;
