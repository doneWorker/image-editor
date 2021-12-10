import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders DropZone label", () => {
  render(<App />);
  const linkElement = screen.getByText(/Please drop your image here/i);
  expect(linkElement).toBeInTheDocument();
});
