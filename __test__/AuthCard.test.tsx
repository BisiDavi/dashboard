/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import AuthCard from "@components/AuthCard";
import authJson from "@json/auth.json";

describe("Testing the AuthCard Component", () => {
    it("AUthCard Snapshot testing", () => {
        expect(
            render(<AuthCard content={authJson.login}></AuthCard>),
        ).toMatchSnapshot();
    });

    it("testing auth card props 'children'", () => {
        expect(
            render(
                <AuthCard content={authJson.login}>
                    <h1>Login page</h1>
                </AuthCard>,
            ),
        ).toBeTruthy();
    });
});
