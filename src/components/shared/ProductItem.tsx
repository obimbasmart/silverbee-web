"use client";

import Image from "next/image";
import { toCurrency } from "@/utils";
import Link from "next/link";
import Love from "../icons/Love";
import { useState } from "react";

export interface ProductItemProps {
    name: string;
    price: number;
    discount: number | null;
    img: string;
}

function ProductItem({ name, price, discount, img }: ProductItemProps) {
    const [liked, setLiked] = useState(false);

    const handleLiked = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setLiked(!liked);
    };

    return (
        <Link className="relative h-auto max-w-full" href="/products/1">
            <div className="w-full relative aspect-[0.95]">
                <Image
                    src={img}
                    // width={100}
                    layout="fill"
                    // height={100}
                    alt="Product Image"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div className="text-sm space-y-3">
                <p className="line-clamp-2">{name}</p>
                <div className="flex flex-row items-center justify-between">
                    {discount && (
                        <p className="text-decoration: line-through">
                            {toCurrency(discount)}
                        </p>
                    )}
                    <p className="font-medium">{toCurrency(price)}</p>
                </div>
            </div>

            <button
                onClick={handleLiked}
                className="z-40 bg-white absolute top-0 right-0 w-8 h-8 border-[1px] border-hint  rounded-full flex items-center justify-center"
            >
                <Love
                    strokeColor={liked ? `red` : "#2C3333"}
                    fill={liked ? "red" : "none"}
                />
            </button>
        </Link>
    );
}

export default ProductItem;
