export default function eleventyConfig(config) {
  config.addPassthroughCopy({ "src/assets": "assets" });
  config.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });
  config.addFilter("committeeInitials", (name) => {
    if (!name) {
      return "";
    }

    const parts = name
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part.replace(/[^\p{L}]/gu, ""))
      .filter(Boolean);

    return parts
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
