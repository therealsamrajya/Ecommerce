import React, { useState } from "react";
import ReusableCarousel from "../../components/ReusableCarousel";
import {
  car1,
  car2,
  car3,
  product1,
  product2,
  product3,
} from "../../assets/assets";
import Card from "../../components/Card";
import Button from "../../components/Button";

const items = [
  { image: car2, description: "ALL PRODUCTS" },
  { image: car1, description: "GUCCI", cost: 50 },
  { image: car3, description: "NIKE", cost: 50 },
];

const MensFashion = () => {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortType, setSortType] = useState("");

  const products = [
    {
      productImage: product1,
      productName: "Maroon Suit",
      productRating: 3,
      productPrice: 299,
    },
    {
      productImage: product2,
      productName: "Grey Sunglasses",
      productRating: 2,
      productPrice: 199,
    },
    {
      productImage: product3,
      productName: "Jordan low",
      productRating: 4,
      productPrice: 399,
    },
    {
      productImage: product3,
      productName: "Jordan low",
      productRating: 4,
      productPrice: 399,
    },
    {
      productImage: product3,
      productName: "Jordan low",
      productRating: 4,
      productPrice: 399,
    },
    {
      productImage: product1,
      productName: "Maroon Suit",
      productRating: 3,
      productPrice: 299,
    },
    {
      productImage: product2,
      productName: "Grey Sunglasses",
      productRating: 2,
      productPrice: 199,
    },
    {
      productImage: product3,
      productName: "Jordan low",
      productRating: 4,
      productPrice: 399,
    },
  ];

  const sortByRatings = () => {
    const sorted = [...products].sort(
      (a, b) => b.productRating - a.productRating
    );
    setSortedProducts(sorted);
    setSortType("rating");
  };

  const sortByPrice = () => {
    const sorted = [...products].sort(
      (a, b) => a.productPrice - b.productPrice
    );
    setSortedProducts(sorted);
    setSortType("price");
  };

  const resetSort = () => {
    setSortedProducts([]);
    setSortType("");
  };

  return (
    <div className="font-merriweather-regular">
      <ReusableCarousel items={items} />
      <h3 className="text-center font-bold text-xl text-primary max-sm:mb-[-4rem] font-merriweather-regular">
        CHECK ALL THE NEW ARRIVALS
      </h3>
      <div className="flex justify-center my-3 max-sm:mt-[5rem] max-sm:mb-[-3rem]">
        <button
          className="mr-2 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={sortByRatings}>
          Sort by Ratings
        </button>
        <button
          className="mr-2 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={sortByPrice}>
          Sort by Price
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={resetSort}>
          Reset
        </button>
      </div>
      <div className="grid lg:grid-cols-4 gap-3 lg:mt-3 mt-[5rem] grid-cols-2">
        {(sortType && sortedProducts.length > 0
          ? sortedProducts
          : products
        ).map((product, index) => (
          <Card
            key={index}
            productImage={product.productImage}
            productName={product.productName}
            productRating={product.productRating}
            productPrice={product.productPrice}
          />
        ))}
      </div>
      <div className=" text-center mt-4 flex flex-col mb-2   w-[full] h-[20vh]s text-primary items-center max-sm:text-lg max-sm:h-fit  ">
        <h3 className=" font-great-vibes text-2xl">
          Select From Wide Range of Products and become a Connoisseur
        </h3>
        <h5 className=" mt-2 font-great-vibes text-xl">
          Take Premium Membership Now
        </h5>
        <Button
          className="font-sans font-thin py-2 px-4 bg-primary w-fit max-sm:mt-0 max-sm:py-2 max-sm:px-1 text-tertiary mt-2 hover:bg-blue-500"
          value="Go Premium"></Button>
      </div>
    </div>
  );
};

export default MensFashion;
