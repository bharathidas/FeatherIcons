## Feather Icons

Mendix pluggable widget that shows a [Feather](https://feathericons.com) icon (react-feather) by name. Version 1.1.0 is built for Mendix Studio Pro 10.24.17.

## Features

- Icon name from a String attribute, for example `Camera`, `BarChart2` or `bar-chart-2`.
- Icon size in pixels from an Integer attribute (default 24).
- Icon color from a String attribute, any CSS color (default black).

## Usage

1. Copy `mendix.FeatherIcons.mpk` into the `widgets` folder of your app and press **F4** in Studio Pro.
2. Place **Feather Icons** in a data view or list view.
3. Select the String attribute that holds the icon name. Size and color attributes are optional.

## Issues, suggestions and feature requests

https://github.com/bharathidas/FeatherIcons/issues

## Development and contribution

1. Install NPM package dependencies by using: `npm install`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
1. Run `npm run release` to create the production package in `dist/1.1.0/mendix.FeatherIcons.mpk`.
