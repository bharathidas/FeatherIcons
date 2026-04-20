import { ReactElement, createElement } from "react";

import { FeatherIconInput, FeatherIconInputProps } from "./components/FeatherIconInput";
import { FeatherIconsPreviewProps } from "../typings/FeatherIconsProps";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

function transformProps(props: FeatherIconsPreviewProps): FeatherIconInputProps {
    return {
        iconName: props.iconKey ? props.iconKey : "",
        color: props.colorKey ? props.colorKey : "black",
        size: props.sizeKey ? Number(props.sizeKey) : 24
    };
}

export function preview(props: FeatherIconsPreviewProps): ReactElement {
    return (
        <div ref={parentInline}>
            <FeatherIconInput {...transformProps(props)}></FeatherIconInput>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/FeatherIcons.css");
}
