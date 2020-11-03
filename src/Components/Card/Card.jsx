import React from "react";
import "./Card.css";

function Card({ data }) {
  return (
    <div className="cardContainer">
      <div>
        <img
          src={data.links.mission_patch_small}
          className="card_img"
          alt="mission_patch_small.jpg"
        />
      </div>
      <div className="card_Header">
        {data.mission_name} #{data.flight_number}
      </div>
      <div className="sub_headers">mission_id:</div>
      {data.mission_id.length > 0 ? (
        data.mission_id.map((item, index) => {
          return <li className="value" key={item+index}>{item}</li>;
        })
      ) : (
        <li className="value">{"NA"}</li>
      )}
      <div>
        <span className="sub_headers">Lunch Year:</span>
        <span className="value">{` ${data.launch_year}`}</span>
      </div>
      <div>
        <span className="sub_headers">Successful Lunch:</span>
        <span className="value">{data.launch_success ?` ${data.launch_success}` :" false"}</span>
      </div>
      <div>
        <span className="sub_headers">Successful Landing:</span>
        <span className="value">
          {data.rocket.first_stage.cores[0].land_success ? ` ${data.rocket.first_stage.cores[0].land_success}` : " false"}
        </span>
      </div>
    </div>
  );
}

export default Card;
