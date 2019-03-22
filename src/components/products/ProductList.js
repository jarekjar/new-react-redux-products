import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductList = ({ products, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Business</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {products.map(product => {
        return (
          <tr key={product.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://google.com/search?q=" + product.slug}
              >
                Details
              </a>
            </td>
            <td>
              <Link to={"/product/" + product.slug}>{product.title}</Link>
            </td>
            <td>{product.businessName}</td>
            <td>{product.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(product)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ProductList;
