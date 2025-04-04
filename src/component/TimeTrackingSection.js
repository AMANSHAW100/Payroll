import React, { useState } from "react";
import "./TimeTrackingSection.css";
import { FaClock, FaClipboardList, FaUsers, FaDollarSign, FaFileInvoice } from "react-icons/fa";
import timeTrackingImg from "../image/time-tracking.png"; 
import timesheetsImg from "../image/timesheets.png"; 
import attendanceImg from "../image/attendance.png"; 
import payRatesImg from "../image/pay-rates.png"; 
import expensesImg from "../image/expenses.png"; 

const TimeTrackingSection = () => {
  // State to store selected menu item
  const [selectedMenu, setSelectedMenu] = useState("Time tracking");

  // Image map for different sections
  const images = {
    "Time tracking": timeTrackingImg,
    "Timesheets": timesheetsImg,
    "Attendance management": attendanceImg,
    "Pay rates": payRatesImg,
    "Expenses and invoicing": expensesImg,
  };

  return (
    <div className="time-tracking-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>Hubstaff</h2>
        </div>
        <ul className="sidebar-menu">
          <li onClick={() => setSelectedMenu("Time tracking")}>
            <FaClock className="menu-icon" /> Time tracking
          </li>
          <li onClick={() => setSelectedMenu("Timesheets")}>
            <FaClipboardList className="menu-icon" /> Timesheets
          </li>
          <li onClick={() => setSelectedMenu("Attendance management")}>
            <FaUsers className="menu-icon" /> Attendance management
          </li>
          <li onClick={() => setSelectedMenu("Pay rates")}>
            <FaDollarSign className="menu-icon" /> Pay rates
          </li>
          <li onClick={() => setSelectedMenu("Expenses and invoicing")}>
            <FaFileInvoice className="menu-icon" /> Expenses and invoicing
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <h1>{selectedMenu}</h1>
        <p>
          Manage your {selectedMenu.toLowerCase()} efficiently and boost productivity with Hubstaff.
        </p>
        <div className="dashboard-preview">
          <img src={images[selectedMenu]} alt={selectedMenu} />
        </div>
      </main>
    </div>
  );
};

export default TimeTrackingSection;