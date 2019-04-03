import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import paths from "./paths.js";

export default function compileJs() {
    return gulp.src(paths.js.src, { sourcemaps: true })
               .pipe(babel())
               .pipe(uglify())
               .pipe(concat('main.min.js'))
               .pipe(gulp.dest(paths.js.dest));
}