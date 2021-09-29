/**
 * @jest-environment jsdom
 */

 import { render } from "@testing-library/react";
 import HeadlineLoader from "@components/HeadlineLoader";

 describe("Testing the HeadlineLoader Component", () => {
		 it("HeadlineLoader Snapshot testing", () => {
				 expect(render(<HeadlineLoader count={6} />)).toMatchSnapshot();
		 });
 });
