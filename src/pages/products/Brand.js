import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  const [showAddEditModal, setShowAddEditModal] = useState(false); // State to control the add/edit modal visibility
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control the delete modal visibility
  const [data, setData] = useState([]); // State to hold the fetched brand data
  const [brandName, setBrandName] = useState(""); // State to hold the brand name input value
  const [description, setDescription] = useState(""); // State to hold the description input value
  const [deletingId, setDeletingId] = useState(null); // State to hold the ID of the brand to be deleted

  // Function to load brand data from the API
  const loadData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/brand-get-all');
      setData(res.data.message);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  };

  useEffect(() => {
    loadData(); // Fetch brand data when the component mounts
  }, []);

  // Function to show the add/edit modal
  const handleShowAddEditModal = () => {
    setShowAddEditModal(true);
  };

  // Function to close the add/edit modal and reset form fields
  const handleCloseAddEditModal = () => {
    setBrandName("");
    setDescription("");
    setShowAddEditModal(false);
  };

  // Function to handle the form submission for adding/editing a brand
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: brandName,
      description: description,
    };
    
    try {
      await axios.post("http://127.0.0.1:8000/api/brand-store", formData);
      loadData(); // Refresh data after adding a new brand
      handleCloseAddEditModal(); // Close the modal and clear the form
    } catch (error) {
      console.error("There was an error adding the brand!", error);
    }
  };

  // Function to show the delete confirmation modal and store the ID of the brand to be deleted
  const handleShowDeleteModal = (id) => {
    setDeletingId(id);
    setShowDeleteModal(true);
  };

  // Function to delete a brand based on the stored ID
  const deleteBrand = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/brand-delete/${deletingId}`);
      alert("Brand deleted successfully.");
      loadData(); // Refresh the data after deletion
      setShowDeleteModal(false); // Close the delete modal
      setDeletingId(null); // Clear the ID after deletion
    } catch (error) {
      let errorMessage = "An unexpected error occurred.";
  
      if (error.response) {
        if (error.response.status === 404) {
          errorMessage = "Error: " + error.response.data.message;
        }
      }
  
      alert(errorMessage);
      console.error("Error:", error);
    }
  };

  // Function to generate the table rows for displaying brand data
  const fetchtable = () => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>
          <button
            type="button"
            className="delete_btn btn btn-outline-danger btn-ms"
            onClick={() => handleShowDeleteModal(item.id)} // Set the ID when the delete button is clicked
          >
            <i className="feather-trash-2 text-danger me-1"></i>
            Delete
          </button>
          <Link to={`/edit-brand/${item.id}`} className="edit_btn btn btn-outline-info btn-ms ms-2">
            <i className="feather-edit text-info"></i>
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
                          onClick={handleShowAddEditModal}
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

          {/* Delete modal */}
          {showDeleteModal && (
            <div id="deleteModal" className="modal custom-modal fade show" role="dialog" style={{ display: "block" }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{border: '2px solid #007bff', borderRadius: '8px' }}>
                  <div className="modal-body">
                    <div className="form-header">
                      <h3>Delete Brand</h3>
                      <p>Are you sure you want to delete?</p>
                    </div>
                    <div className="modal-btn delete-action">
                      <div className="row">
                        <div className="col-6">
                          <button onClick={deleteBrand} className="confirm_delete_btn btn btn-primary paid-continue-btn" style={{ width: "100%" }}>Delete</button>
                        </div>
                        <div className="col-6">
                          <button onClick={() => setShowDeleteModal(false)} className="btn btn-primary paid-cancel-btn">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add/Edit Modal */}
          {showAddEditModal && (
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
                            onClick={handleCloseAddEditModal}
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
