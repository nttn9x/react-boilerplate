import React from "react";

import "./loader.scss";

const Circular: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__body">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </div>
    </div>
  );
};

export default Circular;
