import React from "react";

const UpdatePrice = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="row">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col-sm-12">
                                    <div className="page-sub-header">
                                        <h3 className="page-title">Update Price</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="students.html">Product</a></li>
                                            <li className="breadcrumb-item active">Add new product</li>
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
                                                        <div className="mb-3">
                                                            <h5>Import Export Product Price</h5>
                                                            <button type="button" className="btn btn-primary mt-2">Export Product
                                                                Price</button>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <label>File To Import</label>
                                                        <div className="invoices-upload-btn">
                                                            <input type="file" accept="image/*" name="image" id="file"
                                                                className="hide-input"/>
                                                                <label for="file" className="upload"><i className="far fa-folder-open">
                                                                    &nbsp;</i> Browse..</label>
                                                        </div>
                                                        <button type="button" className="btn btn-primary mt-3">Submit</button>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <h4>Instructions:</h4>
                                                            <span>Export product prices by clicking on above button</span>
                                                            <span>Make changes in product price including tax & selling price
                                                                groups.</span>
                                                            <span>Do not change any product name, sku & headers</span>
                                                            <span>After making changes import the file</span>
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

                </div>
            </div>
        </>
    );
}
export default UpdatePrice;