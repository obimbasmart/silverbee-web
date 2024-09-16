"use client";

import React, { useState } from "react";
import Image from "next/image";

function ProductCarousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="flex flex-col space-y-4">
            <div className="relative w-full h-[350px]">
                <Image
                    src={slides[currentIndex].img}
                    alt={slides[currentIndex].alt || "Product image"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    quality={100}
                />
            </div>

            <div className="grid grid-cols-4 gap-2">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`relative w-full aspect-square cursor-pointer ${
                            index === currentIndex
                                ? "border-b-primary   border-b-2"
                                : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <Image
                            src={slide.img}
                            alt={slide.alt || `Thumbnail ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCarousel;
