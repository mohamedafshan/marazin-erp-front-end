import React, { useState } from "react";
function Supplier() {
    const [selectedOption, setSelectedOption] = useState('individual');
    const [allowLogin, setAllowLogin] = useState(false);

    const handleToggleLoginFieldsforshow = () => {
        setAllowLogin(!allowLogin);
    };

    const handleToggleLoginFields = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col-sm-12">
                                    <div className="page-sub-header">
                                        <h3 className="page-title">Suppliers </h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item">Contacts</li>
                                            <li className="breadcrumb-item active">
                                                List Suppliers
                                            </li>
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
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body mb-4">
                                    <div className="student-group-form">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="PurchaseDue"
                                                    />
                                                    <label className="form-check-label" for="PurchaseDue">
                                                        Purchase Due
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="PurchaseReturn"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        for="PurchaseReturn"
                                                    >
                                                        Purchase Return
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="AdvanceBalance"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        for="AdvanceBalance"
                                                    >
                                                        Advance Balance
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="OpeningBalance"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        for="OpeningBalance"
                                                    >
                                                        Opening Balance
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="row mt-4">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Assigned to{" "}
                                                            <span className="login-danger">*</span>
                                                        </label>
                                                        <select className="form-control select">
                                                            <option disabled>None</option>
                                                            <option>Mr Admin</option>
                                                            <option>Mr Super Admin</option>
                                                            <option>Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="form-group local-forms">
                                                        <label>
                                                            Gender <span className="login-danger">*</span>
                                                        </label>
                                                        <select className="form-control select">
                                                            <option disabled>None</option>
                                                            <option>Active</option>
                                                            <option>In Active</option>
                                                        </select>
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
                        <div className="col-sm-12">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="page-header">
                                        <div className="row align-items-center">
                                            <div className="col-auto text-end float-end ms-auto download-grp">
                                                {/* <!-- Button trigger modal --> */}
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-info "
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#addModal"
                                                >
                                                    <i className="fas fa-plus px-2"> </i>Add
                                                </button>
                                            </div>
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
                                                    <th>Action</th>
                                                    <th>Contact ID</th>
                                                    <th>Business Name</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Tax Number</th>
                                                    <th>Pay Term</th>
                                                    <th>Opening Balance</th>
                                                    <th>Advance Balance</th>
                                                    <th>Added On</th>
                                                    <th>Address</th>
                                                    <th>Mobile</th>
                                                    <th>Total Purchase Due</th>
                                                    <th>Total Purchase Return Due</th>
                                                    <th>Custom Field 1</th>
                                                    <th>Custom Field 2</th>
                                                    <th>Custom Field 3</th>
                                                    <th>Custom Field 4</th>
                                                    <th>Custom Field 5</th>
                                                    <th>Custom Field 6</th>
                                                    <th>Custom Field 7</th>
                                                    <th>Custom Field 8</th>
                                                    <th>Custom Field 9</th>
                                                    <th>Custom Field 10</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <th colspan="2">Total</th>
                                                    <th>$2500,000</th>
                                                    <th>$0</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {{-- Add modal row --}} */}
                    <div className="row">
                        <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add a new contact</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <form id="addAndEditForm" method="POST" action=""> */}
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="input-group local-forms">
                                                    <span className="input-group-text" id="basic-addon1"><i
                                                        className="fas fa-user"></i></span>
                                                    <select className="form-control form-select"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1">
                                                        <option selected disabled>Contact type</option>
                                                        <option>Suppliers</option>
                                                        <option>Customers</option>
                                                        <option>Both (Supplier & Customer)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mt-xs-2px">
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="contactType"
                                                        id="inlineRadio1"
                                                        value="individual"
                                                        checked={selectedOption === 'individual'}
                                                        onChange={handleToggleLoginFields}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">
                                                        Individual
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="contactType"
                                                        id="inlineRadio2"
                                                        value="business"
                                                        checked={selectedOption === 'business'}
                                                        onChange={handleToggleLoginFields}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineRadio2">
                                                        Business
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><i
                                                        className="fas fa-address-book"></i></span>
                                                    <input type="text" className="form-control" placeholder="Contact ID"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1" />
                                                </div>
                                                <span>Leave empty to autogenerate</span>
                                            </div>
                                        </div>

                                        {selectedOption === 'individual' && (
                                            <>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <div className="mb-3">
                                                            <div className="form-group local-forms">
                                                                <label>Prefix<span className="login-danger">*</span></label>
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
                                                    <div className="col-md-3">
                                                        <div className="mb-3">
                                                            <div className="form-group local-forms">
                                                                <label>First Name<span className="login-danger">*</span></label>
                                                                <input className="form-control" type="text" placeholder="First Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="mb-3">
                                                            <div className="form-group local-forms">
                                                                <label>Middle name<span className="login-danger"></span></label>
                                                                <input className="form-control" type="text" placeholder="Middle name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="mb-3">
                                                            <div className="form-group local-forms">
                                                                <label>Last Name<span className="login-danger"></span></label>
                                                                <input className="form-control" type="text" placeholder="Last Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {selectedOption === 'business' && (
                                            <>
                                                <div className="row">
                                                    <div className="col-md-3 hiddenway_two_action">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1"><i
                                                                className="fas fa-mobile-alt"></i></span>
                                                            <input type="text" className="form-control" placeholder="Bussiness Name"
                                                                aria-label="Example text with button addon"
                                                                aria-describedby="button-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}


                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><i
                                                        className="fas fa-mobile-alt"></i></span>
                                                    <input type="text" className="form-control" placeholder="Mobile"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><i
                                                        className="fas fa-phone"></i></span>
                                                    <input type="text" className="form-control"
                                                        placeholder="Alternate contact number"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><i
                                                        className="fas fa-phone"></i></span>
                                                    <input type="text" className="form-control" placeholder="Landline"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1"><i
                                                        className="fas fa-envelope"></i></span>
                                                    <input type="text" className="form-control" placeholder="Email"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-md-4 hidden">
                                                <div className="form-group local-forms calendar-icon">
                                                    <label>Date Of Birth <span className="login-danger">*</span></label>
                                                    <input className="form-control datetimepicker" type="text"
                                                        placeholder="DD-MM-YYYY" />
                                                </div>
                                            </div>

                                            <div className="col-md-5">
                                                <div className="input-group local-forms">
                                                    <span className="input-group-text" id="basic-addon1"><i
                                                        className="fas fa-user"></i></span>
                                                    <select className="form-control  form-select"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="basic-addon1">
                                                        <option selected disabled>Assigned to</option>
                                                        <option>Mr SuperUser</option>
                                                        <option>Mr Ahshan</option>
                                                        <option>Mr Afshan</option>
                                                    </select>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="row">
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-primary mt-xs-2px" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#moreinformation1"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    More Infomation <i className="fas fa-sort-down "></i>
                                                </button>
                                            </div>

                                            <div>
                                                <div className="collapse" id="moreinformation1">
                                                    <div className="student-group-form">
                                                        <hr />
                                                        <div className="row mt-4">
                                                            <div className="col-md-4">
                                                                <div className="input-group mb-3">
                                                                    <span className="input-group-text" id="basic-addon1"><i
                                                                        className="fas fa-address-book"></i></span>
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Tax number"
                                                                        aria-label="Example text with button addon"
                                                                        aria-describedby="button-addon1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="input-group mb-3">
                                                                    <span className="input-group-text" id="basic-addon1"><i
                                                                        className="fas fa-address-book"></i></span>
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Opening Balance"
                                                                        aria-label="Example text with button addon"
                                                                        aria-describedby="button-addon1" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="mb-3">
                                                                        <div className="form-group local-forms">
                                                                            <label>Pay term<span
                                                                                className="login-danger"></span></label>
                                                                            <input className="form-control" type="text"
                                                                                placeholder="Pay term" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="form-group local-forms">
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
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Address line 1<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Address line 1" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Address line 2<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Address line 2" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="input-group mb-3">
                                                                    <span className="input-group-text" id="basic-addon1"><i
                                                                        className="fas fa-address-book"></i></span>
                                                                    <input type="text" className="form-control" placeholder="City"
                                                                        aria-label="Example text with button addon"
                                                                        aria-describedby="button-addon1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="input-group mb-3">
                                                                    <span className="input-group-text" id="basic-addon1"><i
                                                                        className="fas fa-address-book"></i></span>
                                                                    <input type="text" className="form-control"
                                                                        placeholder="State"
                                                                        aria-label="Example text with button addon"
                                                                        aria-describedby="button-addon1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="input-group mb-3">
                                                                    <span className="input-group-text" id="basic-addon1"><i
                                                                        className="fas fa-address-book"></i></span>
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Country"
                                                                        aria-label="Example text with button addon"
                                                                        aria-describedby="button-addon1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="input-group mb-3">
                                                                    <span className="input-group-text" id="basic-addon1"><i
                                                                        className="fas fa-address-book"></i></span>
                                                                    <input type="text" className="form-control"
                                                                        placeholder="Zip Code"
                                                                        aria-label="Example text with button addon"
                                                                        aria-describedby="button-addon1" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 1<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 1" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 2<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 2" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 3<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 3" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 4<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 4" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 5<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 5" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 6<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 6" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 7<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 7" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 8<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 8" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 9<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 9" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Custom Field 10<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Custom Field 10" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row justify-content-center">
                                                            <div className="col-md-8">
                                                                <div className="mb-3">
                                                                    <div className="form-group local-forms">
                                                                        <label>Shipping Address<span
                                                                            className="login-danger"></span></label>
                                                                        <input className="form-control" type="text"
                                                                            placeholder="Shipping Address" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mt-3">
                                                <button className="btn btn-primary mt-xs-2px" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#AddContactPersons"
                                                    aria-expanded="false" aria-controls="collapseExample">
                                                    Add Contact Persons <i className="fas fa-sort-down"></i>
                                                </button>
                                            </div>

                                            <div>
                                                <div className="collapse" id="AddContactPersons">
                                                    <div className="student-group-form">
                                                        <hr />
                                                        <div className="row">
                                                            <p>
                                                                <button className="btn btn-primary mt-xs-2px" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#Persons1"
                                                                    aria-expanded="false" aria-controls="collapseExample">
                                                                    Add Contact Persons1 <i className="fas fa-sort-down "></i>
                                                                </button>
                                                            </p>

                                                            <div className="collapse show" id="Persons1">
                                                                <div className="student-group-form">
                                                                    <hr />
                                                                    <div className="row mt-4">

                                                                        <div className="col-md-2">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Prefix<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <select
                                                                                        className="form-control form-select select">
                                                                                        <option selected disabled>Mr / Mrs / Miss
                                                                                        </option>
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
                                                                                    <label>First Name<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="First Name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-5">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Last Name<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Last Name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Email<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Email" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Mobile Number<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Mobile Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Alternate contact number<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Alternate contact number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Family contact number<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Family contact number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Department<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Department" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Designation<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Designation" />
                                                                                </div>
                                                                            </div>
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
                                                                                <div className="form-check">
                                                                                    <input className="form-check-input" type="checkbox" value=""
                                                                                        onClick={handleToggleLoginFieldsforshow} id="allowLoginCheckbox" />
                                                                                    <label className="form-check-label" for="allowLoginCheckbox">
                                                                                        Allow login
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {allowLogin && (
                                                                        <>
                                                                            <div className="row">
                                                                                <div className="col-md-6 login-fields1">
                                                                                    <div className="mb-3">
                                                                                        <div className="form-group local-forms">
                                                                                            <label>Username<span
                                                                                                className="login-danger"></span></label>
                                                                                            <input className="form-control" type="text"
                                                                                                placeholder="Username" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-6 login-fields1">
                                                                                    <div className="mb-3">
                                                                                        <div className="form-group local-forms">
                                                                                            <label>Password<span
                                                                                                className="login-danger">*</span></label>
                                                                                            <input className="form-control" type="password"
                                                                                                placeholder="Password" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-6 login-fields1">
                                                                                    <div className="mb-3">
                                                                                        <div className="form-group local-forms">
                                                                                            <label>Confirm Password<span
                                                                                                className="login-danger">*</span></label>
                                                                                            <input className="form-control" type="password"
                                                                                                placeholder="Confirm Password" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )}


                                                                    <div className="row">
                                                                        <div className="col-lg-3 col-md-6">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox"
                                                                                    id="isactive2" checked />
                                                                                <label className="form-check-label" for="isactive2">
                                                                                    Is active ?
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="row">
                                                            <p>
                                                                <button className="btn btn-primary mt-xs-2px" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#Persons2"
                                                                    aria-expanded="false" aria-controls="collapseExample">
                                                                    Add Contact Persons2 <i className="fas fa-sort-down "></i>
                                                                </button>
                                                            </p>

                                                            <div className="collapse" id="Persons2">
                                                                <div className="student-group-form">
                                                                    <hr />
                                                                    <div className="row mt-4">

                                                                        <div className="col-md-2">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Prefix<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <select
                                                                                        className="form-control form-select select">
                                                                                        <option selected disabled>Mr / Mrs / Miss
                                                                                        </option>
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
                                                                                    <label>First Name<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="First Name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-5">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Last Name<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Last Name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Email<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Email" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Mobile Number<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Mobile Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Alternate contact number<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Alternate contact number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Family contact number<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Family contact number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Department<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Department" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Designation<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Designation" />
                                                                                </div>
                                                                            </div>
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
                                                                                <div className="form-group">
                                                                                    <input className="form-check-input"
                                                                                        type="checkbox" value=""
                                                                                        onclick="toggleLoginFields('allowLoginCheckbox2','.login-fields2')"
                                                                                        id="allowLoginCheckbox2" />
                                                                                    <label className="form-check-label"
                                                                                        for="allowLoginCheckbox2">
                                                                                        Allow login
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row">
                                                                        <div className="col-md-6 login-fields2">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Username<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Username" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6 login-fields2">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Password<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <input className="form-control" type="password"
                                                                                        placeholder="Password" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6 login-fields2">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Confirm Password<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <input className="form-control" type="password"
                                                                                        placeholder="Confirm Password" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-lg-3 col-md-6">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox"
                                                                                    id="isactive1" checked />
                                                                                <label className="form-check-label" for="isactive1">
                                                                                    Is active ?
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="row">
                                                            <p>
                                                                <button className="btn btn-primary mt-xs-2px" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#Persons3"
                                                                    aria-expanded="false" aria-controls="collapseExample">
                                                                    Add Contact Persons3 <i className="fas fa-sort-down "></i>
                                                                </button>
                                                            </p>

                                                            <div className="collapse" id="Persons3">
                                                                <div className="student-group-form">
                                                                    <hr />
                                                                    <div className="row mt-4">

                                                                        <div className="col-md-2">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Prefix<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <select
                                                                                        className="form-control form-select select">
                                                                                        <option selected disabled>Mr / Mrs / Miss
                                                                                        </option>
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
                                                                                    <label>First Name<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="First Name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-5">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Last Name<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Last Name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Email<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Email" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Mobile Number<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Mobile Number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Alternate contact number<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Alternate contact number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Family contact number<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Family contact number" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Department<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Department" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Designation<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Designation" />
                                                                                </div>
                                                                            </div>
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
                                                                                <div className="form-group">
                                                                                    <input className="form-check-input"
                                                                                        type="checkbox" value=""
                                                                                        onclick="toggleLoginFields('allowLoginCheckbox3','.login-fields3')"
                                                                                        id="allowLoginCheckbox3" />
                                                                                    <label className="form-check-label"
                                                                                        for="allowLoginCheckbox3">
                                                                                        Allow login
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row">
                                                                        <div className="col-md-6 login-fields3">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Username<span
                                                                                        className="login-danger"></span></label>
                                                                                    <input className="form-control" type="text"
                                                                                        placeholder="Username" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6 login-fields3">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Password<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <input className="form-control" type="password"
                                                                                        placeholder="Password" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6 login-fields3">
                                                                            <div className="mb-3">
                                                                                <div className="form-group local-forms">
                                                                                    <label>Confirm Password<span
                                                                                        className="login-danger">*</span></label>
                                                                                    <input className="form-control" type="password"
                                                                                        placeholder="Confirm Password" />
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

                                        {/* </form> */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {{-- Edit modal row --}} */}
                </div>
            </div>
        </>
    );
}
export default Supplier;
