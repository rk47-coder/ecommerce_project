import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input
              type="checkbox"
              id='1'
              value={1}
            />
            <label htmlFor='1'>shoes</label>
          </div>
          <div className="inputItem">
            <input
              type="checkbox"
              id='2'
              value={2}
            />
            <label htmlFor='1'>shoes</label>
          </div>
          <div className="inputItem">
            <input
              type="checkbox"
              id='3'
              value={3}
            />
            <label htmlFor='1'>shoes</label>
          </div>
        </div>

        <div className="filterItem">
          <h2>filter price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000}></input>
            <span>1000</span>
          </div>
        </div>
        <div className="inputItem">
          <h2>sort by</h2>
          <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")}></input>
          <label htmlFor='asc'>price (height first)</label>
        </div>

        <div className="inputItem">
          <h2>sort by</h2>
          <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")}></input>
          <label htmlFor='desc'>price (lowest first)</label>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;