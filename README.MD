[![CI testing](https://github.com/Meyclem/typescript-boilerplate/actions/workflows/test.yml/badge.svg)](https://github.com/Meyclem/typescript-boilerplate/actions/workflows/test.yml)

# [starter] TypeScript NodeJS

This is a bare simple TS boilerplate. Feel free to clone it and use it as you want.
You can also click on the `Use this template` button to create a new repo with the same structure.

In any case, feel free to use it as you want 😁👍

## Usage

### Installation

This boilerplate uses:

- node `22.19.0`.
- npm (comes with Node.js)

In case you don't have them install, you can
- use [asdf](https://asdf-vm.com/guide/getting-started.html#_2-download-asdf) which will install the right versions based on the `.tool-versions` file.
- head to the [nodejs](https://nodejs.org/en/download/) website to install it manually (npm comes bundled with Node.js).

### Code sample

The repo has some files that should be removed or changed at cloning time:

- [.github/dependabot.yml](.github/dependabot.yml)
- [.github/worflows](.github/worflows)
- [CODEOWNERS](CODEOWNERS)
- [LICENSE](LICENSE)

### Local development
```bash
npm run dev
```

### Build

```bash
npm run build
```

### Start

```bash
npm start
```

### Lint

You can use eslint to help you format your code.

```bash
npm run lint
```

### Tests

🔎 The only test is there to be sure the code runs in CI without issue due to possible failed dependancy update.

```bash
npm run test
```
