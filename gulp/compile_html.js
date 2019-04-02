import process from "child_process";

export function compileHtml() {
    return process.spawn("npx", ["eleventy", "--quiet"], { stdio: "inherit" });
}