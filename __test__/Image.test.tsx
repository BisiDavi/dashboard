import { render } from "@testing-library/react";
import Image from "next/image";

describe("Test the Header component", () => {
    it("Header component snapshot testing", () => {
        expect(
            render(
                <Image
                    src="https://source.unsplash.com/800x600/?nature,water"
                    height="200"
                    width="200px"
                    alt="nature"
                />,
            ),
        ).toMatchSnapshot();
    });
});
