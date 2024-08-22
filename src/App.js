import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

// Import pages
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Users from './pages/usermanagement/Users';
import Roles from './pages/usermanagement/Roles';
import SalesCommission from './pages/usermanagement/SalesCommission';
import AddProduct from './pages/AddProduct';
import ListPurchases from './pages/ListPurchases';
// import AddPurchase from './pages/AddPurchase';
import AddUser from './pages/usermanagement/AddUser';
import Warranty from './pages/Warranty';
import AddWarranty from './components/warranty/AddWarranty';
import EditWarranty from './components/warranty/EditWarranty';
import AddRole from './pages/usermanagement/AddRole';
import Supplier from './pages/contacts/Supplier';
import Customer from './pages/contacts/Customer';
import CustomerGroup from './pages/contacts/CustomerGroup';
import ImportContact from './pages/contacts/ImportContact';
import Products from './pages/products/Products';
import Purchase from './pages/purchase/purchase';
import AddPurchase from './pages/purchase/AddPurchase';
import ListPurchaseReturn from './pages/purchase/ListPurchaseReturn';
import AddPurchaseReturn from './pages/purchase/AddPurchaseReturn';
import UpdatePrice from './pages/products/UpdatePrice';
import PrintLabel from './pages/products/PrintLabel';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="main-wrapper">
          <Header />
          <SideBar />
          <div className="content container-fluid">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
            
             
              <Route path="/list-purchases" element={<ListPurchases />} />
            
             
              <Route path="/list-warranties" element={<Warranty />} />
              <Route path="/add-warranty" element={<AddWarranty />} />
              <Route path="/edit-warranty/:id" element={<EditWarranty />} />

              {/* userManage */}
              <Route path="/users" element={<Users />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/add-role" element={<AddRole />} />
              <Route path="/sales-commission" element={<SalesCommission />} />

              {/* contacts */}
              <Route path="/supplier" element={<Supplier />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/customer-group" element={<CustomerGroup />} />
              <Route path="/import-contact" element={<ImportContact />} />
              

              {/* product */}
              <Route path="/products" element={<Products />} />
              <Route path="/add-product" element={<AddProduct />} />


              {/* purchase */}
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/add-purchase" element={<AddPurchase />} />
              <Route path="/list-purchase-return" element={<ListPurchaseReturn />} />
              <Route path="/add-purchase-return" element={<AddPurchaseReturn />} />
              <Route path="/update-price" element={<UpdatePrice />} />
              <Route path="/print-label" element={<PrintLabel />} />

              {/* Add more routes here */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
