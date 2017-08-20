# b-microservice-boilerplate

## Description
This project shows how we will implement microservices.
There are three isolated services:

 - [basenode](base/)
 - [service](service/)
 - [client](client/)

### Tech Stack and keywords

 - Node.JS
 - Seneca
 - Express
 - Mocha
 - Chai
 - Yarn
 - Makefiles

### Requeriments
 - nodejs
 - build-essentials
 - yarn (optional)

## Isolated environments
All the three services have the same way to initialize.

### Dependencies
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

### Development environment

```bash
$ npm run dev
```

### Production environment

```bash
$ npm run production
```
## Testing
The microservice called _service_ has tests, in order to execute them you:

```bash
$ cd service
$ npm test
```

## Documentation

Generate and actualize documentation with:
```bash
npm run generate-docs
```
