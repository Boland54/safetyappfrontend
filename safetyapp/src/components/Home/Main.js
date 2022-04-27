import React from "react";
import TopTotal from "./TopTotal";
import LatestOrder from "./LatestReport";
import { useSelector } from "react-redux";

const Main = () => {

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title"> List of Reports </h2>
        </div>
        {/* Top Total */}
        <TopTotal products={products} />



        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder products={products} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};

export default Main;
