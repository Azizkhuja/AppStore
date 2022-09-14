import {
  render,
  screen,
  getByTestId,
  getByRole,
  getByText,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Main/Hero";

describe("should get home page and nested components", () => {
  it("should get navbar title", () => {
    render(<Navbar />);
    const getTitle = screen.getByText(/app store/i);
    expect(getTitle).toBeInTheDocument();
  });

  it("should get main page of headline", () => {
    render(<Hero />);
    const getMainText = screen.getByText(/get single application statistics/i);
    expect(getMainText).toBeInTheDocument();
  });

  it("should get main page order list items", () => {
    render(<Hero />);
    const getOrderListItemContainer =
      screen.getByTestId("list-contianer").children.length;
    expect(getOrderListItemContainer).toBe(3);
  });

  it("should get main page of hero image", () => {
    render(<Hero />);
    const elTest = screen.getByTestId("hero-image");
    expect(elTest).toBeInTheDocument();
  });
});
