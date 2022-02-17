import Link from "next/link";
import { useEffect, useState } from "react";

const Featured = () => {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    fetch("/api/products/featured")
      .then((res) => res.json())
      .then((featured) => {
        setFeatured(featured.featured);
      });
  }, []);

  return (
    <>
      {featured?.map((item) => {
        return (
          <>
            <Link href={`/products/${item.id}`}>
              <div>
                <h3>{item.product}</h3>
                <p>${item.price}</p>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default Featured;
