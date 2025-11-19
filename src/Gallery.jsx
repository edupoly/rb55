import React, { useState } from "react";

function Gallery() {
  var [images, setImages] = useState([
    "https://upload.wikimedia.org/wikipedia/commons/d/d3/Deepika_Padukone_2025_%281%29.png",
    "https://www.bollywoodhungama.com/wp-content/uploads/2021/06/Deepika-Padukone-launches-A-Chain-of-Wellbeing-on-her-social-media1.jpg",
    "https://assets.vogue.in/photos/5e0eff40387429000876eebb/16:9/w_1280,c_limit/deepika%20padukone%20lessons.jpg",
  ]);
  var [i, setI] = useState(0);
  function prevImg() {}
  function nextImg() {
    setI(i + 1);
  }
  return (
    <div className="border border-2 m-2 p-2 w-25">
      <h1>Gallery</h1>
      <img src={images[i]} alt="" className="w-100" />
      <button
        onClick={() => {
          prevImg();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          nextImg();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Gallery;
//
//
// https://www.deccanchronicle.com/h-upload/2025/07/03/1934300-deepika.webp
