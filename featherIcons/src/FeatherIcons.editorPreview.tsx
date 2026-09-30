import { ReactElement, createElement } from "react";

import { FeatherIconsPreviewProps } from "../typings/FeatherIconsProps";

// In Studio Pro the attribute properties only hold attribute names, so the preview shows the
// Feather logo icon with the runtime defaults (24 px, black). The icon is drawn inline to keep
// the full react-feather icon set out of the preview bundle.
export function preview(props: FeatherIconsPreviewProps): ReactElement {
    return (
        <span className={`widget-feathericons ${props.class}`} style={props.styleObject}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                <line x1="16" y1="8" x2="2" y2="22" />
                <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
        </span>
    );
}

export function getPreviewCss(): string {
    return require("./ui/FeatherIcons.css");
}
