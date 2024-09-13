import React from "react";
import Icon from "./Icon";

interface StarGroupProps {
    averageRating: number;
    iconSize?: number;
}
const StarGroup = ({ averageRating, iconSize = 18 }: StarGroupProps) => {
    return (
        <div className="flex flex-row gap-x-1">
            {averageRating >= 1 ? (
                <Icon width={iconSize} height={iconSize} name="star" />
            ) : (
                <Icon width={iconSize} height={iconSize} name="star_empty" />
            )}

            {averageRating >= 2 ? (
                <Icon width={iconSize} height={iconSize} name="star" />
            ) : (
                <Icon width={iconSize} height={iconSize} name="star_empty" />
            )}

            {averageRating >= 3 ? (
                <Icon width={iconSize} height={iconSize} name="star" />
            ) : (
                <Icon width={iconSize} height={iconSize} name="star_empty" />
            )}

            {averageRating >= 4 ? (
                <Icon width={iconSize} height={iconSize} name="star" />
            ) : (
                <Icon width={iconSize} height={iconSize} name="star_empty" />
            )}

            {averageRating >= 5 ? (
                <Icon width={iconSize} height={iconSize} name="star" />
            ) : (
                <Icon width={iconSize} height={iconSize} name="star_empty" />
            )}
        </div>
    );
};

export default StarGroup;
