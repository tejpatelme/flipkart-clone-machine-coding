import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="w-52 h-auto">
      <div className="pt-64 relative overflow-hidden">
        <img
          src={product.imageURL}
          alt="product"
          className="block absolute inset-0 object-cover w-full h-auto"
        />
      </div>
      <div className="px-2">
        <span className="text-sm font-semibold text-gray-500">
          {product.brand}
        </span>
        <span className="block text-sm">{product.name}</span>
        <span className="block font-bold text-gray-600 mb-3">
          ₹{product.price}
        </span>
        <span className="block text-sm font-semibold text-gray-500">
          Size{" "}
          <span className="font-base text-gray-800">
            {product.size.map((size, idx) => (idx === 0 ? size : `,${size}`))}
          </span>
        </span>
      </div>
    </div>
  );
}
