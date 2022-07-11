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
    <div className="featured-container">
      {featured?.map((item) => {
        return (
          <>
            <Link href={`/products/${item.id}`}>
              <div className="featured-item">
                <img src="https://via.placeholder.com/200" alt="" className="featured-img"/>
                <p className="featured-name">{item.product}</p>
                <p className="featured-price">${item.price}</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Featured;
