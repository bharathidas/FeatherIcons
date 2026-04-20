import { ReactElement, createElement } from "react";
import * as Icons from "react-feather";
export interface FeatherIconInputProps {
    iconName: string;
    color: string;
    size: number;
}

export function FeatherIconInput(props: FeatherIconInputProps): ReactElement {
    const { color, size, iconName } = props;
   
     
const IconComponent = (Icons as any)[iconName];

    if (!IconComponent) {
        return <span>Icon not found</span>;
    }

    return <IconComponent size={size} color={color} />;
}

