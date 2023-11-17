import React from "react";
import "./styles.css";

interface PropsFilterGroup {
  values: string[],
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const FilterGroup: React.FC = (props: PropsFilterGroup) => {
  return (
    <div className="filterGroup-container">
      {props.values.map((value, index) => (
        <button key={index} value={value} onClick={props.onClick} className="filterGroup-item">
          {value}
        </button>
      ))}
    </div>
  );
};