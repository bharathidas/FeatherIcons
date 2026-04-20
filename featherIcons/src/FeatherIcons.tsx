import { ReactElement, createElement } from "react";

import { FeatherIconsContainerProps } from "../typings/FeatherIconsProps";
import { FeatherIconInput } from "./components/FeatherIconInput";
import "./ui/FeatherIcons.css";

export function FeatherIcons(props: FeatherIconsContainerProps): ReactElement {
    const {  iconKey, sizeKey, colorKey } = props;
    
let iconvalue=iconKey?.value || "";

// let pascalCaseIconName = toPascalCaseWord(iconvalue);
let sizeValue = sizeKey?.value?.toNumber?.() ?? 24;
let colorValue = colorKey?.value || "black";


// function toPascalCaseWord(value: string): string {
//     if (!value) return "";
//    return value
//         .toLowerCase()
//         .split("-")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join("-");
// }
    return (
        <FeatherIconInput
            iconName={iconvalue}
            size={sizeValue}
            color={colorValue}
        />
    );
}
