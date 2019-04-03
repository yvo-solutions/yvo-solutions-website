import gulp from "gulp";
import compileHtml from "./compile_html.js";
import compileJs from "./compile_js.js";
import compileCss from "./compile_css.js";
import paths from "./paths.js";

const watchJs = () => gulp.watch(paths.js.src, compileJs);

const watchCss = () => gulp.watch(paths.css.src, compileCss);

const watchHtml = () => gulp.watch(
        [
            paths.html.src,
            paths.layouts,
            "./.eleventy.js",
            "./.eleventyignore"
        ],
        compileHtml
);

export { watchJs, watchCss, watchHtml };

export default function watch(done) {
    return gulp.parallel(
        watchHtml,
        watchCss,
        watchJs
    )(done);
};