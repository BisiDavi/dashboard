/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Input from "@components/formElements/Input";

describe("Test the Input component", () => {
    const inputContent = {
        name: "email",
        type: "email",
        label: "User Email",
        placeholder: "johndoe@gmail.com",
    };
    const values = {
        email: "",
    };

    it("ensure valid input", () => {
        expect(render(<Input values={values} input={inputContent} />))
            .toBeTruthy;
    });

    it("Input component snapshot testing", () => {
        expect(
            render(<Input values={values} input={inputContent} />),
        ).toMatchSnapshot();
    });
});
