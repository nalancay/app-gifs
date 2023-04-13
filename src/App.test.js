import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Test", () => {
  test("renders learn react link", async () => {
    render(<App />);
    const title = await screen.findByText(/Última búsqueda/i);
    expect(title).toBeInTheDocument();
  });

  test.skip("search form could be used", async () => {
    render(<App />);
    const input = await screen.findByRole("textbox");
    const button = await screen.findByRole("button");

    fireEvent.change(input, { target: { value: "matrix" } });
    fireEvent.click(button);

    const title = await screen.findByText("Resultado de tu busqueda: matrix");
    expect(title).toBeVisible();
  });
});
