import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductListing from "./pages/ProductListing/ProductListing";

function App() {
  const [sortAndFilter, setSortAndFilter] = useState({
    price: "",
    brandsSelected: [],
    sizesSelected: [],
    idealFor: [],
  });

  return (
    <>
      <Navbar />
      <div className="App bg-gray-100 px-4">
        <Routes>
          <Route
            path="*"
            element={
              <div className="flex">
                <Sidebar
                  sortAndFilter={sortAndFilter}
                  setSortAndFilter={setSortAndFilter}
                />
                <Routes>
                  <Route
                    path="/"
                    element={<ProductListing sortAndFilter={sortAndFilter} />}
                  />
                </Routes>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
