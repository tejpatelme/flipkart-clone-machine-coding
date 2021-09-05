import React from "react";
import { useProducts } from "../../contexts/products-context";
import SidebarCaption from "../SidebarCaption/SidebarCaption";

export default function Sidebar({ setSortAndFilter, sortAndFilter }) {
  const { products } = useProducts();
  const { price, brandsSelected, sizesSelected, idealFor } = sortAndFilter;

  let brands = products.map((product) => product.brand);
  brands = brands.filter((item, index) => brands.indexOf(item) === index);
  let sizes = products.map((product) => product.size);
  sizes = sizes.filter((item, index) => sizes.indexOf(item) === index);
  let ideal = products.map((product) => product.idealFor);
  ideal = ideal.filter((item, index) => ideal.indexOf(item) === index);

  const onResetFiltersClick = () => {
    setSortAndFilter({
      price: null,
      brandsSelected: [],
      idealFor: [],
      sizesSelected: [],
    });
  };

  const onSortByPriceClick = (e) => {
    setSortAndFilter((sortAndFilter) => ({
      ...sortAndFilter,
      price: e.target.value,
    }));
  };

  const onFilterByBrandClick = (e) => {
    const brandAlreadySelected = brandsSelected.find(
      (brand) => brand === e.target.value
    );
    setSortAndFilter((sortAndFilter) => ({
      ...sortAndFilter,
      brandsSelected: brandAlreadySelected
        ? brandsSelected.filter((brand) => brand !== brandAlreadySelected)
        : [...brandsSelected, e.target.value],
    }));
  };

  const onFilterBySizeClick = (e) => {
    const sizeAlreadySelected = sizesSelected.find(
      (brand) => brand === e.target.value
    );
    setSortAndFilter((sortAndFilter) => ({
      ...sortAndFilter,
      sizesSelected: sizeAlreadySelected
        ? sizesSelected.filter((size) => size !== sizeAlreadySelected)
        : [...sizesSelected, e.target.value],
    }));
  };

  const onFilterByIdealForClick = (e) => {
    const idealForAlreadySelected = idealFor.find(
      (item) => item === e.target.value
    );

    setSortAndFilter((sortAndFilter) => ({
      ...sortAndFilter,
      idealFor: idealForAlreadySelected
        ? idealFor.filter((item) => item !== idealForAlreadySelected)
        : [...idealFor, e.target.value],
    }));
  };

  return (
    <div className="p-6 bg-white sticky h-70vh top-0 max-w-[240px] flex-shrink-0">
      <button
        onClick={onResetFiltersClick}
        className="bg-gray-300 mb-4 text-black font-semibold px-4 py-2 leading-none"
      >
        Reset Filters
      </button>
      <SidebarCaption title="SORT BY" />
      <div className="mb-6">
        <label className="block py-1 text-sm">
          <input
            type="radio"
            name="sort-by-price"
            className="mr-1"
            checked={price === "HIGH_TO_LOW"}
            value="HIGH_TO_LOW"
            onChange={onSortByPriceClick}
          />{" "}
          High To Low
        </label>

        <label className="block py-1 text-sm">
          <input
            type="radio"
            name="sort-by-price"
            className="mr-1"
            checked={price === "LOW_TO_HIGH"}
            value="LOW_TO_HIGH"
            onChange={onSortByPriceClick}
          />{" "}
          Low To High
        </label>
      </div>

      <SidebarCaption title="BRANDS" />
      <div className="mb-6">
        {brands.map((brand, idx) => (
          <label key={idx} className="block py-1 text-sm">
            <input
              type="checkbox"
              className="mr-1"
              value={brand}
              checked={
                brandsSelected.find((item) => item === brand) ? true : false
              }
              onChange={onFilterByBrandClick}
            />{" "}
            {brand}
          </label>
        ))}
      </div>

      <SidebarCaption title="SIZE" />
      <div className="mb-6">
        {sizes.map((size, idx) => (
          <label key={idx} className="block py-1 text-sm">
            <input
              type="checkbox"
              className="mr-1"
              value={size}
              checked={
                sizesSelected.find((item) => item === size) ? true : false
              }
              onChange={onFilterBySizeClick}
            />{" "}
            {size}
          </label>
        ))}
      </div>

      <SidebarCaption title="IDEAL FOR" />
      <div className="mb-6">
        {ideal.map((ideal, idx) => (
          <label key={idx} className="block py-1 text-sm">
            <input
              type="checkbox"
              className="mr-1"
              value={ideal}
              checked={idealFor.find((item) => item === ideal) ? true : false}
              onChange={onFilterByIdealForClick}
            />{" "}
            {ideal}
          </label>
        ))}
      </div>
    </div>
  );
}
