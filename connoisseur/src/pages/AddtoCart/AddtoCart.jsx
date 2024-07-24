// AddtoCart.js
import React from "react";
import useStore from "../../useStore";
import Button from "../../components/Button";

const AddtoCart = () => {
  const cart = useStore((state) => state.cart);

  return (
    <div className="flex flex-col gap-[3rem]">
      <h2 className=" text-3xl font-serif mt-[2rem] ml-[2rem]">Cart Details</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="flex flex-col gap-[3rem] mb-[1rem] ml-[2rem]">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center space-x-4">
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-[8rem] h-[8rem]"
              />
              <div>
                <h3 className="text-3xl font-semibold font-merriweather-regular">
                  {item.productName}
                </h3>
                <p className="text-2xl">${item.productPrice}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Button
        value={"Checkout"}
        className="bg-secondary mt-[-2rem] text-tertiary px-2 py-4 w-fit rounded-lg shadow-lg ml-[3rem] mb-[1rem] hover:bg-primary  max-sm:text-sm max-sm:px-2  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"></Button>
    </div>
  );
};

export default AddtoCart;
