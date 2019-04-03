import gulp from "gulp";
import sass from "gulp-sass";
import paths from "./paths.js";

export default function compileCss() {
    return gulp.src(paths.css.src)
               .pipe(sass({ outputStyle: "compressed" })
               .on("error", sass.logError))
               .pipe(gulp.dest(paths.css.dest));
};