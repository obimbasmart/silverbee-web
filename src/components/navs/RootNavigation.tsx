"use client";

import { CATEGORIES } from "@/constants";
import { Drawer, Modal } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import Icon from "../shared/Icon";
import Category from "./CategoryLinks";
import { PROFILE_LINKS } from "@/constants";
import { Londrina_Sketch } from "next/font/google";

export function RootNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setOpenModal] = useState(false);

    const handleClose = () => setIsOpen(false);
    const hanldeOpen = () => setIsOpen(true);

    const handleModalClose = () => setOpenModal(false);
    const handleModalOpen = () => setOpenModal(true);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 px-4 py-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <div className="flex flex-row space-x-5 justify-center items-center">
                    <button
                        onClick={hanldeOpen}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        aria-controls="navbar-default"
                        className="w-6 h-6"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Icon
                            name="menu"
                            width={24}
                            height={24}
                            alt="Menu Icon"
                        />
                    </button>
                    <a href="/" className="mb-[2px]">
                        <Icon name="logo" width={24} height={24} />
                    </a>
                </div>

                <div className="flex flex-row items-center justify-center space-x-5">
                    <Link href={"/products"}>
                        <Icon name="search" width={24} height={24} />
                    </Link>
                    <button onClick={handleModalOpen}>
                        <Icon name="user" width={24} height={24} />
                    </button>
                    <Icon name="cart" width={24} height={24} />
                </div>

                <Drawer open={isOpen} onClose={handleClose}>
                    <Drawer.Header
                        titleIcon={() => (
                            <p className="text-sm font-medium tracking-wide text-dark-800">
                                Categories
                            </p>
                        )}
                    />
                    <Drawer.Items>
                        {CATEGORIES.map((item) => (
                            <Category
                                key={item.title}
                                title={item.title}
                                items={item.items}
                            />
                        ))}
                    </Drawer.Items>

                    <Drawer.Header
                        titleIcon={() => (
                            <p className="text-sm tracking-wide font-medium text-dark-800">
                                Account
                            </p>
                        )}
                    />
                    <Drawer.Items>
                        <div className="flex flex-col space-y-6 capitalize px-2">
                            <Link href="" className="text-sm font-normal">
                                Track Order
                            </Link>
                            <Link href="" className="text-sm font-normal">
                                Customer Support
                            </Link>
                        </div>
                    </Drawer.Items>

                    <Drawer.Header
                        titleIcon={() => (
                            <p className="text-sm mt-4 font-medium text-dark-800">
                                Support
                            </p>
                        )}
                    />
                    <Drawer.Items>
                        <div className="flex flex-col space-y-6 capitalize px-2">
                            <Link href="" className="text-sm font-normal">
                                Track Order
                            </Link>
                            <Link href="" className="text-sm font-normal">
                                Customer Support
                            </Link>
                        </div>
                    </Drawer.Items>

                    <Drawer.Header
                        titleIcon={() => (
                            <p className="text-sm mt-4 font-medium text-dark-800">
                                About
                            </p>
                        )}
                    />
                    <Drawer.Items>
                        <div className="flex flex-col space-y-6 capitalize px-2">
                            <Link href="" className="text-sm font-normal">
                                Track Order
                            </Link>
                            <Link href="" className="text-sm font-normal">
                                Customer Support
                            </Link>
                        </div>
                    </Drawer.Items>
                </Drawer>

                <Modal
                    show={modalOpen}
                    onClose={() => setOpenModal(false)}
                    theme={{
                        content: {
                            base: "relative h-full w-full p-4 md:h-auto",
                            inner: "relative rounded-3xl bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]",
                        },
                    }}
                >
                    <Modal.Header>
                        <p className="text-base font-medium">
                            Okereke Uzochukwu
                        </p>
                        <p className="text-xs">
                            uzochukwu.chikadibia@gmail.com
                        </p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="flex flex-col space-y-8">
                            {PROFILE_LINKS.map(
                                (item) =>
                                    item.name !== "sign out" &&
                                    item.name !== "help center" && (
                                        <Link
                                            key={item.name}
                                            className="text-sm font-medium capitalize px-4"
                                            href={item.link}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                            )}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex flex-col space-y-8">
                            <Link
                                className="text-sm font-medium capitalize px-4"
                                href="/"
                            >
                                Help center
                            </Link>

                            <Link
                                className="text-sm font-medium capitalize px-4 text-[#FF3636]"
                                href="/"
                            >
                                Sign out
                            </Link>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </nav>
    );
}
