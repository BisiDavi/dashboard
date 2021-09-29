/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import displayIcons from "@utils/displayIcons";

describe("displayIcons is meant to render Icon ", () => {
    it("ensure valid input", () => {
      
        render(displayIcons("add"));
    });
});
