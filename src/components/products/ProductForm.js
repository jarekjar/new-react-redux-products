import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const ProductForm = ({
  product,
  businesses,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Edit" : "Add"} Product</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={product.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="businessId"
        label="Business"
        value={product.businessId || ""}
        defaultOption="Select Business"
        options={businesses.map(business => ({
          value: business.id,
          text: business.name
        }))}
        onChange={onChange}
        error={errors.business}
      />

      <TextInput
        name="category"
        label="Category"
        value={product.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

ProductForm.propTypes = {
  businesses: PropTypes.array.isRequired,
  product: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default ProductForm;
