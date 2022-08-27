import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import Footer from './components/Footer';
import { Home } from './components/Home';
import ListStudent from './components/ListStudent';
import DetailInfo from './components/DetailInfo';
import { AddStudent } from './components/AddStudent';
import {AdminLogin} from './components/AdminLogin';
import {AdminDashboard} from './components/AdminDashboard';
import { AdminHome } from './components/AdminHome';
import { Search } from './components/Search';
import {Events} from './components/Events';
import { Registration } from './components/Registration';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/admin_login" element={<AdminLogin />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/admin_dashboard" element={<AdminDashboard />} />

              <Route path="/admin_home" element={<AdminHome />} />

              <Route path="/students" element={<ListStudent />} />
              <Route path="/add-student" element={<AddStudent />} />
              <Route path="/detail-info/:id" element={<DetailInfo />} />
              <Route path="/edit-student/:id" element={<AddStudent />} />

              <Route path="/search" element={<Search />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
