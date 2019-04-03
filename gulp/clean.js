import gulp from "gulp";
import del from "del";
import paths from "./paths.js";

const cleanDest = () => del([paths.dest]);

export default function clean(done) {
    return gulp.series(
        cleanDest
    )(done);
};