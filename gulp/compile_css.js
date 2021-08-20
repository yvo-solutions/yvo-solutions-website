import gulp from "gulp";
const sass = require('gulp-sass')(require('sass')); 
import paths from "./paths.js";

export default function compileCss() {
    return gulp.src(paths.css.src)
               .pipe(sass({ outputStyle: "compressed" })
               .on("error", sass.logError))
               .pipe(gulp.dest(paths.css.dest));
};