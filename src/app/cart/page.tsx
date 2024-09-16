"use client";

import CartItem from "@/components/product/CartItem";
import { PRODUCT_DATA } from "@/dummy";
import { toCurrency } from "@/utils";
import Button from "@/components/shared/Button";

function CartPage() {
    return (
        <main className="px-4 text-sm space-y-6 mt-2 py-2">
            <h1 className="text-base font-medium">My Cart</h1>

            <section className="flex flex-col space-y-4">
                {PRODUCT_DATA.slice(0, 2).map((item) => (
                    <CartItem
                        key={item.name}
                        productName={item.name}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </section>

            <section className="space-y-4 w-full divide-y-[1px] divide-gray-hint">
                <div className="space-y-1">
                    <div className="flex justify-between items-center">
                        <p>Total Items (2)</p>
                        <p className="font-medium">{toCurrency(259100)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Delivery Cost</p>
                        <p className="font-medium">--</p>
                    </div>
                </div>
                <div className="py-1 space-y-1">
                    <div className="flex justify-between items-center w-full">
                        <p>Grand Total</p>
                        <p className="font-medium">{toCurrency(259100)}</p>
                    </div>

                    <Button
                        title="Get Delievery Cost"
                        containerStyles="bg-primary w-full"
                        textStyles="text-white"
                    />
                </div>
            </section>

            <section className="p-3 border-primary border-[1px] rounded-lg bg-secondary">
                <p className="text-xs">
                    We want you to get the best possible delivery cost for your
                    order. Simply hit the "Get Delivery Cost" button to see the
                    most accurate and affordable options available for your
                    location.
                </p>
            </section>
        </main>
    );
}

export default CartPage;
