module.exports = function (config) {
    return {
        templateFormats: [
            "md",
            "njk",
            "js",
            "css",
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