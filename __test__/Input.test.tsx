import { render } from "react-test-renderer";
import Input from "../components/formElements/Input";

describe("Test the Input component", () => {
    it("ensure valid input", () => {
        const inputContent = {
            name: "email",
            type: "email",
            label: "User Email",
            placeholder: "johndoe@gmail.com",
        };
        render(<Input input={inputContent} />);
				
    });
});
