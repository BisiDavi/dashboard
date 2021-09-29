/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Input from "../components/formElements/Input";

describe("Test the Input component", () => {
    it("ensure valid input", () => {
        const inputContent = {
            name: "email",
            type: "email",
            label: "User Email",
            placeholder: "johndoe@gmail.com",
        };
        const values = {
            email: "",
        };
        render(<Input values={values} input={inputContent} />);
    });
});
