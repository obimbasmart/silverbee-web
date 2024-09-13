import React from "react";
import BreadCrumbs from "@/components/shared/BreadCrumbs";
import { PRODUCT_DATA } from "@/dummy";
import { toCurrency } from "@/utils";
import StarGroup from "@/components/shared/StarGroup";
import Icon from "@/components/shared/Icon";
import ProductCarousel from "@/components/product/ProductCarousel";
import { TypeMetadataGroup } from "@/components/shared/TypeMetadata";
import Button from "@/components/shared/Button";

const slides = [
    {
        id: "1",
        img: "/images/product_img_01.png",
    },

    {
        id: "2",
        img: "/images/img_01.png",
    },
    {
        id: "3",
        img: "/images/chair_02.png",
    },
    {
        id: "4",
        img: "/images/tv.png",
    },
];

const ItemDescription = ({ attr, value }) => {
    return (
        <p className="text-sm">
            {attr} : {value}
        </p>
    );
};

const ProductInfo = ({ params }: any) => {
    const product = PRODUCT_DATA[Number(params.id)];

    return (
        <main className="px-4 w-full flex flex-col">
            <div className="py-2">
                <BreadCrumbs />
            </div>

            <section>
                <div className="space-y-3">
                    <div className="flex flex-row items-center justify-between">
                        <h1 className="w-2/3 line-clamp-2">{product.name}</h1>
                        <div className="flex flex-col text-right">
                            <h2 className="font-manrope text-xl font-semibold">
                                {toCurrency(product.price)}
                            </h2>
                            <h2 className="line-through">
                                {toCurrency(product.discount)}
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <StarGroup averageRating={3} />
                        <div className="flex flex-row space-x-2">
                            <Icon name="love" />
                            <Icon name="share" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-[426px] mx-auto mt-4">
                <ProductCarousel slides={slides} />
            </section>

            <section className="space-y-3">
                <TypeMetadataGroup
                    groupName="Colors"
                    types={[
                        { type: "Red" },
                        { type: "Yellow" },
                        { type: "Green" },
                        { type: "Black" },
                        { type: "Red" },
                        { type: "Green" },
                        { type: "Black" },
                        { type: "Red" },
                    ]}
                />

                <TypeMetadataGroup
                    groupName="Sizes"
                    types={[
                        { type: "xl" },
                        { type: "2xl" },
                        { type: "EU-42" },
                        { type: "41" },
                        { type: "3xl" },
                    ]}
                />
            </section>

            <Button
                title="Add to cart"
                containerStyles="bg-primary my-4"
                textStyles="text-white"
            />

            <section className="space-y-2">
                <h4 className="text-base font-medium space-y-2">
                    Item description
                </h4>
                <ItemDescription
                    attr="Screen"
                    value={`1.43" AMOLED 466*466，COF`}
                />
                <ItemDescription attr="Battery" value={`PC+ABS Battery`} />
                <ItemDescription attr="Capacity" value={`300mAh,4.35V`} />
                <ItemDescription
                    attr="Major functions"
                    value={`meter step、Bluetooth call, Blood Oxygen`}
                />
                <ItemDescription attr="Waterproof" value={`IP68`} />
                <ItemDescription attr="App" value={`oraimo health`} />
                <ItemDescription attr="Heart rate" value={`Blood Oxygen`} />
            </section>

            <div className="my-6 space-y-2">
                <h4 className="text-base font-medium">Need help ?</h4>
                <Button
                    title="Send enquiry"
                    containerStyles="bg-secondary w-full"
                    textStyles="text-primary"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                d="M4.23013 11.0401L2.46902 12.5206C2.40525 12.5742 2.32749 12.6085 2.2449 12.6194C2.16231 12.6303 2.07831 12.6174 2.00278 12.5823C1.92726 12.5471 1.86335 12.4911 1.81857 12.4208C1.77379 12.3506 1.75 12.269 1.75 12.1857V3.5C1.75 3.38397 1.79609 3.27269 1.87814 3.19064C1.96019 3.10859 2.07147 3.0625 2.1875 3.0625H11.8125C11.9285 3.0625 12.0398 3.10859 12.1219 3.19064C12.2039 3.27269 12.25 3.38397 12.25 3.5V10.5C12.25 10.616 12.2039 10.7273 12.1219 10.8094C12.0398 10.8914 11.9285 10.9375 11.8125 10.9375H4.51165C4.40866 10.9375 4.30897 10.9738 4.23013 11.0401Z"
                                stroke="#0E84E5"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    }
                />
            </div>

            <section className="text-sm space-y-2">
                <p className="text-base font-medium flex flex-row gap-x-3 items-center">
                    <Icon name="truck" />
                    <span className="text-base font-medium">
                        Delievery & returns
                    </span>
                </p>

                <p className="leading-7">
                    Your order will be delivered within 5 days of purchase.
                    Delivery fees vary based on your location and the items
                    you’ve selected.
                </p>
            </section>

            <section className="text-sm space-y-2 mt-3">
                <p className="text-base font-medium flex flex-row gap-x-3 items-center">
                    <Icon name="ArrowCounterClockwise" />
                    <span className="text-base font-medium">Return Policy</span>
                </p>

                <p className="leading-7">Eligible for return</p>
            </section>
        </main>
    );
};

export default ProductInfo;
