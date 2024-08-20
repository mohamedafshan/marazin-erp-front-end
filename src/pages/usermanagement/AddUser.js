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
                                                                id="isActive" checked />
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
                                        {/* <!-- Add other elements if needed --> */}
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
                                        <div className="row align-items-center">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h5 className="mb-4">Sales</h5>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Sales Commission Percentage (%)<span
                                                                className="login-danger"></span></label>
                                                            <input className="form-control" type="text"
                                                                placeholder="Sales Commission Percentage (%)" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Max sales discount percent<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text"
                                                                placeholder="Max sales discount percent" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""
                                                            id="awesomeShop2" />
                                                        <label className="form-check-label" for="awesomeShop2">
                                                            Allow Selected Contacts
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Add other elements if needed --> */}
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
                                        <div className="row align-items-center">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h5 className="mb-4">More Informations</h5>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="form-group local-forms calendar-icon">
                                                        <label>Date Of Birth <span className="login-danger">*</span></label>
                                                        <input className="form-control datetimepicker" type="text"
                                                            placeholder="DD-MM-YYYY" />
                                                    </div>
                                                </div>


                                                <div className="col-md-3">
                                                    <div className="form-group local-forms">
                                                        <label>Gender<span className="login-danger"></span></label>
                                                        <select className="form-control form-select select">
                                                            <option selected disabled>Please Select</option>
                                                            <option>Male</option>
                                                            <option>Femal</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="form-group local-forms">
                                                        <label>Marital Status<span className="login-danger"></span></label>
                                                        <select className="form-control form-select select">
                                                            <option selected disabled>Marital Status</option>
                                                            <option>Married</option>
                                                            <option>Unmarried</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Blood Group<span className="login-danger"></span></label>
                                                            <select className="form-control form-select select">
                                                                <option selected disabled>A/B/O/AB</option>
                                                                <option>A+</option>
                                                                <option>A-</option>
                                                                <option>B+</option>
                                                                <option>B-</option>
                                                                <option>O+</option>
                                                                <option>O-</option>
                                                                <option>AB+</option>
                                                                <option>AB-</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Mobile Number<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Mobile Number" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Alternate contact number<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text"
                                                                placeholder="Alternate contact number" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Family contact number<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text"
                                                                placeholder="Family contact number" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Facebook Link<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Facebook Link" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Twitter Link<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Twitter Link" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Social Media 1<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Social Media 1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Social Media 2<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Social Media 2" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Custom field 1<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Custom field 1" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Custom field 2<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Custom field 2" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Custom field 3<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Custom field 3" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Custom field 4<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Custom field 4" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Guardian Name<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="Guardian Name" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>ID proof name<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="ID proof name" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>ID proof number<span className="login-danger"></span></label>
                                                            <input className="form-control" type="text" placeholder="ID proof number" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Permanent Address<span className="login-danger"></span></label>
                                                            <textarea className="form-control" type="text" placeholder="Permanent Address"></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <div className="form-group local-forms">
                                                            <label>Current Address<span className="login-danger"></span></label>
                                                            <textarea className="form-control" type="text" placeholder="Current Address"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr />

                                            <div className="col-md-12">
                                                <h5 className="mb-4">Bank Details</h5>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <div className="form-group local-forms">
                                                        <label>Account Holder's Name<span className="login-danger"></span></label>
                                                        <input className="form-control" type="text"
                                                            placeholder="Account Holder's Name" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <div className="form-group local-forms">
                                                        <label>Account Number<span className="login-danger"></span></label>
                                                        <input className="form-control" type="text" placeholder="Account Number" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <div className="form-group local-forms">
                                                        <label>Bank Name<span className="login-danger"></span></label>
                                                        <input className="form-control" type="text" placeholder="Bank Name" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <div className="form-group local-forms">
                                                        <label>Bank Identifier Code<span className="login-danger"></span></label>
                                                        <input className="form-control" type="text"
                                                            placeholder="Bank Identifier Code" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <div className="form-group local-forms">
                                                        <label>Branch<span className="login-danger"></span></label>
                                                        <input className="form-control" type="text" placeholder="Branch" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <div className="form-group local-forms">
                                                        <label>Tax Payer ID<span className="login-danger"></span></label>
                                                        <input className="form-control" type="text" placeholder="Tax Payer ID" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Add other elements if needed --> */}
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
                                        <div className="row align-items-center">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h5 className="mb-4">HRM Details</h5>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group local-forms days">
                                                        <label>Department<span className="login-danger"></span></label>
                                                        <select className="form-control form-select select">
                                                            <option selected disabled>Please Select</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group local-forms days">
                                                        <label>Designatio<span className="login-danger"></span></label>
                                                        <select className="form-control form-select select">
                                                            <option selected disabled>Please Select</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Add other elements if needed --> */}
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
                                        <div className="row align-items-center">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h5 className="mb-4">Payroll</h5>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group local-forms days">
                                                        <label>Primary work location<span className="login-danger"></span></label>
                                                        <select className="form-control form-select select">
                                                            <option selected disabled>Please Select</option>
                                                            <option>Awesome Shop</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-md-5">
                                                    <div className="row g-0 text-center">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-group local-forms">
                                                                    <label>Basic salary<span className="login-danger"></span></label>
                                                                    <input className="form-control" type="text"
                                                                        placeholder="Basic salary" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-group local-forms days">
                                                                    <label>Department<span className="login-danger"></span></label>
                                                                    <select className="form-control form-select select">
                                                                        <option selected disabled>Please Select</option>
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
                                                    <div className="form-group local-forms">
                                                        <label>Pay Components<span className="login-danger">*</span></label>
                                                        <select className="select2Box form-control form-select ">
                                                            <option selected disabled>Please Select </option>
                                                            <option>Code 128(C128)</option>
                                                            <option>Code 39(C39)</option>
                                                            <option>EAN -8</option>
                                                            <option>EAN -A</option>
                                                            <option>EAN -E</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <!-- Add other elements if needed --> */}
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

export default AddUser;
