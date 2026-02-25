/** @type {import('stylelint').Config} */
export default {
  rules: {
    "declaration-block-no-duplicate-properties": true, // Prevents copy-paste errors
    "comment-no-empty": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "selector-type-no-unknown": true,
    "color-function-notation": "modern",        // Enforces rgb(0 0 0 / 0.5)
    "color-hex-length": "short",                // Enforces #fff instead of #ffffff
    "import-notation": "string",                // Enforces @import "file.css"
    "declaration-empty-line-before": "never",   // Keeps blocks compact
    "max-nesting-depth": 3,                     // Prevents "CSS Hell" (too much nesting)
  }
};
