[![CI testing](https://github.com/Meyclem/typescript-boilerplate/actions/workflows/test.yml/badge.svg)](https://github.com/Meyclem/typescript-boilerplate/actions/workflows/test.yml)

# TypeScript Boilerplate

This is a bare simple TS boilerplate. Feel free to clone it and use it as you want.

## Dependencies

It comes with some packages pre-installed:

- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [jest](https://jestjs.io/)

## Usage

### Installation

The boilerplate uses:

- node `20.12.2`.
- yarn `1.22.19`
  You can manuall install it or use [asdf](https://github.com/asdf-vm/asdf).

```bash
asdf install
yarn install
```

### Code sample

The repo has some files that should be removed or changed at cloning time:

- [.github/dependabot.yml](.github/dependabot.yml)
- [src/index.ts](src/index.ts)
- [tests/checkup.test.ts](tests/checkup.test.ts)

### Start the main file

```bash
yarn start
```

### Build the JS files

```bash
yarn build
```

### Linter

You can use eslint to help you format your code.

```bash
yarn lint
```

### Tests

🔎 The only test is there to be sure the code runs in CI without issue due to possible failed dependancy update.

```bash
yarn test
```
