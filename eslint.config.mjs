// import { defineConfig, globalIgnores } from "eslint/config";
// import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
// import react from "eslint-plugin-react";
// import unusedImports from "eslint-plugin-unused-imports";
// import _import from "eslint-plugin-import";
// import typescriptEslint from "@typescript-eslint/eslint-plugin";
// import jsxA11Y from "eslint-plugin-jsx-a11y";
// import prettier from "eslint-plugin-prettier";
// import globals from "globals";
// import tsParser from "@typescript-eslint/parser";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

// export default defineConfig([globalIgnores([
//     ".now/*",
//     "**/*.css",
//     "**/.changeset",
//     "**/dist",
//     "esm/*",
//     "public/*",
//     "tests/*",
//     "scripts/*",
//     "**/*.config.js",
//     "**/.DS_Store",
//     "**/node_modules",
//     "**/coverage",
//     "**/.next",
//     "**/build",
//     "!**/.commitlintrc.cjs",
//     "!**/.lintstagedrc.cjs",
//     "!**/jest.config.js",
//     "!**/plopfile.js",
//     "!**/react-shim.js",
//     "!**/tsup.config.ts",
// ]), {
//     extends: fixupConfigRules(compat.extends(
//         "plugin:react/recommended",
//         "plugin:prettier/recommended",
//         "plugin:react-hooks/recommended",
//         "plugin:jsx-a11y/recommended",
//         "plugin:@next/next/recommended",
//     )),

//     plugins: {
//         react: fixupPluginRules(react),
//         "unused-imports": unusedImports,
//         import: fixupPluginRules(_import),
//         "@typescript-eslint": typescriptEslint,
//         "jsx-a11y": fixupPluginRules(jsxA11Y),
//         prettier: fixupPluginRules(prettier),
//     },

//     languageOptions: {
//         globals: {
//             ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, "off"])),
//             ...globals.node,
//         },

//         parser: tsParser,
//         ecmaVersion: 12,
//         sourceType: "module",

//         parserOptions: {
//             ecmaFeatures: {
//                 jsx: true,
//             },
//         },
//     },

//     settings: {
//         react: {
//             version: "detect",
//         },
//     },

//     files: ["**/*.ts", "**/*.tsx"],

//     rules: {
//         "no-console": "warn",
//         "react/prop-types": "off",
//         "react/jsx-uses-react": "off",
//         "react/react-in-jsx-scope": "off",
//         "react-hooks/exhaustive-deps": "off",
//         "jsx-a11y/click-events-have-key-events": "warn",
//         "jsx-a11y/interactive-supports-focus": "warn",
//         "prettier/prettier": "warn",
//         "no-unused-vars": "off",
//         "unused-imports/no-unused-vars": "off",
//         "unused-imports/no-unused-imports": "warn",

//         "@typescript-eslint/no-unused-vars": ["warn", {
//             args: "after-used",
//             ignoreRestSiblings: false,
//             argsIgnorePattern: "^_.*?$",
//         }],

//         "import/order": ["warn", {
//             groups: [
//                 "type",
//                 "builtin",
//                 "object",
//                 "external",
//                 "internal",
//                 "parent",
//                 "sibling",
//                 "index",
//             ],

//             pathGroups: [{
//                 pattern: "~/**",
//                 group: "external",
//                 position: "after",
//             }],

//             "newlines-between": "always",
//         }],

//         "react/self-closing-comp": "warn",

//         "react/jsx-sort-props": ["warn", {
//             callbacksLast: true,
//             shorthandFirst: true,
//             noSortAlphabetically: false,
//             reservedFirst: true,
//         }],

//         "padding-line-between-statements": ["warn", {
//             blankLine: "always",
//             prev: "*",
//             next: "return",
//         }, {
//             blankLine: "always",
//             prev: ["const", "let", "var"],
//             next: "*",
//         }, {
//             blankLine: "any",
//             prev: ["const", "let", "var"],
//             next: ["const", "let", "var"],
//         }],
//     },
// }]);

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'unused-imports': unusedImports,
      '@typescript-eslint': typescriptEslintPlugin,
    },
  },
  {
    languageOptions: {
      parser: typescriptEslintParser,
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.js',
      '**/*.jsx',
      '**/*.mts',
      '**/*.mjs',
    ],
    rules: {
      'no-console': 'warn',
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/array-type': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            // React imports first
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-**',
              group: 'external',
              position: 'before',
            },
            // External packages with @ prefix (but not @/)
            {
              pattern: '@*/**',
              group: 'external',
              position: 'after',
            },
            // Internal imports with @/ prefix
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            // Relative imports last
            {
              pattern: './**',
              group: 'sibling',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react-**'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    ignores: ['node_modules/', '.next', 'build', 'out'],
  },
];

export default eslintConfig;
