import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner("3888ffff-bc50-45f0-bfd4-cb55e4f44e86");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {banner && <Banner data={banner} />}
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Produk Unggulan" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
