import { useEffect, useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from "../Store/ProductsSlice";

const ProductList = () => {
    const dispatch = useDispatch();
    const [list,setList]= useState([]);
 //   const { productList: list } = useSelector((state) => state.products);
    const getList = async ()=>{
         let dataList = await fetch("http://localhost:4000/products")
         .then(response => response.json())
         .then(response => response)
         return dataList;
    }
    useEffect(()=>{
        let asyncData = async ()=>{ 
            let data = await getList();
            setList(data);
            localStorage.setItem('list', JSON.stringify(list));
            console.log(list);
        }
        asyncData();
        //    dispatch(fetchProductList);
        //    console.log(list);
    },[]);
    return (
        <div className="item-container">
            {list.map((listItem) => (<Item key={listItem.id} data={listItem} />))}
            </div>
    )
}

export default ProductList;