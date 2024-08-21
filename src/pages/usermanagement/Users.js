import React from "react";
import { Link } from "react-router-dom";

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
                    <li className="breadcrumb-item">User Management</li>
                    <li className="breadcrumb-item active">User</li>
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
                                          <Link to="/add-user" className="btn btn-outline-info">
                                                <i className="fas fa-plus px-2"></i>Add
                                          </Link>
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
//                     <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
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
//                           <Link to="#" className="btn btn-outline-info">
//                             <i className="fas fa-plus px-2"></i>Add
//                           </Link>
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

