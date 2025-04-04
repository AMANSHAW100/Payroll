import React from "react";
import Dashboard from "./Dashboard";
import MetricsSection from "../component/MetricsSection/MetricsSection";
import ComplianceSection from "./ComplianceSection";
import FooterSection from "./FooterSection";
import TimeTrackingSection from "./TimeTrackingSection";
import Features from "./Features";
import WallofLove from "./WallOfLove/WallOfLove"
import ValueComponent from "./ValueComponent/ValueComponent";
function Home() {
    return(

        <div>
            <Dashboard/>
       <MetricsSection/>
       <TimeTrackingSection/>
       <ComplianceSection/>
       <WallofLove/>
       <ValueComponent/>
       <Features/>
       <FooterSection/>
        </div>
    );
  }
  
  export default Home;