/**
 * This file was generated from FeatherIcons.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface FeatherIconsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    iconKey: EditableValue<string>;
    sizeKey?: EditableValue<Big>;
    colorKey?: EditableValue<string>;
}

export interface FeatherIconsPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    iconKey: string;
    sizeKey: string;
    colorKey: string;
}
