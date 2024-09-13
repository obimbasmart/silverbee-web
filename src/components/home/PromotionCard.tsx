"use client";

import Image from "next/image";
import Button from "../shared/Button";
import ArrowRight from "../icons/ArrowRight";

interface PromotionCardProps {
    bgImage: string;
    title: string;
    description: string;
}

function PromotionCard({ bgImage, title, description }: PromotionCardProps) {
    return (
        <div className="w-full">
            <div className="w-full relative aspect-[2]">
                <Image
                    src={`/images/${bgImage}.png`}
                    layout="fill"
                    alt="Product Image"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div className="text-sm space-y-3 bg-gray-hint px-4 py-2 pb-3">
                <p className="text-xl font-manrope font-medium">{title}</p>
                <p className="font-sm font-medium">{description}</p>
                <Button
                    title="Shop now"
                    containerStyles="bg-white"
                    icon={<ArrowRight color="#0E84E5" />}
                    onClick={() => console.log()}
                />
            </div>
        </div>
    );
}

export default PromotionCard;
