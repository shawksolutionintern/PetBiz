import React, { useState } from "react";

const AddProductModal = ({ onClose, onSave }) => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSave = () => {
    const newProduct = {
      id: Date.now(),
      name: productName,
      type: productType,
      price: price,
      stock: stock,
    };
    onSave(newProduct);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Add a new product</h2>
        <form className="product-form">
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Product Type</label>
            <input
              type="text"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Stock</label>
            <input
              type="text"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <button type="button" className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;



