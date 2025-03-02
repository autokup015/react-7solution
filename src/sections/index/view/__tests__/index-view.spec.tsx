import { render, screen } from "@testing-library/react";
import IndexView from "../index-view";

// ---------------------------------------------------------------------------------

describe("<IndexView />", () => {
  it("should render IndexView page", () => {
    render(<IndexView />);

    expect(screen.getByText("Welcome to my assignment")).toBeInTheDocument();
  });
});
