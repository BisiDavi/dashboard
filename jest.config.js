module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
        "!**/public/**",
        "!**/json/**",
        "!**/coverage/**",
        "!**/.next/**",
        "!**/styles/**",
        "!**/types/**",
        "!jest.config.js",
        "!next.config.js",
        "!wobb-landingpage/**",
    ],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

        // Handle CSS imports (without CSS modules)
        "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/__mocks__/fileMock.js`,

        // Handle module aliases
        "^@components/(.*)$": "<rootDir>/components/$1",
        "^@styles/(.*)$": "<rootDir>/styles/$1",
        "^@json/(.*)$": "<rootDir>/json/$1",
        "^@hooks/(.*)$": "<rootDir>/hooks/$1",
        "^@store/(.*)$": "<rootDir>/store/$1",
        "^@utils/(.*)$": "<rootDir>/utils/$1",
        "^@api/(.*)$": "<rootDir>/axiosInstances/$1",
        "^@types/(.*)$": "<rootDir>/types/$1",
        "^@layouts/(.*)$": "<rootDir>/layouts/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
        "/.next/",
        "/coverage/",
        "/json/",
        "/public/",
    ],
    testEnvironment: "jsdom",
};
