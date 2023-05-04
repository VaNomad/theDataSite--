import React from "react";

const products = [
  { id: 0, title: "Bread", price: 19.99 },
  { id: 1, title: "Milk", price: 29.99 },
  { id: 2, title: "Cheese", price: 35.99 },
  { id: 3, title: "Water", price: 15.99 },
  { id: 4, title: "Cucumber", price: 2.99 },
];

const Noroff = () => {
  return (
    <div className="flex items-center justify-center w-full mt-[-7rem] bg-white">
      <div className="max-w-[800px] w-full m-8">
        <h1 className="text-4xl font-bold text-center text-white tracking-[8px] py-8 shadow-xl rounded-2xl mb-5 bg-[#f982eb]">
          Groceries
        </h1>
        <div className="flex justify-around shadow-xl py-[6rem] rounded-2xl bg-[#d1d1d1]">
          <div className="w-full ps-[5rem]">
            {products.map((product) => (
              <p className="border-b font-bold" key={product.id}>
                {product.title}
              </p>
            ))}
          </div>
          <div className="w-full pe-[5rem]">
            {products.map((product) => (
              <p className="border-b font-bold text-right" key={product.id}>
                {product.price} $
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noroff;
