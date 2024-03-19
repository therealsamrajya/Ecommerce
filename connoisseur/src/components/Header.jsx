import React from "react";
import Button from "./Button";
import {
  image1,
  image2,
  image3,
  image4,
  product1,
  product2,
  product3,
} from "../assets/assets";
import Card from "./Card";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <div className="bg-primary   text-tertiary flex flex-row items-center justify-center  h-[7vh]">
        <h2 className="">AUTUMN SALE STARTS NOW </h2>
        <Button
          className="bg-tertiary text-primary rounded-sm ml-4 font-medium hover:bg-gray-300 px-3 "
          value="Register Now"></Button>
      </div>

      <div className="bg-tertiary h-[2rem]"> </div>

      <div className=" bg-primary h-fit w-full">
        <div className=" flex flex-wrap relative items-center justify-center">
          <img src={image1} width={590} height={590} alt="" />
          <img src={image2} width={590} height={590} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-tertiary uppercase text-3xl max-sm:text-center ">
              autumn collection
            </h3>
            <Button
              value="Shop Now"
              className=" mt-5 lg:ml-[5rem] bg-tertiary text-primary px-7 py-4 rounded-sm shadow-lg ml-[4rem]  font-semibold text-xl uppercase">
              {" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-tertiary h-[15rem] flex items-center justify-center">
        <h3 className="text-primary text-3xl max-sm:text-center font-semibold ">
          Crafting Style, Embracing the Connoisseur.
        </h3>
      </div>
      <div className="bg-tertiary">
        <h3 className="text-center text-primary font-semibold text-3xl mb-3 font-serif">
          NEW ARRIVALS
        </h3>
        <div className="flex flex-row items-center justify-center max-sm:flex-col mb-4  gap-5">
          <Card
            productImage={product1}
            productName="Maroon Suit"
            productRating={3}
            productPrice={299}></Card>
          <Card
            productImage={product2}
            productName="Grey Sunglasess"
            productRating={2}
            productPrice={199}></Card>
          <Card
            productImage={product3}
            productName="Jordan low"
            productRating={4}
            productPrice={399}></Card>
        </div>
      </div>
      <Button
        className="bg-secondary text-tertiary px-5 py-3 rounded-sm shadow-lg  ml-[47%] mb-4"
        value="Visit There"
        to="/electronics"></Button>
      <div className=" bg-primary h-fit w-full mb-6">
        <div className=" flex flex-wrap relative items-center justify-center mt-6">
          <img src={image3} width={590} height={590} alt="" />
          <img src={image4} width={590} height={590} alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-tertiary uppercase text-3xl max-sm:text-center ">
              build your legacy
            </h3>
            <Button
              value="Shop Now"
              className=" mt-5 lg:ml-[5rem] bg-tertiary text-primary px-7 py-4 rounded-sm shadow-lg ml-[4rem] font-semibold text-xl uppercase">
              {" "}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Header;
