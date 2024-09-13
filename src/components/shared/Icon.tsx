import React from "react";
import Image from "next/image";

interface IconProps {
    name?: string;
    width?: number;
    height?: number;
    alt?: string;
    color?: string;
}
function Icon({ name, alt, width = 24, height = 24 }: IconProps) {
    return (
        <Image
            src={`/icons/${name}.svg`}
            width={width}
            height={height}
            alt={`${alt}`}
        />
    );
}

export default Icon;
