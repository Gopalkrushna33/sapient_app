import React, { Fragment } from "react";
import * as constants from "../../constants";
import "./SideBar.css";

function SideBar({
  data,
  handleYearClick,
  selectedYear,
  handleSLunchClick,
  handleSLandingClick,
  sLunch,
  sLanding,
}) {
  const yearData = constants.YEAR_LUNCH;

  const successfulNodeStyles = (selector, data) => {
    if (selector === "sLunch") {
      return applyStyles(data, sLunch);
    } else {
      return applyStyles(data, sLanding);
    }
  };
  const successfulNode = (data) => {
    return (
      <Fragment>
        <hr />
        <div className="cellContainer">
          <div
            className={successfulNodeStyles(data, "True")}
            onClick={(e) => handleClick(e, data)}
          >
            {"True"}
          </div>
          <div
            className={successfulNodeStyles(data, "False")}
            onClick={(e) => handleClick(e, data)}
          >
            {"False"}
          </div>
        </div>
      </Fragment>
    );
  };

  const handleClick = (e, data) => {
    if (data === "sLunch") {
      if (e.target.innerText === sLunch) {
        handleSLunchClick("");
      } else {
        handleSLunchClick(e.target.innerText);
      }
    } else {
      if (e.target.innerText === sLanding) {
        handleSLandingClick("");
      } else {
        handleSLandingClick(e.target.innerText);
      }
    }
  };

  const lunchYearHandle = (e, data) => {
    if (data === selectedYear) {
      handleYearClick("");
    } else {
      handleYearClick(data);
    }
  };

  const applyStyles = (data, selector) => {
    if (!data) {
      return "cell hide";
    }
    if (data === selector) {
      return "cell active";
    } else {
      return "cell";
    }
  };

  const yearNode = [];

  for (let i = 0; i <= yearData.length - 1; i += 2) {
    yearNode.push(
      <div key={i} className="cellContainer">
        <div
          className={applyStyles(yearData[i], selectedYear)}
          onClick={(e) => lunchYearHandle(e, yearData[i])}
        >
          {yearData[i]}
        </div>
        <div
          className={applyStyles(yearData[i + 1], selectedYear)}
          onClick={(e) => lunchYearHandle(e, yearData[i + 1])}
        >
          {yearData[i + 1]}
        </div>
      </div>
    );
  }

  return (
    <div className="filter_container">
      <div className="sub_headers">Filters</div>
      <div className="filter_inner_container">
        <div className="label">Lunch Year</div>
        <hr />
        <div>{yearNode}</div>
        <div className="label">Successful Lunch</div>
        {successfulNode("sLunch")}
        <div className="label">Successful Landing</div>
        {successfulNode("sLanding")}
      </div>
    </div>
  );
}

export default SideBar;
