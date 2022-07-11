import { useRouter } from "next/router";
import Head from "next/head";

const Product = () => {
  const router = useRouter();
  const { product } = router.query;

  return <>
    <Head>
      <title>Product page</title> 
    </Head>
    <img src="https://via.placeholder.com/450" alt="Product image" />
    <h1>Product is {product}</h1>
    <p>Product description {product}</p>
  </>;
};

export default Product;
