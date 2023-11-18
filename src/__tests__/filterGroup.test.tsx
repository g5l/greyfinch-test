import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {FilterGroup} from "../components/FilterGroup/FilterGroup.tsx";

describe("FilterGroup", () => {
  const values = ["Option 1", "Option 2", "Option 3"];
  const mockClick = jest.fn();

  beforeEach(() => {
    render(<FilterGroup values={values} onClick={mockClick}/>);
  });

  it("renders correctly", () => {
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("renders the correct number of buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(values.length);
  });

  it("calls onClick when a button is clicked", () => {
    fireEvent.click(screen.getByText("Option 1"));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});