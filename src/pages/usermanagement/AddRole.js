import React from "react";

const AddRole = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div class="row">
                        <div class="page-header">
                            <div class="row align-items-center">
                                <div class="col-sm-12">
                                    <div class="page-sub-header">
                                        <h3 class="page-title">Add Role</h3>
                                        <ul class="breadcrumb">
                                            <li class="breadcrumb-item">User Management</li>
                                            <li class="breadcrumb-item active">Add new role</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {{-- table row --}} */}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-table">
                                <div class="card-body">
                                    <div class="page-header">
                                        <div class="row align-items-center">
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <div class="mb-3">
                                                        <div class="form-group local-forms">
                                                            <label>Role Name<span class="login-danger">*</span></label>
                                                            <input class="form-control" type="text" placeholder="Role Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <p>Permissions</p>
                                                    <div class="col-md-12">

                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                Others
                                                            </div>
                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck1" />
                                                                        <label className="form-check-label" for="defaultCheck1">
                                                                            Select All
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-5">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck2" />
                                                                        <label className="form-check-label" for="defaultCheck2">
                                                                            View export to buttons (csv/excel/print/pdf) on tables
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Add other elements if needed --> */}

                                            <hr className="mb-4" />

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                User
                                                            </div>

                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck3" />
                                                                        <label className="form-check-label" for="defaultCheck3">
                                                                            Select All
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck4" />
                                                                        <label className="form-check-label" for="defaultCheck4">
                                                                            View user
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck5" />
                                                                        <label className="form-check-label" for="defaultCheck5">
                                                                            Add user
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck6" />
                                                                        <label className="form-check-label" for="defaultCheck6">
                                                                            Edit user
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck7" />
                                                                        <label className="form-check-label" for="defaultCheck7">
                                                                            Delete user
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="mb-4" />

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <div class="col-md-2">
                                                                Roles
                                                            </div>

                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck8" />
                                                                        <label className="form-check-label" for="defaultCheck8">
                                                                            Select All
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck9" />
                                                                        <label className="form-check-label" for="defaultCheck9">
                                                                            View role
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck10" />
                                                                        <label className="form-check-label" for="defaultCheck10">
                                                                            Add role
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck11" />
                                                                        <label className="form-check-label" for="defaultCheck11">
                                                                            Edit role
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-2">
                                                                <div className="mb-3">
                                                                    <div className="form-check">
                                                                        <input class="form-check-input" type="checkbox" value=""
                                                                            id="defaultCheck12" />
                                                                        <label className="form-check-label" for="defaultCheck12">
                                                                            Delete role
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="mb-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg">Save</button>
                </div>
            </div>
        </>
    );
}

export default AddRole;