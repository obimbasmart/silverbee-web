import Image from "next/image";

interface CategoryProps {
    image: string;
    title: string;
}

function Category({ image, title }: CategoryProps) {
    return (
        <div className="w-[28%] relative aspect-square max-w-28 rounded-lg  text-white">
            <p className="w-full capitalize py-1 absolute text-xs text-center leading-5 blur-[0.2px] text-white bg-black/50 bottom-0 rounded-b-lg">
                {title}
            </p>
            <Image
                src={image}
                className="w-full h-full rounded-lg block bg-cover"
                width={100}
                height={100}
                alt="Category Image"
            />
        </div>
    );
}

export default Category;
