import React, { useState } from "react";
import data from "./data.json";
import "./Physical.css"; // Import the CSS file for styling the buttons

const Physical = () => {
  const [selectedButtonValues, setSelectedButtonValues] = useState(new Set());
  const totalItems = data.length;
  const itemsPerPage = 9;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(itemsPerPage);

  const handleClick = (key, value) => {
    console.log(selectedButtonValues);
    const newSelectedButtonValues = new Set(selectedButtonValues);
    if (selectedButtonValues.has(value)) {
      newSelectedButtonValues.delete(value);
    } else {
      newSelectedButtonValues.add(value);
    }
    setSelectedButtonValues(newSelectedButtonValues);
  };
   
  // const handleClick1 = (move) => {};

  const createButtons = (item) => {
    const buttons = [];
    //-------------------------------------------------------------------------------------------------
    // let count = 0;
    const count = (item) => {
      return Object.keys(item).filter((key) => key.startsWith("Physical signs"))
        .length;
    };
    for (let i = 1; i <= count(item); i++) {
      //-------------------------------------------------------------------------------------------------
      const key = `Physical signs${i}`;
      const value = item[key];
      if (value) {
        buttons.push(
          <button
            key={key}
            onClick={() => handleClick(key, value)}
            className={selectedButtonValues.has(value) ? "selected" : ""}
          >
            {value}
          </button>
        );
      }
    }
    return buttons;
  };

  const handleNext = () => {
    if (end < totalItems) {
      setStart(start + itemsPerPage);
      setEnd(end + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (start > 0) {
      setStart(start - itemsPerPage);
      setEnd(end - itemsPerPage);
    }
  };

  const renderData = data.slice(start, end).map((item, index) => {
    if (item["Neuraxis Level"]) {
      return (
        <div key={index}>
          <h2>{item["Neuraxis Level"]}</h2>
          {createButtons(item)}
        </div>
      );
    } else if (item["Neuraxis sublevel"]) {
      return (
        <div key={index}>
          <h3>{item["Neuraxis sublevel"]}</h3>
          {createButtons(item)}
        </div>
      );
    }
    return null;
  });

  return (
    <div>
      {renderData}
      <br></br>
      <button onClick={handlePrev} disabled={start === 0}>
        Prev
      </button>
      <button onClick={handleNext} disabled={end >= totalItems}>
        Next
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Physical;