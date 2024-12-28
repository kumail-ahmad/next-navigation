import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get current directory and file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an ESLint config compat object
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the default Next.js ESLint configuration
const eslintConfig = {
  extends: [
    ...compat.extends("next/core-web-vitals"),
    // Add other custom ESLint rules or configurations here if needed
  ],
  parserOptions: {
    // Add additional parser options if needed (e.g., TypeScript, React JSX)
  },
  rules: {
    // Add or override specific rules if needed
    // For example:
    // "react/react-in-jsx-scope": "off",  // Disable unnecessary rule
  },
};

export default eslintConfig;
