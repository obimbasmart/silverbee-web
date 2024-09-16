import React from "react";
import StarGroup from "./StarGroup";
import Icon from "./Icon";

interface ReviewItemProps {
    rating: number;
    created_ate: string;
    username: string;
    review: string;
}
function ReviewItem({ rating, created_at, username, review }: ReviewItemProps) {
    return (
        <div className="text-xs space-y-1">
            <div className="flex flex-row items-center justify-between mt-2">
                <StarGroup iconSize={16} averageRating={rating} />
                <p>Past 30days</p>
            </div>
            <p className="capitalize">{username}</p>
            <p className="text-sm">{review}</p>
            <span className="flex flex-row items-center justify-end space-x-1">
                <Icon width={18} height={18} name="checkCircle" />
                <p>Verified purchase</p>
            </span>
        </div>
    );
}

export default ReviewItem;
