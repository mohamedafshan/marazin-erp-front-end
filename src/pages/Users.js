import React from "react";

function Users() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-sub-header">
                  <h3 className="page-title">Users</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active">User</li>
                  </ul>
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
                                        
                                          <a href="#" className="btn btn-outline-info">
                                              <i className="fas fa-plus px-2"></i>Add
                                      </a>
                                      </div>
                                  </div>
                              </div>

                              <div className="table-responsive">
                                <table className="datatable table table-stripped" style={{ width: '100%' }}>
                                  <thead>
                                    <tr>
                                      <th>Username</th>
                                      <th>Name</th>
                                      <th>Role</th>
                                      <th>Email</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                  
                                  </tbody>
                                </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
        </div>
        
    
        <div className="row">
            <div id="addModal" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center mt-2 mb-4">
                                <h5>Add Warranty</h5>
                            </div>
                            <form className="px-3" action="#">
                                <div className="mb-3">
                                    <div className="form-group local-forms">
                                        <label>Name <span className="login-danger">*</span></label>
                                        <input className="form-control" type="text" placeholder="Enter Name"/>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div class="form-group local-forms">
                                        <label>Description <span className="login-danger">*</span></label>
                                        <textarea className="form-control" type="text" placeholder="Enter Description"></textarea>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group local-forms">
                                                <label>Duration <span className="login-danger">*</span></label>
                                                <input className="form-control" type="number" placeholder="Enter Duration"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group local-forms days">
                                                <label>Blood Group <span className="login-danger">*</span></label>
                                                <select className="form-control form-select">
                                                    <option selected disabled>Please Select </option>
                                                    <option>Days</option>
                                                    <option>Months</option>
                                                    <option>Years</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}

export default Users;




// import React, { useEffect } from "react";
// import $ from "jquery";
// import "datatables.net-dt/css/jquery.dataTables.css";  // DataTables CSS
// import "datatables.net";  // DataTables JS

// function Users() {
//   // Sample user data
//   const userData = [
//     { username: 'johndoe', name: 'John Doe', role: 'Admin', email: 'johndoe@example.com' },
//     { username: 'janedoe', name: 'Jane Doe', role: 'User', email: 'janedoe@example.com' },
//     // Add more user objects as needed
//   ];

//   useEffect(() => {
//     // Initialize DataTable
//     $(document).ready(function() {
//       $('.datatable').DataTable();
//     });
//   }, []);

//   return (
//     <>
//       <div className="page-wrapper">
//         <div className="content container-fluid">
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="page-sub-header">
//                   <h3 className="page-title">Users</h3>
//                   <ul className="breadcrumb">
//                     <li className="breadcrumb-item"><a href="index.html">Home</a></li>
//                     <li className="breadcrumb-item active">User</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-sm-12">
//                 <div className="card card-table">
//                   <div className="card-body">
//                     <div className="page-header">
//                       <div className="row align-items-center">
//                         <div className="col-auto text-end float-end ms-auto download-grp">
//                           <a href="#" className="btn btn-outline-info">
//                             <i className="fas fa-plus px-2"></i>Add
//                           </a>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="table-responsive">
//                       <table className="datatable table table-stripped" style={{ width: '100%' }}>
//                         <thead>
//                           <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Role</th>
//                             <th>Email</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {userData.map((user, index) => (
//                             <tr key={index}>
//                               <td>{user.username}</td>
//                               <td>{user.name}</td>
//                               <td>{user.role}</td>
//                               <td>{user.email}</td>
//                               <td>
//                                 <button className="btn btn-primary btn-sm">Edit</button>
//                                 <button className="btn btn-danger btn-sm">Delete</button>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Users;

