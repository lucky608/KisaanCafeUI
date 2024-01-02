import React, { useEffect, useState } from "react";
import GetAllProducts from "../sharedstore/slices/GetAllProducts";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../sharedstore/slices/DeleteProduct";

export const useHandlers = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [formData, setFormData] = useState({
    name: "Product Name",
    prize: null,
    wight: null,
    description: "Product Description",
  });

  const handleClickOpen = (e) => {
    setOpen(true);
    setPopupTitle("Edit Product")
    setFormData(e);
    console.log(e);
  };

  const handleClickOpenAdd = (e) => {
    setOpen(true);
    setPopupTitle("Add Product")
    setFormData({
      name: "",
      prize: null,
      wight: null,
      description: "",
    });
    console.log(e);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const OnDeleteProduct = async (e) => {
    console.log(e);
    await dispatch(deleteProduct(e))
  //  dispatch(GetAllProducts())
  }
  return {
    open,
    handleClickOpen,
    handleClose,
    formData,
    setFormData,
    handleClickOpenAdd,
    popupTitle,
    OnDeleteProduct
  };
};
