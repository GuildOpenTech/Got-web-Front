import { fireEvent, render, screen } from "@testing-library/react";
import TopSection from "./TopSection";
import { SHAKE } from "../../../core/animations";

describe("TopSection", () => {
    const BUTTON_ID = "ctaButton";
    let button: HTMLElement;
    beforeEach(() => {
        render(<TopSection />);
        button = screen.getByTestId(BUTTON_ID);
    });

    test("When click button, go to /inscription route", async () => {
        expect(button).toBeInTheDocument();
    });

    test("Button shake on hover", async () => {
        const animationName = SHAKE.name;

        fireEvent.mouseOver(button);

        const animation = getComputedStyle(button).animation;
        expect(animation.includes(animationName)).toBe(true);
    });
});