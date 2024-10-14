const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurnownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurnownService();

  // 1. Convert markdown to HTML
  const convertedHtml = marked.parse(markdownContent);

  // 2. Sanitize HTML
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });

  // 3. Convert HTML to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
