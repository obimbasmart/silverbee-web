"use client";

import ProductGroup from "@/components/shared/ProductGroup";
import { PRODUCT_DATA } from "@/dummy";
import BreadCrumbs from "@/components/shared/BreadCrumbs";
import Icon from "@/components/shared/Icon";
import { useState } from "react";
import { Accordion, Drawer, Radio, Label, Checkbox } from "flowbite-react";
import StarGroup from "@/components/shared/StarGroup";
import { TypeMetadataGroup } from "@/components/shared/TypeMetadata";

function ProductDetail() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);

    // Custom theme object
    const customTheme = {
        root: {
            base: "h-4 w-4 border border-hint focus:ring-3 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-cyan-600",
            color: {
                default:
                    "text-cyan-600 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-cyan-600",
            },
        },
    };

    // Custom theme object for Checkbox
    const customCheckboxTheme = {
        root: {
            base: "h-4 w-4 rounded border border-dark-700 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-cyan-600",
            color: {
                default:
                    "text-primary focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-cyan-600",
            },
        },
    };

    return (
        <main className="px-4">
            <div className="flex flex-row items-center justify-between  py-2">
                <BreadCrumbs />
                <button onClick={() => setIsOpen(true)}>
                    <Icon name="filter" />
                </button>
            </div>
            <ProductGroup data={PRODUCT_DATA} />

            <Drawer
                open={isOpen}
                onClose={handleClose}
                position="bottom"
                className="rounded-t-2xl overflow-y-scroll max-h-[90vh] py-6"
            >
                <Drawer.Header
                    titleIcon={() => (
                        <div className="flex space-x-2.5 item-center justify-center px-2">
                            <Icon name="reset" width={16} height={16} />
                            <p className="text-sm text-primary">Reset</p>
                        </div>
                    )}
                />
                <Drawer.Items>
                    <Accordion
                        alwaysOpen={true}
                        className="!rounded-none !border-0 tracking-wide text-dark-700"
                        arrowIcon={() => (
                            <Icon name="arrowRight" width={20} height={20} />
                        )}
                    >
                        <Accordion.Panel>
                            <Accordion.Title className="hover:text-dark-700 px-2 capitalize font-normal !text-dark-700  tracking-wide !border-0 !rounded-none !border-none !bg-white py-4 !border-b-0">
                                Sort By
                            </Accordion.Title>
                            <Accordion.Content className="px-4">
                                <fieldset className="flex max-w-md flex-col gap-6">
                                    {/* <legend className="mb-4">
                                        Choose your favorite country
                                    </legend> */}
                                    <div className="flex items-center gap-3">
                                        <Radio
                                            theme={customTheme}
                                            id="united-state"
                                            name="countries"
                                            value="USA"
                                        />
                                        <Label
                                            htmlFor="united-state"
                                            className="text-sm text-dark-700 font-normal"
                                        >
                                            Recommended
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Radio
                                            theme={customTheme}
                                            id="united-state"
                                            name="countries"
                                            value="USA"
                                        />
                                        <Label
                                            htmlFor="united-state"
                                            className="text-sm text-dark-700 font-normal"
                                        >
                                            Recently Added
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Radio
                                            theme={customTheme}
                                            id="united-state"
                                            name="countries"
                                            value="USA"
                                        />
                                        <Label
                                            htmlFor="united-state"
                                            className="text-sm text-dark-700 font-normal"
                                        >
                                            Top Rated
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Radio
                                            theme={customTheme}
                                            id="united-state"
                                            name="countries"
                                            value="USA"
                                        />
                                        <Label
                                            htmlFor="united-state"
                                            className="text-sm text-dark-700 font-normal"
                                        >
                                            Price: Low to High
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Radio
                                            theme={customTheme}
                                            id="united-state"
                                            name="countries"
                                            value="USA"
                                        />
                                        <Label
                                            htmlFor="united-state"
                                            className="text-sm text-dark-700 font-normal"
                                        >
                                            Price High to High
                                        </Label>
                                    </div>
                                </fieldset>
                            </Accordion.Content>
                        </Accordion.Panel>

                        <Accordion.Panel>
                            <Accordion.Title className="hover:text-dark-700 px-2 capitalize font-normal !text-dark-700  tracking-wide !border-0 !rounded-none !border-none !bg-white py-4 !border-b-0">
                                Rating
                            </Accordion.Title>
                            <Accordion.Content>
                                <div
                                    className="flex max-w-md flex-col gap-6"
                                    id="checkbox"
                                >
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            id="accept"
                                            defaultChecked
                                            theme={customCheckboxTheme}
                                        />
                                        <Label
                                            htmlFor="accept"
                                            className="flex"
                                        >
                                            <StarGroup averageRating={5} />
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            id="accept"
                                            defaultChecked
                                            theme={customCheckboxTheme}
                                        />
                                        <Label
                                            htmlFor="accept"
                                            className="flex"
                                        >
                                            <StarGroup averageRating={4} />
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            id="accept"
                                            defaultChecked
                                            theme={customCheckboxTheme}
                                        />
                                        <Label
                                            htmlFor="accept"
                                            className="flex"
                                        >
                                            <StarGroup averageRating={3} />
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            id="accept"
                                            defaultChecked
                                            theme={customCheckboxTheme}
                                        />
                                        <Label
                                            htmlFor="accept"
                                            className="flex"
                                        >
                                            <StarGroup averageRating={2} />
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            id="accept"
                                            theme={customCheckboxTheme}
                                        />
                                        <Label
                                            htmlFor="accept"
                                            className="flex"
                                        >
                                            <StarGroup averageRating={1} />
                                        </Label>
                                    </div>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="hover:text-dark-700 px-2 capitalize font-normal !text-dark-700  tracking-wide !border-0 !rounded-none !border-none !bg-white py-4 !border-b-0">
                                Filters
                            </Accordion.Title>
                            <Accordion.Content>
                                <section className="space-y-3 py-2">
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

                                    <TypeMetadataGroup
                                        groupName="Brand"
                                        types={[
                                            { type: "Oraimo" },
                                            { type: "Iphone" },
                                            { type: "Samsung" },
                                            { type: "41" },
                                            { type: "3xl" },
                                        ]}
                                    />
                                </section>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </Drawer.Items>
            </Drawer>
        </main>
    );
}

export default ProductDetail;
