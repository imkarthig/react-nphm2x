import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="Home" className="logo">
        logo
      </Link>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler">
        <i className="icon-nav" className="fa fa-tasks"></i>
      </label>
      <div className="menu">
        <ul className="list">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Pagination">Pagination</Link>
          </li>
          <li>
            <Link to="/Employeid">EmployeeID</Link>
          </li>
          <li>
            <Link to="/EmployeDetail">EmployeDetail</Link>
          </li>
          <li>
            <Link to="/Contactus">Contactus</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
