import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PlaySound } from '../../components/SoundSetup/PlaySound';
import { Modal, Button, Form } from 'react-bootstrap';

const Brand = () => {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [data, setData] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [description, setDescription] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [currentBrandId, setCurrentBrandId] = useState(null);
  const [errors, setErrors] = useState({
    brandName: "",
    description: "",
  });

  const loadData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/brand-get-all');
      setData(res.data.message);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
      toast.error("Failed to fetch data.");
      PlaySound('error');
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleShowAddEditModal = (brand = null) => {
    if (brand) {
      setBrandName(brand.name);
      setDescription(brand.description);
      setCurrentBrandId(brand.id);
      setEditMode(true);
    } else {
      setBrandName("");
      setDescription("");
      setCurrentBrandId(null);
      setEditMode(false);
    }
    setShowAddEditModal(true);
  };

  const handleCloseAddEditModal = () => {
    setBrandName("");
    setDescription("");
    setErrors({
      brandName: "",
      description: "",
    });
    setShowAddEditModal(false);
    setEditMode(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = {
      brandName: "",
      description: "",
    };

    if (!brandName) {
      newErrors.brandName = "Brand Name is required.";
      isValid = false;
      toast.error("Brand Name is required.");
      PlaySound('warning');
    }

    // You can add more validation rules here

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    const formData = {
      name: brandName,
      description: description,
    };

    try {
      if (editMode) {
        await axios.post(`http://127.0.0.1:8000/api/brand-update/${currentBrandId}`, formData);
        toast.success("Brand updated successfully.");
      } else {
        await axios.post("http://127.0.0.1:8000/api/brand-store", formData);
        toast.success("Brand added successfully.");
      }
      PlaySound('success');
      loadData();
      handleCloseAddEditModal();
    } catch (error) {
      console.error("There was an error saving the brand!", error);
      toast.error(editMode ? "Failed to update brand." : "Failed to add brand.");
      PlaySound('error');
    }
  };

  const handleShowDeleteModal = (id) => {
    setDeletingId(id);
    setShowDeleteModal(true);
  };

  const deleteBrand = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/brand-delete/${deletingId}`);
      toast.success("Brand deleted successfully.");
      PlaySound('success');
      loadData();
      setShowDeleteModal(false);
      setDeletingId(null);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to delete brand.");
      PlaySound('error');
    }
  };

  const fetchtable = () => {
    return data.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>
          <button
            type="button"
            className="delete_btn btn btn-outline-danger btn-ms"
            onClick={() => handleShowDeleteModal(item.id)}
          >
            <i className="feather-trash-2 text-danger me-1"></i>
            Delete
          </button>
          <button
            type="button"
            className="edit_btn btn btn-outline-info btn-ms ms-2"
            onClick={() => handleShowAddEditModal(item)}
          >
            <i className="feather-edit text-info"></i>
            Edit
          </button>
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
                          onClick={() => handleShowAddEditModal()}
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
            <div className="modal custom-modal fade show" role="dialog" style={{ display: "block" }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ border: '2px solid #007bff', borderRadius: '8px' }}>
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
          <Modal
            show={showAddEditModal}
            onHide={handleCloseAddEditModal}
            centered
            backdrop="static"
          >
            <Modal.Header closeButton>
              <Modal.Title>{editMode ? 'Edit Brand' : 'Add Brand'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBrandName">
                  <Form.Label>
                    Brand Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Brand Name"
                    value={brandName}
                    onChange={(e) => {
                      setBrandName(e.target.value);
                      if (errors.brandName) {
                        setErrors({ ...errors, brandName: "" });
                      }
                    }}
                    isInvalid={!!errors.brandName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.brandName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      if (errors.description) {
                        setErrors({ ...errors, description: "" });
                      }
                    }}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>

                <Modal.Footer>
                  <Button variant="primary" type="submit">
                    {editMode ? 'Update' : 'Save'}
                  </Button>
                  <Button variant="danger" onClick={handleCloseAddEditModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Brand;
