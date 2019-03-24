import process from "child_process";

export function buildHtml() {
    return process.spawn("npx", ["eleventy", "--quiet"], { stdio: "inherit" });
}