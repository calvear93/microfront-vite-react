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

-   Install [NodeJS](https://nodejs.org/es/).
-   Install [PNPM](https://pnpm.io/installation)
-   Execute `pnpm install` command.
-   Run either `pnpm dev` or `pnpm test` commands.

## 🧪 **Executing**

| Command                     | Action                           |
| --------------------------- | -------------------------------- |
| pnpm dev                    | test microfronts                 |
| pnpm apps:container `<cmd>` | executes a container app command |
| pnpm apps:home `<cmd>`      | executes a home app command      |
| pnpm test                   | executes tests                   |
