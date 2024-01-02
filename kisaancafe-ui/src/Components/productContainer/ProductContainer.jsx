import React from 'react'
import { useSelector } from 'react-redux';
import { ProductCont } from '../sharedcomponents/ProductCont';

const ProductContainer = ({
    handleClickOpen,
    OnAddClick,
    OnDeleteProduct
 }) => {
    const products = useSelector((state) => state.AllProducts.Data);

    return (
        <>
            {
                products.map((product) => {
                    return (
                        <ProductCont
                            Addlabel="ADD"
                            Editlabel="EDIT"
                            OnAddClick={OnAddClick}
                            onClick={handleClickOpen}
                            ProductDetails={product}
                            OnDeleteProduct={OnDeleteProduct}
                        />
                    );
                })
            }
        </>
    )
}

export default ProductContainer
