import React, { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Cards from "./Components/Cards/Cards";

function App() {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [sLunch, setSLunch] = useState("");
  const [sLanding, setSLanding] = useState("");

  const API_URL = "https://api.spaceXdata.com/v3/launches?limit=100";

  useEffect(() => {
    const loadData = async () => {
      const lunchYear_URL = selectedYear && `&launch_year=${selectedYear}`;
      const sLunch_URL = sLunch && `&launch_success=${sLunch.toLowerCase()}`;
      const sLanding_URL =
        sLanding && `&land_success=${sLanding.toLowerCase()}`;
      const response = await fetch(
        `${API_URL}${lunchYear_URL}${sLunch_URL}${sLanding_URL}`
      );
      const data = await response.json();
      setData(data);
    };
    loadData();
  }, [selectedYear, sLunch, sLanding]);

  const handleYearClick = (data) => {
    setSelectedYear(data);
  };
  const handleSLunchClick = (data) => {
    setSLunch(data);
  };
  const handleSLandingClick = (data) => {
    setSLanding(data);
  };

  return (
    <div className="mainContainer">
      <div className="row">
        <div className="header">SpaceX Launch Programs</div>
        <div className="column left">
          <SideBar
            data={data}
            handleYearClick={handleYearClick}
            handleSLunchClick={handleSLunchClick}
            handleSLandingClick={handleSLandingClick}
            selectedYear={selectedYear}
            sLunch={sLunch}
            sLanding={sLanding}
          />
        </div>
        <div className="column right">
          {data && data.length > 0 ? <Cards data={data} />:<div className="nodata">No Data Found</div>}
        </div>
      </div>
      <div className="name_container">
        <div className="sub_header">{"Developed by: "}</div>
        <div>{"Gopal Krushna Mahapatra"}</div>
      </div>
    </div>
  );
}

export default App;
