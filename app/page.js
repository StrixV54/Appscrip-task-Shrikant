import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";

const fetchProduct = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const res = await data.json();
  return res;
};

export default async function Home() {
  const productList = await fetchProduct();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col w-screen pb-10">
        <div className="sm:hidden px-4 uppercase flex gap-2 items-center justify-start text-[12px] pt-6 pb-1">
          <div className="text-[#BFC8CD]">Home</div>
          <hr className="h-[14px] w-0 border" />
          <div>Shop</div>
        </div>
        <div className="hero-section px-2 mx-auto sm:my-[80px] my-4 text-center">
          <h1 className="uppercase sm:text-6xl text-2xl">DISCOVER OUR PRODUCTS</h1>
          <p className="sm:mt-10 mt-4 sm:text-[22px] text-base flex flex-col items-center text-[#252020] max-w-[800px]">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor
            integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
        <ProductSection list={productList} />
      </main>
      <Footer />
    </>
  );
}
