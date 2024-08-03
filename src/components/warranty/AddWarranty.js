import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading";

export default function AddWarranty() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [inputErrorList, setInputErrorList] = useState({});
    const [warranty, setWarranty] = useState({
        name: '',
        duration: '',
        duration_type: '',
        description: '',
    });

    const handleInput = (e) => {
        setWarranty({ ...warranty, [e.target.name]: e.target.value });
    };

    const saveWarranty = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            name: warranty.name,
            duration: warranty.duration,
            duration_type: warranty.duration_type,
            description: warranty.description,
        };

        axios.post('http://127.0.0.1:8000/api/warranty-store', data)
            .then(res => {
                alert('Success');
                navigate('/list-warranties');
                setLoading(false);
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 422) {
                        alert('Error');
                        setInputErrorList(error.response.data.errors);
                        setLoading(false);
                    }
                }
            });
    };

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

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
                                <Link to="/list-warranties" className="btn btn-success float-end">Back</Link>
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
                                            <form onSubmit={saveWarranty}>
                                                <div className="col-md-12">
                                                    <div className="text-center mt-2 mb-4">
                                                        <h5 id="modalTitle">Add Warranties</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
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
                                                                    value={warranty.name}
                                                                    onChange={handleInput}
                                                                />
                                                                <span className="text-danger" id="name_error"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="mb-3">
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
                                                                    value={warranty.duration}
                                                                    onChange={handleInput}
                                                                />
                                                                <span className="text-danger" id="duration_error"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <div className="form-group local-forms">
                                                                <label>
                                                                    Period <span className="login-danger">*</span>
                                                                </label>
                                                                <select
                                                                    className="form-control"
                                                                    id="edit_duration_type"
                                                                    name="duration_type"
                                                                    value={warranty.duration_type}
                                                                    onChange={handleInput}
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
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="mb-3">
                                                            <div className="form-group local-forms">
                                                                <label>Description</label>
                                                                <textarea
                                                                    className="form-control"
                                                                    id="edit_description"
                                                                    name="description"
                                                                    placeholder="Enter Description"
                                                                    value={warranty.description}
                                                                    onChange={handleInput}
                                                                ></textarea>
                                                                <span className="text-danger" id="description_error"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-outline-primary btn-lg"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
