# Stencil & socket.io

Trying to get Stenciljs and socket.io to work in a perfect harmony.

Had to create a file: node_modules/@stencil/core/dist/sys/src/empty.js to get it to work with stencil 0.15.2

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-starter.git my-app
cd my-app
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
