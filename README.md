# Yvo.Solutions Website

The [yvo.solutions](https://www.yvo.solutions) website is implemented here.

## Build instructions

### Prerequisites

You need to install:

* [Node.js](https://nodejs.org/),
* [Netlify CLI](https://cli.netlify.com/),
* [Git LFS](https://git-lfs.com).

### Architecture

This website relies on Vite, Bootstrap and Netlify.

### Clone and Run

You can run locally the website by executing the following instructions:

```sh
git lfs install

git clone https://github.com/yvo-solutions/yvo-solutions-website

cd yvo-solutions-website

npm i

npm run start
```

### Build

```sh
npm run build
npm run preview
```

## Deployment

### Staging

```sh
npm run deploy
```

### Production

Please note that deployment to production should be handled by merging a pull request to the `main` branch.

It is also possible to force deployment in production on the command line, if required:

```sh
npm run force_deploy_to_production
```
