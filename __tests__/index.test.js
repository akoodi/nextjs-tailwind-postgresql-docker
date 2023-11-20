import { render, screen, resolvedComponent } from "@testing-library/react";
import Home from "../src/app/page";
import RootLayout from "../src/app/layout";
import Footer from "../src/components/Footer";
import "@testing-library/jest-dom";
import { ReactNode, createElement } from "react";

describe("Home", () => {
	it("Testing Home", async () => {
		const children = createElement("h1", { className: "greeting" }, "Hello");

		render(<Home>{children}</Home> );
    
    expect(screen.getByRole("heading")).toBeInTheDocument();
    
	});
});
