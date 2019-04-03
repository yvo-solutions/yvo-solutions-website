import gulp from "gulp";
import clean from "./clean.js";
import compileHtml from "./compile_html.js";
import compileJs from "./compile_js.js";
import compileCss from "./compile_css.js";

export default function compile(done) {
    return gulp.series(
        clean,
        gulp.parallel(compileHtml, compileCss, compileJs)
    )(done);
};