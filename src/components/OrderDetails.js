import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Item from "./Item";

const OrderDetails = () => {
    const { orderedItems, totalBill } = useSelector((state) => state.products);
    return (<>
    <Typography  variant="h6" component="div">Order Details</Typography>
    <div className="item-container">
            {orderedItems.map((listItem) => (<Item key={listItem.id} data={listItem} showOrderDetails={true} />))}
    </div>
    </>)
}

export default OrderDetails;