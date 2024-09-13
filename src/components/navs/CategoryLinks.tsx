"use client";

import { Accordion, CustomFlowbiteTheme } from "flowbite-react";
import Link from "next/link";
import Icon from "../shared/Icon";

interface CategoryChildProps {
    name: string;
    link: string;
}

interface CategoryProps {
    title: string;
    items: CategoryChildProps[];
}

const Category = ({ title, items }: CategoryProps) => {
    return (
        <Accordion
            collapseAll
            className="!rounded-none !border-0 tracking-wide text-dark-700"
            arrowIcon={() => <Icon name="arrowRight" width={20} height={20}/>}
        >
            <Accordion.Panel>
                <Accordion.Title className="hover:text-dark-700 px-2 capitalize font-normal !text-dark-700 text-sm tracking-wide !border-0 !rounded-none !border-none !bg-white py-4 !border-b-0">
                    {title}
                </Accordion.Title>
                <Accordion.Content className="border-b-2 px-4">
                    <div className="flex flex-col space-y-6 capitalize">
                        {items.map((item) => (
                            <Link
                                href={item.link}
                                key={item.name}
                                className="text-xs font-normal"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
};

export default Category;
