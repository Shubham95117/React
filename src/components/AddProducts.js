import React, { useState, useContext } from "react";
import ProductContext from "../store/products_context";
import "./AddProducts.css";
import logo from "../assets/logo.jpg";

const AddProducts = () => {
  const productCtx = useContext(ProductContext);
  const inputData = {
    medicineName: "",
    description: "",
    price: "",
    qty: "",
  };
  const [formData, setFormData] = useState(inputData);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    // add data
    if (
      formData.medicineName &&
      formData.description &&
      formData.price &&
      formData.qty
    ) {
      productCtx.addProduct({
        id: Date.now(),
        ...formData,
        price: parseInt(formData.price),
        qty: parseInt(formData.qty),
      });
    }
    setFormData(inputData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="add-products-container">
      <div className="add-products-card">
        <img src={logo} alt="logo" />
        <form className="add-products-form" onSubmit={submitHandler}>
          <input
            type="text"
            name="medicineName"
            placeholder="Medicine Name"
            value={formData.medicineName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <div className="small-inputs">
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
            />
            <input
              type="text"
              name="qty"
              placeholder="Qty"
              value={formData.qty}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Products</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
