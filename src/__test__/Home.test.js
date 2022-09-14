import { render, screen, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Main/Hero";

describe("Should test Home page and nested components", () => {
  it("should get Navbar title", () => {
    render(<Navbar />);
    const elTest = screen.getByText(/app store/i);
    expect(elTest).toBeInTheDocument();
  });

  it("should get main page of headline", () => {
    render(<Hero />);
    const elTest = screen.getByText(/get single application statistics/i);
    expect(elTest).toBeInTheDocument();
  });

  it("should get main page of headline", () => {
    render(<Hero />);
    const elTest = screen.getByTestId("list-contianer").children.length;
    expect(elTest).toBe(3);
  });
});
