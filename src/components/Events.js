import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

export const Events = () => {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="row">
            <header className="navbar sticky-top bg-info flex-md-nowrap p-0 shadow" style={{marginTop: 10}}>
            <Link to="/admin_dashboard" className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">Admin</Link>
            <button className="navbar-toggler position-relative d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                <Link to="/home" className="nav-link px-3">Sign Out</Link>
                </div>
            </div>
            </header>

            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/admin_dashboard" className="nav-link" aria-current="page">
                    <span data-feather="home" className="align-text-bottom"></span>
                    Dashboard
                    </Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span data-feather="shopping-cart" className="align-text-bottom"></span>
                    Student Menu
                    </a>
                    <ul className="dropdown-menu dropdown-menu-light">
                        <li><Link to="/add-student" className="dropdown-item">Add Student</Link></li>
                        <li><Link to="/students" className="dropdown-item">List Students</Link></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to="/search" className="nav-link" aria-current="page">
                    <span data-feather="home" className="align-text-bottom"></span>
                    Search
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/events" className="nav-link" aria-current="page">
                    <span data-feather="home" className="align-text-bottom"></span>
                    Events
                    </Link>
                </li>

                </ul>
            </div>
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Events</h1>
                </div>

                <div className="row">
                    <h2>Add New Event</h2>
                    <div className="row">
                        <input type="text" placeholder="Add Title" className="form-control" style={{ width: "20%", marginRight: "10px", marginBottom: 10 }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                        <div className="col" style={{ width: "25%", marginBottom: 10 }}>
                            <DatePicker placeholderText="Start Date" className="form-control" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                        </div>

                        <div className="col" style={{ width: "25%", marginBottom: 10 }}>
                            <DatePicker placeholderText="End Date" className="form-control" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                        </div>

                        <div className="col">
                            <button className="btn btn-success" onClick={handleAddEvent} >Add Event</button>
                        </div>                        
                    </div>
                </div>

                <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "20px"}} />

            </main>
        </div>
    )
}
