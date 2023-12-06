import './App.css';
import { SharedButton } from './Components/shared components/SharedButton';
import { ProductCont } from './Components/shared components/ProductCont';
import Header from './Components/shared components/Header';

function App() {
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
