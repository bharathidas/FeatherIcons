# Feather Icons

This widget provides a flexible and reusable way to display Feather icons dynamically in Mendix applications, allowing users to render icons based on configurable properties with lightweight performance and modern UI support.

## Version 1.1.0 for Mendix Studio Pro 10.24.17

Feather Icons 1.1.0 is rebuilt for **Mendix Studio Pro 10.24.17** and the Mendix React client.

### Download

- Download `mendix.FeatherIcons.mpk` from the release [Version1.1.0](https://github.com/bharathidas/FeatherIcons/releases/tag/Version1.1.0) or from the root of this repository.
- Copy it into the `widgets` folder of your app and press **F4** (App > Synchronize App Directory) in Studio Pro.
- The previous package is in release [Version1.0.0](https://github.com/bharathidas/FeatherIcons/releases/tag/Version1.0.0).

### Changes in 1.1.0

- Built with `@mendix/pluggable-widgets-tools` 10.16.0 for Studio Pro 10.24.17 and React 18, as a production build. The package is about 60 KB (1.0.0: about 800 KB).
- The icon name is no longer case-sensitive and may use dashes or spaces: `BarChart2`, `barchart2`, `bar-chart-2` and `bar chart 2` all show the same icon. Names that worked in 1.0.0 still work.
- An empty Integer size attribute (which Mendix passes as 0) and negative sizes now use the default size 24. In 1.0.0 the icon was invisible.
- A color that contains only spaces now uses the default color black.
- The class and style set in Studio Pro are now applied. The icon is wrapped in a `span` with the class `widget-feathericons`.
- An empty icon name shows nothing, and nothing is shown while the value is loading. In 1.0.0 the text "Icon not found" was shown in both cases. An unknown icon name still shows "Icon not found".
- The icon has `aria-hidden="true"`, so screen readers skip it.
- Studio Pro design mode shows the Feather logo icon instead of "Icon not found".
- Clearer property descriptions and removal of unused CSS.
- The property keys are the same as in 1.0.0, so existing pages keep their settings.

### Upgrading from 1.0.0

1. Replace `mendix.FeatherIcons.mpk` in the `widgets` folder of your app with the 1.1.0 file.
2. Press **F4** (Synchronize App Directory).
3. If Studio Pro reports that the widget definition has changed, right-click the error and choose **Update all widgets**. Your settings are kept.
4. If the running app still shows the old widget, stop it, choose **App > Clean Deployment Directory** and run it again.

### Example module

[`FeatherSample.mpk`](https://github.com/bharathidas/FeatherIcons/raw/main/FeatherSample.mpk) is an example module for Studio Pro 10.24.17. It contains the widget, the entity `FeatherIcon` (Name, Size, Color), the microflow `MyFirstLogic` that creates an object with the icon `BarChart`, size 30 and color red, and the page `Home_Web` that shows the icon.

1. Download `FeatherSample.mpk`.
2. In Studio Pro, right-click the app in the App Explorer and choose **Import module package**.
3. Add the page `FeatherSample.Home_Web` to the navigation and run the app. The page uses the layout `Atlas_Core.Atlas_Default`.

### Source code and build

The widget source is in the [`featherIcons`](featherIcons) folder.

```
cd featherIcons
npm install
npm run release
```

The package is created in `featherIcons/dist/1.1.0/mendix.FeatherIcons.mpk`. Node.js 16 or later is required.

---

## Features:

### • Icon Name – 
Specify the Feather icon dynamically (e.g., Camera, Heart, BarChart, bar-chart-2). All icon names are listed on https://feathericons.com.
### • Size – 
Configure icon size for different UI needs. The default is 24 pixels.
### • Color – 
Customize icon color to match your theme. Any CSS color can be used; the default is black.

## Usage:

1. Place the **Feather Icons** widget in a data view or list view.
2. **Icon Name**: select a String attribute that holds the icon name.
3. **Icon Size** (optional): select an Integer attribute.
4. **Icon Color** (optional): select a String attribute, for example with the value `red`, `#0595DB` or `currentColor`.

## Dependencies:
Mendix Studio Pro 10.24.17 (widget 1.1.0). Widget 1.0.0: Mendix Modeler 10.24.6 or newer.

## Issues, Suggestions & Feature Requests:
https://github.com/bharathidas/FeatherIcons/issues	

## Screenshots:
<img width="588" height="698" alt="Screenshot_1" src="https://github.com/user-attachments/assets/080122ce-b4f8-406e-9990-ece432b2b9de" />

