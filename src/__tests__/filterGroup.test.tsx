
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {FilterGroup} from "../components/FilterGroup/FilterGroup.tsx";

describe("FilterGroup", () => {
  it("renders correctly", () => {
    const values = ["Option 1", "Option 2"];
    render(<FilterGroup values={values} onClick={() => {}}/>);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("renders the correct number of buttons", () => {
    const values = ["Option 1", "Option 2", "Option 3"];
    render(<FilterGroup values={values} onClick={() => {}}/>);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(values.length);
  });

  it("calls onClick when a button is clicked", () => {
    const values = ["Option 1"];
    const handleClick = jest.fn();
    render(<FilterGroup values={values} onClick={handleClick}/>);
    fireEvent.click(screen.getByText("Option 1"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});