import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";

export default function EditWarranty() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [inputErrorList, setInputErrorList] = useState({});
    const [warranty, setWarranty] = useState({
        name: "",
        description: "",
        duration: "",
        duration_type: "",
    });

    useEffect(() => {
        setLoading(true);
        axios.get(`http://127.0.0.1:8000/api/warranty-edit/${id}`)
            .then(res => {
                if (res.data && res.data.message) {
                    setWarranty(res.data.message);
                }
                setLoading(false);
            })
            .catch(error => {
                console.log("There was an error fetching the data!", error);
                setLoading(false);
            });
    }, [id]);

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

        axios.put(`http://127.0.0.1:8000/api/warranty-update/${id}`, data)
            .then(res => {
                navigate('/list-warranties');
                setLoading(false);
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 422) {
                        setInputErrorList(error.response.data.errors);
                    } else if (error.response.status === 500) {
                        alert('An error occurred on the server');
                    }
                }
                setLoading(false);
            });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-sub-header">
                                <h3 className="page-title">Edit Warranty</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">Warranties</li>
                                    <li className="breadcrumb-item active">Edit Warranty</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <form onSubmit={saveWarranty}>
                                    <div className="text-center mt-2 mb-4">
                                        <h5>Edit Warranty</h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label>
                                                    Name <span className="login-danger">*</span>
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    value={warranty.name}
                                                    onChange={handleInput}
                                                />
                                                {inputErrorList.name && <span className="text-danger">{inputErrorList.name[0]}</span>}
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label>
                                                    Duration <span className="login-danger">*</span>
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="duration"
                                                    type="number"
                                                    placeholder="Enter Duration"
                                                    value={warranty.duration}
                                                    onChange={handleInput}
                                                />
                                                {inputErrorList.duration && <span className="text-danger">{inputErrorList.duration[0]}</span>}
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label>
                                                    Period <span className="login-danger">*</span>
                                                </label>
                                                <select
                                                    className="form-control"
                                                    name="duration_type"
                                                    value={warranty.duration_type}
                                                    onChange={handleInput}
                                                >
                                                    <option value="" disabled>Please Select</option>
                                                    <option value="days">Days</option>
                                                    <option value="months">Months</option>
                                                    <option value="years">Years</option>
                                                </select>
                                                {inputErrorList.duration_type && <span className="text-danger">{inputErrorList.duration_type[0]}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label>Description</label>
                                                <textarea
                                                    className="form-control"
                                                    name="description"
                                                    placeholder="Enter Description"
                                                    value={warranty.description}
                                                    onChange={handleInput}
                                                ></textarea>
                                                {inputErrorList.description && <span className="text-danger">{inputErrorList.description[0]}</span>}
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
                                        <Link to="/list-warranties" className="btn btn-outline-success btn-lg ms-3">Back</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
