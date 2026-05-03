// Single source of truth for the primary font stack.
// Used in inline styles for elements that don't inherit (e.g. <button>).
// NOTE: most elements already inherit from `body { font-family: ... }` in globals.css
// so fontFamily can be omitted from inline styles on standard block/inline elements.
export const FONT = 'var(--font-geologica), system-ui, sans-serif'
