# Angular v5 SSR and PWA template

This project is generated using Angular CLI 1.5.0.

The Service worker is generated using workbox.

## Inclusion

* Service Worker
* icons from font-awesome

```
"dependencies": {
  "@angular/platform-server": "^5.0.0"
  "@nguniversal/express-engine": "5.0.0-beta.5"
  "@nguniversal/module-map-ngfactory-loader": "5.0.0-beta.5"
  "ts-loader": "^3.1.1"
}
```

## Production Build and Serve

* normal: `ng build` or `ng build --prod` or `ng build --prod --build-optimizer`
* normal: `ng serve --aot`

* server side rendered: `npm run build:universal`
* serving server side rendered: `npm run serve:universal`

![build](./docs/screenshots/build.png "This should be the output after the build process")

After Running the audit. This should be the output.

![build](./docs/screenshots/audit.png "This should be the output after the audit process")

```
"scripts": {
  "...": "..."
  "build:universal": "npm run build:client-and-server-bundles && npm run webpack:server && workbox generate:sw",
  "serve:universal": "node dist/server.js",
  "build:client-and-server-bundles": "ng build --prod --build-optimizer && ng build --prod --build-optimizer --app 1 --output-hashing=false",
  "webpack:server": "webpack --config webpack.server.config.js --progress --colors"
}
```

## Error or Bug

If you ever encounter this error

![req-error](./docs/screenshots/req-error.png "Please refer to the link below")

Here is the issue link: https://github.com/angular/angular-cli/issues/8359

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Reference

* https://angular.io/guide/universal
* https://angularfirebase.com/lessons/installable-angular-progressive-web-app/

## Note

* I haven't try it yet in a hosting site with prod build.
* I will continue to work on this.
* Please tell me if you have any idea on to improve this. Thanks!

* Enable text compression in your server for better performance.
