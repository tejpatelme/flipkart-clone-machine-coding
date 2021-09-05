import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../contexts/products-context";

export default function ProductListing({ sortAndFilter }) {
  const { products } = useProducts();

  const { price, brandsSelected, sizesSelected, idealFor } = sortAndFilter;

  const sortByPrice = (products) => {
    if (!price) {
      return products;
    }

    if (price === "HIGH_TO_LOW") {
      const sortedProducts = products.slice().sort((a, b) => b.price - a.price);
      return sortedProducts;
    }

    if (price === "LOW_TO_HIGH") {
      const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
      return sortedProducts;
    }
  };

  const filterByBrands = (sortedProducts) => {
    if (brandsSelected.length === 0) {
      return sortedProducts;
    }

    return sortedProducts.filter((product) =>
      brandsSelected.find((brand) => brand === product.brand) ? true : false
    );
  };

  const filterBySizes = (filteredByBrand) => {
    if (sizesSelected.length === 0) {
      return filteredByBrand;
    }

    return filteredByBrand.filter((product) =>
      sizesSelected.find((sizes) => sizes === product.size) ? true : false
    );
  };

  const filterByIdealFor = (filteredBySizes) => {
    if (idealFor.length === 0) {
      return filteredBySizes;
    }

    return filteredBySizes.filter((product) =>
      idealFor.find((ideal) => ideal === product.idealFor) ? true : false
    );
  };

  const sortedProducts = sortByPrice(products);
  const filteredByBrand = filterByBrands(sortedProducts);
  const filteredBySizes = filterBySizes(filteredByBrand);
  const filteredProducts = filterByIdealFor(filteredBySizes);

  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl px-14 py-12 bg-white ml-4 w-full">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
