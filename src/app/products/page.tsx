import ProductGroup from "@/components/shared/ProductGroup";
import { PRODUCT_DATA } from "@/dummy";
import BreadCrumbs from "@/components/shared/BreadCrumbs";
import Icon from "@/components/shared/Icon";

function ProductDetail() {
    return (
        <main>
            <div className="flex flex-row items-center justify-between  px-4 py-2">
                <BreadCrumbs />
                <button>
                    <Icon name="filter" />
                </button>
            </div>
            <ProductGroup data={PRODUCT_DATA} />
        </main>
    );
}

export default ProductDetail;
