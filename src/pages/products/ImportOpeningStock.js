import React from "react";

const importOpeningStock = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col-sm-12">
                                    <div className="page-sub-header">
                                        <h3 className="page-title">Import Opening Stock</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="students.html">Product</a></li>
                                            <li className="breadcrumb-item active">Import Opening Stock</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {{-- table row --}} */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="page-header">
                                        <div className="row align-items-center">
                                            <form action="#" method="">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>File To Import</label>
                                                        <div className="invoices-upload-btn">
                                                            <input type="file" accept="image/*" name="image" id="file"
                                                                className="hide-input" />
                                                            <label for="file" className="upload"><i className="far fa-folder-open">
                                                                &nbsp;</i> Browse..</label>
                                                        </div>
                                                        <button type="button" className="btn btn-primary mt-3">Submit</button>
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <button type="button" className="btn btn-outline-success mt-2"><i
                                                                className="fas fa-download"></i> &nbsp; Download template file</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Add other elements if needed --> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {{-- table row --}} */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="page-header">
                                        <div className="row align-items-center">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <h5>Instructions</h5>
                                                        <b>Follow the instructions carefully before importing the file.</b>
                                                        <p>The columns of the file should be in the following order.</p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="table-responsive">
                                                        <table className="table table-borderless table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Column Number</th>
                                                                    <th scope="col">Column Name</th>
                                                                    <th scope="col">Instruction</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>SKU(Required)</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Location (Optional)
                                                                        If blank first business location will be used</td>
                                                                    <td>Name of the business location</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Quantity (Required)</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">4</th>
                                                                    <td>Unit Cost (Before Tax) (Required)</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">5</th>
                                                                    <td>Lot Number (Optional)</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">6</th>
                                                                    <td>Expiry Date (Optional)</td>
                                                                    <td>Stock expiry date in Business date format
                                                                        <b>mm/dd/yyyy, Type: text, Example: 07/15/2024</b></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
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

export default importOpeningStock;