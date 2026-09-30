module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                __dirname: "readonly",
                process: "readonly",
                console: "readonly",
                require: "readonly",
                module: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
            "no-undef": "error",
            semi: ["error", "always"],
            quotes: ["error", "double"]
        }
    }
]; 