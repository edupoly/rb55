import React from "react";

function Product({ prod }) {
  return (
    <li>
      <div className="card text-bg-dark p-2 m-2" style={{ width: "240px" }}>
        <img src={prod.thumbnail} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{prod.title}</h5>
          <p className="card-text">{prod.description.slice(0, 50)}</p>
          <p className="card-text">
            <b>${prod.price}</b>
          </p>
          <p>Rating:{prod.rating}</p>
        </div>
      </div>
    </li>
  );
}

export default Product;
