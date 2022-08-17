import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListCustomersComponents from './components/ListCustomersComponents';
import { AddCustomerComponent } from './components/AddCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import { Home } from './components/Home';
import {Manager_login} from './components/Manager_login';
import { Manager_Dashboard } from './components/Manager_Dashboard';
import { AddCashier } from './components/AddCashier';
import { ListCashier } from './components/ListCashier';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/manager_login" element={<Manager_login />} />
              <Route path="/manager_dashboard" element={<Manager_Dashboard />} />
              <Route exact path="/" element={<Home />} />
              
              <Route path="/customers" element={<ListCustomersComponents />} />
              <Route path="/add-customer" element={<AddCustomerComponent />} />
              <Route path="/edit-customer/:id" element={<AddCustomerComponent />} />

              <Route path="/add-cashier" element={<AddCashier />} />
              <Route path="/cashiers" element={<ListCashier />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
