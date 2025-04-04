// import React from "react";
// import '../App.css';
// import sampleImage from '../image/dashimage.jpg';
// function Dashboard() {
//     return(

//         <div className="landing-container">
//         <h1>Payroll made easy, <br />scalable, and compliant</h1>
//         <p className="subtext">
//           Transform outdated payroll practices and build a better workplace for your business with Zoho Payroll.
//         </p>
//         <div className="button-group">
//           <button className="primary-btn">Start My Free Trial</button>
//           <button className="secondary-btn">Request Demo</button>
//         </div>
//         <div className="image-container1">
//         <img src={sampleImage} alt="Sample" className="dashboard-image1" />
//       </div>
//         <div className="image-container">
//         <img src={sampleImage} alt="Sample" className="dashboard-image" />
//       </div>
//       <div className="image-container2">
//         <img src={sampleImage} alt="Sample" className="dashboard-image2" />
//       </div>
//       </div>
//     );
//   }
  
//   export default Dashboard;

import React from "react";
import '../App.css';
import sampleImage from '../image/dashimage.jpg';
import sampleImage1 from '../image/business.avif';
import sampleImage2 from '../image/global.jpg';

function Dashboard() {
  return (
    <div className="landing-container">
      <h1>Payroll made easy, <br />scalable, and compliant</h1>
      <p className="subtext">
        Transform outdated payroll practices and build a better workplace for your business with Zoho Payroll.
      </p>
      <div className="button-group">
        <button className="primary-btn">Start My Free Trial</button>
        <button className="secondary-btn">Request Demo</button>
      </div>

      {/* Container to hold all three image containers in one line */}
      <div className="image-group">
        <div className="image-container1">
          <img src={sampleImage1} alt="Sample" className="dashboard-image1" />
        </div>
        <div className="image-container">
          <img src={sampleImage} alt="Sample" className="dashboard-image" />
        </div>
        <div className="image-container2">
          <img src={sampleImage2} alt="Sample" className="dashboard-image2" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
