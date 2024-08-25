import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");

  const loadData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/brand-get-all');
      setData(res.data.message);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setBrandName("");
    setDescription("");
    setShow(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: brandName,
      description: description,
    };
    
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/brand-store", formData);
      console.log(res.data);
      loadData(); // Refresh data after adding a new brand
      handleClose(); // Close the modal and clear the form
    } catch (error) {
      console.error("There was an error adding the brand!", error);
    }
  };

  const fetchtable = () => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            // onClick={(e) => deleteBrand(e, item.id)}
          >
            Delete
          </button>
          <Link to={`/edit-brand/${item.id}`} className="btn btn-primary">
            Edit
          </Link>
        </td>
      </tr>
    ));
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
                    <h3 className="page-title">Brands</h3>
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
                        <button
                          type="button"
                          className="btn btn-outline-info"
                          onClick={handleShow}
                        >
                          New <i className="fas fa-plus px-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table
                      id="brand"
                      className="datatable table table-stripped"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Brand Name</th>
                          <th>Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>{fetchtable()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add/Edit Modal */}
          {show && (
            <>
              <div className="modal-backdrop fade show"></div>
              <div
                id="exampleModal"
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
                style={{ display: "block" }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="text-center mt-2 mb-4">
                        <h5>Add Brand</h5>
                      </div>
                      <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                          <div className="form-group local-forms">
                            <label>
                              Brand Name <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              name="name"
                              type="text"
                              placeholder="Brand Name"
                              value={brandName}
                              onChange={(e) => setBrandName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <div className="form-group local-forms">
                            <label>
                              Description <span className="login-danger"></span>
                            </label>
                            <textarea
                              className="form-control"
                              name="description"
                              placeholder="Enter Description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                          </div>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={handleClose}
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Brand;
