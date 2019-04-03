const src = "./src/";
const dest = "./build/";

const paths = {
    src: src,
    dest: dest,
    layouts: src + "includes/layouts/**",
    html: {
        src: src + "**/*.md",
        dest: dest
    },
    css: {
        src: src + "scss/**/*.scss",
        dest: dest + "css"
    },
    js: {
        src: src + "js/**/*.js",
        dest: dest + "js"
    }
};

export default paths;