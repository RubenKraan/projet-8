import React from "react";


const Header = ({ kasa }) => {
  return (
    <div className="header">
      <div className="kasaInfo">
        <h3>
          {kasa.title}
          <br />
          <span className="location"><a href = {kasa.location}>{kasa.nomprojet}</a></span>
        </h3>

        <span className="tagBtnContainer">
          {" "}
          {kasa.tags.map((tag, index) => (
            <span key={index} className="tagBtn">
              {tag}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Header;
