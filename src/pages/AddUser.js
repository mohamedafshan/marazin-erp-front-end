import React, { useState } from 'react';

function AddUser() {
    const [allowLogin, setAllowLogin] = useState(false);

    const handleToggleLoginFields = () => {
        setAllowLogin(!allowLogin);
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-sub-header">
                                    <h3 className="page-title">Add new User</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">Users</li>
                                        <li className="breadcrumb-item active">Add new User</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="page-header">
                                        <div className="row align-items-center">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <select className="form-control form-select select">
                                                                <option selected disabled>Mr / Mrs / Miss</option>
                                                                <option>Mr</option>
                                                                <option>Mrs</option>
                                                                <option>Ms</option>
                                                                <option>Miss</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-5">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>First Name<span className="login-danger">*</span></label>
                                                            <input className="form-control" type="text" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-5">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Last Name<span className="login-danger">*</span></label>
                                                            <input className="form-control" type="text" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-5">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Email<span className="login-danger">*</span></label>
                                                            <input className="form-control" type="text" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-2">
                                                    <div className="mb-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                id="isActive" />
                                                            <label className="form-check-label" for="isActive">
                                                                Is active?
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""
                                                                id="enableServiceStaffPin" />
                                                            <label className="form-check-label" for="enableServiceStaffPin">
                                                                Enable service staff pin
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="page-header">
                                        <div className="row align-items-center">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h5 className="mb-4">Roles and Permissions</h5>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value=""
                                                                    onClick={handleToggleLoginFields} id="allowLoginCheckbox" />
                                                                <label className="form-check-label" for="allowLoginCheckbox">
                                                                    Allow login
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* if allow login true which mean x?y true :false */}
                                                {allowLogin && (
                                                    <>
                                                        <div className="col-md-4 login-fields">
                                                            <div className="mb-3">
                                                                <div className="form-group local-forms">
                                                                    <label>Username<span className="login-danger"></span></label>
                                                                    <input className="form-control" type="text" placeholder="Username" />
                                                                    <span>Leave blank to auto generate username</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4 login-fields">
                                                            <div className="mb-3">
                                                                <div className="form-group local-forms">
                                                                    <label>Password<span className="login-danger">*</span></label>
                                                                    <input className="form-control" type="password" placeholder="Password" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4 login-fields">
                                                            <div className="mb-3">
                                                                <div className="form-group local-forms">
                                                                    <label>Confirm Password<span className="login-danger">*</span></label>
                                                                    <input className="form-control" type="password" placeholder="Confirm Password" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}

                                                <div className="col-md-6">
                                                    <div className="form-group local-forms days">
                                                        <label>Role<span className="login-danger">*</span></label>
                                                        <select className="form-control form-select select">
                                                            <option selected disabled>Please Select</option>
                                                            <option>Admin</option>
                                                            <option>Super User</option>
                                                            <option>Cashier</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-3">
                                                    <b>Access locations</b>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""
                                                            id="allowLogin" />
                                                        <label className="form-check-label" for="allowLogin">
                                                            All Locations
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-md-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""
                                                            id="awesomeShop" />
                                                        <label className="form-check-label" for="awesomeShop">
                                                            Awesome Shop
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
                </div>
            </div>

        </>
    );
}

export default AddUser;
