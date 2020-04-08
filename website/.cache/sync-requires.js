const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("C:\\Users\\Stamati\\Developer\\v1\\website\\src\\templates\\blogTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\Stamati\\Developer\\v1\\website\\.cache\\dev-404-page.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\Stamati\\Developer\\v1\\website\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Stamati\\Developer\\v1\\website\\src\\pages\\index.js")))
}

