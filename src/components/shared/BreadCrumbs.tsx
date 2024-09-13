import React from "react";
import Icon from "./Icon";

function BreadCrumbs() {
    return (
        <nav className="flex text-hints text-xs" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <a
                        href="/"
                        className="inline-flex items-center  font-medium  hover:text-blue-600 dark:text-gray-hint dark:hover:text-white"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <Icon width={16} height={16} name="arrowRight" />
                        <a
                            href="/products"
                            className="ms-1  font-medium  hover:text-blue-600 md:ms-2 dark:text-gray-hint dark:hover:text-white"
                        >
                            Products
                        </a>
                    </div>
                </li>
            </ol>
        </nav>
    );
}

export default BreadCrumbs;
