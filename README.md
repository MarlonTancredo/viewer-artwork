# [Viewer Artwork](https://viewer-artwork.netlify.app/) - React - TypeScript - Vite

## Step by Step to run this project locally.

-   Download git by clicking here: [Git](https://git-scm.com/download/win) and follow the steps for installation.

-   Install Node following the steps by clicking here: [NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

-   Install Yarn package manager following the steps by clicking here: [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

-   Once Git, Node and Yarn package manager has been installed open your terminal and run the command `git clone https://github.com/MarlonTancredo/viewer-artwork.git` to clone this repository.

-   Go inside the project folder and install the project dependencies running `yarn` command.

-   After all dependencies has been installed run the command `yarn dev` to run the project locally.

## API

-   This project consume data from `Cleveland Art API` to render the cards and components.

-   Link to the api documentation used to build this project: [Cleveland Art](https://openaccess-api.clevelandart.org/)

## Where this project is hosted?

-   This project it's hosted on Netlify using a free plan and it can be accessed by clicking here: [viewer-artwork.netlify.app](https://viewer-artwork.netlify.app/)

-   For more information about netlify click here: [Netlify](https://docs.netlify.com/)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
