/*
FUNCTIONAL COMPONENT UTILIZING NEW REACT HOOKS 2019
MUCH MORE PERFORMANT
*/
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadProducts, saveProduct } from "../../redux/actions/productActions";
import { loadBusinesses } from "../../redux/actions/businessActions";
import PropTypes from "prop-types";
import ProductForm from "./ProductForm";
import { newProduct } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageProductsPage({
  products,
  businesses,
  loadBusinesses,
  loadProducts,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (products.length === 0) {
      loadProducts().catch(error => {
        alert("Loading products failed" + error);
      });
    } else {
      setProduct({ ...props.product });
    }

    if (businesses.length === 0) {
      loadBusinesses();
    }
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: name === "businessId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { title, businessId, category } = product;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!businessId) errors.business = "Business is required.";
    if (!category) errors.category = "Title is required.";

    setErrors(errors);
    //Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveProduct(product, history, toast, setSaving, setErrors);
  }

  return businesses.length === 0 || products.length === 0 ? (
    <Spinner />
  ) : (
    <ProductForm
      product={product}
      errors={errors}
      businesses={businesses}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageProductsPage.propTypes = {
  product: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  businesses: PropTypes.array.isRequired,
  loadBusinesses: PropTypes.func.isRequired,
  loadProducts: PropTypes.func.isRequired,
  saveProduct: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getProductBySlug(products, slug) {
  return products.find(product => product.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const product =
    slug && state.products.length > 0
      ? getProductBySlug(state.products, slug)
      : newProduct;
  return {
    product,
    products: state.products,
    businesses: state.businesses
  };
}

const mapDispatchToProps = {
  loadProducts,
  loadBusinesses,
  saveProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageProductsPage);
