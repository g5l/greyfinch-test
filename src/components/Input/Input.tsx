import React from "react";
import "./styles.css";

interface PropsInput {
  value: string[],
  placeholder: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const Input: React.FC = (props: PropsInput) => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className="input"
    />
  );
};