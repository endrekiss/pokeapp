module.exports = {
    setupFiles: ['./tests/setup.ts'],
    "moduleFileExtensions": [
        "js",
        "json",
        "vue",
        "ts"
    ],
    "moduleDirectories": [
        "node_modules",
        "src"
    ],
    "transform": {
        ".*\\.(vue)$": "vue-jest"
    },
    "transformIgnorePatterns": [
        "/node_modules/"
    ],
    "preset": "@vue/cli-plugin-unit-jest/presets/typescript-and-babel"
}
