// eslint.config.js
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    // ESLint 9 flat config does not read .eslintignore.
    ignores: [
      'dist',
      'playground',
      '**/*.md',
    ],
  },
  {
    // @antfu/eslint-config v9 turns this on and wants `trustPolicy: no-downgrade`,
    // which pnpm 12 then enforces. The current lockfile fails that check
    // (semver, undici-types). Leave the policy at pnpm's unset default.
    rules: {
      'pnpm/yaml-enforce-settings': 'off',
    },
  },
)
