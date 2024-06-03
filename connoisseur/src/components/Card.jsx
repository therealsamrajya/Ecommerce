import React from "react";
import Button from "./Button";

const Card = ({
  productName,
  productPrice,
  productImage,
  productRating,
  buttonBgColor = "bg-primary",
  buttonTextColor = "text-tertiary",
  cardBgColor = "bg-tertiary",
  priceColor = "text-primary",
  titleColor = "text-primary",
  ratingColor = "text-primary", // Default background color for the card
}) => {
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
          <Button
            value="Add to Cart"
            className={`${buttonBgColor} ${buttonTextColor} px-7 py-4 rounded-sm shadow-lg hover:bg-slate-300`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
