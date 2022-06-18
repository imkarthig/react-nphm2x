import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Employeid from './Employeid.jsx';
import Login from './Login.jsx';
import  Pagination from './Pagination.jsx';
import Contactus from './Contactas.jsx';
import EmployeDetail from './EmployeDetail.jsx';
import { Welcome } from './Welcome.jsx';
import { Home } from './Home.jsx';
import Counter from './counter.jsx';
export function Main() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Employeid" element={<Employeid />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/EmployeDetail" element={<EmployeDetail />} />
      <Route path="/Welcome" element={<Welcome />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="Counter" element={<Counter />} />
    </Routes>
  );
}
