import React from "react";
import Link from "next/link";

interface HeroProps {
    bgImage: string;
    title?: string;
}
function Hero({ bgImage, title }: HeroProps) {
    return (
        <section
            style={{ backgroundImage: `url('/images/${bgImage}')` }}
            className={`flex items-center text-white w-full aspect-[1.5] bg-cover bg-center bg-no-repeat  bg-black/50 bg-blend-multiply`}
        >
            <div className="px-4 mx-auto max-w-screen-xl text-start py-3 lg:py-56 space-y-4">
                <h1 className="text-2xl font-manrope font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Connect in Style
                </h1>
                <p className="text-white text-sm font-medium">
                    Shop the latest gadgets and accessories for your favorite
                    smart phone.
                </p>

                <button className="flex flex-row items-center gap-x-2">
                    <Link className="" href="">
                        Shop Now
                    </Link>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M7.5 3.75L13.75 10L7.5 16.25"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default Hero;
