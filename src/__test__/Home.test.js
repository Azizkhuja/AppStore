import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "../components/Navbar";

describe("Should test Home page and nested components", () => {
  it("should get Navbar title", () => {
    render(<Navbar />);
    const elTest = screen.getByText(/app store/i);
    expect(elTest).toBeInTheDocument();
  });
});
