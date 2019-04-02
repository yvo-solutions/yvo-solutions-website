import sass from "gulp-sass";

gulp.task("scss", () => {
    return gulp.src("./src/scss/*.scss")
               .pipe(sass({ outputStyle: "compressed" })
               .on("error", sass.logError))
               .pipe(gulp.dest("./build/css"));
});