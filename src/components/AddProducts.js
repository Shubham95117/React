import React, { useState, useContext } from "react";
import ProductContext from "../store/products_context";
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginRight: "300px",
        // marginTop: "200px",
      }}
    >
      <form onSubmit={submitHandler}>
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
        <button type="submit">Add Products</button>
      </form>
    </div>
  );
};

export default AddProducts;
