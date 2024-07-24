import React, { useState } from "react";
import useStore from "../useStore";

const Card = ({
  id,
  productName,
  productPrice,
  productImage,
  productRating,
  buttonBgColor = "bg-primary",
  buttonTextColor = "text-tertiary",
  cardBgColor = "bg-tertiary",
  priceColor = "text-primary",
  titleColor = "text-primary",
  ratingColor = "text-primary",
}) => {
  const addToCart = useStore((state) => state.addToCart);
  const [message, setMessage] = useState("");

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-yellow-300 ${i < rating ? "text-yellow-500" : ""}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    const product = {
      id,
      productName,
      productPrice,
      productImage,
      productRating,
    };
    addToCart(product);
    setMessage("Added successfully!");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div
      className={`w-full max-w-sm border ${cardBgColor} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-merriweather-regular`}>
      <a href="#">
        <img
          className="p-2 rounded-t-lg object-fit w-full h-80"
          src={productImage}
          alt={productName}
        />
      </a>
      <div className="px-3 pb-3">
        <a href="#">
          <h5 className={`text-lg font-semibold ${titleColor}`}>
            {productName}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {renderStars(productRating)}
            <span className={`${ratingColor}`}>{productRating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-3xl font-bold ${priceColor}`}>
            ${productPrice}
          </span>
          <button
            className={`${buttonBgColor} ${buttonTextColor} px-7 py-4 rounded-sm shadow-lg hover:bg-slate-300`}
            onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
        {message && (
          <div className="mt-2 text-green-600 text-sm">{message}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
