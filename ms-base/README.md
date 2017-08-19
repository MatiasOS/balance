# seneca-base

## Description
Basenode microservice. The default port is __39999__

### Tech Stack and keywords

 - Node.JS
 - Seneca
 - Yarn
 - Makefiles

## Requeriments
 - nodejs >= v7.9.0
 - build-essentials
 - yarn (optional)

## Setup
Install correct node version

```bash
nvm install # .nvmrc is used to specify node version
nvm use
```

## Dependencies
The dependencies can be installed with `npm` or `yarn`.
Using `yarn` you will have access to the exact versions we used by default (and other benefits like parallel download)

#### Using npm
```bash
$ npm install
```
#### Using yarn
```bash
$ yarn install
```

## Environments

### Development environment

_In order to start a development stage you must copy `.seneca-base-sample-env` to `.env` and fill SENECA_BASE_HOST field._

```bash
$ npm run dev
```

### Production environment

```bash
$ npm run production
```
