import Image from "next/image";
import React from "react";
import Button from "../shared/Button";
import { useState } from "react";
import Icon from "../shared/Icon";
import { toCurrency } from "@/utils";

interface CartItemProps {
    image: string;
    productName: string;
    price: number;
}

function CartItem({ image, productName, price }: CartItemProps) {
    const [count, setCount] = useState(1);

    const handleCountChange = () => {
        if (count === 0) return 0
        setCount(count - 1)
    }

    return (
        <div className="w-full flex flex-col items-center justify-between space-y-6">
            <div className="flex flex-row items-center justify-between gap-x-4">
                <div className="relative w-1/5 min-w-[76px] max-w-[80px] aspect-[1.22]">
                    <Image
                        src={image}
                        layout="fill"
                        alt="Product Image"
                        objectFit="cover"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <p>{productName}</p>
                    <p className="font-medium">{toCurrency(price)}</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between  w-full">
                <div className="flex items-center border-[1px] px-3 py-2 gap-x-4 border-gray-hint rounded-lg">
                    <Button
                        title=""
                        containerStyles="!px-0 !py-0"
                        icon={<Icon name="minus" width={20} height={20} />}
                        onClick={handleCountChange}
                    />
                    <p>{count}</p>
                    <Button
                        title=""
                        containerStyles="!px-0 !py-0"
                        icon={<Icon name="plus" width={20} height={20} />}
                        onClick={() => setCount(count + 1)}
                    />
                </div>

                <div className="border-gray-hint rounded-md p-2 border-[1px] flex items-center justify-center">
                    <Button
                        title=""
                        containerStyles=" !px-0 !py-0"
                        icon={<Icon name="cancel" width={20} height={20} />}
                    />
                </div>
            </div>
        </div>
    );
}

export default CartItem;
