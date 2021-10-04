/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Logo from "@components/Logo";

describe("Test the Logo component", () => {
    it("Logo component snapshot testing", () => {
        expect(render(<Logo />)).toMatchSnapshot();
    });

    it("expect logo to have text 'office dashboard'", () => {
        const logoTextElement = render(<Logo />).getByTestId("logo-text");
        expect(logoTextElement).toHaveTextContent("Office Dashboard");
    });
});
