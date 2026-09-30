# Feather Icons – Marketplace Documentation

Widget version 1.1.0 · Mendix Studio Pro 10.24.17 · Web (React client)

## Industry

All industries (cross-industry).

## Categories

- Widgets
- Display / UI elements

## Component tagline

Show any of 287 Feather icons by name, with size and color from attributes.

(75 characters)

## About

Feather Icons shows one icon from the open-source Feather icon set (react-feather). The icon name, the size and the color are read from attributes of the context object, so the icon can be different for every object and can change at runtime.

The icons are simple line drawings in SVG format. They stay sharp at every size and take the color you give them.

Version 1.1.0 is rebuilt for Mendix Studio Pro 10.24.17 and the React client. The package is about 60 KB (version 1.0.0: about 800 KB). Icon names are no longer case-sensitive and may contain dashes or spaces: `BarChart2`, `barchart2`, `bar-chart-2` and `bar chart 2` show the same icon. An empty or zero size now uses the default 24, and the class and style from the Appearance tab are applied.

The source code and an example module are on GitHub: https://github.com/bharathidas/FeatherIcons

## Typical usage scenario

- Status icons in a list, for example a check mark for delivered and a clock for waiting.
- Menu tiles or dashboard cards where the icon is stored with the data.
- Category or type icons that an administrator can choose without a new deployment.
- Any place where the icon depends on the object instead of being fixed on the page.

## Features and limitations

**Features**

- 287 icons (react-feather 2.0.10), selected by name from a String attribute.
- Icon names in any case, with or without dashes and spaces, for example `Camera`, `camera`, `alert-triangle`.
- Size in pixels from an Integer attribute (default 24).
- Color from a String attribute: any CSS color such as `red`, `#0595DB`, `rgb(22, 163, 74)` or `currentColor` (default black).
- Class and style from the Appearance tab are applied.
- Nothing is shown for an empty name; "Icon not found" is shown for an unknown name.
- Offline capable. Small package (about 60 KB).

**Limitations**

- Web only; not available for native mobile.
- The name, size and color are attributes; static values cannot be typed in the widget properties.
- The widget needs a context object, so it must be inside a data view or list view.
- The icon name must be a String attribute. Enumeration attributes cannot be selected.
- The line thickness cannot be set.
- The widget has no on-click action. Put it in a container with an on-click action.
- The icon is hidden from screen readers (`aria-hidden`). Add a text when the meaning is important.
- The icon set is fixed; custom icons cannot be added.

## Dependencies

- Mendix Studio Pro 10.24.17 or a later 10.24 version.
- No other modules or libraries are needed.

## Installation

1. Download `mendix.FeatherIcons.mpk` from the Marketplace (or from the GitHub release Version1.1.0).
2. Copy it into the `widgets` folder of your app (App > Show App Directory in Explorer).
3. In Studio Pro, press F4 (App > Synchronize App Directory).
4. The widget appears in the Toolbox as **Feather Icons**.

**Upgrading from 1.0.0:** replace the file in the `widgets` folder and press F4. Studio Pro reports that the widget definition changed; right-click the error and choose **Update all widgets**. Your settings are kept. If the running app still shows the old widget, choose App > Clean Deployment Directory and run the app again. Note that the icon is now inside a `span` with the class `widget-feathericons`; check custom CSS that selects the `svg` directly.

**Example module:** download `FeatherSample.mpk` from the GitHub repository, import it with **Import module package** in the App Explorer, and add the page `FeatherSample.Home_Web` to the navigation.

## Configuration

1. Add a String attribute for the icon name to your entity, for example `IconName`.
2. Optionally add an Integer attribute for the size (`IconSize`) and a String attribute for the color (`IconColor`).
3. Place the widget in a data view or list view of that entity.
4. Double-click the widget and select the **Icon Name** attribute. Optionally select **Icon Size** and **Icon Color**.
5. Set the attribute values in a microflow, a nanoflow or with default values, for example IconName = `Camera`, IconSize = `32`, IconColor = `#0595DB`.

Icon names are listed on https://feathericons.com. The site shows names with dashes (`bar-chart-2`); the widget accepts these and the names without dashes (`BarChart2`).

Use the color `currentColor` to give the icon the text color of its surroundings.

## Known bugs

- An invalid color value makes the icon invisible, because the browser then draws no line.
- The default color is black, not the theme color. Use `currentColor` to follow the theme.

## FAQ

**Which name do I use for an icon?**
Find the icon on feathericons.com and use its name, for example `alert-triangle`. `AlertTriangle` and `alerttriangle` work as well.

**Why do I see "Icon not found"?**
The name in the attribute is not a Feather icon. Check the spelling. To hide the text, add `.widget-feathericons-not-found { display: none; }` to your theme.

**Why is nothing shown?**
The icon name attribute is empty, or the color value is not a valid CSS color.

**Can I type the icon name directly in the widget?**
No. The name comes from an attribute. Give the attribute a default value in the domain model or set it in a microflow.

**Can I make the icon clickable?**
Put the widget in a container and give the container an on-click action.

**How do I align the icon with a text?**
Add `vertical-align: middle` to the Style on the Appearance tab, or put the icon and the text in a container with a flex row layout.

**Does it work in older Mendix versions?**
Version 1.1.0 is built and tested for Studio Pro 10.24.17. Version 1.0.0 (GitHub release Version1.0.0) was made for Mendix 10.24.6.
