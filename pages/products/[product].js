import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { product } = router.query;

  return <h1>Product id is {product}</h1>;
};

export default Product;
