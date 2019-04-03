import gulp from "gulp";
import process from "child_process";
import { watchCss, watchJs } from "./watch.js";

const serveAndWatchHtml = () => process.spawn("eleventy", ["--serve"], { stdio: "inherit" });

export default function serve(done) {
    return gulp.parallel(
        serveAndWatchHtml,
        watchCss,
        watchJs
    )(done);
};