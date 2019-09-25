module.exports = {
    "testEnvironment": "node",
    "preset": "ts-jest",
    "globals": {
        "__LINK_PREFIX__": "",
        "__PREFIX_LINKS__": ""
    },
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js",
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
    },
    "testMatch": [
        "<rootDir>/__tests__/**/?(*.)(spec|test).(j|t)s?(x)",
        "<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)"
    ],
    testPathIgnorePatterns: ["node_modules", ".cache", "public", "cypress"],
    transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFiles: ["<rootDir>/loadershim.js"],
    testURL: "http://localhost",
}