import { render } from "@testing-library/react";
import NewsLoader from "@components/NewsLoader";

describe("Testing the NewsLoader Component", () => {
    it("NewsLoader Snapshot testing", () => {
        expect(render(<NewsLoader />)).toMatchSnapshot();
    });
});
