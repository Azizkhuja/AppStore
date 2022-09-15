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
import Features from "../components/Features";
import Partners from "../components/Main/Partners";
import Popular from "../components/Popular";

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
    const heroImage = screen.getByTestId("hero-image");
    expect(heroImage).toBeInTheDocument();
  });

  it("should get main page of hero search input", () => {
    render(<Navbar />);
    const searchInput = screen.getByRole("textbox", { name: /search/i });
    expect(searchInput).toBeInTheDocument();
  });

  it("should get main page of hero subheadline", () => {
    render(<Features />);
    const featuresHeadingTitle = screen.getByRole("heading", {
      name: /start saving money/i,
    });
    expect(featuresHeadingTitle).toBeInTheDocument();
  });

  it("should get main page of hero subheadline", () => {
    render(<Features />);
    const featuresHeading = screen.getByRole("heading", {
      name: /find better deals across 100\+ categories/i,
    });
    expect(featuresHeading).toBeInTheDocument();
  });

  it("should get main page partners container", () => {
    render(<Partners />);
    const partnersContainer =
      screen.getByTestId("partners-container").children.length;
    expect(partnersContainer).toBe(6);
  });

  it("should get main page partners container", () => {
    render(<Popular />);
    const getPopularHeading = screen.getByRole("heading", {
      name: /the most popular apps of the decade/i,
    });
    expect(getPopularHeading).toBeInTheDocument();
  });

  it("should get main page android top apps", () => {
    render(<Popular />);
    const getPopularHeading = screen.getByRole("heading", {
      name: /top apps on android platform/i,
    });
    expect(getPopularHeading).toBeInTheDocument();
  });

  it("should get main page ios top apps", () => {
    render(<Popular />);
    const getPopularHeading = screen.getByRole("heading", {
      name: /top apps on ios platform/i,
    });
    expect(getPopularHeading).toBeInTheDocument();
  });
});
