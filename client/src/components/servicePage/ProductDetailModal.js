import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaBarcode } from "react-icons/fa";
import "./ProductDetailModal.css";

const ProductDetailModal = ({ product, onClose, onSave, onDelete }) => {
  const [tags, setTags] = useState(product.tags);
  const [formValues, setFormValues] = useState({
    name: "",
    type: "",
    brand: "",
    id: "",
    size: "",
    retailPrice: "",
    wholesalePrice: "",
    stock: "",
    supplier: product.supplier,
    onlyUsedByBusiness: false,
    noLongerOffered: false,
    newTag: ""
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagAdd = () => {
    const newTag = formValues.newTag;
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
    setFormValues({ ...formValues, newTag: "" });
  };

  const handleSave = () => {
    onSave({ ...product, ...formValues, tags });
    onClose();
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  useEffect(() => {
    // 禁用 body 滚动
    document.body.style.overflow = 'hidden';
    return () => {
      // 恢复 body 滚动
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-contain-pd">
        <div className="modal-header-sd">
          <IoIosCloseCircleOutline className="close-icon" onClick={onClose} />
          <h2>Product Details</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group-pd">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Product Name"
            />
          </div>
          <div className="form-group-pd">
            <label>Product Type</label>
            <select
              name="type"
              value={formValues.type}
              onChange={handleInputChange}
            >
              <option value="">Select a product type</option>
              <option value="Grooming">Grooming</option>
              <option value="Training">Training</option>
              <option value="Boarding">Boarding</option>
              <option value="Veterinary">Veterinary</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group-pd">
              <label>Brand</label>
              <select
                name="brand"
                value={formValues.brand}
                onChange={handleInputChange}
              >
                <option value="">Optional</option>
              </select>
            </div>
            <div className="form-group-pd">
              <label>Product ID</label>
              <div className="input-icon-wrapper">
                <input
                  type="text"
                  name="id"
                  value={formValues.id}
                  onChange={handleInputChange}
                  placeholder="Product ID"
                />
                <FaBarcode className="barcode-icon"/>
              </div>
            </div>
            <div className="form-group-pd">
              <label>Size</label>
              <input
                type="text"
                name="size"
                value={formValues.size}
                onChange={handleInputChange}
                placeholder="Size"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group-pd">
              <label>Retail Price</label>
              <input
                type="text"
                name="retailPrice"
                value={formValues.retailPrice}
                onChange={handleInputChange}
                placeholder="Retail Price"
              />
            </div>
            <div className="form-group-pd">
              <label>Wholesale Price</label>
              <input
                type="text"
                name="wholesalePrice"
                value={formValues.wholesalePrice}
                onChange={handleInputChange}
                placeholder="Wholesale Price"
              />
            </div>
            <div className="form-group-pd">
              <label>Stock</label>
              <input
                type="text"
                name="stock"
                value={formValues.stock}
                onChange={handleInputChange}
                placeholder="Stock"
              />
            </div>
          </div>
          <div className="form-group-pd">
            <label>Supplier</label>
            <select
              name="supplier"
              value={formValues.supplier}
              onChange={handleInputChange}
            >
              <option value="">Optional</option>
            </select>
          </div>
          <div className="form-group-pd">
            <label>Service Tags</label>
            <div className="tags">
              {tags.map((tag) => (
                <span key={tag} className="tag" onClick={() => handleTagRemove(tag)}>
                  {tag} &times;
                </span>
              ))}
              <span className="add-tag" onClick={() => handleTagAdd("New Tag")}>+</span>
            </div>
          </div>
          <div className="form-slider-pd">
            <label>
              Only Used By Business
            </label>
              <label className="switch-pd">
                <input
                  type="checkbox"
                  checked={formValues.onlyUsedByBusiness}
                  onChange={(e) => handleInputChange(e)}
                />
                <span className="slider-round-pd"></span>
              </label>
          </div>
          <div className="form-slider-pd">
            <label>No Longer Offered</label>
            <label className="switch-pd">
              <input
                type="checkbox"
                checked={formValues.noLongerOffered}
                onChange={(e) => handleInputChange(e)}
                name="noLongerOffered"
              />
              <span className="slider-round-pd"></span>
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;








