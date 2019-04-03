import process from "child_process";

export default function compileHtml() {
    return process.spawn("eleventy", { stdio: "inherit" });
}