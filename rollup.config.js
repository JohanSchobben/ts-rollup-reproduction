import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/main.ts",
    output: {
        file: `dist/main.esm.js`,
        format: "esm",
    },
    plugins: [
        typescript({
            tsconfig: "tsconfig.json",
            module: "esnext"
        }),
    ]
}