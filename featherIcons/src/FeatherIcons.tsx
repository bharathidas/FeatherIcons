import { ReactElement, createElement } from "react";

import { FeatherIconsContainerProps } from "../typings/FeatherIconsProps";
import { DEFAULT_COLOR, DEFAULT_SIZE, FeatherIconInput } from "./components/FeatherIconInput";
import "./ui/FeatherIcons.css";

export function FeatherIcons(props: FeatherIconsContainerProps): ReactElement | null {
    const { iconKey, sizeKey, colorKey } = props;

    if (iconKey.status === "loading" && iconKey.value === undefined) {
        return null;
    }

    // An empty Integer attribute arrives as 0, so zero and negative sizes are treated as not set.
    const sizeValue = Number(sizeKey?.value);
    const size = isFinite(sizeValue) && sizeValue > 0 ? sizeValue : DEFAULT_SIZE;

    return (
        <FeatherIconInput
            iconName={iconKey.value || ""}
            size={size}
            color={colorKey?.value?.trim() || DEFAULT_COLOR}
            className={props.class}
            style={props.style}
        />
    );
}
