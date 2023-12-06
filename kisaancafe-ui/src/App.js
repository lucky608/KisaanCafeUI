import './App.css';
import { SharedButton } from './Components/sharedcomponents/SharedButton';
import { ProductCont } from './Components/sharedcomponents/ProductCont';
import Header from './Components/sharedcomponents/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetAllProducts } from './Components/sharedstore/slices/GetAllProducts';

function App() {
  const dispatch =useDispatch();
  const OnClick =()=>{
    console.log("clicked");
  }
  const OnEditClick =()=>{
    console.log("clicked for edit");
  }
  const OnAddClick =()=>{
    console.log("clicked for add");
  }
const ProductDetails =[{
  Name:"Pesticides",
  Weight:"1 kg",
  MRP:"900",
  Technical:"h2o"
}]
    useEffect(() => {
     dispatch(GetAllProducts())
    }, [])
    
  return (
    <>
    <SharedButton label="ADD PRODUCT" OnClick={OnClick}/> 
    {ProductDetails.map((product)=>{
      return <ProductCont Addlabel ="ADD" Editlabel ="EDIT"  OnAddClick={OnAddClick} OnEditClick={OnEditClick}
      ProductDetails={product}/>
    })}
    
    <Header />
    </>
   
);
}

export default App;
