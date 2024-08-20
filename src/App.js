import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

// Import pages
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Users from './pages/Users';
import Roles from './pages/Roles';
import SalesCommission from './pages/SalesCommission';
import ListProducts from './pages/ListProducts';
import AddProduct from './pages/AddProduct';
import ListPurchases from './pages/ListPurchases';
import AddPurchase from './pages/AddPurchase';
import AddUser from './pages/AddUser';
import Warranty from './pages/Warranty';
import AddWarranty from './components/warranty/AddWarranty';
import EditWarranty from './components/warranty/EditWarranty';

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
              <Route path="/users" element={<Users />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/sales-commission" element={<SalesCommission />} />
              <Route path="/list-products" element={<ListProducts />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/list-purchases" element={<ListPurchases />} />
              <Route path="/add-purchase" element={<AddPurchase />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/list-warranties" element={<Warranty />} />
              <Route path="/add-warranty" element={<AddWarranty />} />
              <Route path="/edit-warranty/:id" element={<EditWarranty />} />
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
