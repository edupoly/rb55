import React, { useEffect, useState, useTransition } from "react";
import Product from "./Product";

function Products() {
  //api call chesi data thechuni display cheyyali
  var [products, setProducts] = useState();
  var [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async function () {
      var res = await fetch("https://dummyjson.com/products");
      var data = await res.json();
      setProducts(data.products);
    });
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setProducts(data.products);
    //   });
  }, []);
  return (
    <div className="border border-success border-2 m-2 p-2">
      <h1>Products {isPending && "Loading..."}</h1>
      <ul className="d-flex flex-wrap list-unstyled">
        {products?.map((prod) => {
          return <Product prod={prod}></Product>;
        })}
      </ul>
    </div>
  );
}

export default Products;
