# lwc-ossphone-updater

Phone Updater for Heroku Connect with LWC OSS.

## Dev Notes

The source files are located in the [`src`](./src) folder. All web components are within the [`src/client/modules`](./src/modules) folder. The folder hierarchy also represents the naming structure of the web components. The entry file for the custom Express configuration can be found in the ['src/server'](./src/server) folder.

## Deploy Locally

1. Install the project dependencies using `yarn`

```sh
yarn install
```

1. Start the app in watch mode.

```sh
yarn watch
```

## Deploy to Heroku

If you want to deploy to Heroku - there's a button for that.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
