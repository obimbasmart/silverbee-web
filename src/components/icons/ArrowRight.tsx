import React from "react";

interface ArrowRightProps {
    color: string;
}
function ArrowRight({ color }: ArrowRightProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M7.5 3.75L13.75 10L7.5 16.25"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

export default ArrowRight;
