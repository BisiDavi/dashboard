import { render } from "@testing-library/react";
import AppModal from "@components/Modal";

describe("Test the AppModal component", () => {
    it("AppModal component snapshot testing", () => {
        expect(
            render(
                <AppModal open={true} handleClose={() => {}}>
                    <h1>A simple modal</h1>
                </AppModal>,
            ),
        ).toMatchSnapshot();
    });
});
