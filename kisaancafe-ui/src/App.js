import "./App.css";
import { SharedButton } from "./Components/sharedcomponents/SharedButton";
import { ProductCont } from "./Components/sharedcomponents/ProductCont";
import Header from "./Components/sharedcomponents/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllProducts } from "./Components/sharedstore/slices/GetAllProducts";
import ProductForm from "./Components/forms/ProductForm";
import ProductFormHandler from "./Components/formHandlers/ProductFormHandler";
import { useHandlers } from "./Components/handlers/handlers";
import ProductContainer from "./Components/productContainer/ProductContainer";

function App() {
  const {
    open,
    handleClickOpen,
    handleClose,
    formData,
    setFormData,
    handleClickOpenAdd,
    popupTitle,
    OnDeleteProduct
  } = useHandlers();
  const dispatch = useDispatch();
  const OnClick = () => {
    console.log("clicked");
  };
  const OnAddClick = () => {
    console.log("clicked for add");
  };

  useEffect(() => {
    dispatch(GetAllProducts());
  }, []);


  return (
    <>
      <ProductFormHandler
        FormComponent={ProductForm}
        Title={popupTitle}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        formData={formData}
        setFormData={setFormData}
      />
      {/* <ProductForm /> */}
      <SharedButton label="ADD PRODUCT" OnClick={handleClickOpenAdd} />
      <ProductContainer
        OnAddClick={OnAddClick}
        handleClickOpen={handleClickOpen}
        OnDeleteProduct={OnDeleteProduct} />
     
      <Header />
    </>
  );
}

export default App;
