import { getByTestId, render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("render sections", async () => {
    const getSectionByName = (name: string) => screen.getByRole("heading", { level: 2, name });

    render(<App />);
    expect(getSectionByName("Innovons l'informatique, inspirons les talents")).toBeInTheDocument();
    expect(getSectionByName("(Se) Dépasser les obstacles")).toBeInTheDocument();
    expect(getSectionByName("La GOT Âme")).toBeInTheDocument();
    expect(getSectionByName("Projets en cours")).toBeInTheDocument();
    expect(getSectionByName("section 5")).toBeInTheDocument();
    expect(getSectionByName("section 6")).toBeInTheDocument();
    expect(getSectionByName("Ils racontent leur expérience")).toBeInTheDocument();
  });
});