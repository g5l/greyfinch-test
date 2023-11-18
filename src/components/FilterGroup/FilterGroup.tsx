import React from "react";
import "./styles.css";

export interface PropsFilterGroup {
  values: string[],
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const FilterGroup = (props: PropsFilterGroup) => {
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