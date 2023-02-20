<h2 align="center"><b>Vite React Skeleton</b></h2>
<h3 align="center"><b>Microfrontend with Module Federation</b></h3>

<br />

<p align="center">
  <a href="https://reactjs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="220" alt="React Logo" /></a>
</p>

<p align="center">
  Monorepo Vite for React Microfrontends using Module Federation.
</p>

<p align="center">
  <a href="https://github.com/calvear93/react-template" target="_blank">
	<img src="https://img.shields.io/github/license/calvear93/react-template" alt="Package License" />
  </a>
</p>

## ✒ **Description**

<a href="https://reactjs.org/" target="_blank">React</a> is a library for
building semantic components in a very easy way. It uses modern JavaScript, and supports <a
href="http://www.typescriptlang.org" target="_blank">TypeScript</a>, and under
the hood this skeleton uses <a href="https://vitejs.dev/"
target="_blank">Vite</a>.

## ⛩ **Structure**

```bash
├── README.md
├── env/
│   └── appsettings.json
├── src/
│   ├── apps/
│   │   ├── container/
│   │   └── home/
│   ├── libs/
│   │   └── ui/
│   └── shared/
│       ├── store/
│       └── ui/
├── tsconfig.json
├── pnpm-workspace.yaml # monorepo packages config
└── package.json
```

## 📥 **Getting Started**

-   Replace globally these terms:

    -   `(((base-path)))` web base path, i.e. web (for get /web/\*)
    -   `(((app-name)))` app name, i.e. home-web
    -   `(((app-title)))` app title, i.e. Sample API
    -   `(((project-name)))` project name, i.e. my-project
    -   `(((project-description)))` project description, i.e. API for manage user data

*   Set up your `dev.local.env.json` in `env` folder with:

```json
{
	"BASE_URL": "/"
}
```

-   Install [NodeJS](https://nodejs.org/es/).
-   Install [PNPM](https://pnpm.io/installation)
-   Execute `pnpm install` command.
-   Run either `pnpm dev` or `pnpm test` commands.

## 📋 **Branches and Environments**

Project has 2 environments.

-   **dev (development)**: environment with breaking changes and new features.
-   **release (production)**: release environment.

## 🧪 **Executing**

Project uses **npm scripts** for eases execution, testing and building.
Many of these script run on a defined environment, specified after ':', and
it environment may be 'dev' or 'release'.

| Command                     | Action                           |
| --------------------------- | -------------------------------- |
| pnpm dev                    | test microfronts                 |
| pnpm apps:container `<cmd>` | executes a container app command |
| pnpm apps:home `<cmd>`      | executes a home app command      |
| pnpm test                   | executes tests                   |
| pnpm test --coverage        | executes tests with coverage     |
| pnpm lint                   | code format review               |
| pnpm lint --fix             | code format review/fix           |

## 🧿 **Linting**

Project use linters, for code formatting and code styling normalizing.

-   **[eslint](https://eslint.org/)**: tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
-   **[prettier](https://prettier.io/)**: opinionated code formatter

For correct interpretation of linters, is recommended to use [Visual Studio Code](https://code.visualstudio.com/) as IDE and install the plugins in .vscode folder at 'extensions.json'.

---

⌨ by Alvear Candia, Cristopher Alejandro <calvear93@gmail.com>
