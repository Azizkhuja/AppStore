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
import PopularTable from "../components/Popular/PopularTable";
import News from "../components/News";
import ChunkNews from "../components/News/ChunkNews";
import Footer from "../components/Footer";

describe("should get home page and nested components", () => {
  it("should get navbar title", () => {
    render(<Navbar />);
    const getTitle = screen.getByText(/app store/i);
    expect(getTitle).toBeInTheDocument();
  });
  it("should get navbar hamburger menu", () => {
    render(<Navbar />);
    const getTitle = screen.getByTestId("MenuIcon");
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

  it("should get main page of card news component", () => {
    render(<News />);
    const cardNews = screen.getByRole("heading", {
      name: /latest guides, comparisons and news about apps/i,
    });
    expect(cardNews).toBeInTheDocument();
  });

  it("should get main page of table", () => {
    render(<PopularTable />);
    const table = screen.getByTestId("table-container");
    expect(table).toBeInTheDocument();
  });

  it("should get main page of chunk news card", () => {
    render(<ChunkNews />);
    const chunkNewsCard = screen.getByTestId("chunk-card");
    expect(chunkNewsCard).toBeInTheDocument();
  });

  it("should get main page of footer logo", () => {
    render(<Footer />);
    const footerLogo = screen.getByTestId("ArchitectureTwoToneIcon");
    expect(footerLogo).toBeInTheDocument();
  });

  it("should get main page of footer item container", () => {
    render(<Footer />);
    const footerItemContainer =
      screen.getByTestId("footer-list").children.length;
    expect(footerItemContainer).toBe(6);
  });

  it("should get main page of footer social icons", () => {
    render(<Footer />);
    const footerSocials = screen.getByTestId("footer-list-container").children
      .length;
    expect(footerSocials).toBe(4);
  });

  it("should get main page of footer year", () => {
    render(<Footer />);
    const footerYear = screen.getByTestId("footer-year");
    expect(footerYear).toBeInTheDocument;
  });
});
