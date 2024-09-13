import Hero from "@/components/home/Hero";
import Category from "@/components/home/Category";
import ProductGroup from "@/components/shared/ProductGroup";
import { PRODUCT_DATA } from "@/dummy";
import PromotionCard from "@/components/home/PromotionCard";
import Feature from "@/components/home/Feature";

export default function Home() {
    return (
        <main className="w-full h-full">
            <Hero bgImage="hero_02.png" />

            <div className="flex items-center justify-evenly flex-wrap gap-y-3 py-3 space-y-2">
                <div className="w-full flex flex-row items-center justify-between px-4 py-1">
                    <p className="font-medium text-base">Explore categories</p>
                    <p className="font-manrope font-medium underline">
                        See all
                    </p>
                </div>
                <Category
                    image="/images/fashion.png"
                    title="fashion and apparel"
                />
                <Category image="/images/food.png" title="food and beverages" />
                <Category image="/images/electronics.png" title="electronics" />
                <Category
                    image="/images/audio.png"
                    title="audio and headphones"
                />
                <Category image="/images/computers.png" title="electronics" />
                <Category
                    image="/images/smartphones.png"
                    title="smartphones and accessories"
                />
            </div>

            {/* <Hero bgImage="oraimo.png" /> */}

            <ProductGroup data={PRODUCT_DATA.slice(0, 6)} />

            <PromotionCard
                bgImage="promo_01"
                title="Cutting-Edge Electronics"
                description="Discover the latest gadgets and gear to power your digital lifestyle. "
            />

            <section className="p-4 space-y-3">
                <Feature
                    title="Know Where Your Package Is, Always"
                    desc="Real-time order tracking keeps you informed every step of the way."
                    icon="path"
                />
                <Feature
                    title="Lightning-Fast Delivery to Your Door"
                    desc="Experience our speedy shipping - get your items in record time."
                    icon="truck"
                />
                <Feature
                    title="Easy 30days Return"
                    desc="Return, refund or replace within 30days of receipt on most new and unused items.."
                    icon="arrowUUpLeft"
                />
                <Feature
                    title="Transparent Delivery Fees"
                    desc="Delivery fees are based on your location and the specifics of your order, ensuring clarity and fairness every time.."
                    icon="path"
                />
            </section>
        </main>
    );
}
