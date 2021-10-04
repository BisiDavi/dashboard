import { render } from "@testing-library/react";
import displayIcons from "@utils/displayIcons";

describe("displayIcons is meant to render an icon ", () => {
    it("to render available icon like  add icon", () => {
        expect(render(displayIcons("add"))).toBeTruthy();
    });

    it("not available icon, like dollar icon should be null", () => {
        expect(render(displayIcons("dollar"))).toBeNull;
    });
});
