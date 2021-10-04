import { render } from "@testing-library/react";
import Loader from "@components/Loader";

describe("Test the Loader component", () => {
    it("Loader component snapshot testing", () => {
        expect(render(<Loader />)).toMatchSnapshot();
    });
});
