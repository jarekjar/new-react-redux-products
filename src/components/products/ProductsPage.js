import React from "react";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import * as pingActions from "../../redux/actions/pingActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ProductList from "./ProductList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class ProductsPage extends React.Component {
  state = {
    redirectToAddProductPage: false
  };
  componentDidMount() {
    const { products, actions } = this.props;
    if (products.length === 0) {
      actions.loadProducts();
    }
  }

  handleDeleteProduct = async product => {
    toast.success("Product deleted");
    //can also use try/catch for readability
    try {
      await this.props.actions.deleteProduct(product);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  handlePing = () => {
    this.props.actions.ping();
  };

  render() {
    return (
      <>
        {this.state.redirectToAddProductPage && <Redirect to="/product" />}
        <h2>Products</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddProductPage: true })}
            >
              Add Product
            </button>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={this.handlePing}
            >
              Ping: {this.props.isPinging.toString()}
            </button>
            <ProductList
              onDeleteClick={this.handleDeleteProduct}
              products={this.props.products}
            />
          </>
        )}
      </>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  businesses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isPinging: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    products:
      state.businesses.length === 0
        ? []
        : state.products.map(product => {
            return {
              ...product,
              businessName: state.businesses.find(
                a => a.id === product.businessId
              ).name
            };
          }),
    businesses: state.businesses,
    loading: state.apiCallsInProgress > 0,
    isPinging: state.isPinging
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProducts: bindActionCreators(productActions.loadProducts, dispatch),
      deleteProduct: bindActionCreators(productActions.deleteProduct, dispatch),
      ping: bindActionCreators(pingActions.ping, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
