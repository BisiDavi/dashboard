import { render } from "@testing-library/react";
import CryptoContentLoader from "@components/cryptoContentLoader";

describe("Testing the CryptoContentLoader Component", () => {
    it("CryptoContentLoader Snapshot testing", () => {
        expect(render(<CryptoContentLoader />)).toMatchSnapshot();
    });
});
