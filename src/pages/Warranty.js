import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading.js";
import { Link } from "react-router-dom";

// Separate component for the table content
function WarrantyTable() {
    const [loading, setLoading] = useState(true);
    const [warranty, setWarranty] = useState([]);

    // Function to fetch warranty data
    const fetchWarrantyData = () => {
        setLoading(true);
        axios
            .get("http://127.0.0.1:8000/api/warranty-get-all")
            .then((res) => {
                console.log(res);
                setWarranty(res.data.message);
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchWarrantyData();
    }, []);

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    const deletewarranty = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting...';
    
        axios
            .delete(`http://127.0.0.1:8000/api/warranty-delete/${id}`)
            .then((res) => {
                alert('Successfully deleted');
                thisClicked.closest("tr").remove();
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 404) {
                        alert("Error: " + error.response.data.message);
                    } else {
                        alert("An error occurred. Please try again.");
                    }
                } else {
                    console.error("Error:", error);
                    alert("An unexpected error occurred.");
                }
            });
    };

    const warrantyDetails = warranty.map((item, index) => {
        return (
            <tr key={index}>
                <td>{index +1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.duration}</td>
                <td>{item.duration_type}</td>
                <td>
                <button
                    type="button"
                    onClick={(e) => deletewarranty(e, item.id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
                    <Link to={`/edit-warranty/${item.id}`} className="btn btn-primary">
                        Edit
                    </Link>

                </td>
            </tr>
        );
    });

    return (
        <div className="table-responsive">
            <table className="datatable table table-striped" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Period</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{warrantyDetails}</tbody>
            </table>
        </div>
    );
}

// Main Warranty component
function Warranty() {
    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-sub-header">
                                <h3 className="page-title">Warranties</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">Warranties</li>
                                    <li className="breadcrumb-item active">List Warranties</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-sm-12">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="page-header">
                                        <div className="row align-items-center">
                                            <div className="col-auto text-end float-end ms-auto download-grp">
                                            <Link to="/add-warranty" className="btn btn-outline-info"> 
                                            {/* data-bs-toggle="modal" data-bs-target="#addAndEditWarrantyModal" */}
                                                <i className="fas fa-plus px-2"></i>Add
                                             </Link>
                                             <button className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#addAndEditWarrantyModal"> 
                                                <i className="fas fa-plus px-2"></i>Add Data using Modal
                                             </button>
                                            </div>
                                        </div>
                                    </div>
                                    <WarrantyTable /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div
                    id="addAndEditWarrantyModal"
                    className="modal fade"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="text-center mt-2 mb-4">
                                    <h5 id="modalTitle">Add Warranties</h5>
                                </div>

                                <input type="hidden" name="edit_id" id="edit_id" />

                                <div className="mb-3">
                                    <div className="form-group local-forms">
                                        <label>
                                            Name <span className="login-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control"
                                            id="edit_name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter Name"
                                        />
                                        <span className="text-danger" id="name_error"></span>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-group local-forms">
                                        <label>Description</label>
                                        <textarea
                                            className="form-control"
                                            id="edit_description"
                                            name="description"
                                            placeholder="Enter Description"
                                        ></textarea>
                                        <span className="text-danger" id="description_error"></span>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group local-forms">
                                                <label>
                                                    Duration <span className="login-danger">*</span>
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="edit_duration"
                                                    name="duration"
                                                    type="number"
                                                    placeholder="Enter Duration"
                                                />
                                                <span className="text-danger" id="duration_error"></span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group local-forms">
                                                <label>
                                                    Period <span className="login-danger">*</span>
                                                </label>
                                                <select
                                                    className="form-control"
                                                    id="edit_duration_type"
                                                    name="duration_type"
                                                >
                                                    <option selected disabled>
                                                        Please Select
                                                    </option>
                                                    <option>days</option>
                                                    <option>months</option>
                                                    <option>years</option>
                                                </select>
                                                <span className="text-danger" id="duration_type_error"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="submit"
                                        id="modalButton"
                                        className="btn btn-outline-primary"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Warranty;
