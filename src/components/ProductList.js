import { useEffect } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from "../Store/ProductsSlice";

const ProductList = () => {
    const dispatch = useDispatch();
    const { productList: list } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchProductList());
    }, [dispatch]);
    
    return (
        <div className="item-container">
            {list.map((listItem) => (<Item key={listItem.id} data={listItem} showCounter={false} />))}
        </div>
    )
}

export default ProductList;