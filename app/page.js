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
      <main className="page-main">
        <div className="page-breadcrumb">
          <div className="page-breadcrumb-home">Home</div>
          <hr className="page-breadcrumb-divider" />
          <div>Shop</div>
        </div>
        <div className="page-hero-section">
          <h1 className="page-hero-title">DISCOVER OUR PRODUCTS</h1>
          <p className="page-hero-description">
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
