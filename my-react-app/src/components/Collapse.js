import React, { useState, useRef, useEffect } from "react";
import chevronUp from "../assets/icon/chevron-up-solid.svg";
import chevronDown from "../assets/icon/chevron-down-solid.svg";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);
  const collapseRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({
        top: collapseRef.current.offsetTop,
        behavior: "smooth"
      });
    }
  }, [isOpen]);

  return (
    <div className="collapse" ref={collapseRef}>
      <div className="collapse-title" onClick={toggleCollapse}>
        <h3>{props.title}</h3>
        {isOpen ? (
          <img src={chevronUp} alt="chevron up" />
        ) : (
          <img src={chevronDown} alt="chevron down" />
        )}
      </div>
      {isOpen && <div className="collapse-content">{props.children}</div>}
    </div>
  );
}

export default Collapse;
