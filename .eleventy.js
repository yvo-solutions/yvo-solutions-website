const htmlmin = require("html-minifier");

module.exports = function (config) {
    config.addTransform("htmlmin", function(content, outputPath) {
        if( outputPath.endsWith(".html") ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });

            return minified;
        }

        return content;
    });

    return {
        templateFormats: [
            "md",
            "njk",
            "png",
            "jpg",
            "ico",
            "svg"
        ],
        passthroughFileCopy: true,
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "build",
            includes: "includes"
        }
    };
};