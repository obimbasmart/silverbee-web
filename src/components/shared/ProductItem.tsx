import Image from "next/image";
import { toCurrency } from "@/utils";
import Link from "next/link";

export interface ProductItemProps {
    name: string;
    price: number;
    discount: number | null;
    img: string;
}

function ProductItem({ name, price, discount, img }: ProductItemProps) {
    return (
        <Link className="w-[43%]" href="/products/1">
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
        </Link>
    );
}

export default ProductItem;
