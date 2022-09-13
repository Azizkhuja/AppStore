import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "../components/Navbar";

it("test", () => {
  render(<Navbar />);
  const elTest = screen.getByText(/App Store/i);
  expect(elTest).toBeInTheDocument();
});
