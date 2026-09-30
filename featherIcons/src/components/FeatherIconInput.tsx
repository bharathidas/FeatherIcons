import { ComponentType, CSSProperties, ReactElement, createElement } from "react";
import * as Icons from "react-feather";

export const DEFAULT_SIZE = 24;
export const DEFAULT_COLOR = "black";

export interface FeatherIconInputProps {
    iconName: string;
    color: string;
    size: number;
    className?: string;
    style?: CSSProperties;
}

/** Icon names without case and separators, so that "BarChart2", "bar-chart-2" and "bar chart 2" are the same key. */
function toKey(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const iconsByKey: { [key: string]: ComponentType<Icons.IconProps> } = {};
Object.keys(Icons).forEach(name => {
    iconsByKey[toKey(name)] = (Icons as unknown as { [name: string]: ComponentType<Icons.IconProps> })[name];
});

export function FeatherIconInput(props: FeatherIconInputProps): ReactElement | null {
    const { color, size, iconName, style } = props;
    const className = props.className ? `widget-feathericons ${props.className}` : "widget-feathericons";
    const key = toKey(iconName);

    if (!key) {
        return null;
    }

    const IconComponent = iconsByKey[key];

    if (!IconComponent) {
        return (
            <span className={`${className} widget-feathericons-not-found`} style={style}>
                Icon not found
            </span>
        );
    }

    return (
        <span className={className} style={style}>
            <IconComponent size={size} color={color} aria-hidden="true" />
        </span>
    );
}
