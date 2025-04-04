import React from "react";
import "../App.css";
import applelogo from '../image/applelogo.svg';
import google from '../image/google.svg';
const FooterSection = () => {
  return (
    <div className="footer-container">
      <div className="footer-header">
        <h1>Cloud payroll system for growing businesses</h1>
        <div className="footer-buttons">
          <button className="btn-trial">Start My Free Trial</button>
          <button className="btn-demo">Request Demo</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>HELP & RESOURCES</h3>
          <ul>
            <li>About Zoho Payroll</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Customers</li>
            <li>Employee Onboarding</li>
            <li>Payroll Management</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>What is Payroll?</li>
            <li>Payroll Software</li>
            <li>HR Payroll Software</li>
            <li>Payslip Templates</li>
            <li>Payroll Software vs Spreadsheets</li>
            <li>Payroll Software For Small Business</li>
            <li>Free Payroll Software</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>AVAILABLE ON PLATFORMS</h3>
          <div className="footer-icons">
            <img src={applelogo} alt="App Store" />
            <img src={google} alt="Google Play" />
          </div>
        </div>

        <div className="footer-column">
          <h3>CONTACT US ON</h3>
          <ul>
            <li>Monday-Friday (9:00AM to 7:00PM)</li>
            <li>Toll-Free: 1800572667</li>
            <li>Email Us: hr@vauras.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
